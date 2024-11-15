// MBTI Questions Database
const questions = [
    {
        question: "在社交场合中，你通常会：",
        options: [
            { text: "与很多人交谈，享受社交", type: "E" },
            { text: "倾向于与少数人深入交谈", type: "I" }
        ]
    },
    {
        question: "在休息日，你更倾向于：",
        options: [
            { text: "外出参加社交活动", type: "E" },
            { text: "在家享受独处时光", type: "I" }
        ]
    },
    {
        question: "当遇到问题时，你倾向于：",
        options: [
            { text: "与他人讨论寻求解决方案", type: "E" },
            { text: "独自思考解决方案", type: "I" }
        ]
    },
    {
        question: "在团队中，你更喜欢：",
        options: [
            { text: "积极发言，表达想法", type: "E" },
            { text: "先听取他人意见再发言", type: "I" }
        ]
    },
    {
        question: "在处理问题时，你更注重：",
        options: [
            { text: "具体的事实和细节", type: "S" },
            { text: "整体的概念和可能性", type: "N" }
        ]
    },
    {
        question: "你更相信：",
        options: [
            { text: "实际经验和观察", type: "S" },
            { text: "直觉和想象", type: "N" }
        ]
    },
    {
        question: "在学习新事物时，你更喜欢：",
        options: [
            { text: "循序渐进，按步骤学习", type: "S" },
            { text: "跳跃式思考，寻找关联", type: "N" }
        ]
    },
    {
        question: "你更关注：",
        options: [
            { text: "当下的现实情况", type: "S" },
            { text: "未来的可能性", type: "N" }
        ]
    },
    {
        question: "在做决定时，你更倾向于：",
        options: [
            { text: "依据逻辑和事实分析", type: "T" },
            { text: "考虑他人感受和价值观", type: "F" }
        ]
    },
    {
        question: "当朋友遇到问题时，你会：",
        options: [
            { text: "帮助分析问题并提供解决方案", type: "T" },
            { text: "倾听并给予情感支持", type: "F" }
        ]
    },
    {
        question: "在评价事物时，你更看重：",
        options: [
            { text: "客观标准和效率", type: "T" },
            { text: "个人价值和和谐", type: "F" }
        ]
    },
    {
        question: "在处理冲突时，你更倾向于：",
        options: [
            { text: "直接指出问题所在", type: "T" },
            { text: "考虑各方感受，委婉表达", type: "F" }
        ]
    },
    {
        question: "在工作/学习时，你更喜欢：",
        options: [
            { text: "制定详细计划并遵守", type: "J" },
            { text: "灵活应对，随机应变", type: "P" }
        ]
    },
    {
        question: "对待截止日期，你通常会：",
        options: [
            { text: "提前完成任务", type: "J" },
            { text: "在最后期限前完成", type: "P" }
        ]
    },
    {
        question: "你的工作环境通常是：",
        options: [
            { text: "井然有序，物品摆放整齐", type: "J" },
            { text: "随性自然，创造性混乱", type: "P" }
        ]
    },
    {
        question: "在旅行时，你更倾向于：",
        options: [
            { text: "制定详细的行程计划", type: "J" },
            { text: "即兴决定，保持灵活", type: "P" }
        ]
    }
];

let currentAnswers = {
    E: 0, I: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

let currentQuestionIndex = 0;

// 开始测试
function startTest() {
    currentQuestionIndex = 0;
    currentAnswers = {
        E: 0, I: 0,
        N: 0, S: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 隐藏所有主页内容的 section
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // 隐藏页脚
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
    
    // 显示测试界面
    const testContainer = document.createElement('div');
    testContainer.id = 'test-container';
    // 增加上边距，使用与首页相同的渐变背景
    testContainer.className = 'min-h-screen pt-48 pb-20 bg-gradient-to-b from-primary-50 via-primary-50/50 to-white';
    document.body.appendChild(testContainer);
    
    displayQuestion();
}

// 显示问题
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const testContainer = document.getElementById('test-container');
    
    testContainer.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto">
                <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div class="text-center mb-8">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">${currentQuestion.question}</h2>
                        <div class="text-sm text-gray-500">问题 ${currentQuestionIndex + 1} / ${questions.length}</div>
                    </div>
                    
                    <div class="space-y-4 mb-8">
                        ${currentQuestion.options.map((option, index) => `
                            <button 
                                onclick="handleAnswer('${option.type}')"
                                class="w-full p-6 text-left rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center group"
                            >
                                <span class="flex-grow text-lg text-gray-700">${option.text}</span>
                                <span class="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center ml-4">
                                    ${index + 1}
                                </span>
                            </button>
                        `).join('')}
                    </div>
                    
                    <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
                        <div 
                            class="bg-primary-600 h-3 rounded-full transition-all duration-500" 
                            style="width: ${(currentQuestionIndex / questions.length) * 100}%"
                        ></div>
                    </div>
                    <div class="text-center text-sm text-gray-500">
                        完成进度 ${Math.round((currentQuestionIndex / questions.length) * 100)}%
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 处理答案
function handleAnswer(type) {
    currentAnswers[type]++;
    currentQuestionIndex++;
    displayQuestion();
}

// 计算MBTI类型
function calculateMBTI() {
    return {
        EI: currentAnswers.E > currentAnswers.I ? 'E' : 'I',
        NS: currentAnswers.N > currentAnswers.S ? 'N' : 'S',
        TF: currentAnswers.T > currentAnswers.F ? 'T' : 'F',
        JP: currentAnswers.J > currentAnswers.P ? 'J' : 'P'
    };
}

// 显示结果
function showResults() {
    const result = calculateMBTI();
    const personalityType = `${result.EI}${result.NS}${result.TF}${result.JP}`;
    
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto">
                <div class="bg-white rounded-xl shadow-lg p-12 text-center">
                    <div class="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg class="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    
                    <h2 class="text-3xl font-bold mb-4">测试完成！</h2>
                    <p class="text-xl text-gray-600 mb-8">你的MBTI性格类型是：</p>
                    
                    <div class="text-6xl font-bold text-primary-600 mb-8">${personalityType}</div>
                    
                    <p class="text-gray-600 mb-12">每个性格类型都有其独特的优势和特点。深入了解你的性格类型可以帮助你更好地认识自己。</p>
                    
                    <div class="space-x-4">
                        <button 
                            onclick="restartTest()"
                            class="btn-primary text-lg px-8 py-3"
                        >
                            重新测试
                        </button>
                        <button 
                            onclick="window.location.href='#pricing'"
                            class="btn-secondary text-lg px-8 py-3"
                        >
                            查看详细报告
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 重新开始测试
function restartTest() {
    document.getElementById('test-container').remove();
    
    // 显示所有主页内容的 section
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
    
    // 显示页脚
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'block';
}

// 将函数导出到全局作用域
window.startTest = startTest;
window.handleAnswer = handleAnswer;
window.restartTest = restartTest;

// ... 其余代码保持不变 ... 