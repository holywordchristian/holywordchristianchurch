+++
title = "教会资讯"
date = "2026-02-18T22:55:15"
translationKey = "church-info"
aliases = ["/church-info/"]
hideTitle = false
+++

<style>
.wp-block-post-title { display: none; }
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&family=Noto+Sans+SC:wght@300;400&display=swap');

:root {
  --blue-deep: #1e3250;
  --blue-mid: #3d6a9e;
  --blue-light: #dce6f0;
  --blue-pale: #f4f7fb;
  --text-body: #3a4a5c;
  --text-muted: #6b7f94;
}

.ch-wrap {
  font-family: 'Noto Sans SC', sans-serif;
  max-width: 960px;
  margin: 0 auto;
  background: #fff;
}

/* Hide download button */
audio::-webkit-media-controls-download-button {
  display: none !important;
}
audio::-internal-media-controls-download-button {
  display: none !important;
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
  bottom: 0;
  left: 0;
  right: 0;
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
  width: 48px;
  height: 3px;
  background: var(--blue-mid);
  margin: 2.5rem auto;
  border-radius: 2px;
}

/* Intro */
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
  color: var(--text-body);
  font-weight: 300;
  margin: 0;
}

/* Sermon */
.ch-sermon-section {
  margin: 2rem 0 3rem;
  padding: 0 0.5rem;
}
.ch-sermon-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.6rem;
  padding: 0 0.5rem;
}
.ch-sermon-heading h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--blue-deep);
  margin: 0;
  white-space: nowrap;
}
.ch-sermon-heading-line {
  flex: 1;
  height: 1px;
  background: var(--blue-light);
}

.ch-sermon-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.93rem;
}
.ch-sermon-table thead tr {
  background: var(--blue-deep);
  color: #fff;
}
.ch-sermon-table thead th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 400;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.ch-sermon-table thead th:last-child {
  text-align: center;
}
.ch-sermon-table tbody tr {
  border-bottom: 1px solid var(--blue-light);
  transition: background 0.15s;
}
.ch-sermon-table tbody tr:nth-child(even) {
  background: var(--blue-pale);
}
.ch-sermon-table tbody tr:hover {
  background: #e8eff8;
}
.ch-sermon-table td {
  padding: 0.9rem 1rem;
  color: var(--text-body);
  vertical-align: middle;
}
.ch-sermon-table td.date {
  color: var(--text-muted);
  font-size: 0.82rem;
}
.ch-sermon-table td.title {
  font-family: 'Noto Serif SC', serif;
  font-size: 0.97rem;
  color: var(--blue-deep);
}
.ch-sermon-table td.scripture {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.ch-sermon-table td.speaker {
  white-space: nowrap;
}
.ch-sermon-table td.actions {
  min-width: 300px;
}

/* Mini audio card */
.ch-mini-player {
  background: #f4f7fb;
  border: 1px solid #dce6f0;
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
}

.ch-mini-title {
  font-size: 0.78rem;
  color: #1e3250;
  margin-bottom: 6px;
  font-weight: 500;
}

.ch-mini-player audio {
  width: 100%;
  height: 38px;
  display: block;
}

/* Mobile */
@media (max-width: 640px) {
  .ch-sermon-table thead {
    display: none;
  }

  .ch-sermon-table tbody tr {
    display: block;
    padding: 0.8rem;
    margin-bottom: 0.5rem;
    border: 1px solid var(--blue-light);
    border-radius: 6px;
    background: #fff !important;
  }

  .ch-sermon-table td {
    display: block;
    padding: 0.25rem 0;
    border: none;
  }

  .ch-sermon-table td.actions {
    min-width: auto;
    margin-top: 0.6rem;
  }

  .ch-mini-player {
    width: 100%;
  }
}
</style>

<div class="ch-wrap">

  <div class="ch-hero">
    <img src="/uploads/2026/02/church_banner_shengdaotang.webp" alt="Holy Word Church">
    <div class="ch-hero-overlay">
      <h2>聖道堂 Holy Word Christian Church</h2>
      <p>Brossard · Founded 2026</p>
    </div>
  </div>

  <div class="ch-divider"></div>

  <div class="ch-intro">
    <div class="ch-cross">
      <svg width="24" height="34" viewBox="0 0 24 34">
        <rect x="9.5" y="0" width="5" height="34" rx="1" fill="#3d6a9e" opacity="0.7"/>
        <rect x="0" y="9" width="24" height="5" rx="1" fill="#3d6a9e" opacity="0.7"/>
      </svg>
    </div>
    <p>教会于2026年1月在Brossard成立，并逐渐建立了各种团契、小组、唱诗班和事工——在信仰、社区和敬拜中共同成长。</p>
  </div>

  <div class="ch-divider"></div>

  <div class="ch-sermon-section">
    <div class="ch-sermon-heading">
      <h3>讲道录音</h3>
      <div class="ch-sermon-heading-line"></div>
    </div>

    <table class="ch-sermon-table">
      <thead>
        <tr>
          <th>日期</th>
          <th>主题信息</th>
          <th>经文</th>
          <th>讲员</th>
          <th>收听</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="date">2026年5月24日</td>
          <td><div class="title">热爱和建造基督的身体</div></td>
          <td class="scripture">哥林多前书 3:9–17</td>
          <td class="speaker">吴豪牧师</td>
          <td class="actions">
            <div class="ch-mini-player">
              <div class="ch-mini-title">▶ 讲道</div>
              <audio controls controlsList="nodownload noplaybackrate" preload="metadata">
                <source src="/uploads/2026/05/5-25-audio_wu.mp4" type="audio/mp4">
                您的浏览器不支持音频播放。
              </audio>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
