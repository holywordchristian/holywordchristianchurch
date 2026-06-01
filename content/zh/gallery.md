+++
title = "Gallery"
date = "2026-05-23T21:43:07"
translationKey = "gallery"
aliases = ["/gallery/"]
hideTitle = false
+++

<style>
.wp-block-post-title { display: none; }

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&family=Noto+Sans+SC:wght@300;400&display=swap');

.ch-wrap {
  font-family: 'Noto Sans SC', sans-serif;
  max-width: 960px;
  margin: 0 auto;
  background: #fff;
}

/* Hero */
.ch-hero {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}
.ch-hero img {
  width: 100%;
  height: auto;
  display: block;
}
.ch-hero-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(30,50,80,0.78) 0%, transparent 100%);
  padding: 2.5rem 2.5rem 2rem;
}
.ch-hero-overlay h2 {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.3rem;
}
.ch-hero-overlay p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
  font-weight: 300;
}

/* Divider */
.ch-divider {
  width: 48px; height: 3px;
  background: #3d6a9e;
  margin: 2.5rem auto;
  border-radius: 2px;
}

/* Intro text */
.ch-intro {
  max-width: 660px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}
.ch-cross {
  margin: 0 auto 1.2rem;
  display: flex;
  justify-content: center;
}
.ch-intro p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #3a4a5c;
  font-weight: 300;
  margin: 0;
}

/* Info strip */
.ch-info-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 3rem;
  margin: 2.5rem auto;
  padding: 1.4rem 2rem;
  background: #f4f7fb;
  border: 1px solid #dce6f0;
  border-radius: 6px;
  max-width: 580px;
}
.ch-info-item { text-align: center; }
.ch-info-item .label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #3d6a9e;
  margin-bottom: 4px;
}
.ch-info-item .value {
  font-family: 'Noto Serif SC', serif;
  font-size: 1rem;
  color: #1e3250;
}
</style>
<div class="import-note">WordPress 的 Google Drive 相册嵌入暂未迁移到 Hugo。后面可以改成原生图片画廊，或保留一个外部 Google Drive 相册链接。</div>
