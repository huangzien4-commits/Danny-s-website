// ==========================================
// 技能資料 (Skills Data)
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

// ==========================================
// 修課紀錄資料 (Courses Data)
// ==========================================
const coursesData = [
    {
        name: "數位系統實驗 (Digital Systems Lab)",
        semester: "114學年度",
        category: "Hardware",
        skills: ["Verilog", "硬體儀器整合", "數位電路實作"],
        description: "透過實際操作與驗證，學習將數位邏輯理論轉化為真實電路。具備獨立使用 Verilog 撰寫邏輯並與實體訊號儀器整合的實務能力。"
    }
];

// ==========================================
// 專案作品資料 (Projects Data)
// ==========================================
const projectsData = [
    {
        name: "Up/Down Counter (正數與倒數計數器)",
        shortDescription: "基於 Verilog 實作並結合實體儀器的硬體計數系統。",
        detailedDescription: "使用 Verilog 語法設計並實作可切換正數與倒數模式的邏輯計數器。專案核心在於成功將程式邏輯與實體硬體儀器無縫整合，驗證數位訊號的準確性與執行穩定度。",
        techStack: ["Verilog", "Digital Circuits", "Hardware Testing"],
        status: "Completed"
    }
];