import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const baseUrl = process.env.PAGES_BASE_URL || process.argv[2] || "";

function getBasePath(url) {
  if (!url) return "/";
  try {
    const pathname = new URL(url).pathname || "/";
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  } catch {
    return "/";
  }
}

const basePath = getBasePath(baseUrl);
if (basePath === "/") {
  console.log("No project subpath detected; skipping path rewrite.");
  process.exit(0);
}

const normalizedPrefix = basePath.slice(1);
const textExtensions = new Set([".html", ".xml", ".css"]);
const knownRoutePrefixes = [
  "uploads/",
  "bible/",
  "contact/",
  "intro/",
  "meeting/",
  "donation/",
  "church-info/",
  "checklist/",
  "gallery/",
  "goodfriday/",
  "notifications/",
  "categories/",
  "tags/",
  "posts/",
  "the-power-of-prayer/",
  "en/",
  "zh/",
];

const relrefRouteMap = new Map([
  ["contact.md", "contact/"],
  ["intro.md", "intro/"],
  ["meeting.md", "meeting/"],
  ["bible.md", "bible/"],
  ["donation.md", "donation/"],
  ["church-info.md", "church-info/"],
]);

function rewriteContent(source) {
  let output = source;
  const escapedPrefix = normalizedPrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedBasePath = basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  output = output.replace(
    new RegExp(`\\b(href|src|action|poster)=([\"'])\\/(?!${escapedPrefix})([^\"']*)`, "g"),
    (_, attr, quote, rest) => `${attr}=${quote}${basePath}${rest}`,
  );

  output = output.replace(
    new RegExp(`\\b(href|src|action|poster)=\\/(?!${escapedPrefix})([^\\s>]+)`, "g"),
    (_, attr, rest) => `${attr}=${basePath}${rest}`,
  );

  output = output.replace(
    new RegExp(`url\\(([\"']?)\\/(?!${escapedPrefix})([^)'"]+)\\1\\)`, "g"),
    (_, quote, rest) => `url(${quote}${basePath}${rest}${quote})`,
  );

  output = output.replace(
    new RegExp(`([=\"'(])\\/(?!${escapedPrefix})(?!\\/)([^\"')\\s>]+)`, "g"),
    (_, prefix, rest) => `${prefix}${basePath}${rest}`,
  );

  output = output.replace(
    /=("|')?\/(?!\/)/g,
    (_, quote = "") => `=${quote}${basePath}`,
  );

  output = output.replace(
    /url\((['"]?)\/(?!\/)/g,
    (_, quote = "") => `url(${quote}${basePath}`,
  );

  output = output.replace(
    new RegExp(`${escapedBasePath}${escapedPrefix}`, "g"),
    basePath,
  );

  for (const prefix of knownRoutePrefixes) {
    const escapedKnown = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(
      new RegExp(`=("|')?\\/${escapedKnown}`, "g"),
      (_, quote = "") => `=${quote}${basePath}${prefix}`,
    );
    output = output.replace(
      new RegExp(`url\\((['"]?)\\/${escapedKnown}`, "g"),
      (_, quote = "") => `url(${quote}${basePath}${prefix}`,
    );

    output = output.split(`="/${prefix}`).join(`="${basePath}${prefix}`);
    output = output.split(`='/${prefix}`).join(`='${basePath}${prefix}`);
    output = output.split(`=/${prefix}`).join(`=${basePath}${prefix}`);
    output = output.split(`url(/${prefix}`).join(`url(${basePath}${prefix}`);
    output = output.split(`url("/${prefix}`).join(`url("${basePath}${prefix}`);
    output = output.split(`url('/${prefix}`).join(`url('${basePath}${prefix}`);
  }

  output = output.replace(
    /\{\{<[^>]*?relurl\s*"([^"]+)"[^>]*?>\}\}/g,
    (_, assetPath) => `${basePath}${assetPath}`,
  );

  output = output.replace(
    /\{\{<[^>]*?relref\s*"([^"]+)"[^>]*?>\}\}/g,
    (_, pageName) => {
      const normalized = String(pageName).trim().toLowerCase();
      const route = relrefRouteMap.get(normalized);
      if (!route) return `${basePath}`;
      const isEnglishDoc = /<html[^>]+lang=en/i.test(source);
      return `${basePath}${isEnglishDoc ? `en/${route}` : route}`;
    },
  );

  output = output.replace(
    /(\b(?:href|src|action|poster))=\/(?!\/)(?!holywordchristianchurch\/)([^ >]+)/g,
    (_, attr, rest) => `${attr}=${basePath}${rest}`,
  );

  return output;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!textExtensions.has(path.extname(entry.name))) continue;
    const original = fs.readFileSync(fullPath, "utf8");
    const updated = rewriteContent(original);
    if (updated !== original) {
      fs.writeFileSync(fullPath, updated);
    }
  }
}

walk(publicDir);
console.log(`Rewrote root-relative paths for project base ${basePath}`);
