import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, "data", "alpha-bioy.json");

const FINGERPRINTS = [
  "App",
  "Email",
  "Podcast",
  "Spotify",
  "Apple",
  "Google Play",
  "Download",
  "Sign up",
  "注册",
  "邮件",
  "隐私政策",
  "Cookies",
  "订阅",
  "Classic",
  "表示必填",
  "电子邮件",
  "新年快乐",
  "调查",
];

const PROTECTED = [
  "今日金句",
  "金句",
  "复兴",
  "牧师",
  "祷告",
  "福音",
  "篇",
  "记",
  "Duncan Campbell",
  "Bible in One Year",
  "New Testament",
  "Old Testament",
  "Psalm",
  "Proverbs",
];

function getDayOfYear(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(date)
    .reduce((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
    }, {});

  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  const utcMidnight = Date.UTC(year, month - 1, day);
  const yearStart = Date.UTC(year, 0, 1);
  return Math.floor((utcMidnight - yearStart) / 86400000) + 1;
}

function stripTags(input = "") {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeFragment(fragment = "") {
  return fragment
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(\/?)(p|h2|h3|h4|blockquote|ul|li|strong|em|br)\b[^>]*>/gi, "<$1$2>")
    .replace(/<(?!\/?(p|h2|h3|h4|blockquote|ul|li|strong|em|br)\b)[^>]+>/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractArticle(html) {
  const match = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  return match ? match[1] : "";
}

function extractTitle(articleHtml, fullHtml) {
  const local = articleHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const fallback = fullHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  return stripTags((local || fallback || [])[1] || "");
}

function extractAudioUrl(html) {
  const match = html.match(/<audio[\s\S]*?<source[^>]+src=["']([^"']+)["']/i);
  if (!match) return "";
  const src = match[1];
  return /^https?:\/\//i.test(src) ? src : `https://bible.alpha.org${src}`;
}

function extractContentBlocks(articleHtml) {
  const blocks = [];
  const regex = /<(h2|h3|h4|p|blockquote|ul)\b[^>]*>[\s\S]*?<\/\1>/gi;
  let match;
  while ((match = regex.exec(articleHtml)) !== null) {
    const fragment = match[0];
    const text = stripTags(fragment);
    if (!text || text.length < 2) continue;
    if (/Unless otherwise stated|Copyright|Pippa adds|佩泊的补充|References|Buy from|Alpha Shop|CLC Bookshops|Start reading today|Website|Book/i.test(text)) break;

    let isProtected = false;
    for (const word of PROTECTED) {
      if (text.toLowerCase().includes(word.toLowerCase())) {
        isProtected = true;
        break;
      }
    }

    let isAd = false;
    if (!isProtected) {
      for (const word of FINGERPRINTS) {
        if (text.toLowerCase().includes(word.toLowerCase())) {
          isAd = true;
          break;
        }
      }
    }

    if (text.includes("window.fnames") || text.includes("{")) isAd = true;
    if (isAd) continue;

    const cleaned = sanitizeFragment(fragment);
    if (cleaned) blocks.push(cleaned);
  }

  return blocks.join("\n");
}

async function fetchReading(lang, dayOfYear, now) {
  const url = `https://bible.alpha.org/${lang}/classic/${dayOfYear}/index.html`;
  const response = await fetch(url, {
    headers: {
      "user-agent": "holyword-hugo-bioy-fetcher/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${lang} devotional (${response.status})`);
  }

  const html = await response.text();
  const article = extractArticle(html);
  if (!article) {
    throw new Error(`Could not locate article for ${lang}`);
  }

  return {
    sourceUrl: url,
    audioUrl: extractAudioUrl(html),
    dayTitle: extractTitle(article, html),
    bodyHtml: extractContentBlocks(article),
    dateLabel:
      lang === "zh"
        ? new Intl.DateTimeFormat("zh-CN", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(now)
        : new Intl.DateTimeFormat("en-US", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(now),
  };
}

function buildFallback(dayOfYear, generatedAt, previous = {}) {
  return {
    generatedAt,
    dayOfYear,
    zh:
      previous.zh || {
        sourceUrl: `https://bible.alpha.org/zh/classic/${dayOfYear}/index.html`,
        audioUrl: "",
        dayTitle: "今日内容将在下次构建时自动更新",
        dateLabel: new Intl.DateTimeFormat("zh-CN", {
          timeZone: "America/New_York",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(generatedAt)),
        bodyHtml:
          "<p>目前暂时无法抓取 Alpha 官方内容。你仍然可以点击下方链接前往官方页面阅读当天灵修。</p>",
      },
    en:
      previous.en || {
        sourceUrl: `https://bible.alpha.org/en/classic/${dayOfYear}/index.html`,
        audioUrl: "",
        dayTitle: "Today's devotional will refresh on the next successful build",
        dateLabel: new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(generatedAt)),
        bodyHtml:
          "<p>We could not fetch the Alpha content during this build. You can still open the official page below to read today's devotional.</p>",
      },
  };
}

async function main() {
  const now = new Date();
  const generatedAt = now.toISOString();
  const dayOfYear = getDayOfYear(now, "America/New_York");

  let previous = {};
  if (fs.existsSync(outputPath)) {
    previous = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  }

  try {
    const [zh, en] = await Promise.all([
      fetchReading("zh", dayOfYear, now),
      fetchReading("en", dayOfYear, now),
    ]);

    const payload = {
      generatedAt,
      dayOfYear,
      zh,
      en,
    };

    fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
    console.log(`Fetched Alpha Bible in One Year content for day ${dayOfYear}.`);
  } catch (error) {
    const payload = buildFallback(dayOfYear, generatedAt, previous);
    fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
    console.warn(`Using fallback Alpha Bible in One Year content: ${error.message}`);
  }
}

await main();
