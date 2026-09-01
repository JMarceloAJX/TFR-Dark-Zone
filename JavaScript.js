*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-dark:      #121212;
  --bg-panel:     #1a1a1a;
  --bg-input:     #0d0d0d;
  --text-main:    #b3b3b3;
  --text-bright:  #ffffff;
  --brand-color:  #f3a804;
  --brand-dim:    rgba(243, 168, 4, 0.3);
  --border-color: #2a2a2a;
  --alert:        #ff4d4d;
  --font-main:    'Rajdhani', sans-serif;
}

html, body { 
  height: 100%; 
}

body {
  font-family: var(--font-main);
  background-color: var(--bg-dark);
  color: var(--text-main);
  min-height: 100vh;
  letter-spacing: 0.02em;
  overflow-x: hidden;
}

/* ================= HERO & NEWS ================= */
#hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url('Externo/GFLW.jpg') no-repeat center center fixed !important;
  background-size: cover !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 4px solid var(--brand-color);
}

#hero-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(12, 12, 12, 0.70);
  z-index: 1;
}

.main-header, #hero-section .hero-content {
  position: relative;
  z-index: 2;
}

.main-header {
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(18, 18, 18, 0.85);
  border-bottom: 2px solid var(--brand-color);
}

.header-stats {
  font-size: 0.9rem;
  color: var(--brand-color);
  font-weight: bold;
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.news-modal-card {
  width: 100%;
  max-width: 850px;
  background: rgba(22, 22, 22, 0.88) !important;
  backdrop-filter: blur(4px);
  border: 2px solid var(--brand-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.85);
  display: flex;
  flex-direction: column;
}

.news-modal-header {
  background: rgba(26, 26, 26, 0.9);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.news-title-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--brand-color);
  letter-spacing: 1px;
}

.news-close-btn {
  background: var(--alert);
  color: #fff;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.news-modal-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.news-headline {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  border-left: 4px solid var(--brand-color);
  padding-left: 10px;
}

.news-map-bg-wrapper {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-bg-map-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
}

.news-overlay-text {
  position: relative;
  z-index: 2;
  background: rgba(15, 15, 15, 0.85);
  border: 1px solid var(--brand-color);
  padding: 15px;
  max-width: 80%;
  text-align: center;
}

.news-faction-badge {
  display: inline-block;
  background: var(--brand-color);
  color: #000;
  font-weight: bold;
  font-size: 0.75rem;
  padding: 2px 6px;
  margin-bottom: 5px;
}

.news-overlay-text p {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
}

.news-modal-footer {
  padding: 12px;
  background: rgba(21, 21, 21, 0.9);
  text-align: center;
  border-top: 1px solid var(--border-color);
}

.scroll-down-hint {
  font-size: 0.8rem;
  color: var(--brand-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

/* ================= MAIN VIEW & CONTACTS ================= */
#main-view { 
  background-color: var(--bg-dark); 
  min-height: 100vh; 
}

nav {
  border-bottom: 3px solid var(--brand-color);
  padding: 0 5%;
  display: flex;
  align-items: center;
  height: 80px;
  background: #161616;
}

.logo-area { display: flex; flex-direction: column; }
.logo { font-size: 1.7rem; font-weight: 700; color: #fff; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; }
.logo::after { content: ' // RED'; font-size: 0.75rem; color: var(--brand-color); margin-left: 5px; }
.slogan { font-size: 0.75rem; color: var(--brand-color); opacity: 0.8; margin-top: -2px; font-weight: 600; text-transform: uppercase; }

.contacts-section { padding: 40px 5% 60px; }
.contacts-header {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 1.5rem; 
  border-bottom: 1px solid var(--border-color); 
  padding-bottom: 10px;
}
.contacts-header h2 {
  font-size: 1.4rem; 
  font-weight: 600; 
  color: #fff; 
  text-transform: uppercase;
  border-left: 3px solid var(--brand-color); 
  padding-left: 10px;
}
#contactCount { font-size: 0.9rem; color: var(--brand-color); font-weight: bold; }

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: var(--bg-panel);
  border: 1px solid var(--border-color);
  transition: transform 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}
.contact-card:hover { border-color: var(--brand-color); }

.contact-avatar-area {
  background: #0d0d0d;
  aspect-ratio: 4/3;
  display: flex; 
  align-items: center; 
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
}
.contact-avatar-area img { width: 100%; height: 100%; object-fit: cover; }
.contact-avatar-area .initials {
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--brand-color);
}

.status-tag {
  position: absolute; 
  top: 10px; 
  left: 10px;
  background: rgba(0,0,0,0.85);
  color: var(--brand-color);
  border: 1px solid var(--brand-color);
  font-size: 0.7rem; 
  padding: 2px 8px; 
  font-weight: bold; 
  text-transform: uppercase;
  z-index: 2;
}
.status-tag.pending { color: var(--alert); border-color: var(--alert); }

.contact-body { padding: 1.1rem 1.2rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
.contact-role { font-size: 0.72rem; color: #777; margin-bottom: 0.35rem; font-weight: 600; text-transform: uppercase; }
.contact-name { font-size: 1.1rem; font-weight: 600; color: #fff; line-height: 1.3; }

.contact-footer { display: flex; flex-direction: column; gap: 8px; margin-top: 1.1rem; }
.shop-btn {
  background: #222; 
  color: var(--brand-color); 
  border: 1px solid var(--brand-color);
  padding: 0.5rem 1rem; 
  font-size: 0.85rem; 
  cursor: pointer; 
  transition: all 0.2s;
  text-transform: uppercase; 
  font-family: var(--font-main); 
  font-weight: 600; 
  text-align: center;
}
.shop-btn:hover { background: var(--brand-color); color: #000; }

.talk-btn {
  background: transparent; 
  color: #fff; 
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem; 
  font-size: 0.85rem; 
  cursor: pointer; 
  transition: all 0.2s;
  text-transform: uppercase; 
  font-family: var(--font-main); 
  font-weight: 600; 
  width: 100%;
}
.talk-btn:hover { background: var(--brand-color); color: #000; border-color: var(--brand-color); }

/* ================= SHOP MODAL ================= */
.shop-modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 600;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.shop-modal-overlay.active { display: flex; }

.shop-modal-container {
  width: 100%;
  max-width: 700px;
  background: var(--bg-panel);
  border: 2px solid var(--brand-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
}

.shop-header {
  background: #161616;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}
.shop-header h3 { color: #fff; font-size: 1.1rem; text-transform: uppercase; }
.shop-close-btn {
  background: var(--alert); 
  color: #fff; 
  border: none; 
  width: 26px; 
  height: 26px;
  font-weight: bold; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}

.shop-body {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  max-height: 400px;
  overflow-y: auto;
}

.shop-item-card {
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.shop-item-card img {
  width: 100px;
  height: 75px;
  object-fit: contain;
  background: #111;
  padding: 5px;
  border: 1px solid var(--border-color);
}
.shop-item-name { font-size: 0.85rem; font-weight: 600; color: #fff; }
.shop-item-price { font-size: 0.8rem; color: var(--brand-color); font-weight: bold; }
.buy-action-btn {
  background: var(--brand-color); 
  color: #000; 
  border: none; 
  padding: 6px 10px;
  font-family: var(--font-main); 
  font-weight: bold; 
  font-size: 0.75rem; 
  cursor: pointer; 
  text-transform: uppercase;
  width: 100%;
}
.buy-action-btn:hover { background: #fff; }

/* ================= CHAT WINDOWS ================= */
.chat-window {
  display: none;
  flex-direction: column;
  position: fixed;
  inset: 0;
  z-index: 500;
  background: var(--bg-dark);
}
.chat-window.active { display: flex; }

.chat-header {
  height: 80px;
  padding: 0 5%;
  border-bottom: 3px solid var(--brand-color);
  display: flex;
  align-items: center;
  gap: 16px;
  background: #161616;
}
.back-btn {
  background: transparent; 
  border: 1px solid var(--border-color); 
  color: var(--text-main);
  font-family: var(--font-main); 
  font-weight: 600; 
  text-transform: uppercase;
  padding: 8px 14px; 
  cursor: pointer; 
  transition: all 0.2s; 
  font-size: 0.85rem;
}
.back-btn:hover { border-color: var(--brand-color); color: var(--brand-color); }

.chat-header .avatar {
  width: 42px; 
  height: 42px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-weight: 700; 
  font-size: 15px; 
  color: #000;
  border: 1px solid var(--border-color);
  background-size: cover; 
  background-position: center;
}
.chat-header .name { font-weight: 700; font-size: 1.15rem; color: #fff; text-transform: uppercase; }
.chat-header .tag {
  font-size: 0.75rem; 
  font-weight: 700; 
  letter-spacing: 0.5px;
  padding: 4px 10px; 
  border: 1px solid var(--brand-color); 
  color: var(--brand-color); 
  text-transform: uppercase;
}
.chat-header .tag.pending { border-color: var(--alert); color: var(--alert); }

.messages {
  flex: 1; 
  overflow-y: auto;
  padding: 28px 5%;
  display: flex; 
  flex-direction: column; 
  gap: 16px;
  max-width: 900px; 
  width: 100%; 
  margin: 0 auto;
}

.msg-row { display: flex; gap: 10px; max-width: 640px; animation: rise 0.28s ease both; }
@keyframes rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

.bubble {
  background: var(--bg-panel); 
  border: 1px solid var(--border-color);
  padding: 12px 16px; 
  font-size: 1rem; 
  line-height: 1.5; 
  color: var(--text-main);
}
.msg-row.you { align-self: flex-end; flex-direction: row-reverse; margin-left: auto; }
.msg-row.you .bubble { background: var(--brand-color); color: #000; border-color: var(--brand-color); font-weight: 600; }

.sender-tag { font-size: 0.7rem; color: #777; margin-bottom: 4px; letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; }

.choices {
  padding: 16px 5% 26px;
  border-top: 1px solid var(--border-color);
  display: flex; 
  flex-direction: column; 
  gap: 10px;
  background: var(--bg-panel);
  max-width: 900px; 
  width: 100%; 
  margin: 0 auto;
}
.choice-btn {
  text-align: left; 
  background: #1a1a1a; 
  border: 1px solid var(--border-color); 
  color: #fff;
  padding: 12px 16px; 
  font-family: var(--font-main); 
  font-size: 1rem; 
  font-weight: 600;
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  text-transform: uppercase;
  transition: all 0.2s;
}
.choice-btn:hover { background: var(--brand-color); color: #000; border-color: var(--brand-color); }
.choice-btn .key {
  font-size: 0.75rem; 
  font-weight: 700; 
  border: 1px solid currentColor;
  width: 20px; 
  height: 20px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-shrink: 0;
}
.end-note { font-size: 0.85rem; color: #666; text-align: center; padding: 6px; text-transform: uppercase; letter-spacing: 0.05em; }

/* ================= SCROLLBAR & BOOT ================= */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: var(--border-color); }
::-webkit-scrollbar-track { background: transparent; }

.boot-screen {
  position: fixed; 
  inset: 0; 
  z-index: 1000; 
  background: #0a0a0a;
  display: flex; 
  align-items: center; 
  justify-content: center;
  transition: opacity 0.4s ease, visibility 0.4s;
}
.boot-screen.hide { opacity: 0; visibility: hidden; pointer-events: none; }
.boot-box {
  width: 90%; 
  max-width: 620px; 
  border: 1px solid var(--border-color);
  background: #0d0d0d; 
  padding: 24px 28px; 
  min-height: 220px;
}
.boot-lines {
  font-family: var(--font-main); 
  font-size: 1rem; 
  line-height: 1.9;
  color: var(--brand-color); 
  white-space: pre-wrap;
}
.boot-cursor {
  display: inline-block; 
  color: var(--brand-color); 
  animation: blink 0.9s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
