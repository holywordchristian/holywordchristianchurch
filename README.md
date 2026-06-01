# Holy Word Hugo Migration

This folder contains a Hugo-ready migration scaffold for the church website.

## What is included

- A bilingual Hugo configuration for Chinese and English
- Shared header/footer and navigation
- A WordPress importer script that reads the WXR export and extracts referenced media from `uploads.zip`
- Base templates and CSS tuned to the church site's current look
- A GitHub Pages deployment workflow for testing on the default `github.io` domain first

## Import content

Run from this folder:

```bash
node scripts/import-wordpress.mjs /path/to/wordpress-export.xml /path/to/uploads.zip
```

## Remaining work

- Run `hugo server` and review both `/` and `/en/`
- Replace the contact form placeholder with a static form provider
- Rebuild the daily devotional shortcode with a Hugo-compatible source
- Verify each imported page and tighten spacing/content where WordPress block HTML was copied verbatim
- Push the site to a public GitHub repository and enable Pages from Actions
- Add the custom domain and restore `CNAME` when you are ready to switch DNS
