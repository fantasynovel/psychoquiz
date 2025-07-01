// Quiz data structure
const quizData = {
  questions: [
    {
      id: 1,
      image: "./src/assets/img_question_one.png",
      question: "你到了共居公寓，最先注意到哪個人？",
      options: [
        { id: "A", text: "主動帶動氣氛，邀請大家自我介紹", type: "熱情探索型" },
        { id: "B", text: "視線相交時，會溫柔微笑的人", type: "心靈共振型" },
        { id: "C", text: "默默幫你拉行李、安頓座位的人", type: "穩重守護型" },
        { id: "D", text: "講解環境、共居規則的人", type: "理性分析型" }
      ]
    },
    {
      id: 2,
      image: "./src/assets/img_question_two.png",
      question: "晚上共同烹飪時，他會如何表現？",
      options: [
        { id: "A", text: "主動分配每個人的工作", type: "主動領導型" },   
        { id: "B", text: "觀察你的喜好，適時提供幫助", type: "穩重守護型" }, 
        { id: "C", text: "幫大家圍圍裙，安靜細心", type: "暖心陪伴型" },  
        { id: "D", text: "一邊準備食材，講笑話緩和尷尬氣氛", type: "熱情探索型" } 
      ]
    },
    {
      id: 3,
      image: "./src/assets/img_question_three.png",
      question: "晚上閒聊時間，玩真心話大冒險，他的反應是？",
      options: [
        { id: "A", text: "選大冒險，用行動展現自己", type: "熱情探索型" }, 
        { id: "B", text: "選真心話，回答誠懇深刻", type: "心靈共振型" },   
        { id: "C", text: "低調參與，避免成為焦點", type: "穩重守護型" }, 
        { id: "D", text: "誠實回答真心話，引起歡笑與好感", type: "理性型" }
      ]
    },
    {
      id: 4,
      image: "./src/assets/img_question_four.png",
      question: "你獨自在陽台發呆，他來找你，他可能會說什麼？",
      options: [
        { id: "A", text: "「需要聊聊嗎？別獨自煩惱」", type: "暖心陪伴型" },  
        { id: "B", text: "「沒事，我坐旁邊就好，不吵你。」", type: "穩重守護型" }, 
        { id: "C", text: "「我有泡熱可可，要不要一起喝？」", type: "心靈共振型" }, 
        { id: "D", text: "「天氣變涼了，外套借給你穿嗎？」", type: "理性分析型" } 
      ]
    },
    {
      id: 5,
      image: "./src/assets/img_question_five.png",
      question: "如果有人向你表示心意，他的反應是？",
      options: [
        { id: "A", text: "立即上前表示關心", type: "主動領導型" },
        { id: "B", text: "事後詢問你的真實想法", type: "理性分析型" },
        { id: "C", text: "微笑說：「這表示你很受歡迎呢。」", type: "熱情探索型" },
        { id: "D", text: "沒說什麼，但默默送來你愛吃的點心", type: "穩重守護型" }
      ]
    },
    {
      id: 6,
      image: "./src/assets/img_question_six.png",
      question: "當你身體不適時，他的照顧方式是？",
      options: [
        { id: "A", text: "迅速帶著藥和食物，主動到你身旁關心", type: "主動領導型" },
        { id: "B", text: "備妥所需用品，避免打擾你的休息", type: "穩重守護型" },
        { id: "C", text: "不打擾你，但寫紙條關心你的狀況", type: "暖心陪伴型" },
        { id: "D", text: "送來藥品並鼓勵你：「等康復後再一起出門。」", type: "熱情探索型" }
      ]
    },
    {
      id: 7,
      image: "./src/assets/img_question_seven.png",
      question: "第一次單獨約會，他會安排什麼行程？",
      options: [
        { id: "A", text: "提前預約餐廳和交通，讓你輕鬆享受", type: "主動領導型" },
        { id: "B", text: "帶你去自己私藏的散步路線", type: "心靈共振型" },
        { id: "C", text: "詢問你的喜好，完全配合你的計劃", type: "理性分析型" },
        { id: "D", text: "邀你去有趣的主題樂園或展覽", type: "熱情探索型" }
      ]
    },
    {
      id: 8,
      image: "./src/assets/img_question_eight.png",
      question: "節目快結束了，他會對你說？",
      options: [
        { id: "A", text: "「如果你也願意，我們繼續一起走吧」", type: "主動領導型" },
        { id: "B", text: "「希望我的存在能帶給你一些安心」", type: "暖心陪伴型" },
        { id: "C", text: "「結束是另一個開始，我會等你的答案」", type: "心靈共振型" },
        { id: "D", text: "「不管結果如何，我很開心遇見你」", type: "穩重守護型" }
      ]
    }
  ],
  personalities: {
    "熱情探索型": {
      name: "熱情探索型",
      image: "./src/assets/img_player.png",
      style: "喜歡熱烈又充滿創意的戀愛體驗，尋找能共同製造精彩瞬間的夥伴。",
      match: "適合一起冒險、敢於嘗試新鮮事物並樂於分享的伴侶。",
      color: "夕陽暖橘",
      colorDots: ["#D86931", "#EE854E", "#F9B694"],
      locations: ["屋頂酒吧", "摩天輪"],
      backgroundColor: "#765F46",
      backgroundClass: "bg-romantic-adventure"
    },
    "穩重守護型": {
      name: "穩重守護型",
      image: "./src/assets/img_guardian.png",
      style: "透過實際行動表達關心與承諾，欣賞踏實可靠的伴侶。",
      match: "適合有責任感、願意用心守護彼此日常的伴侶。",
      color: "醇濃酒紅",
      colorDots: ["#8A1C31", "#9F4052", "#7C4235"],
      locations: ["廚房", "公路旅行"],
      backgroundColor: "#683529",
      backgroundClass: "bg-silent-guardian"
    },
    "暖心陪伴型": {
      name: "暖心陪伴型",
      image: "./src/assets/img_companion.png",
      style: "擅長傾聽與安撫情緒，能在脆弱時互相支持對方。",
      match: "情感細膩、願意照顧彼此心情的伴侶。",
      color: "奶油暖黃",
      colorDots: ["#E7B271", "#FFE07D", "#FFEEB7"],
      locations: ["手作教室", "動物咖啡廳"],
      backgroundColor: "#94694C", 
      backgroundClass: "bg-healing-companion"
    },
    "主動領導型": {
      name: "主動領導型",
      image: "./src/assets/img_boss.png",
      style: "欣賞充滿決斷力與保護慾的戀愛，尋求能主動表達關愛的伴侶。",
      match: "主動、敢於承擔並給予安全感的對象。",
      color: "石墨鋯灰",
      colorDots: ["#2E2E2E", "#414142", "#626270"],
      locations: ["高級餐廳", "精品飯店"],
      backgroundColor: "#464C5F",
      backgroundClass: "bg-dominant-ceo"
    },
    "理性分析型": {
      name: "理性分析型",
      image: "./src/assets/img_calm.png",
      style: "偏好理性成熟的溝通模式，希望找到能冷靜面對困難的伴侶。",
      match: "適合重視理性討論、善於調和衝突的伴侶。",
      color: "苔蘚灰綠",
      colorDots: ["#284B47", "#40746E", "#9AB7BD"],
      locations: ["美術館", "山林步道"],
      backgroundColor: "#405756",
      backgroundClass: "bg-calm-guide"
    },
    "心靈共振型": {
      name: "心靈共振型",
      image: "./src/assets/img_soul.png",
      style: "渴望有意義的交流、追求心靈的共鳴",
      match: "願意分享想法、善於傾聽與共感的伴侶",
      color: "靜謐藍",
      colorDots: ["#3A5F76", "#547A92", "#A0B5C2"],
      locations: ["獨立書店", "公園長椅"],
      backgroundColor: "#384E5C",
      backgroundClass: "bg-soul-resonance"
    }
  }
};

// Preload all question and result images
function preloadImages() {
  const imageUrls = [];

  // 預載題目圖片
  quizData.questions.forEach(q => {
    if (q.image) imageUrls.push(q.image);
  });

  // 預載結果圖片
  Object.values(quizData.personalities).forEach(p => {
    if (p.image) imageUrls.push(p.image);
  });

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

preloadImages(); 

// Quiz state management
let currentState = 'welcome'; // 'welcome', 'question', 'result'
let currentQuestion = 0;
let answers = [];
let result = null;

// DOM elements
const welcomePage = document.getElementById('welcome-page');
const questionPage = document.getElementById('question-page');
const resultPage = document.getElementById('result-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const restartBtn = document.getElementById('restart-btn');
const downloadBtn = document.getElementById('download-btn');
const shareBtn = document.getElementById('share-btn');

// Question page elements
const questionCounter = document.getElementById('question-counter');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress-bar');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Result page elements
const resultImage = document.getElementById('result-image');
const resultTitle = document.getElementById('result-title');
const resultStyle = document.getElementById('result-style');
const resultMatch = document.getElementById('result-match');
const resultColor = document.getElementById('result-color');
const colorDots = document.getElementById('color-dots');
const resultLocations = document.getElementById('result-locations');

// Initialize the quiz
function init() {
  showWelcomePage();
  bindEvents();
}

// Event bindings
function bindEvents() {
  startQuizBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', restartQuiz);
  downloadBtn.addEventListener('click', downloadImage);
  shareBtn.addEventListener('click', shareToIG);
}

// Show welcome page
function showWelcomePage() {
  currentState = 'welcome';
  welcomePage.classList.remove('hidden');
  questionPage.classList.add('hidden');
  resultPage.classList.add('hidden');
}

// Show question page
function showQuestionPage() {
  currentState = 'question';
  welcomePage.classList.add('hidden');
  questionPage.classList.remove('hidden');
  resultPage.classList.add('hidden');
  updateQuestionDisplay();
}

// Show result page
function showResultPage() {
  currentState = 'result';
  welcomePage.classList.add('hidden');
  questionPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  updateResultDisplay();
}

// Start quiz
function startQuiz() {
  currentQuestion = 0;
  answers = [];
  showQuestionPage();
}

// Update question display
function updateQuestionDisplay() {
  const question = quizData.questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / quizData.questions.length) * 100;
  
  // Update progress
  questionCounter.textContent = `題目 ${currentQuestion + 1} / 8`;
  progressPercentage.textContent = `${Math.round(progressPercent)}%`;
  progressBar.style.width = `${progressPercent}%`;
  
  // Update question content
  questionImage.src = question.image;
  questionText.textContent = question.question;
  
  // Generate options
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'w-full p-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 text-left bg-quiz-light-brown text-white hover:bg-white hover:text-quiz-brown';
    button.innerHTML = `<span class="font-bold mr-2">${option.id}</span>${option.text}`;
    button.addEventListener('click', () => selectAnswer(option.type));
    optionsContainer.appendChild(button);
  });
}

// Select answer
function selectAnswer(type) {
  answers.push({ type, questionIndex: currentQuestion });
  
  if (currentQuestion < quizData.questions.length - 1) {
    currentQuestion++;
    updateQuestionDisplay();
  } else {
    result = calculateResult(answers);
    showResultPage();
  }
}

// Calculate result based on scoring logic
function calculateResult(userAnswers) {
  const personalityScores = {};
  
  // Initialize scores
  Object.keys(quizData.personalities).forEach(type => {
    personalityScores[type] = { score: 0, firstQuestion: 999 };
  });
  
  // Calculate scores and track first occurrence
  userAnswers.forEach((answer, index) => {
    const type = answer.type;
    if (personalityScores[type]) {
      personalityScores[type].score++;
      if (personalityScores[type].firstQuestion === 999) {
        personalityScores[type].firstQuestion = answer.questionIndex;
      }
    }
  });
  
  // Find the highest score
  const maxScore = Math.max(...Object.values(personalityScores).map(p => p.score));
  
  // Get all types with the highest score
  const topTypes = Object.entries(personalityScores)
    .filter(([_, data]) => data.score === maxScore);
  
  // If there's a tie, choose the one that appeared first
  if (topTypes.length > 1) {
    const winner = topTypes.reduce((a, b) => 
      personalityScores[a[0]].firstQuestion < personalityScores[b[0]].firstQuestion ? a : b
    );
    return winner[0];
  }
  
  return topTypes[0][0];
}

// Update result display
function updateResultDisplay() {
  const personality = quizData.personalities[result];
  const resultContentSection = document.querySelector('.result-content-section');
  const resultPageContainer = document.querySelector('.result-page-container');
  const body = document.body; 
  
  // Update result content
  resultImage.src = personality.image;
  resultTitle.textContent = personality.name;
  resultStyle.textContent = personality.style;
  resultMatch.textContent = personality.match;
  resultColor.textContent = personality.color;

  if (resultContentSection) {
    resultContentSection.style.backgroundColor = personality.backgroundColor;
    document.getElementById('restart-btn').style.color = personality.backgroundColor;
  }

  if (body) {
    body.style.backgroundColor = personality.backgroundColor;
    body.classList.remove('bg-quiz-brown'); // 移除原本的背景色類別
  }

   // 設定整個結果頁面背景色
   if (resultPageContainer) {
    resultPageContainer.style.backgroundColor = personality.backgroundColor;
  }
  
  // Generate color dots
  colorDots.innerHTML = '';
  personality.colorDots.forEach(color => {
    const dot = document.createElement('div');
    dot.className = 'w-4 h-4 rounded-full border border-white/30';
    dot.style.backgroundColor = color;
    colorDots.appendChild(dot);
  });
  
  // Generate locations
  resultLocations.innerHTML = '';
  personality.locations.forEach(location => {
    const locationElement = document.createElement('p');
    locationElement.className = 'text-s font-medium flex items-center';
    locationElement.innerHTML = `<span class="w-1 h-1 bg-white rounded-full mr-2"></span>${location}`;
    resultLocations.appendChild(locationElement);
  });
}

// Restart quiz
function restartQuiz() {
  currentQuestion = 0;
  answers = [];
  result = null;
  
  // 重置背景色
  const resultContentSection = document.querySelector('.result-content-section');
  if (resultContentSection) {
    resultContentSection.style.backgroundColor = 'white';
  }

  // 重置結果頁面背景色
  const resultPageContainer = document.querySelector('.result-page-container');
  if (resultPageContainer) {
    resultPageContainer.style.backgroundColor = 'var(--quiz-brown)';
  }

  const body = document.body;
  if (body) {
    body.style.backgroundColor = ''; // 清除內聯樣式
    body.classList.add('bg-quiz-brown'); // 恢復原本的背景色類別
  }
  
  showWelcomePage();
}

// Download image
function downloadImage() {
  if (result) {
    const personality = quizData.personalities[result];
    const link = document.createElement('a');
    // 以 result 這個 key 去對應 slug，再串出正確的 src 路徑
    const slugMap = {
    "熱情探索型": "player",
     "穩重守護型": "guardian",
     "暖心陪伴型": "companion",
    "主動領導型": "boss",
     "理性分析型": "calm",
     "心靈共振型": "soulful"
    };
    const slug = slugMap[result];
    link.href = `./src/assets/Result_${slug}.png`;
    link.download = `${personality.name}.png`;
    link.click();
  }
}

// Share to Instagram
async function shareAssetImageToIG(slug, personalityName, shareText) {
  const imageUrl = `./src/assets/Result_${slug}.png`;

  // 1. 取得圖片 Blob
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const file = new File([blob], `${personalityName}.png`, { type: 'image/png' });
  const filesArray = [file];

  // 2. 分享圖片到 IG（若支援）
  if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    try {
      await navigator.share({
        title: personalityName,
        text: shareText,
        files: filesArray
      });
      return;
    } catch (err) {
      alert('分享失敗，請手動下載圖片後上傳 IG Story！');
    }
  }

  // 3. Fallback：自動下載圖片
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${personalityName}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  // 4. Fallback：複製文字
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('裝置不支援一鍵分享。\n圖片已下載，結果文字已複製，請至 IG Story 上傳並貼上文字！');
    } catch {
      alert(`裝置不支援一鍵分享。\n圖片已下載，請手動複製以下文字：\n${shareText}`);
    }
  } else {
    alert(`裝置不支援一鍵分享。\n圖片已下載，請手動複製以下文字：\n${shareText}`);
  }
}

async function shareToIG() {
  if (result) {
    const personality = quizData.personalities[result];
    const slugMap = {
      "熱情探索型": "player",
      "穩重守護型": "guardian",
      "暖心陪伴型": "companion",
      "主動領導型": "boss",
      "理性分析型": "calm",
      "心靈共振型": "soulful"
    };
    const slug = slugMap[result];
    const shareText = `我的理想情人是${personality.name}！`;

    // 確保等待分享完成後再決定是否要 fallback
    await shareAssetImageToIG(slug, personality.name, shareText);
  }
}


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);