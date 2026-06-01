+++
title = "Home En"
date = "2026-05-11T19:23:32"
translationKey = "home"
aliases = []
hideTitle = true
+++

<style>
.wp-block-post-title{display:none;}

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&family=Noto+Sans+SC:wght@400;500&display=swap');

*{box-sizing:border-box;}
.hp{font-family:'Noto Sans SC','PingFang SC',sans-serif;background:#fff;width:100%;color:#1e3250;max-width:1100px;margin:0 auto;}
.hp a{color:inherit;text-decoration:none;}

.hp-hero{position:relative;border-radius:8px;overflow:hidden;margin-bottom:1.2rem;}
.hp-hero img{width:100%;height:auto;display:block;}
.hp-hero-ov{position:absolute;inset:0;background:rgba(20,38,65,0.52);display:flex;flex-direction:column;justify-content:center;padding:0 3rem;}
.hp-hero-ov .tag{font-size:0.68rem;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.7);margin-bottom:10px;}
.hp-hero-ov h1{font-family:'Noto Serif SC',serif;font-size:clamp(1.4rem,3.5vw,2.2rem);font-weight:600;color:#fff;line-height:1.4;margin-bottom:10px;}
.hp-hero-ov .sub{font-size:0.82rem;color:rgba(255,255,255,0.65);margin-bottom:18px;letter-spacing:0.04em;}
.hp-hero-btns{display:flex;gap:10px;}
.hp-btn-primary{background:#fff;color:#1e3250;font-size:0.78rem;padding:7px 18px;border-radius:4px;font-weight:500;}
.hp-btn-outline{border:1px solid rgba(255,255,255,0.6);color:#fff;font-size:0.78rem;padding:7px 18px;border-radius:4px;}
.hp-hero-info{position:absolute;bottom:0;right:0;background:rgba(20,38,65,0.72);padding:8px 16px;border-radius:8px 0 0 0;font-size:0.72rem;color:rgba(255,255,255,0.85);display:flex;gap:16px;}
.hp-hero-info span{display:flex;align-items:center;gap:5px;}

.hp-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:1.2rem;}
.hp-stat{background:#f4f7fb;border:1px solid #dce6f0;border-radius:8px;padding:14px;text-align:center;}
.hp-stat .num{font-family:'Noto Serif SC',serif;font-size:1.6rem;font-weight:600;color:#1e3250;line-height:1;}
.hp-stat .lbl{font-size:0.68rem;color:#3d6a9e;margin-top:5px;letter-spacing:0.06em;}

.hp-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:1.2rem;}
.hp-card{background:#fff;border:1px solid #dce6f0;border-radius:8px;padding:1.1rem;display:flex;flex-direction:column;}
.hp-card-icon{width:38px;height:38px;background:#1e3250;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;}
.hp-card-badge{display:inline-block;background:#e6f1fb;color:#0C447C;font-size:0.65rem;padding:2px 9px;border-radius:20px;margin-bottom:8px;width:fit-content;}
.hp-card h3{font-family:'Noto Serif SC',serif;font-size:0.95rem;color:#1e3250;margin-bottom:7px;font-weight:600;}
.hp-card p{
  font-size:0.92rem;
  line-height:1.75;
  color:#24364a;
  font-weight:400;
  flex:1;
}
.hp-card-link{font-size:0.75rem;color:#3d6a9e;display:flex;align-items:center;gap:4px;margin-top:10px;}

.hp-verse{background:#1e3250;border-radius:8px;padding:2rem 2.5rem;margin-bottom:1.2rem;text-align:center;position:relative;overflow:hidden;}
.hp-verse::before{content:'\201C';position:absolute;top:-10px;left:20px;font-size:6rem;color:rgba(255,255,255,0.05);font-family:serif;line-height:1;}
.hp-verse p{
  font-family:'Noto Serif SC',serif;
  font-size:1.1rem;
  color:#fff;
  line-height:1.9;
  font-weight:400;
  position:relative;
}
.hp-verse cite{display:block;font-size:0.72rem;color:#85b7eb;margin-top:10px;letter-spacing:0.1em;font-style:normal;}

.hp-mid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:1.2rem;}
.hp-mid-photo{border-radius:8px;overflow:hidden;}
.hp-mid-photo img{width:100%;height:100%;object-fit:cover;display:block;min-height:200px;}
.hp-notice{background:#f4f7fb;border:1px solid #dce6f0;border-radius:8px;padding:1.2rem;}
.hp-notice-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.hp-notice-head h2{font-family:'Noto Serif SC',serif;font-size:1rem;color:#1e3250;font-weight:600;}
.hp-badge{background:#1e3250;color:#fff;font-size:0.62rem;letter-spacing:0.08em;padding:3px 9px;border-radius:20px;}
.hp-notice-item{padding:10px 0;border-bottom:1px solid #dce6f0;}
.hp-notice-item:last-child{border-bottom:none;padding-bottom:0;}
.hp-notice-dot{display:flex;align-items:flex-start;gap:10px;}
.hp-notice-dot-icon{width:7px;height:7px;background:#3d6a9e;border-radius:50%;margin-top:6px;flex-shrink:0;}
.hp-notice-title{font-size:0.85rem;color:#1e3250;font-weight:500;margin-bottom:3px;}
.hp-notice-desc{
  font-size:0.86rem;
  color:#24364a;
  font-weight:400;
  line-height:1.65;
}

.hp-contact{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:1rem;}
.hp-contact-info{padding:0.25rem 0;}
.hp-divider{width:36px;height:3px;background:#3d6a9e;border-radius:2px;margin-bottom:14px;}
.hp-contact-info h2{font-family:'Noto Serif SC',serif;font-size:1rem;color:#1e3250;font-weight:600;margin-bottom:12px;}
.hp-row{display:flex;align-items:flex-start;gap:9px;font-size:0.8rem;color:#3a4a5c;margin-bottom:8px;line-height:1.6;}
.hp-row svg{flex-shrink:0;margin-top:2px;}
.hp-contact-info p{
  font-size:0.9rem;
  color:#24364a;
  line-height:1.75;
  margin:10px 0 14px;
  font-weight:400;
}
.hp-cta{display:inline-block;background:#1e3250;color:#fff;font-size:0.78rem;padding:8px 18px;border-radius:4px;}
.hp-map{border-radius:8px;overflow:hidden;border:1px solid #dce6f0;}
.hp-map iframe{width:100%;height:100%;min-height:220px;display:block;border:none;}

@media(max-width:640px){
  .hp-hero-ov{padding:0 1.2rem;}
  .hp-stats,.hp-cards{grid-template-columns:1fr;}
  .hp-mid,.hp-contact{grid-template-columns:1fr;}
}
</style>

<div class="hp">

  <div class="hp-hero">
    <img src="/uploads/2026/02/church_banner_shengdaotang.webp" alt="Holy Word Church Montreal Sunday Worship"/>
    <div class="hp-hero-info">
      <span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Every Sunday 2:00 PM
      </span>
      <span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Greenfield Park, QC
      </span>
    </div>
  </div>

  <div class="hp-stats">
 
  </div>

  <div class="hp-cards">
    <div class="hp-card">
      <div class="hp-card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      </div>
      <div class="hp-card-badge">Every Sunday 2:00 PM</div>
      <h3>Sunday Worship</h3>
      <p>Chinese Sunday worship is held every Sunday at 2:00 PM. Everyone is welcome to join us in worship and fellowship.</p>
      <div class="hp-card-link">
        321 Rue Empire, Greenfield Park
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
    <div class="hp-card">
      <div class="hp-card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </div>
      <div class="hp-card-badge">Inquirer · Discipleship</div>
      <h3>Faith Courses</h3>
      <p>We offer inquirer classes and discipleship training to help you deepen your faith and grow in your relationship with God.</p>
      <a href="/en/contact/" class="hp-card-link">
        Learn More
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <div class="hp-card">
      <div class="hp-card-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div class="hp-card-badge">Fellowship · Small Groups</div>
      <h3>Fellowship &amp; Small Groups</h3>
      <p>Through various fellowships and home groups, we build one another up, live out our faith, and support each other in daily life.</p>
      <a href="/en/contact/" class="hp-card-link">
        Join Us
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>

  <div class="hp-verse">
    <p>"Love the Lord your God with all your heart and with all your soul and with all your mind."</p>
    <cite>Matthew 22:37 </cite>
  </div>

  <div class="hp-mid">
    <div class="hp-mid-photo">
      <img src="/uploads/2026/02/img-2391_orig-1024x683.jpg" alt="Holy Word Church Building"/>
    </div>
    <div class="hp-notice">
      <div class="hp-notice-head">
        <h2>Latest News</h2>
        <span class="hp-badge">ANNOUNCEMENTS</span>
      </div>
      <div class="hp-notice-item">
        <div class="hp-notice-dot">
          <div class="hp-notice-dot-icon"></div>
          <div>
            <div class="hp-notice-title">Sunday Worship</div>
            <div class="hp-notice-desc">Our Mandarin Sunday worship begins every Sunday at 2:00 PM. Visitors and friends are warmly welcome.</div>
          </div>
        </div>
      </div>
      <div class="hp-notice-item">
        <div class="hp-notice-dot">
          <div class="hp-notice-dot-icon"></div>
          <div>
            <div class="hp-notice-title">In-Person Sunday School</div>
            <div class="hp-notice-desc">Sunday School meets every Sunday from 4:00–5:00 PM as we grow together in God's word.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hp-contact">
    <div class="hp-contact-info">
      <div class="hp-divider"></div>
      <h2>Visit Us</h2>
      <div class="hp-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d6a9e" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        321 Rue Empire, Greenfield Park, QC J4V 1V4
      </div>
      <div class="hp-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d6a9e" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Sunday Worship: Every Sunday at 2:00 PM
      </div>
      <div class="hp-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d6a9e" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Sunday School: Every Sunday 4:00–5:00 PM
      </div>
      <p>Whether you are visiting for the first time, exploring faith, or looking to get more involved — you are warmly welcome here.</p>
      <a href="/en/contact/"class="hp-card-link">Contact Us →</a>
    </div>
    <div class="hp-map">
      <iframe
        src="https://www.google.com/maps?q=321%20Rue%20Empire,%20Greenfield%20Park,%20QC%20J4V%201V4&output=embed"
        loading="lazy" allowfullscreen>
      </iframe>
    </div>
  </div>

</div>
