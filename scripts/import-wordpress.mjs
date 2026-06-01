import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const [, , xmlPath, zipPath] = process.argv;

if (!xmlPath || !zipPath) {
  console.error("Usage: node scripts/import-wordpress.mjs /path/export.xml /path/uploads.zip");
  process.exit(1);
}

const projectRoot = process.cwd();
const staticRoot = path.join(projectRoot, "static");
const contentRoot = path.join(projectRoot, "content");
const zhContentRoot = path.join(contentRoot, "zh");
const enContentRoot = path.join(contentRoot, "en");

const xml = fs.readFileSync(xmlPath, "utf8");
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);

const decode = (value = "") =>
  value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/&#124;/g, "|")
    .replace(/&#038;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .trim();

const get = (source, regex) => decode((source.match(regex) || [])[1] || "");

const slugify = (input) =>
  input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "page";

const attachmentPaths = new Set();

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function normalizeContent(content) {
  let output = content;

  output = output.replace(/<!-- wp:[\s\S]*?-->/g, "");
  output = output.replace(/<!-- \/wp:[\s\S]*?-->/g, "");
  output = output.replace(/https:\/\/holyword\.cc\/wp-content\/uploads\//g, "/uploads/");
  output = output.replace(/https:\/\/holyword\.cc\/en\//g, "/en/");
  output = output.replace(/https:\/\/holyword\.cc\//g, "/");
  output = output.replace(/src="\/"/g, 'src="/"');
  output = output.replace(/\[alpha_bioy_today[^\]]*\]/g, '<div class="import-note">Bible in One Year shortcode placeholder. Replace with a Hugo-compatible devotional source.</div>');
  output = output.replace(/\[church_merge_risk_check[^\]]*\]/g, '<div class="import-note">Checklist shortcode placeholder from WordPress.</div>');
  output = output.replace(/<p>\s*<\/p>/g, "");

  if (output.includes("wp:wpforms/form-selector")) {
    output = `
<section class="contact-rebuild">
  <h2>Contact Form Migration Needed</h2>
  <p>This page used a WPForms form in WordPress. Rebuild it in Hugo with Formspree, Netlify Forms, Basin, or a custom endpoint.</p>
  <p>Suggested next step: replace this note with a static contact form and the church contact details.</p>
</section>
`;
  }

  for (const match of output.matchAll(/\/uploads\/([0-9]{4}\/[0-9]{2}\/[^"' )\]]+)/g)) {
    attachmentPaths.add(`uploads/${match[1]}`);
  }

  return output.trim();
}

function writeContentFile(targetPath, title, body, extra = {}) {
  ensureDir(path.dirname(targetPath));
  const frontMatter = {
    title,
    ...extra,
  };

  const lines = ["+++"];
  for (const [key, value] of Object.entries(frontMatter)) {
    if (Array.isArray(value)) {
      lines.push(`${key} = [${value.map((item) => JSON.stringify(item)).join(", ")}]`);
    } else if (typeof value === "boolean") {
      lines.push(`${key} = ${value}`);
    } else {
      lines.push(`${key} = ${JSON.stringify(value)}`);
    }
  }
  lines.push("+++");
  lines.push("");
  lines.push(body);
  lines.push("");

  fs.writeFileSync(targetPath, lines.join("\n"));
}

const pages = [];
const posts = [];

for (const item of items) {
  const type = get(item, /<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/);
  const status = get(item, /<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/);
  const title = get(item, /<title><!\[CDATA\[(.*?)\]\]><\/title>/) || get(item, /<title>(.*?)<\/title>/);
  const slug = get(item, /<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
  const link = get(item, /<link>(.*?)<\/link>/);
  const date = get(item, /<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
  const body = get(item, /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);

  if (type === "page" && status === "publish") {
    pages.push({ title, slug, link, date, body });
  }

  if (type === "post" && status === "publish") {
    posts.push({ title, slug, link, date, body });
  }
}

for (const page of pages) {
  const isEnglish = page.link.includes("/en/");
  const cleanBody = normalizeContent(page.body);
  const sectionRoot = isEnglish ? enContentRoot : zhContentRoot;
  const isHome = page.slug === "home" || page.slug === "en";

  let targetPath;
  let aliases = [];
  let translationKey = page.slug;

  if (isHome) {
    targetPath = path.join(sectionRoot, "_index.md");
    translationKey = "home";
  } else {
    targetPath = path.join(sectionRoot, `${page.slug}.md`);
    aliases = [new URL(page.link).pathname];
  }

  writeContentFile(targetPath, page.title, cleanBody, {
    date: page.date.replace(" ", "T"),
    translationKey,
    aliases,
    hideTitle: isHome,
  });
}

ensureDir(path.join(zhContentRoot, "posts"));
ensureDir(path.join(enContentRoot, "posts"));

for (const post of posts) {
  const cleanBody = normalizeContent(post.body);
  const targetPath = path.join(zhContentRoot, "posts", `${slugify(post.slug || post.title)}.md`);
  writeContentFile(targetPath, post.title, cleanBody, {
    date: post.date.replace(" ", "T"),
    aliases: [new URL(post.link).pathname],
  });
}

attachmentPaths.add("uploads/2026/02/logo_transparent.png");
attachmentPaths.add("uploads/2026/02/church_banner_shengdaotang.webp");
attachmentPaths.add("uploads/2026/02/img-2391_orig.jpg");

ensureDir(staticRoot);

for (const attachment of attachmentPaths) {
  const outputPath = path.join(staticRoot, attachment);
  ensureDir(path.dirname(outputPath));
  if (fs.existsSync(outputPath)) {
    continue;
  }
  execFileSync("unzip", ["-p", zipPath, attachment], { stdio: ["ignore", fs.openSync(outputPath, "w"), "inherit"] });
}

console.log(`Imported ${pages.length} pages, ${posts.length} posts, and ${attachmentPaths.size} assets.`);
