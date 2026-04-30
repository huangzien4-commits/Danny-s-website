// ==========================================
// 1. 資料區塊 (Data Setup)
// ==========================================

const skillsData = {
    hardware_and_systems: [
        "Verilog", 
        "儀器操作與測試 (Instrument Operation)", 
        "軟硬體系統整合 (Hardware-Software Integration)"
    ],
    programming: [
        "C", 
        "Python"
    ]
};

const coursesData = [
    {
        name: "數位系統實驗 (Digital Systems Lab)",
        semester: "114學年度",
        category: "Hardware",
        skills: ["Verilog", "硬體儀器整合", "數位電路實作"],
        description: "透過實際操作與驗證，學習將數位邏輯理論轉化為真實電路。具備獨立使用 Verilog 撰寫邏輯並與實體訊號儀器整合的實務能力。"
    }
];

const projectsData = [
    {
        name: "Up/Down Counter (正數與倒數計數器)",
        shortDescription: "基於 Verilog 實作並結合實體儀器的硬體計數系統。",
        detailedDescription: "使用 Verilog 語法設計並實作可切換正數與倒數模式的邏輯計數器。專案核心在於成功將程式邏輯與實體硬體儀器無縫整合，驗證數位訊號的準確性與執行穩定度。",
        techStack: ["Verilog", "Digital Circuits", "Hardware Testing"],
        status: "Completed"
    }
];

// ==========================================
// 2. 邏輯區塊 (DOM 操作與渲染)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 原有功能：動態更新 Footer 年份 ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 原有功能：導覽列平滑滾動 ---
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 扣除導覽列高度，避免遮擋標題
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 新增功能：動態渲染 Skills ---
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        let skillsHTML = '';
        for (const [category, skills] of Object.entries(skillsData)) {
            // 將 Object 的 Key (如 hardware_and_systems) 轉換為顯示文字 (HARDWARE AND SYSTEMS)
            const categoryName = category.replace(/_/g, ' ').toUpperCase();
            skillsHTML += `
            <div class="skill-category">
                <h3 class="skill-category-title">${categoryName}</h3>
                <div class="skill-tags">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>`;
        }
        skillsContainer.innerHTML = skillsHTML;
    }

    // --- 新增功能：動態渲染 Projects ---
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = projectsData.map(proj => `
            <div class="project-card">
                <div class="project-status">${proj.status.toUpperCase()}</div>
                <h3 class="project-title">${proj.name}</h3>
                <p class="project-short">${proj.shortDescription}</p>
                <p class="project-detail">${proj.detailedDescription}</p>
                <div class="project-tech">
                    ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // --- 新增功能：動態渲染 Courses ---
    const coursesContainer = document.getElementById('courses-container');
    if (coursesContainer) {
        coursesContainer.innerHTML = coursesData.map(course => `
            <div class="course-card">
                <div class="course-header">
                    <h3 class="course-title">${course.name}</h3>
                    <span class="course-semester">${course.semester}</span>
                </div>
                <p class="course-desc">${course.description}</p>
                <div class="course-skills">
                    ${course.skills.map(skill => `<span class="course-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

});
