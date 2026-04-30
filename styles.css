/* =========================================
   全域變數設定：F1 賽車風格配色
   ========================================= */
:root {
    --bg-color: #000000;        /* 賽道黑 */
    --surface-color: #111111;   /* 碳纖維深灰 */
    --text-primary: #ffffff;    /* 亮白 */
    --text-secondary: #a1a1a1;  /* 金屬灰 */
    --accent-color: #e10600;    /* F1 經典極速紅 */
    --accent-hover: #ff1e15;    /* 亮紅色 */
    /* 使用粗曠、具備衝擊力的無襯線字體組合 */
    --font-family: "Arial Black", Impact, "Segoe UI", Roboto, sans-serif;
    --font-body: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* =========================================
   基礎重置 (Reset)
   ========================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.8;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
    /* 強制容器內元素置中 */
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* =========================================
   Typography (字體與標題)
   ========================================= */
h1, h2, .nav-logo {
    font-family: var(--font-family);
    font-style: italic; /* 賽車速度感 */
    text-transform: uppercase;
}

.highlight {
    color: var(--accent-color);
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 32px;
    text-align: center;
    position: relative;
    letter-spacing: 2px;
}

/* 標題底下的紅線裝飾 */
.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: var(--accent-color);
    margin: 12px auto 0;
}

/* =========================================
   導覽列 (Navbar)
   ========================================= */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column; /* 改為上下排列，絕對置中 */
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
    border-bottom: 2px solid var(--accent-color); /* F1紅色底線 */
    z-index: 1000;
}

.nav-logo {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: 1px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 40px;
}

.nav-links a {
    font-family: var(--font-family);
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    font-style: italic;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--text-primary);
}

/* =========================================
   通用 Section 設定
   ========================================= */
.section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 0 80px 0; /* 增加上方 padding 避開 Navbar */
}

/* =========================================
   Hero 區塊 (首屏)
   ========================================= */
.hero-section {
    text-align: center;
    padding: 0 24px;
    background: radial-gradient(circle at center, #1a0000 0%, #000000 70%); /* 微弱的紅色光暈中心 */
}

.hero-title {
    font-size: 4.5rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-align: center; /* 字體置中 */
}

/* 按鈕樣式 (銳利、競技感) */
.hero-actions {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn {
    display: inline-block;
    padding: 14px 36px;
    font-family: var(--font-family);
    font-size: 1rem;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border-radius: 0; /* 移除圓角，展現俐落感 */
}

.btn-primary {
    background-color: var(--accent-color);
    color: #ffffff;
    border: 2px solid var(--accent-color);
}

.btn-primary:hover {
    background-color: var(--accent-hover);
    border-color: var(--accent-hover);
    transform: scale(1.05); /* 微放大效果 */
}

.btn-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-secondary);
}

.btn-secondary:hover {
    border-color: var(--text-primary);
    color: var(--bg-color);
    background-color: var(--text-primary);
    transform: scale(1.05);
}

/* =========================================
   關於我 (About)
   ========================================= */
.about-section {
    background-color: var(--surface-color);
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
}

.about-content {
    max-width: 700px;
    font-size: 1.125rem;
    color: var(--text-secondary);
    text-align: center; /* 強制內文置中 */
}

.about-content p {
    margin-bottom: 24px;
}

/* =========================================
   Skills 技能區塊
   ========================================= */
.skills-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}

.skill-category {
    width: 100%;
    text-align: center;
}

.skill-category-title {
    font-family: var(--font-family);
    color: var(--accent-color);
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 16px;
    letter-spacing: 1px;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.skill-tag {
    background-color: transparent;
    border: 1px solid var(--text-secondary);
    color: var(--text-primary);
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.skill-tag:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    background-color: rgba(225, 6, 0, 0.1);
}

/* =========================================
   Projects 與 Courses 共用 Grid 排版
   ========================================= */
.projects-grid, .courses-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
}

/* 專案與課程卡片共用樣式 */
.project-card, .course-card {
    background-color: var(--surface-color);
    border-left: 4px solid var(--accent-color); /* 左側紅色拉線 */
    width: 100%;
    max-width: 800px;
    padding: 30px;
    transition: transform 0.3s ease;
}

.project-card:hover, .course-card:hover {
    transform: translateX(10px); /* 滑鼠游標經過時向右衝刺 */
    background-color: #1a0000;
}

.project-status {
    font-family: var(--font-family);
    font-size: 0.75rem;
    color: var(--accent-color);
    margin-bottom: 8px;
    letter-spacing: 1px;
    font-style: italic;
}

.project-title, .course-title {
    font-family: var(--font-family);
    font-size: 1.5rem;
    margin-bottom: 12px;
    color: var(--text-primary);
    font-style: italic;
}

.project-short, .course-desc {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 12px;
    text-align: left; /* 卡片內文靠左對齊以利閱讀 */
}

.project-detail {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 20px;
    text-align: left; /* 保持細節內文靠左 */
}

/* 標籤群 (Tech & Course Skills) */
.project-tech, .course-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tag, .course-tag {
    background-color: #222;
    color: var(--text-secondary);
    font-size: 0.75rem;
    padding: 4px 10px;
    font-family: var(--font-family);
    text-transform: uppercase;
}

/* Course 專屬樣式 */
.course-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #333;
    padding-bottom: 12px;
    margin-bottom: 16px;
}

.course-semester {
    font-family: var(--font-family);
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* =========================================
   聯絡方式 (Contact)
   ========================================= */
.contact-section {
    text-align: center;
}

.contact-text {
    color: var(--text-secondary);
    margin-bottom: 40px;
    text-align: center;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
}

.contact-card {
    display: flex;
    flex-direction: column;
    align-items: center; /* 卡片內容置中 */
    padding: 30px 40px;
    background-color: var(--surface-color);
    border: 2px solid #222;
    text-decoration: none;
    transition: all 0.3s ease;
    min-width: 220px;
    border-radius: 0; /* 銳利邊角 */
}

.contact-card:hover {
    border-color: var(--accent-color);
    background-color: #1a0000; /* Hover 時透出微紅 */
    transform: translateY(-5px);
}

.contact-label {
    font-family: var(--font-family);
    font-size: 0.875rem;
    color: var(--accent-color); /* 標籤改為紅色 */
    margin-bottom: 8px;
    font-style: italic;
    letter-spacing: 1px;
}

.contact-value {
    font-size: 1.125rem;
    color: var(--text-primary);
    font-weight: 600;
}

/* =========================================
   頁尾 (Footer)
   ========================================= */
.footer {
    text-align: center;
    padding: 30px;
    background-color: #0a0a0a;
    color: #666;
    font-family: var(--font-family);
    font-size: 0.8rem;
    font-style: italic;
    letter-spacing: 1px;
}

/* =========================================
   響應式設計 (Mobile RWD)
   ========================================= */
@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .nav-links {
        gap: 20px;
        flex-wrap: wrap; /* 手機版選單若過多則換行 */
        justify-content: center;
    }

    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
    }

    .contact-links {
        flex-direction: column;
        align-items: center;
    }

    .contact-card {
        width: 100%;
        max-width: 300px;
    }

    .course-header {
        flex-direction: column;
    }

    .project-card, .course-card {
        padding: 20px;
    }
}
