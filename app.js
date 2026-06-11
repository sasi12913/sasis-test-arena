// SASI's Test Arena - Core Application Logic
// Integrates UPSC Command Center, Practice Arena, PYQ Portal, Mistake Notebook, Revision Planner, and Analytics

let activeTestQuestions = [];
let userAnswers = []; // Selected option ID ('A','B','C','D') or null
let questionStatus = []; // 'unvisited', 'not-answered', 'answered', 'marked', 'marked-answered'
let currentQuestionIndex = 0;
let timeRemaining = 7200; // 2 hours default
let timerInterval = null;
let testHistory = [];
let isMistakeRetestSession = false;

// Generate unique candidate profile name
const aspirantName = "Aspirant #" + Math.floor(1000 + Math.random() * 9000);

// Core Screens & Panels
const resultsScreen = document.getElementById('resultsScreen');
const examConsoleWorkspace = document.getElementById('examConsoleWorkspace');
const testSetupPanel = document.getElementById('testSetupPanel');

// Exam navigation elements
const activeQuestionSubject = document.getElementById('activeQuestionSubject');
const activeQuestionTopic = document.getElementById('activeQuestionTopic');
const activeQuestionSubtopic = document.getElementById('activeQuestionSubtopic');
const activeQuestionNumber = document.getElementById('activeQuestionNumber');
const activeQuestionText = document.getElementById('activeQuestionText');
const activeQuestionStatementsList = document.getElementById('activeQuestionStatementsList');
const statementsSelectionText = document.getElementById('statementsSelectionText');
const optionsContainer = document.getElementById('optionsContainer');

const btnMarkReview = document.getElementById('btnMarkReview');
const btnClearResponse = document.getElementById('btnClearResponse');
const btnPrevQuestion = document.getElementById('btnPrevQuestion');
const btnSaveNext = document.getElementById('btnSaveNext');
const btnSubmitTest = document.getElementById('btnSubmitTest');
const examTimer = document.getElementById('examTimer');
const paletteGrid = document.getElementById('paletteGrid');

const btnDownloadPDF = document.getElementById('btnDownloadPDF');
const btnResultsBackHome = document.getElementById('btnResultsBackHome');

// Initialize Platform on Load
window.addEventListener('DOMContentLoaded', () => {
  // Set Aspirant Name in top profile bar
  document.getElementById('aspirantName').innerText = aspirantName;
  
  // Load History from LocalStorage
  loadHistory();
  
  // Setup Theme Toggle & bind chart color updates
  initTheme();
  
  // Setup navigation tabs
  initTabs();
  
  // Setup test configurator triggers
  initTestConfigurator();
  
  // Load dashboard metrics
  updateCommandCenterStats();
  
  // Event Listeners for active exam actions
  btnPrevQuestion.addEventListener('click', navigatePrevious);
  btnSaveNext.addEventListener('click', saveAndNavigateNext);
  btnMarkReview.addEventListener('click', markForReview);
  btnClearResponse.addEventListener('click', clearResponse);
  btnSubmitTest.addEventListener('click', () => {
    if (confirm("Are you sure you want to submit your mock test? This will finalize your responses and calculate your score.")) {
      submitTest();
    }
  });
  
  if (btnResultsBackHome) {
    btnResultsBackHome.addEventListener('click', () => {
      switchScreen(null); // Returns to dashboard
    });
  }
  
  if (btnDownloadPDF) {
    btnDownloadPDF.addEventListener('click', generatePDFReport);
  }
  
  // Setup extra dashboard action launchers
  setupDashboardActions();
});

// Light / Dark Theme Management
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (e) {
    console.warn("localStorage is not accessible for theme preferences.");
  }
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-theme');
    toggleBtn.innerHTML = "☀️";
  } else {
    toggleBtn.innerHTML = "🌙";
  }
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      console.warn("localStorage is not accessible to write theme preferences.");
    }
    toggleBtn.innerHTML = isDark ? "☀️" : "🌙";
    
    // Refresh trend charts to update text colors on theme change
    const analyticsTab = document.getElementById('tabAnalytics');
    if (analyticsTab && analyticsTab.classList.contains('active')) {
      renderTrendCharts();
    }
  });
}

// Navigation Tabs Manager
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Prevent switching tabs if in an active test
      if (!examConsoleWorkspace.classList.contains('hidden')) {
        if (!confirm("An exam session is currently active. Switching tabs will abandon your progress. Are you sure you want to leave?")) {
          return;
        } else {
          clearActiveSession();
          if (timerInterval) clearInterval(timerInterval);
          examConsoleWorkspace.classList.add('hidden');
          testSetupPanel.classList.remove('hidden');
        }
      }
      
      const targetId = tab.getAttribute('data-tab');
      
      // Deactivate all tabs and panels
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      if (resultsScreen) resultsScreen.classList.remove('active');
      
      // Activate clicked tab
      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
      
      // Show tab navigation bar in case it was hidden
      document.querySelector('.ecosystem-nav').style.display = 'flex';
      
      // Render tab-specific dynamic elements
      if (targetId === 'tabCommandCenter') {
        updateCommandCenterStats();
      } else if (targetId === 'tabPYQPortal') {
        renderPYQLibrary();
      } else if (targetId === 'tabMistakes') {
        renderMistakesList();
      } else if (targetId === 'tabRevision') {
        const savedPlan = localStorage.getItem('upsc_active_revision_plan_days');
        if (savedPlan) {
          generateRevisionTimeline(savedPlan);
        } else {
          document.getElementById('activeRevisionPlanWrapper').classList.add('hidden');
          document.querySelectorAll('.revision-plan-card').forEach(c => c.classList.remove('active-plan'));
        }
      } else if (targetId === 'tabAnalytics') {
        renderTopicMasteryMatrix();
        renderTrendCharts();
      } else if (targetId === 'tabLeaderboard') {
        renderLeaderboard();
      }
    });
  });
}

// Switch Screens helper
function switchScreen(targetScreen) {
  const nav = document.querySelector('.ecosystem-nav');
  
  if (targetScreen === resultsScreen) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    if (nav) nav.style.display = 'none';
    if (resultsScreen) resultsScreen.classList.add('active');
  } else if (targetScreen === examConsoleWorkspace) {
    if (resultsScreen) resultsScreen.classList.remove('active');
    if (testSetupPanel) testSetupPanel.classList.add('hidden');
    if (examConsoleWorkspace) examConsoleWorkspace.classList.remove('hidden');
    if (nav) nav.style.display = 'none';
    
    // Set practice arena tab button active
    document.querySelectorAll('.nav-tab').forEach(t => {
      if (t.getAttribute('data-tab') === 'tabPracticeArena') t.classList.add('active');
      else t.classList.remove('active');
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      if (p.id === 'tabPracticeArena') p.classList.add('active');
      else p.classList.remove('active');
    });
  } else {
    // Return to dashboard
    if (resultsScreen) resultsScreen.classList.remove('active');
    if (examConsoleWorkspace) examConsoleWorkspace.classList.add('hidden');
    if (testSetupPanel) testSetupPanel.classList.remove('hidden');
    if (nav) nav.style.display = 'flex';
    
    const ccTab = document.querySelector('.nav-tab[data-tab="tabCommandCenter"]');
    if (ccTab) ccTab.click();
  }
  window.scrollTo(0, 0);
}

// Load and Save History
function loadHistory() {
  try {
    const historyData = localStorage.getItem('upsc_test_history');
    if (historyData) {
      testHistory = JSON.parse(historyData);
    }
  } catch (e) {
    console.warn("localStorage is not accessible. mock history runs in-memory.");
  }
}

function saveHistory(session) {
  testHistory.unshift(session);
  try {
    localStorage.setItem('upsc_test_history', JSON.stringify(testHistory));
  } catch (e) {
    console.warn("localStorage is not accessible. results will not persist.");
  }
}

// Dashboard metric launchers
function setupDashboardActions() {
  const btnContinuePrep = document.getElementById('btnContinuePrep');
  if (btnContinuePrep) {
    // Show resume text if session exists
    const activeSession = localStorage.getItem('upsc_active_session');
    if (activeSession) {
      btnContinuePrep.innerText = "Resume Ongoing Mock Test ➔";
    } else {
      btnContinuePrep.innerText = "Continue Daily Practice ➔";
    }
    
    btnContinuePrep.addEventListener('click', () => {
      const restored = restoreActiveSession();
      if (!restored) {
        isMistakeRetestSession = false;
        initializeTest("Mixed", "UPSC", 20);
      }
    });
  }
  
  const btnStartDailyChallenge = document.getElementById('btnStartDailyChallenge');
  if (btnStartDailyChallenge) {
    btnStartDailyChallenge.addEventListener('click', () => {
      isMistakeRetestSession = false;
      initializeTest("Mixed", "UPSC", 5);
    });
  }
  
  const btnStartWeeklyGrand = document.getElementById('btnStartWeeklyGrand');
  if (btnStartWeeklyGrand) {
    btnStartWeeklyGrand.addEventListener('click', () => {
      isMistakeRetestSession = false;
      initializeTest("Full Length", "UPSC", 50);
    });
  }
  
  // Set goal target configuration click trigger
  const goalTargetCountEl = document.getElementById('goalTargetCount');
  if (goalTargetCountEl) {
    const goalCard = goalTargetCountEl.closest('.command-card');
    if (goalCard) {
      goalCard.style.cursor = 'pointer';
      goalCard.title = "Click to set daily target count";
      goalCard.addEventListener('click', () => {
        const curTarget = goalTargetCountEl.innerText;
        const input = prompt("Set your daily question target:", curTarget);
        if (input) {
          const val = parseInt(input);
          if (!isNaN(val) && val > 0) {
            localStorage.setItem('upsc_daily_goal_target', val);
            updateCommandCenterStats();
          } else {
            alert("Please enter a valid positive number.");
          }
        }
      });
    }
  }
}

// Test setup configurator bindings
function initTestConfigurator() {
  const selectSubject = document.getElementById('selectSubject');
  const selectQuestionCount = document.getElementById('selectQuestionCount');
  const customCountWrapper = document.getElementById('customCountWrapper');
  const inputCustomCount = document.getElementById('inputCustomCount');
  const btnStartConfiguredTest = document.getElementById('btnStartConfiguredTest');
  
  const difficultyRadios = document.querySelectorAll('input[name="selectDifficulty"]');
  difficultyRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-card').forEach(card => card.classList.remove('selected'));
      radio.closest('.radio-card').classList.add('selected');
    });
  });
  
  if (selectQuestionCount) {
    selectQuestionCount.addEventListener('change', () => {
      if (selectQuestionCount.value === 'custom') {
        customCountWrapper.classList.remove('hidden');
      } else {
        customCountWrapper.classList.add('hidden');
      }
    });
  }
  
  if (btnStartConfiguredTest) {
    btnStartConfiguredTest.addEventListener('click', () => {
      const subject = selectSubject.value;
      
      let difficulty = "Standard";
      difficultyRadios.forEach(radio => {
        if (radio.checked) {
          difficulty = radio.value;
        }
      });
      
      let count = 20;
      if (selectQuestionCount.value === 'custom') {
        count = parseInt(inputCustomCount.value);
        if (isNaN(count) || count < 1 || count > 150) {
          alert("Please enter a valid custom question count between 1 and 150.");
          return;
        }
      } else {
        count = parseInt(selectQuestionCount.value);
      }
      
      isMistakeRetestSession = false;
      initializeTest(subject, difficulty, count);
    });
  }
}

// Subject matcher helper
function subjectMatches(qSubject, targetSubject) {
  const qSub = qSubject.toLowerCase();
  const tarSub = targetSubject.toLowerCase();
  if (tarSub === 'mixed') {
    return qSub !== 'science'; // mixed covers static core (excluding Science & Tech)
  }
  if (tarSub === 'full length') {
    return true; // all subjects
  }
  if (tarSub === 'polity') return qSub.includes('polity');
  if (tarSub === 'economy') return qSub.includes('economy');
  if (tarSub === 'geography') return qSub.includes('geography');
  if (tarSub === 'environment') return qSub.includes('environ');
  if (tarSub === 'history') return qSub.includes('history');
  if (tarSub === 'science') return qSub.includes('science');
  return false;
}

// Flexible question compiler
function generateTestPaperFlexible(subject, difficulty, count) {
  const pool = window.UPSC_QUESTION_BANK || [];
  const pyqPool = window.UPSC_PYQ_BANK || [];
  const ontologyPool = window.UPSC_CONCEPT_ONTOLOGY || [];
  
  // Filter static bank and PYQs matching subject and difficulty
  const matchingStatic = pool.filter(q => subjectMatches(q.subject, subject) && q.difficulty === difficulty);
  const matchingPyqs = pyqPool.filter(q => subjectMatches(q.subject, subject));
  const matchingOntology = ontologyPool.filter(n => subjectMatches(n.subject, subject));
  
  const selected = [];
  
  // 1. Static base questions (up to 40% of target count)
  const shuffledStatic = [...matchingStatic].sort(() => 0.5 - Math.random());
  const staticCount = Math.min(shuffledStatic.length, Math.floor(count * 0.4));
  for (let i = 0; i < staticCount; i++) {
    selected.push(shuffledStatic[i]);
  }
  
  // 2. PYQ questions (up to 20% of target count)
  const shuffledPyqs = [...matchingPyqs].sort(() => 0.5 - Math.random());
  const pyqCount = Math.min(shuffledPyqs.length, Math.floor(count * 0.2));
  for (let i = 0; i < pyqCount; i++) {
    selected.push(shuffledPyqs[i]);
  }
  
  // 3. AI Generated questions (fill the remainder)
  const remaining = count - selected.length;
  let tempOntology = [...matchingOntology];
  if (tempOntology.length === 0) {
    tempOntology = [...ontologyPool]; // Fallback to any node if subject mismatch
  }
  
  for (let i = 0; i < remaining; i++) {
    const generated = generateAIQuestion(subject, difficulty, tempOntology);
    selected.push(generated);
    
    // Remove selected node to prevent immediate repetition
    const primaryId = generated.id.split('_')[3];
    tempOntology = tempOntology.filter(n => n.id !== primaryId);
    if (tempOntology.length === 0) {
      tempOntology = [...ontologyPool];
    }
  }
  
  // Shuffle option positions for static/pyqs direct questions
  selected.forEach((q, idx) => {
    if ((q.sourceType === "Static Bank" || q.sourceType === "UPSC PYQ") && (!q.statements || q.statements.length === 0)) {
      let optionsCopy = [...q.options];
      const correctOpt = q.options.find(o => o.id === q.correctAnswer);
      const correctText = correctOpt ? correctOpt.text : "";
      
      optionsCopy.sort(() => 0.5 - Math.random());
      
      let finalOptions = [];
      let newCorrect = "A";
      const letters = ["A", "B", "C", "D"];
      
      optionsCopy.forEach((opt, oIdx) => {
        const letter = letters[oIdx];
        if (opt.text === correctText) {
          newCorrect = letter;
        }
        finalOptions.push({ id: letter, text: opt.text });
      });
      
      selected[idx].options = finalOptions;
      selected[idx].correctAnswer = newCorrect;
    }
  });
  
  return selected.sort(() => 0.5 - Math.random());
}

// AI Dynamic Question Builder
function generateAIQuestion(subject, difficulty, ontologyPool) {
  let type = "Statement-based";
  let numStatements = 3;
  const rand = Math.random();
  if (rand < 0.2) {
    numStatements = 1;
    type = "Conceptual Application";
  } else if (rand < 0.6) {
    numStatements = 2;
  }
  
  // Shuffle ontology nodes
  const nodes = [...ontologyPool].sort(() => 0.5 - Math.random());
  if (nodes.length < numStatements) {
    numStatements = nodes.length;
  }
  
  if (numStatements === 3) {
    const n1 = nodes[0];
    const n2 = nodes[1];
    const n3 = nodes[2];
    
    const s1True = Math.random() > 0.5;
    const s2True = Math.random() > 0.5;
    const s3True = Math.random() > 0.5;
    
    const s1 = s1True ? n1.statementTrue : n1.statementFalse;
    const s2 = s2True ? n2.statementTrue : n2.statementFalse;
    const s3 = s3True ? n3.statementTrue : n3.statementFalse;
    
    const s1Exp = s1True ? n1.explanationTrue : n1.explanationFalse;
    const s2Exp = s2True ? n2.explanationTrue : n2.explanationFalse;
    const s3Exp = s3True ? n3.explanationTrue : n3.explanationFalse;
    
    const trueStates = [s1True, s2True, s3True];
    const isNewStyle = Math.random() > 0.5;
    let options = [];
    let correctAnswer = "A";
    
    if (isNewStyle) {
      options = [
        { id: "A", text: "Only one of the statements is correct" },
        { id: "B", text: "Only two of the statements are correct" },
        { id: "C", text: "All three of the statements are correct" },
        { id: "D", text: "None of the statements are correct" }
      ];
      const correctCount = trueStates.filter(x => x).length;
      if (correctCount === 1) correctAnswer = "A";
      else if (correctCount === 2) correctAnswer = "B";
      else if (correctCount === 3) correctAnswer = "C";
      else correctAnswer = "D";
    } else {
      // Classic combinations
      if (s1True && s2True && !s3True) {
        options = [
          { id: "A", text: "1 and 2 only" }, { id: "B", text: "2 and 3 only" },
          { id: "C", text: "1 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "A";
      } else if (!s1True && s2True && s3True) {
        options = [
          { id: "A", text: "1 and 2 only" }, { id: "B", text: "2 and 3 only" },
          { id: "C", text: "1 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "B";
      } else if (s1True && !s2True && s3True) {
        options = [
          { id: "A", text: "1 and 2 only" }, { id: "B", text: "2 and 3 only" },
          { id: "C", text: "1 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "C";
      } else if (s1True && s2True && s3True) {
        options = [
          { id: "A", text: "1 and 2 only" }, { id: "B", text: "2 and 3 only" },
          { id: "C", text: "1 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "D";
      } else if (s1True && !s2True && !s3True) {
        options = [
          { id: "A", text: "1 only" }, { id: "B", text: "2 only" },
          { id: "C", text: "1 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "A";
      } else if (!s1True && s2True && !s3True) {
        options = [
          { id: "A", text: "1 only" }, { id: "B", text: "2 only" },
          { id: "C", text: "2 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "B";
      } else if (!s1True && !s2True && s3True) {
        options = [
          { id: "A", text: "1 only" }, { id: "B", text: "3 only" },
          { id: "C", text: "2 and 3 only" }, { id: "D", text: "1, 2 and 3" }
        ];
        correctAnswer = "B";
      } else {
        options = [
          { id: "A", text: "1 and 2 only" }, { id: "B", text: "2 and 3 only" },
          { id: "C", text: "1, 2 and 3" }, { id: "D", text: "Neither 1, 2 nor 3" }
        ];
        correctAnswer = "D";
      }
    }
    
    return {
      id: "AI_GEN_3_" + n1.id + "_" + Math.floor(Math.random() * 100000),
      subject: n1.subject,
      topic: n1.topic,
      subtopic: n1.subtopic,
      type: "Statement-based",
      difficulty: difficulty,
      sourceType: "AI Generated",
      question: `Consider the following statements regarding ${n1.topic}:`,
      statements: [s1, s2, s3],
      options: options,
      correctAnswer: correctAnswer,
      explanation: `Statement 1 is ${s1True ? 'correct' : 'incorrect'}: ${s1Exp} Statement 2 is ${s2True ? 'correct' : 'incorrect'}: ${s2Exp} Statement 3 is ${s3True ? 'correct' : 'incorrect'}: ${s3Exp}`
    };
  } else if (numStatements === 2) {
    const n1 = nodes[0];
    const n2 = nodes[1];
    
    const s1True = Math.random() > 0.5;
    const s2True = Math.random() > 0.5;
    
    const s1 = s1True ? n1.statementTrue : n1.statementFalse;
    const s2 = s2True ? n2.statementTrue : n2.statementFalse;
    
    const s1Exp = s1True ? n1.explanationTrue : n1.explanationFalse;
    const s2Exp = s2True ? n2.explanationTrue : n2.explanationFalse;
    
    const options = [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ];
    let correctAnswer = "A";
    if (s1True && !s2True) correctAnswer = "A";
    else if (!s1True && s2True) correctAnswer = "B";
    else if (s1True && s2True) correctAnswer = "C";
    else correctAnswer = "D";
    
    return {
      id: "AI_GEN_2_" + n1.id + "_" + Math.floor(Math.random() * 100000),
      subject: n1.subject,
      topic: n1.topic,
      subtopic: n1.subtopic,
      type: "Statement-based",
      difficulty: difficulty,
      sourceType: "AI Generated",
      question: `Consider the following statements regarding ${n1.topic}:`,
      statements: [s1, s2],
      options: options,
      correctAnswer: correctAnswer,
      explanation: `Statement 1 is ${s1True ? 'correct' : 'incorrect'}: ${s1Exp} Statement 2 is ${s2True ? 'correct' : 'incorrect'}: ${s2Exp}`
    };
  } else {
    // 1 Statement conceptual distractor matching
    const n1 = nodes[0];
    const s1True = Math.random() > 0.5;
    const targetStatement = s1True ? n1.statementTrue : n1.statementFalse;
    const targetExp = s1True ? n1.explanationTrue : n1.explanationFalse;
    
    let distractors = [];
    const otherNodes = ontologyPool.filter(n => n.id !== n1.id).sort(() => 0.5 - Math.random());
    for (let i = 0; i < otherNodes.length && distractors.length < 3; i++) {
      distractors.push(otherNodes[i].statementFalse);
    }
    while (distractors.length < 3) {
      distractors.push("None of the above statements represents a conceptually valid UPSC standard.");
    }
    
    const choices = [
      { text: targetStatement, isCorrect: true },
      { text: distractors[0], isCorrect: false },
      { text: distractors[1], isCorrect: false },
      { text: distractors[2], isCorrect: false }
    ].sort(() => 0.5 - Math.random());
    
    const letters = ["A", "B", "C", "D"];
    let correctAnswer = "A";
    const options = choices.map((c, idx) => {
      const letter = letters[idx];
      if (c.isCorrect) correctAnswer = letter;
      return { id: letter, text: c.text };
    });
    
    return {
      id: "AI_GEN_1_" + n1.id + "_" + Math.floor(Math.random() * 100000),
      subject: n1.subject,
      topic: n1.topic,
      subtopic: n1.subtopic,
      type: "Conceptual Application",
      difficulty: difficulty,
      sourceType: "AI Generated",
      question: s1True ? `Which of the following represents a conceptually valid statement regarding ${n1.topic}?` : `Which of the following represents an incorrect proposition or conceptual misconception regarding ${n1.topic}?`,
      statements: [],
      options: options,
      correctAnswer: correctAnswer,
      explanation: `The correct option is ${correctAnswer}. ${targetExp}`
    };
  }
}

// Initialize Active Mock Test
function initializeTest(subject, difficulty, count) {
  activeTestQuestions = generateTestPaperFlexible(subject, difficulty, count);
  userAnswers = new Array(activeTestQuestions.length).fill(null);
  questionStatus = new Array(activeTestQuestions.length).fill('unvisited');
  currentQuestionIndex = 0;
  
  // Set time limits: 120s per question
  timeRemaining = activeTestQuestions.length * 120;
  questionStatus[0] = 'not-answered';
  
  // Toggle screens
  switchScreen(examConsoleWorkspace);
  
  renderPalette();
  displayQuestion(0);
  startTimer();
  
  showToast(`UPSC Arena initialized: ${count} questions of ${subject} (${difficulty} level). Go!`, "info");
}

// Timer clock manager
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  
  const totalLimit = activeTestQuestions.length * 120;
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Your responses will now be automatically evaluated.");
      submitTest();
      return;
    }
    
    // Format Display
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    
    const formattedTime = 
      String(hours).padStart(2, '0') + ':' + 
      String(minutes).padStart(2, '0') + ':' + 
      String(seconds).padStart(2, '0');
      
    examTimer.innerText = formattedTime;
    
    // Add pulsing warning if under 15% remaining time
    const threshold = Math.max(300, Math.floor(totalLimit * 0.15));
    if (timeRemaining <= threshold) {
      examTimer.classList.add('timer-warning');
    } else {
      examTimer.classList.remove('timer-warning');
    }
  }, 1000);
}

// Palette rendering
function renderPalette() {
  paletteGrid.innerHTML = '';
  const total = activeTestQuestions.length;
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.className = `palette-btn ${questionStatus[i]}`;
    if (i === currentQuestionIndex) {
      btn.classList.add('active');
    }
    btn.innerText = i + 1;
    btn.addEventListener('click', () => {
      updateCurrentIndexStatusBeforeMove();
      currentQuestionIndex = i;
      if (questionStatus[currentQuestionIndex] === 'unvisited') {
        questionStatus[currentQuestionIndex] = 'not-answered';
      }
      displayQuestion(currentQuestionIndex);
      renderPalette();
      saveActiveSession();
    });
    paletteGrid.appendChild(btn);
  }
}

function updateCurrentIndexStatusBeforeMove() {
  const currentAnswer = userAnswers[currentQuestionIndex];
  const currentStatus = questionStatus[currentQuestionIndex];
  
  if (currentStatus === 'marked' || currentStatus === 'marked-answered') {
    questionStatus[currentQuestionIndex] = currentAnswer ? 'marked-answered' : 'marked';
  } else {
    questionStatus[currentQuestionIndex] = currentAnswer ? 'answered' : 'not-answered';
  }
}

// Question renderer
function displayQuestion(index) {
  const q = activeTestQuestions[index];
  
  activeQuestionSubject.innerText = q.subject;
  activeQuestionTopic.innerText = q.topic;
  activeQuestionNumber.innerText = `Question ${index + 1} of ${activeTestQuestions.length}`;
  activeQuestionText.innerText = q.question;
  
  // Set subtopic badge
  if (q.subtopic) {
    activeQuestionSubtopic.innerText = q.subtopic;
    activeQuestionSubtopic.style.display = 'inline-block';
  } else {
    activeQuestionSubtopic.style.display = 'none';
  }
  
  // Render Statements
  if (q.statements && q.statements.length > 0) {
    activeQuestionStatementsList.classList.remove('hidden');
    statementsSelectionText.classList.remove('hidden');
    activeQuestionStatementsList.innerHTML = '';
    
    q.statements.forEach(stmt => {
      const li = document.createElement('li');
      li.innerText = stmt;
      activeQuestionStatementsList.appendChild(li);
    });
  } else {
    activeQuestionStatementsList.classList.add('hidden');
    statementsSelectionText.classList.add('hidden');
  }
  
  // Render options list
  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const label = document.createElement('label');
    const isSelected = userAnswers[index] === opt.id;
    label.className = `option-item ${isSelected ? 'selected' : ''}`;
    
    label.innerHTML = `
      <input type="radio" name="upsc_option" value="${opt.id}" class="option-radio" ${isSelected ? 'checked' : ''}>
      <span class="option-prefix">${opt.id}.</span>
      <span class="option-text">${opt.text}</span>
    `;
    
    const radio = label.querySelector('input');
    radio.addEventListener('change', () => {
      selectOption(opt.id);
      document.querySelectorAll('.option-item').forEach(item => item.classList.remove('selected'));
      label.classList.add('selected');
    });
    
    optionsContainer.appendChild(label);
  });
  
  btnPrevQuestion.disabled = index === 0;
  
  if (index === activeTestQuestions.length - 1) {
    btnSaveNext.innerText = "Complete Exam ➔";
  } else {
    btnSaveNext.innerText = "Save & Next ▶";
  }
}

// Option selector
function selectOption(optId) {
  userAnswers[currentQuestionIndex] = optId;
  const curStatus = questionStatus[currentQuestionIndex];
  if (curStatus === 'marked' || curStatus === 'marked-answered') {
    questionStatus[currentQuestionIndex] = 'marked-answered';
  } else {
    questionStatus[currentQuestionIndex] = 'answered';
  }
  renderPalette();
  saveActiveSession();
}

// Navigation Controls
function navigatePrevious() {
  if (currentQuestionIndex > 0) {
    updateCurrentIndexStatusBeforeMove();
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
    renderPalette();
    saveActiveSession();
  }
}

function saveAndNavigateNext() {
  updateCurrentIndexStatusBeforeMove();
  
  if (currentQuestionIndex < activeTestQuestions.length - 1) {
    currentQuestionIndex++;
    if (questionStatus[currentQuestionIndex] === 'unvisited') {
      questionStatus[currentQuestionIndex] = 'not-answered';
    }
    displayQuestion(currentQuestionIndex);
    renderPalette();
    saveActiveSession();
  } else {
    if (confirm("You have reached the final question. Would you like to submit your exam?")) {
      submitTest();
    }
  }
}

function markForReview() {
  const currentAnswer = userAnswers[currentQuestionIndex];
  questionStatus[currentQuestionIndex] = currentAnswer ? 'marked-answered' : 'marked';
  renderPalette();
  
  if (currentQuestionIndex < activeTestQuestions.length - 1) {
    currentQuestionIndex++;
    if (questionStatus[currentQuestionIndex] === 'unvisited') {
      questionStatus[currentQuestionIndex] = 'not-answered';
    }
    displayQuestion(currentQuestionIndex);
    renderPalette();
  }
  saveActiveSession();
}

function clearResponse() {
  userAnswers[currentQuestionIndex] = null;
  const curStatus = questionStatus[currentQuestionIndex];
  if (curStatus === 'marked-answered' || curStatus === 'marked') {
    questionStatus[currentQuestionIndex] = 'marked';
  } else {
    questionStatus[currentQuestionIndex] = 'not-answered';
  }
  
  document.querySelectorAll('input[name="upsc_option"]').forEach(r => r.checked = false);
  document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
  renderPalette();
  saveActiveSession();
}

let autoSaveTimeout = null;
function triggerAutoSaveIndicator() {
  const indicator = document.getElementById('autoSaveIndicator');
  if (!indicator) return;
  indicator.innerHTML = '● Saving...';
  indicator.style.color = 'var(--accent-gold)';
  
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    indicator.innerHTML = '● Auto-saved';
    indicator.style.color = 'var(--color-answered)'; // #10b981
  }, 800);
}

// Session Recovery (Auto-Save)
function saveActiveSession() {
  if (activeTestQuestions.length === 0) return;
  const sessionState = {
    activeTestQuestions,
    userAnswers,
    questionStatus,
    currentQuestionIndex,
    timeRemaining,
    isMistakeRetestSession
  };
  try {
    localStorage.setItem('upsc_active_session', JSON.stringify(sessionState));
    
    triggerAutoSaveIndicator();
    
    // Update continue badge text
    const btnContinuePrep = document.getElementById('btnContinuePrep');
    if (btnContinuePrep) {
      btnContinuePrep.innerText = "Resume Ongoing Mock Test ➔";
    }
  } catch(e){}
}

function restoreActiveSession() {
  const saved = localStorage.getItem('upsc_active_session');
  if (!saved) return false;
  try {
    const sessionState = JSON.parse(saved);
    if (!sessionState || !Array.isArray(sessionState.activeTestQuestions) || sessionState.activeTestQuestions.length === 0) {
      throw new Error("Invalid or empty active session structure");
    }
    
    activeTestQuestions = sessionState.activeTestQuestions;
    userAnswers = sessionState.userAnswers;
    questionStatus = sessionState.questionStatus;
    currentQuestionIndex = sessionState.currentQuestionIndex;
    timeRemaining = sessionState.timeRemaining;
    isMistakeRetestSession = sessionState.isMistakeRetestSession || false;
    
    renderPalette();
    displayQuestion(currentQuestionIndex);
    startTimer();
    switchScreen(examConsoleWorkspace);
    
    showToast("Active mock test session restored successfully!", "success");
    return true;
  } catch (e) {
    console.error("Failed to restore active session, clearing state:", e);
    clearActiveSession();
    return false;
  }
}

function clearActiveSession() {
  try {
    localStorage.removeItem('upsc_active_session');
    
    const btnContinuePrep = document.getElementById('btnContinuePrep');
    if (btnContinuePrep) {
      btnContinuePrep.innerText = "Continue Daily Practice ➔";
    }
  } catch(e){}
}

// Submit mock test & score calculations
function submitTest() {
  if (timerInterval) clearInterval(timerInterval);
  updateCurrentIndexStatusBeforeMove();
  
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  
  // Initialize subject tracking scores
  const subjectScores = {
    "Polity": { correct: 0, incorrect: 0, total: 0 },
    "Economy": { correct: 0, incorrect: 0, total: 0 },
    "Geography": { correct: 0, incorrect: 0, total: 0 },
    "Environment & Ecology": { correct: 0, incorrect: 0, total: 0 },
    "History & Culture": { correct: 0, incorrect: 0, total: 0 },
    "Science & Technology": { correct: 0, incorrect: 0, total: 0 }
  };
  
  const conceptScores = {};
  
  activeTestQuestions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const sub = q.subject;
    
    // Normalize subject key
    let targetSub = "Polity";
    if (sub.includes("Polity")) targetSub = "Polity";
    else if (sub.includes("Economy")) targetSub = "Economy";
    else if (sub.includes("Geography")) targetSub = "Geography";
    else if (sub.includes("Environment")) targetSub = "Environment & Ecology";
    else if (sub.includes("History")) targetSub = "History & Culture";
    else if (sub.includes("Science")) targetSub = "Science & Technology";
    
    if (subjectScores[targetSub]) {
      subjectScores[targetSub].total++;
    }
    
    if (!conceptScores[q.topic]) {
      conceptScores[q.topic] = { correct: 0, total: 0 };
    }
    conceptScores[q.topic].total++;
    
    if (userAns === null) {
      unattemptedCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
      conceptScores[q.topic].correct++;
      if (subjectScores[targetSub]) subjectScores[targetSub].correct++;
    } else {
      incorrectCount++;
      if (subjectScores[targetSub]) subjectScores[targetSub].incorrect++;
    }
  });
  
  // Calculate scaled scores out of 100
  const baseRaw = (correctCount * 2.0) - (incorrectCount * 0.66);
  const maxRaw = activeTestQuestions.length * 2.0;
  const rawScore = maxRaw > 0 ? (baseRaw / maxRaw) * 100 : 0;
  
  const attemptsCount = correctCount + incorrectCount;
  const attemptPercentage = Math.round((attemptsCount / activeTestQuestions.length) * 100);
  const accuracyPercentage = attemptsCount > 0 ? Math.round((correctCount / attemptsCount) * 100) : 0;
  
  const readinessScore = Math.max(0, Math.min(100, Math.round(rawScore)));
  
  let readinessStage = "Beginner";
  if (readinessScore >= 86) readinessStage = "UPSC Ready";
  else if (readinessScore >= 71) readinessStage = "Serious Contender";
  else if (readinessScore >= 51) readinessStage = "Competitive Aspirant";
  else if (readinessScore >= 31) readinessStage = "Foundation Stage";
  
  let predictedAIR = "AIR 1000+";
  if (rawScore >= 75) predictedAIR = "AIR 1–50";
  else if (rawScore >= 60) predictedAIR = "AIR 50–200";
  else if (rawScore >= 50) predictedAIR = "AIR 200–500";
  else if (rawScore >= 38) predictedAIR = "AIR 500–1000";
  
  // Sort concepts
  const strongConcepts = [];
  const moderateConcepts = [];
  const weakConcepts = [];
  
  Object.keys(conceptScores).forEach(topic => {
    const acc = (conceptScores[topic].correct / conceptScores[topic].total) * 100;
    if (acc >= 75) strongConcepts.push(topic);
    else if (acc >= 40) moderateConcepts.push(topic);
    else weakConcepts.push(topic);
  });
  
  if (weakConcepts.length === 0 && attemptsCount < activeTestQuestions.length) {
    weakConcepts.push("Logical Elimination");
  }
  
  const topRevisionTopics = [...weakConcepts, ...moderateConcepts].slice(0, 5);
  if (topRevisionTopics.length < 3) {
    topRevisionTopics.push("Constitutional Amendments", "Fiscal Deficits", "Biotechnology application");
  }
  
  const aiReport = generateAIMentorReport(rawScore, accuracyPercentage, attemptsCount, subjectScores);
  
  const sessionData = {
    timestamp: Date.now(),
    rawScore: rawScore,
    attemptsCount: attemptsCount,
    attemptPercentage: attemptPercentage,
    accuracyPercentage: accuracyPercentage,
    readinessScore: readinessScore,
    readinessStage: readinessStage,
    predictedAIR: predictedAIR,
    subjectScores: subjectScores,
    strongConcepts: strongConcepts,
    moderateConcepts: moderateConcepts,
    weakConcepts: weakConcepts,
    topRevisionTopics: topRevisionTopics,
    aiReport: aiReport,
    questions: activeTestQuestions,
    userAnswers: userAnswers
  };
  
  // Save to history list
  saveHistory(sessionData);
  
  // Increment daily goal completed count
  incrementDailyGoalCount(activeTestQuestions.length);
  
  // Save to topic mastery progress
  updateTopicMastery(activeTestQuestions, userAnswers);
  
  // Process Mistake Notebook loops
  if (isMistakeRetestSession) {
    // Retest session: correct answers are removed from mistake notebook
    activeTestQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        removeMistakeSilent(q.id);
      }
    });
    alert("Mistake Retest completed! Any correct answers have been removed from your Mistake Notebook.");
    isMistakeRetestSession = false;
  } else {
    // Standard mock test: incorrect answers are logged
    activeTestQuestions.forEach((q, idx) => {
      const uAns = userAnswers[idx];
      if (uAns !== null && uAns !== q.correctAnswer) {
        addMistake(q, uAns);
      }
    });
  }
  
  // Clear Active mock sessions
  clearActiveSession();
  
  // Load diagnostics metrics and render results layout
  renderDiagnostics(sessionData);
  switchScreen(resultsScreen);
  updateCommandCenterStats();
  
  // Interactive submit celebrations
  showToast("Exam Sheet evaluated. Report compiled!", "success");
  if (readinessScore >= 50) {
    let badgeName = "UPSC Aspirant";
    if (readinessScore >= 86) badgeName = "District Magistrate 🥇";
    else if (readinessScore >= 71) badgeName = "Sub-Divisional Magistrate 🥈";
    else if (readinessScore >= 51) badgeName = "Tehsildar 🥉";
    else if (readinessScore >= 31) badgeName = "Naib Tehsildar 🎖️";
    
    setTimeout(() => {
      triggerConfetti();
      showToast(`🏆 Qualified! Readiness: ${readinessScore}%. Rank: ${badgeName}!`, "success");
    }, 600);
  } else {
    showToast(`Attempt complete. Readiness index: ${readinessScore}%. Practice more to qualify.`, "warning");
  }
}

// AI mentor feedback generator
function generateAIMentorReport(score, accuracy, attempts, subjectScores) {
  let mainFeedback = "";
  let strengths = [];
  let improvements = [];
  
  let highestSub = "";
  let highestAcc = -1;
  let lowestSub = "";
  let lowestAcc = 999;
  
  Object.keys(subjectScores).forEach(sub => {
    const stats = subjectScores[sub];
    const subAttempts = stats.correct + stats.incorrect;
    const acc = subAttempts > 0 ? (stats.correct / subAttempts) * 100 : 0;
    
    if (acc > highestAcc) {
      highestAcc = acc;
      highestSub = sub;
    }
    if (acc < lowestAcc && subAttempts > 0) {
      lowestAcc = acc;
      lowestSub = sub;
    }
  });
  
  if (score >= 70) {
    mainFeedback = "Excellent performance! You are in the top-tier candidate bracket. Your foundations are solid and you display robust options elimination logic. Maintain consistency, refine timing under exam stress, and review micro-factual details in your lowest-performing sectors.";
    strengths.push("High options accuracy and solid conceptual recall.");
    strengths.push(`Excellent mastery over ${highestSub || 'Polity'}.`);
    improvements.push(`Refine micro-factual points in ${lowestSub || 'History'} to plug remaining gaps.`);
    improvements.push("Practice time management to save 15 minutes for a third-pass review.");
  } else if (score >= 50) {
    mainFeedback = "Competitive attempt. You are hover-cycling near the historic UPSC CSE Prelims cut-off threshold. Negative marking penalties are currently dragging down your net scores. Focus on eliminating wild guessing and consolidate your weakest subject links.";
    strengths.push(`Promising conceptual foundations in ${highestSub || 'Economy'}.`);
    strengths.push("Good initial attempt rates across core syllabus areas.");
    improvements.push("Heavy negative score penalty: avoid option guessing when you cannot eliminate at least 2 choices.");
    improvements.push(`Revise primary reference chapters for ${lowestSub || 'Polity'}.`);
  } else {
    mainFeedback = "Your mock performance indicates you are in the foundation consolidation phase. The priority is to transition from raw memorization to active conceptual application. Do not be discouraged; use this roadmap to guide your revision schedule.";
    strengths.push("Courageous attempt rate volume across core syllabus.");
    improvements.push("Strictly restrict attempts on options where you are completely guessing.");
    improvements.push(`Low scores in ${lowestSub || 'Environment'} indicate a need for thorough re-reading of standard textbooks.`);
    improvements.push("Build primary conceptual pillars in Polity and Economy before attempting advanced mock sets.");
  }
  
  return {
    feedback: mainFeedback,
    strengths: strengths,
    improvements: improvements
  };
}

// Render diagnostics calculations
function renderDiagnostics(session) {
  document.getElementById('finalScoreVal').innerText = session.rawScore.toFixed(2);
  document.getElementById('readinessStageBadge').innerText = session.readinessStage;
  document.getElementById('readinessScoreVal').innerText = `${session.readinessScore} / 100`;
  document.getElementById('predictedAIRVal').innerText = session.predictedAIR;
  
  // Qualification probability mapping
  let prob = "5%";
  if (session.rawScore >= 50) prob = "98%";
  else if (session.rawScore >= 45) prob = "85%";
  else if (session.rawScore >= 40) prob = "65%";
  else if (session.rawScore >= 35) prob = "40%";
  else if (session.rawScore >= 30) prob = "20%";
  else prob = "5%";
  document.getElementById('predictedQualificationProb').innerText = prob;
  
  const corrVal = Math.round(session.attemptsCount * (session.accuracyPercentage / 100));
  const incorrVal = session.attemptsCount - corrVal;
  
  document.getElementById('statCorrect').innerText = `${corrVal} Qs`;
  document.getElementById('statIncorrect').innerText = `${incorrVal} Qs`;
  document.getElementById('statAccuracy').innerText = `${session.accuracyPercentage}%`;
  document.getElementById('statAttempts').innerText = `${session.attemptPercentage}%`;
  
  // Render subject progress meters
  const resultsSubjectBarsContainer = document.getElementById('resultsSubjectBarsContainer');
  if (resultsSubjectBarsContainer) {
    resultsSubjectBarsContainer.innerHTML = '';
    Object.keys(session.subjectScores).forEach(sub => {
      const stats = session.subjectScores[sub];
      if (stats.total === 0) return; // Skip subjects not present
      
      const subRaw = (stats.correct * 2) - (stats.incorrect * 0.66);
      const subAtt = stats.correct + stats.incorrect;
      const subAcc = subAtt > 0 ? Math.round((stats.correct / subAtt) * 100) : 0;
      
      // Scale mapping: map -6.6 to +20 marks to a positive 0-100% scale
      const displayPercent = Math.max(0, Math.round(((subRaw + (stats.total * 0.66)) / (stats.total * 2 + stats.total * 0.66)) * 100));
      
      const div = document.createElement('div');
      div.style.marginBottom = '0.8rem';
      div.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
          <span><strong>${sub}</strong></span>
          <span>${subRaw.toFixed(2)} Marks (Acc: ${subAcc}%)</span>
        </div>
        <div style="height: 6px; background-color: var(--bg-tertiary); border-radius: 3px; overflow: hidden;">
          <div style="width: ${displayPercent}%; height: 100%; background-color: ${subAcc >= 75 ? '#22c55e' : subAcc >= 40 ? '#eab308' : '#ef4444'}; border-radius: 3px;"></div>
        </div>
      `;
      resultsSubjectBarsContainer.appendChild(div);
    });
  }
  
  // Render concept category lists
  renderConceptList('strongConceptList', session.strongConcepts);
  renderConceptList('moderateConceptList', session.moderateConcepts);
  renderConceptList('weakConceptList', session.weakConcepts);
  
  // Render suggested books
  renderBookRecommendations(session);
  
  // Render top 5 revision list
  const revisionPlanList = document.getElementById('revisionPlanList');
  revisionPlanList.innerHTML = '';
  session.topRevisionTopics.forEach(topic => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${topic}</strong> — Study core structures or mechanisms, and solve associated diagnostic MCQs.`;
    revisionPlanList.appendChild(li);
  });
  
  // AI mentor points
  document.getElementById('aiMentorText').innerText = session.aiReport.feedback;
  const aiMentorPoints = document.getElementById('aiMentorPoints');
  aiMentorPoints.innerHTML = '';
  
  session.aiReport.strengths.forEach(str => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Strength:</strong> ${str}`;
    aiMentorPoints.appendChild(li);
  });
  
  session.aiReport.improvements.forEach(imp => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Action Item:</strong> ${imp}`;
    aiMentorPoints.appendChild(li);
  });
  
  // Render Results comparative bar chart
  renderResultsChart(session);
  
  // Render detailed question review panel
  renderQuestionReview(session);
}

function renderConceptList(elementId, concepts) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';
  if (concepts.length === 0) {
    container.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic;">No topics flagged</span>`;
    return;
  }
  concepts.forEach(c => {
    const span = document.createElement('span');
    span.className = 'concept-pill';
    span.innerText = c;
    container.appendChild(span);
  });
}

function renderBookRecommendations(session) {
  const container = document.getElementById('bookRecommendationsContainer');
  if (!container) return;
  container.innerHTML = '';
  
  const subjectsMap = {
    "Polity": { book: "Indian Polity by M. Laxmikanth", advice: "Read Chapters on Fundamental Rights and Parliament thoroughly." },
    "Economy": { book: "Indian Economy by Sriram Srirangam / Ramesh Singh", advice: "Consolidate inflation definitions, GDP computation methods, and banking multipliers." },
    "Geography": { book: "Certificate Physical and Human Geography by G.C. Leong & Class XI-XII NCERTs", advice: "Map atmospheric pressure belts and trace major warm/cold ocean currents." },
    "Environment & Ecology": { book: "Environment by Shankar IAS Academy", advice: "Revise Ramsar sites list, Wildlife Protection Act schedules, and pollution thresholds." },
    "History & Culture": { book: "A Brief History of Modern India (Spectrum) & Art and Culture by Nitin Singhania", advice: "Create chronological timelines for regional satyagrahas and Buddhist councils." },
    "Science & Technology": { book: "Science and Technology by Ravi P. Agrahari / Vision IAS materials", advice: "Understand concepts of biotechnology applications (mRNA, gene splicing) and satellite orbits." }
  };
  
  let count = 0;
  Object.keys(session.subjectScores).forEach(sub => {
    const stats = session.subjectScores[sub];
    if (stats.total === 0) return;
    
    const subAttempts = stats.correct + stats.incorrect;
    const acc = subAttempts > 0 ? (stats.correct / subAttempts) * 100 : 0;
    
    if (acc < 65 && subjectsMap[sub]) {
      count++;
      const item = document.createElement('div');
      item.style.marginBottom = '0.8rem';
      item.style.padding = '0.75rem';
      item.style.backgroundColor = 'var(--bg-tertiary)';
      item.style.borderRadius = '6px';
      item.style.borderLeft = '3px solid var(--accent-gold)';
      
      item.innerHTML = `
        <h5 style="color: var(--accent-gold); font-size: 0.85rem; font-weight: bold; margin-bottom: 0.2rem;">${sub} — Action Recommended</h5>
        <p style="font-size: 0.78rem; font-weight: 600; color: var(--text-primary);">Reference: ${subjectsMap[sub].book}</p>
        <p style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 0.1rem;">${subjectsMap[sub].advice}</p>
      `;
      container.appendChild(item);
    }
  });
  
  if (count === 0) {
    container.innerHTML = `
      <div style="padding: 1rem; background-color: var(--bg-tertiary); border-radius: 6px; border-left: 3px solid var(--color-answered); font-size: 0.82rem;">
        🎉 Outstanding performance across all subjects! Continue practicing mixed mock tests to maintain your edge.
      </div>
    `;
  }
}

// Chart.js bar chart for results
let resultsChartInstance = null;
function renderResultsChart(session) {
  const canvas = document.getElementById('resultsComparisonChart');
  if (!canvas) return;
  
  if (typeof Chart === 'undefined') {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "12px Inter";
    ctx.fillStyle = document.body.classList.contains('dark-theme') ? '#94a3b8' : '#64748b';
    ctx.textAlign = "center";
    ctx.fillText("Active internet connection required to render chart", canvas.width / 2, canvas.height / 2);
    return;
  }
  
  const ctx = canvas.getContext('2d');
  const labels = [];
  const correctData = [];
  const incorrectData = [];
  
  Object.keys(session.subjectScores).forEach(sub => {
    if (session.subjectScores[sub].total === 0) return;
    
    let label = sub;
    if (sub === "Environment & Ecology") label = "Environment";
    if (sub === "History & Culture") label = "History";
    if (sub === "Science & Technology") label = "Science";
    labels.push(label);
    correctData.push(session.subjectScores[sub].correct);
    incorrectData.push(session.subjectScores[sub].incorrect);
  });
  
  if (resultsChartInstance) {
    resultsChartInstance.destroy();
  }
  
  const isDark = document.body.classList.contains('dark-theme');
  const gridColor = isDark ? '#2a354f' : '#e2e8f0';
  const textColor = isDark ? '#94a3b8' : '#64748b';
  
  resultsChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Correct',
          data: correctData,
          backgroundColor: '#22c55e',
          borderRadius: 4
        },
        {
          label: 'Incorrect',
          data: incorrectData,
          backgroundColor: '#ef4444',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color: textColor } },
        y: { stacked: true, grid: { color: gridColor }, ticks: { color: textColor }, max: 10, stepSize: 2 }
      },
      plugins: {
        legend: { labels: { color: isDark ? '#f8fafc' : '#1e293b' } }
      }
    }
  });
}

// Render Detailed Question by Question review cards
function renderQuestionReview(session) {
  const container = document.getElementById('reviewQuestionsContainer');
  container.innerHTML = '';
  
  session.questions.forEach((q, idx) => {
    const userAns = session.userAnswers[idx];
    const isCorrect = userAns === q.correctAnswer;
    const isUnattempted = userAns === null;
    
    const card = document.createElement('div');
    let cardClass = 'unattempted-card';
    let statusText = 'UNATTEMPTED';
    let statusBadgeClass = 'badge-info';
    
    if (!isUnattempted) {
      if (isCorrect) {
        cardClass = 'correct-card';
        statusText = 'CORRECT';
        statusBadgeClass = 'badge-success';
      } else {
        cardClass = 'incorrect-card';
        statusText = 'INCORRECT';
        statusBadgeClass = 'badge-danger';
      }
    }
    
    card.className = `review-question-card ${cardClass}`;
    
    // Statements list
    let statementsHtml = '';
    if (q.statements && q.statements.length > 0) {
      let items = q.statements.map(stmt => `<li>${stmt}</li>`).join('');
      statementsHtml = `
        <ol class="question-statements" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          ${items}
        </ol>
        <p class="statements-selection-text" style="font-size: 0.85rem; margin-bottom: 0.5rem;">Which of the statements given above is/are correct?</p>
      `;
    }
    
    // Options
    let optionsHtml = q.options.map(opt => {
      let optClass = '';
      if (opt.id === q.correctAnswer) {
        optClass = 'correct-opt';
      } else if (opt.id === userAns && !isCorrect) {
        optClass = 'incorrect-opt';
      }
      
      return `
        <li class="review-option-item ${optClass}">
          <strong>${opt.id}.</strong> ${opt.text}
          ${opt.id === q.correctAnswer ? ' (Correct Answer)' : ''}
          ${opt.id === userAns && !isCorrect ? ' (Your Choice)' : ''}
        </li>
      `;
    }).join('');
    
    const compExp = getComprehensiveExplanation(q);
    
    card.innerHTML = `
      <div class="review-meta">
        <span>Q${idx + 1} — ${q.subject} (${q.topic})</span>
        <span class="badge ${statusBadgeClass}">${statusText} (Selected: ${userAns || 'None'})</span>
      </div>
      <p style="font-weight: 600; margin-bottom: 0.5rem;">${q.question}</p>
      ${statementsHtml}
      <ul class="review-options">
        ${optionsHtml}
      </ul>
      
      <div class="conceptual-masterclass-box" style="margin-top: 1rem; background-color: var(--bg-tertiary); border-left: 4px solid var(--accent-gold); padding: 1rem; border-radius: 6px;">
        <h4 style="color: var(--accent-gold); font-size: 0.9rem; font-weight: bold; margin-bottom: 0.6rem;">💡 CONCEPT MASTERCLASS & ELIMINATION DEEP-DIVE</h4>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">1. CORE CONCEPT FOUNDATION (From Scratch):</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.foundation}</p>
        </div>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">2. STATEMENT-BY-STATEMENT DIAGNOSTIC ANALYSIS:</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.optionsAnalysis}</p>
        </div>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">3. ADVANCED UPSC ELIMINATION TRIGGERS:</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.triggers}</p>
        </div>
        
        <div class="concept-section">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">4. CORE THEORY & EDGE CASES (Able to solve hardest level):</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.edgeCases}</p>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Load Past journal session
window.loadPastSessionResult = function(index) {
  if (testHistory[index]) {
    renderDiagnostics(testHistory[index]);
    switchScreen(resultsScreen);
  }
};

// MY MISTAKE NOTEBOOK CONTROLS
function loadMistakes() {
  try {
    const data = localStorage.getItem('upsc_mistakes');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveMistakes(mistakes) {
  try {
    localStorage.setItem('upsc_mistakes', JSON.stringify(mistakes));
  } catch(e){}
}

function addMistake(question, selectedAnswer) {
  const mistakes = loadMistakes();
  if (mistakes.find(m => m.id === question.id)) return;
  mistakes.push({
    id: question.id,
    question: question,
    selectedAnswer: selectedAnswer,
    loggedAt: Date.now()
  });
  saveMistakes(mistakes);
}

window.removeMistake = function(id) {
  let mistakes = loadMistakes();
  mistakes = mistakes.filter(m => m.id !== id);
  saveMistakes(mistakes);
  renderMistakesList();
  updateCommandCenterStats();
  showToast("Mistake entry resolved and archived!", "success");
};

function removeMistakeSilent(id) {
  let mistakes = loadMistakes();
  mistakes = mistakes.filter(m => m.id !== id);
  saveMistakes(mistakes);
}

function renderMistakesList() {
  const mistakes = loadMistakes();
  const listContainer = document.getElementById('mistakesListContainer');
  const noMistakesMsg = document.getElementById('noMistakesMsg');
  
  const searchInput = document.getElementById('searchMistakes');
  const subjectSelect = document.getElementById('filterMistakesSubject');
  
  const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  const subjectFilter = subjectSelect ? subjectSelect.value : 'All';
  
  const filtered = mistakes.filter(m => {
    const q = m.question;
    const matchesSearch = q.question.toLowerCase().includes(searchQuery) ||
                          q.topic.toLowerCase().includes(searchQuery) ||
                          (q.subtopic && q.subtopic.toLowerCase().includes(searchQuery)) ||
                          q.explanation.toLowerCase().includes(searchQuery);
                          
    const matchesSubject = subjectFilter === 'All' || q.subject.toLowerCase().includes(subjectFilter.toLowerCase());
    return matchesSearch && matchesSubject;
  });
  
  // Re-bind change events once
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = "true";
    searchInput.addEventListener('input', renderMistakesList);
  }
  if (subjectSelect && !subjectSelect.dataset.bound) {
    subjectSelect.dataset.bound = "true";
    subjectSelect.addEventListener('change', renderMistakesList);
  }
  
  // Retest button trigger bind
  const btnRetestMistakes = document.getElementById('btnRetestMistakes');
  if (btnRetestMistakes && !btnRetestMistakes.dataset.bound) {
    btnRetestMistakes.dataset.bound = "true";
    btnRetestMistakes.addEventListener('click', () => {
      isMistakeRetestSession = true;
      retestMistakes();
    });
  }
  
  if (filtered.length === 0) {
    listContainer.classList.add('hidden');
    noMistakesMsg.classList.remove('hidden');
    return;
  }
  
  listContainer.classList.remove('hidden');
  noMistakesMsg.classList.add('hidden');
  listContainer.innerHTML = '';
  
  filtered.forEach(m => {
    const q = m.question;
    const card = document.createElement('div');
    card.className = 'card mistake-card';
    
    let statementsHtml = '';
    if (q.statements && q.statements.length > 0) {
      statementsHtml = `<ol style="margin: 0.5rem 0 0.5rem 1.2rem;">` + 
        q.statements.map(s => `<li>${s}</li>`).join('') + `</ol>`;
    }
    
    let optionsHtml = q.options.map(opt => {
      let suffix = '';
      let style = '';
      if (opt.id === q.correctAnswer) {
        style = 'color: var(--color-answered); font-weight: bold;';
        suffix = ' [Correct Answer]';
      }
      if (opt.id === m.selectedAnswer) {
        style = 'color: var(--color-not-answered); font-weight: bold;';
        suffix = ' [Your Choice]';
      }
      return `<li style="${style}"><strong>${opt.id}.</strong> ${opt.text}${suffix}</li>`;
    }).join('');
    
    const compExp = getComprehensiveExplanation(q);
    
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span class="badge badge-warning" style="background-color: var(--accent-gold-light); color: var(--accent-gold); border: 1px solid var(--accent-gold);">${q.subject}</span>
          <span style="font-size: 0.8rem; font-weight: 600; margin-left: 0.5rem; color: var(--text-secondary);">${q.topic} ${q.subtopic ? `(${q.subtopic})` : ''}</span>
        </div>
        <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.75rem; border-color: var(--color-not-answered); color: var(--color-not-answered);" onclick="removeMistake('${q.id}')">
          Remove ❌
        </button>
      </div>
      <p style="font-weight: 600; margin-bottom: 0.5rem;">${q.question}</p>
      ${statementsHtml}
      <ul style="list-style-type: none; padding-left: 0; margin-bottom: 1rem;">
        ${optionsHtml}
      </ul>
      
      <div class="conceptual-masterclass-box" style="margin-top: 1rem; background-color: var(--bg-tertiary); border-left: 4px solid var(--accent-gold); padding: 1rem; border-radius: 6px;">
        <h4 style="color: var(--accent-gold); font-size: 0.9rem; font-weight: bold; margin-bottom: 0.6rem;">💡 CONCEPT MASTERCLASS & ELIMINATION DEEP-DIVE</h4>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">1. CORE CONCEPT FOUNDATION (From Scratch):</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.foundation}</p>
        </div>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">2. STATEMENT-BY-STATEMENT DIAGNOSTIC ANALYSIS:</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.optionsAnalysis}</p>
        </div>
        
        <div class="concept-section" style="margin-bottom: 0.8rem;">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">3. ADVANCED UPSC ELIMINATION TRIGGERS:</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.triggers}</p>
        </div>
        
        <div class="concept-section">
          <h5 style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); margin-bottom: 0.2rem;">4. CORE THEORY & EDGE CASES (Able to solve hardest level):</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">${compExp.edgeCases}</p>
        </div>
      </div>
    `;
    listContainer.appendChild(card);
  });
}

function retestMistakes() {
  const mistakes = loadMistakes();
  if (mistakes.length === 0) {
    alert("Your Mistake Notebook is empty! Try solving more mocks first.");
    return;
  }
  
  activeTestQuestions = mistakes.map(m => m.question).sort(() => 0.5 - Math.random());
  userAnswers = new Array(activeTestQuestions.length).fill(null);
  questionStatus = new Array(activeTestQuestions.length).fill('unvisited');
  currentQuestionIndex = 0;
  timeRemaining = activeTestQuestions.length * 120;
  
  questionStatus[0] = 'not-answered';
  renderPalette();
  displayQuestion(0);
  startTimer();
  switchScreen(examConsoleWorkspace);
}

// SMART REVISION SCHEDULER
function getWeakestTopics() {
  const mistakes = loadMistakes();
  const subjectsMap = {
    Polity: [], Economy: [], Geography: [], Environment: [], History: [], Science: []
  };
  
  mistakes.forEach(m => {
    const q = m.question;
    const sub = q.subject;
    let targetSub = "Polity";
    if (sub.includes("Polity")) targetSub = "Polity";
    else if (sub.includes("Economy")) targetSub = "Economy";
    else if (sub.includes("Geography")) targetSub = "Geography";
    else if (sub.includes("Environment")) targetSub = "Environment";
    else if (sub.includes("History")) targetSub = "History";
    else if (sub.includes("Science")) targetSub = "Science";
    
    if (subjectsMap[targetSub] && !subjectsMap[targetSub].includes(q.topic)) {
      subjectsMap[targetSub].push(q.topic);
    }
  });
  
  const allWeak = [];
  Object.keys(subjectsMap).forEach(k => {
    subjectsMap[k].forEach(t => allWeak.push(t));
  });
  
  return {
    polity: subjectsMap.Polity.slice(0, 2).join(', '),
    economy: subjectsMap.Economy.slice(0, 2).join(', '),
    geography: subjectsMap.Geography.slice(0, 2).join(', '),
    environment: subjectsMap.Environment.slice(0, 2).join(', '),
    history: subjectsMap.History.slice(0, 2).join(', '),
    science: subjectsMap.Science.slice(0, 2).join(', '),
    all: allWeak
  };
}

function generateRevisionTimeline(days) {
  const mistakes = loadMistakes();
  const weakTopics = getWeakestTopics();
  
  const planTimelineGrid = document.getElementById('planTimelineGrid');
  const activeRevisionPlanWrapper = document.getElementById('activeRevisionPlanWrapper');
  const activePlanTitle = document.getElementById('activePlanTitle');
  
  if (!planTimelineGrid || !activeRevisionPlanWrapper) return;
  
  activeRevisionPlanWrapper.classList.remove('hidden');
  activePlanTitle.innerText = `Your Active ${days}-Day Revision Agenda`;
  planTimelineGrid.innerHTML = '';
  
  localStorage.setItem('upsc_active_revision_plan_days', days);
  
  // Set card active styles
  document.querySelectorAll('.revision-plan-card').forEach(c => {
    if (c.getAttribute('data-plan') === days) c.classList.add('active-plan');
    else c.classList.remove('active-plan');
  });
  
  let planTasks = [];
  if (parseInt(days) === 7) {
    planTasks = [
      { day: 1, title: "Polity Core Structure Review", desc: `Analyze Constitutional amendments and Fundamental Rights. Focus areas: ${weakTopics.polity || 'Fundamental Rights, Article 19'}.` },
      { day: 2, title: "Macroeconomics Mechanics", desc: `Consolidate Monetary policy transmission instruments and inflation. Focus: ${weakTopics.economy || 'Monetary Policy, Fiscal Deficits'}.` },
      { day: 3, title: "Physical & Indian Geography", desc: `Trace atmospheric wind cells, pressure systems, and monsoon winds. Focus: ${weakTopics.geography || 'Monsoon, Ocean Currents'}.` },
      { day: 4, title: "Environment & Ramsar Sites", desc: `Review pollution rules, ecological food chains, and wetland lists. Focus: ${weakTopics.environment || 'Wetlands, Biodiversity'}.` },
      { day: 5, title: "Modern Indian History & Culture", desc: `Analyze freedom struggle movements from 1857-1947 and Ashokan edicts. Focus: ${weakTopics.history || 'Indus Valley, Buddhism'}.` },
      { day: 6, title: "Science & Tech Trends", desc: `Consolidate biotechnology applications (mRNA, gene splicing) and orbits. Focus: ${weakTopics.science || 'Biotech, Quantum Computing'}.` },
      { day: 7, title: "Grand Mock & Notebook Audit", desc: `Solve a full-length mock test. Audit and re-evaluate all ${mistakes.length} logged mistakes.` }
    ];
  } else if (parseInt(days) === 15) {
    planTasks = [
      { day: "1-3", title: "Targeted Weak Area Consolidation", desc: `Deep dive into standard chapters for: ${weakTopics.all.slice(0, 3).join(', ') || 'Polity & Economy'}.` },
      { day: "4-6", title: "UPSC PYQ Analysis & Mapping", desc: "Evaluate past year questions. Map concept nodes to your revision syllabus notes." },
      { day: "7-9", title: "Mistake Notebook Clearance", desc: `Test and resolve currently logged ${mistakes.length} mistakes. Complete a retest.` },
      { day: "10-12", title: "Secondary Subject Consolidation", desc: "Revise Science & Tech advances, Environment treaties, and art/culture folders." },
      { day: "13-14", title: "Subject-Wise Mini Tests", desc: "Initialize 20-question custom drills for each subject. Maintain accuracy above 70%." },
      { day: 15, title: "Final 100-Question Grand Mock", desc: "Launch a full-length mixed syllabus mock test. Simulate real UPSC timing." }
    ];
  } else {
    planTasks = [
      { day: "Wk 1", title: "Polity & History Core Review", desc: "Read Laxmikanth constitutional chapters and Spectrum freedom struggle timelines." },
      { day: "Wk 2", title: "Economy & Geography Concepts", desc: "Stabilize balance of payments terms, fiscal definitions, and climatology mapping." },
      { day: "Wk 3", title: "Environment Laws & Science Tech", desc: "Revise environment protection acts, biodiversity zones, space launches, and biotechnology." },
      { day: "Wk 4", title: "Grand Mocks & Revision Loops", desc: "Solve 3 mixed mock tests. Re-solve incorrect notebook choices daily to reach SDM/DM rank." }
    ];
  }
  
  let progress = {};
  try {
    const saved = localStorage.getItem(`upsc_rev_progress_${days}`);
    if (saved) progress = JSON.parse(saved);
  } catch(e){}
  
  planTasks.forEach(task => {
    const node = document.createElement('div');
    const isCompleted = progress[task.day] || false;
    node.className = `timeline-step ${isCompleted ? 'completed' : ''}`;
    
    node.innerHTML = `
      <div class="step-node">${task.day}</div>
      <div class="step-content-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="color: var(--accent-gold);">${task.title}</h4>
          <span class="badge ${isCompleted ? 'badge-success' : 'badge-info'}" style="font-size: 0.72rem; padding: 0.15rem 0.4rem;">
            ${isCompleted ? 'Completed' : 'Pending'}
          </span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.6rem;">${task.desc}</p>
        <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.72rem;" onclick="toggleTaskCompletion('${days}', '${task.day}')">
          ${isCompleted ? "Mark Pending" : "Mark Completed"}
        </button>
      </div>
    `;
    planTimelineGrid.appendChild(node);
  });
}

window.toggleTaskCompletion = function(days, dayKey) {
  let progress = {};
  try {
    const saved = localStorage.getItem(`upsc_rev_progress_${days}`);
    if (saved) progress = JSON.parse(saved);
  } catch(e){}
  
  progress[dayKey] = !progress[dayKey];
  localStorage.setItem(`upsc_rev_progress_${days}`, JSON.stringify(progress));
  generateRevisionTimeline(days);
  
  if (progress[dayKey]) {
    showToast(`Revision task for Day/Week ${dayKey} marked as completed!`, "success");
  } else {
    showToast(`Revision task for Day/Week ${dayKey} marked as pending.`, "info");
  }
};

// Bind plan reset
const btnResetRevisionPlan = document.getElementById('btnResetRevisionPlan');
if (btnResetRevisionPlan) {
  btnResetRevisionPlan.addEventListener('click', () => {
    localStorage.removeItem('upsc_active_revision_plan_days');
    document.getElementById('activeRevisionPlanWrapper').classList.add('hidden');
    document.querySelectorAll('.revision-plan-card').forEach(c => c.classList.remove('active-plan'));
  });
}

const revisionPlanCards = document.querySelectorAll('.revision-plan-card');
revisionPlanCards.forEach(card => {
  card.addEventListener('click', () => {
    const days = card.getAttribute('data-plan');
    generateRevisionTimeline(days);
  });
});

// OFFICIAL PYQ PORTAL INDEX
function renderPYQLibrary() {
  const tbody = document.getElementById('pyqTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const pyqs = window.UPSC_PYQ_BANK || [];
  pyqs.forEach(q => {
    const row = document.createElement('tr');
    const conceptStr = q.conceptMapping ? q.conceptMapping.join(', ') : 'N/A';
    row.innerHTML = `
      <td><strong>${q.id}</strong></td>
      <td><span class="badge badge-info">${q.year}</span></td>
      <td><strong>${q.subject}</strong></td>
      <td>${q.topic}</td>
      <td><span style="font-size: 0.8rem; color: var(--text-secondary);">${conceptStr}</span></td>
    `;
    tbody.appendChild(row);
  });
  
  // Bind Launch button trigger
  const btnStartPYQTest = document.getElementById('btnStartPYQTest');
  if (btnStartPYQTest && !btnStartPYQTest.dataset.bound) {
    btnStartPYQTest.dataset.bound = "true";
    btnStartPYQTest.addEventListener('click', () => {
      const year = document.getElementById('selectPYQYear').value;
      const subject = document.getElementById('selectPYQSubject').value;
      
      let filtered = [...pyqs];
      if (year !== 'All') {
        filtered = filtered.filter(q => q.year === parseInt(year));
      }
      if (subject !== 'All') {
        filtered = filtered.filter(q => subjectMatches(q.subject, subject));
      }
      
      if (filtered.length === 0) {
        alert("No past year questions match your selected filters. Please select different options.");
        return;
      }
      
      isMistakeRetestSession = false;
      activeTestQuestions = filtered.sort(() => 0.5 - Math.random());
      userAnswers = new Array(activeTestQuestions.length).fill(null);
      questionStatus = new Array(activeTestQuestions.length).fill('unvisited');
      currentQuestionIndex = 0;
      timeRemaining = activeTestQuestions.length * 120;
      
      questionStatus[0] = 'not-answered';
      renderPalette();
      displayQuestion(0);
      startTimer();
      switchScreen(examConsoleWorkspace);
    });
  }
}

// TOPIC MASTERY MATRIX
function updateTopicMastery(questions, answers) {
  let mastery = {};
  try {
    const saved = localStorage.getItem('upsc_topic_mastery');
    if (saved) mastery = JSON.parse(saved);
  } catch(e){}
  
  questions.forEach((q, idx) => {
    const topic = q.topic;
    if (!mastery[topic]) {
      mastery[topic] = { correct: 0, total: 0 };
    }
    mastery[topic].total++;
    if (answers[idx] === q.correctAnswer) {
      mastery[topic].correct++;
    }
  });
  
  try {
    localStorage.setItem('upsc_topic_mastery', JSON.stringify(mastery));
  } catch(e){}
}

function renderTopicMasteryMatrix() {
  const masteryGrid = document.getElementById('masterySubjectGrid');
  if (!masteryGrid) return;
  masteryGrid.innerHTML = '';
  
  let mastery = {};
  try {
    const saved = localStorage.getItem('upsc_topic_mastery');
    if (saved) mastery = JSON.parse(saved);
  } catch(e){}
  
  const subjects = ["Polity", "Economy", "Geography", "Environment", "History", "Science"];
  const subjectTopics = {
    Polity: new Set(), Economy: new Set(), Geography: new Set(), Environment: new Set(), History: new Set(), Science: new Set()
  };
  
  // Aggregate from all database sources
  const allQs = [...(window.UPSC_QUESTION_BANK || []), ...(window.UPSC_PYQ_BANK || [])];
  allQs.forEach(q => {
    const sub = q.subject;
    let target = "Polity";
    if (sub.includes("Polity")) target = "Polity";
    else if (sub.includes("Economy")) target = "Economy";
    else if (sub.includes("Geography")) target = "Geography";
    else if (sub.includes("Environment")) target = "Environment";
    else if (sub.includes("History")) target = "History";
    else if (sub.includes("Science")) target = "Science";
    
    if (subjectTopics[target]) subjectTopics[target].add(q.topic);
  });
  
  (window.UPSC_CONCEPT_ONTOLOGY || []).forEach(n => {
    const sub = n.subject;
    let target = "Polity";
    if (sub.includes("Polity")) target = "Polity";
    else if (sub.includes("Economy")) target = "Economy";
    else if (sub.includes("Geography")) target = "Geography";
    else if (sub.includes("Environment")) target = "Environment";
    else if (sub.includes("History")) target = "History";
    else if (sub.includes("Science")) target = "Science";
    
    if (subjectTopics[target]) subjectTopics[target].add(n.topic);
  });
  
  subjects.forEach(sub => {
    const topics = Array.from(subjectTopics[sub]);
    if (topics.length === 0) return;
    
    const folder = document.createElement('div');
    folder.className = 'mastery-subject-folder';
    
    let topicsHtml = '';
    topics.forEach(t => {
      const record = mastery[t] || { correct: 0, total: 0 };
      const percent = record.total > 0 ? Math.round((record.correct / record.total) * 100) : 0;
      
      const pClass = record.total > 0 ? (percent >= 75 ? 'high' : percent >= 40 ? 'mid' : 'low') : '';
      
      topicsHtml += `
        <div class="mastery-topic-bar-item">
          <div class="mastery-topic-info">
            <span>${t}</span>
            <strong>${percent}% (${record.correct}/${record.total})</strong>
          </div>
          <div class="mastery-progress-track">
            <div class="mastery-progress-fill ${pClass}" style="width: ${percent}%;"></div>
          </div>
        </div>
      `;
    });
    
    folder.innerHTML = `
      <div class="mastery-folder-header">
        <span>${sub} Core Topics</span>
      </div>
      <div class="mastery-topic-bar-list">
        ${topicsHtml}
      </div>
    `;
    masteryGrid.appendChild(folder);
  });
}

// Trend charts via Chart.js
let trendChart1Instance = null;
let trendChart2Instance = null;

function renderTrendCharts() {
  const canvas1 = document.getElementById('scoreTrendChartCanvas');
  const canvas2 = document.getElementById('accuracyTrendChartCanvas');
  if (!canvas1 || !canvas2) return;
  
  if (typeof Chart === 'undefined') {
    [canvas1, canvas2].forEach(canvas => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px Inter";
      ctx.fillStyle = document.body.classList.contains('dark-theme') ? '#94a3b8' : '#64748b';
      ctx.textAlign = "center";
      ctx.fillText("Active internet connection required to render analytics trend lines", canvas.width / 2, canvas.height / 2);
    });
    return;
  }
  
  if (testHistory.length === 0) {
    [canvas1, canvas2].forEach(canvas => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px Inter";
      ctx.fillStyle = document.body.classList.contains('dark-theme') ? '#94a3b8' : '#64748b';
      ctx.textAlign = "center";
      ctx.fillText("Complete at least one mock test to see performance trends", canvas.width / 2, canvas.height / 2);
    });
    return;
  }
  
  const historyCopy = [...testHistory].reverse();
  const labels = historyCopy.map((h, idx) => `#${idx + 1}`);
  const scores = historyCopy.map(h => parseFloat(h.rawScore.toFixed(2)));
  const readiness = historyCopy.map(h => h.readinessScore);
  const accuracy = historyCopy.map(h => h.accuracyPercentage);
  const attempts = historyCopy.map(h => h.attemptPercentage);
  
  const isDark = document.body.classList.contains('dark-theme');
  const gridColor = isDark ? '#1f2937' : '#cbd5e1';
  const textColor = isDark ? '#9ca3af' : '#475569';
  
  if (trendChart1Instance) trendChart1Instance.destroy();
  if (trendChart2Instance) trendChart2Instance.destroy();
  
  trendChart1Instance = new Chart(canvas1.getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Score (out of 100)',
          data: scores,
          borderColor: '#c5a059',
          backgroundColor: 'rgba(197, 160, 89, 0.1)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Readiness Index',
          data: readiness,
          borderColor: '#10b981',
          backgroundColor: 'transparent',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor }, min: 0, max: 100 }
      },
      plugins: {
        legend: { labels: { color: isDark ? '#f9fafb' : '#0f172a' } }
      }
    }
  });
  
  trendChart2Instance = new Chart(canvas2.getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Accuracy %',
          data: accuracy,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Attempt Rate %',
          data: attempts,
          borderColor: '#a855f7',
          backgroundColor: 'transparent',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor }, min: 0, max: 100 }
      },
      plugins: {
        legend: { labels: { color: isDark ? '#f9fafb' : '#0f172a' } }
      }
    }
  });
}

// LEADERBOARD MODULE
function renderLeaderboard() {
  const privacyToggle = document.getElementById('leaderboardPrivacyToggle');
  const tbody = document.getElementById('leaderboardTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const privacy = privacyToggle ? privacyToggle.checked : true;
  
  if (privacyToggle && !privacyToggle.dataset.bound) {
    privacyToggle.dataset.bound = "true";
    privacyToggle.addEventListener('change', renderLeaderboard);
  }
  
  let totalSolved = 0;
  let totalCorrect = 0;
  testHistory.forEach(h => {
    totalSolved += h.attemptsCount;
    totalCorrect += Math.round(h.attemptsCount * (h.accuracyPercentage / 100));
  });
  const userAccuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
  
  const dispName = privacy ? aspirantName : "Anonymous Aspirant";
  
  // Mock competitors
  const competitors = [
    { name: "Divya Tanwar (Rank 1)", solved: 480, accuracy: 89, readiness: 92 },
    { name: "Animesh Pradhan", solved: 410, accuracy: 85, readiness: 88 },
    { name: "Donuru Ananya Reddy", solved: 380, accuracy: 82, readiness: 84 },
    { name: "Pawan Wadhwa", solved: 320, accuracy: 80, readiness: 81 },
    { name: dispName, solved: totalSolved, accuracy: userAccuracy, readiness: Math.max(0, Math.min(100, Math.round(totalCorrect * 2 / Math.max(1, testHistory.length)))), isUser: true },
    { name: "Siddharth B.", solved: 120, accuracy: 72, readiness: 68 },
    { name: "Riya D.", solved: 95, accuracy: 65, readiness: 59 },
    { name: "Meera K.", solved: 60, accuracy: 58, readiness: 48 }
  ];
  
  competitors.sort((a, b) => b.readiness - a.readiness);
  
  competitors.forEach((c, idx) => {
    const row = document.createElement('tr');
    if (c.isUser) {
      row.style.backgroundColor = 'rgba(197, 160, 89, 0.1)';
      row.style.border = '1px solid var(--accent-gold)';
    }
    
    row.innerHTML = `
      <td><strong>${idx + 1}</strong></td>
      <td>${c.name} ${c.isUser ? '⭐ (You)' : ''}</td>
      <td>${c.solved} Qs</td>
      <td>${c.accuracy}%</td>
      <td><span class="badge ${c.readiness >= 75 ? 'badge-success' : c.readiness >= 50 ? 'badge-info' : 'badge-warning'}">${c.readiness} (UPSC Ready)</span></td>
    `;
    tbody.appendChild(row);
  });
}

// DASHBOARD STATE UPDATES
function incrementDailyGoalCount(count) {
  const todayStr = new Date().toDateString();
  let gProgress = { date: todayStr, count: 0 };
  try {
    const saved = localStorage.getItem('upsc_daily_goal_progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === todayStr) gProgress = parsed;
    }
  } catch(e){}
  
  let targetCount = 20;
  try {
    const savedTarget = localStorage.getItem('upsc_daily_goal_target');
    if (savedTarget) targetCount = parseInt(savedTarget);
  } catch(e){}
  
  const beforeCount = gProgress.count;
  gProgress.count += count;
  
  try {
    localStorage.setItem('upsc_daily_goal_progress', JSON.stringify(gProgress));
    
    // Check if goal was just reached
    if (beforeCount < targetCount && gProgress.count >= targetCount) {
      setTimeout(() => {
        showToast("🎉 Daily Target Achieved! You solved " + gProgress.count + " questions today!", "success");
        triggerConfetti();
      }, 1500);
    } else {
      showToast(`Progress logged: +${count} questions. Total today: ${gProgress.count}/${targetCount}`, "success");
    }
  } catch(e){}
}

function calculateStreak() {
  if (testHistory.length === 0) return 0;
  
  const dates = testHistory.map(h => {
    const d = new Date(h.timestamp);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  });
  
  const uniqueDates = Array.from(new Set(dates)).map(d => new Date(d));
  uniqueDates.sort((a, b) => b - a);
  
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
  
  const newestStr = `${uniqueDates[0].getFullYear()}-${uniqueDates[0].getMonth() + 1}-${uniqueDates[0].getDate()}`;
  if (newestStr !== todayStr && newestStr !== yesterdayStr) {
    return 0;
  }
  
  let streak = 1;
  for (let i = 0; i < uniqueDates.length - 1; i++) {
    const diff = Math.abs(uniqueDates[i] - uniqueDates[i+1]);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (diffDays === 1) streak++;
    else if (diffDays > 1) break;
  }
  return streak;
}

function updateCommandCenterStats() {
  const streak = calculateStreak();
  const headerStreak = document.getElementById('headerStreakCount');
  if (headerStreak) headerStreak.innerText = streak;
  
  const dashStreak = document.getElementById('dashStreak');
  if (dashStreak) dashStreak.innerText = `${streak} Days`;
  
  let totalSolved = 0;
  let totalCorrect = 0;
  testHistory.forEach(h => {
    totalSolved += h.attemptsCount;
    totalCorrect += Math.round(h.attemptsCount * (h.accuracyPercentage / 100));
  });
  
  const dashTotalSolved = document.getElementById('dashTotalSolved');
  if (dashTotalSolved) dashTotalSolved.innerText = `${totalSolved} Qs`;
  
  const accuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
  const dashAccuracy = document.getElementById('dashAccuracy');
  if (dashAccuracy) dashAccuracy.innerText = `${accuracy}%`;
  
  // Revision alerts count
  const mistakes = loadMistakes();
  const dashRevisionCount = document.getElementById('dashRevisionCount');
  if (dashRevisionCount) dashRevisionCount.innerText = `${mistakes.length} Qs`;
  
  // Goal Progress rings updates
  let dailyGoalCompleted = 0;
  try {
    const todayStr = new Date().toDateString();
    const savedGoalProgress = localStorage.getItem('upsc_daily_goal_progress');
    if (savedGoalProgress) {
      const gObj = JSON.parse(savedGoalProgress);
      if (gObj.date === todayStr) dailyGoalCompleted = gObj.count;
    }
  } catch(e){}
  
  let targetCount = 20;
  try {
    const savedTarget = localStorage.getItem('upsc_daily_goal_target');
    if (savedTarget) targetCount = parseInt(savedTarget);
  } catch(e){}
  
  const goalCompletedCount = document.getElementById('goalCompletedCount');
  const goalTargetCount = document.getElementById('goalTargetCount');
  const goalRingProgress = document.getElementById('goalRingProgress');
  const goalProgressMessage = document.getElementById('goalProgressMessage');
  
  if (goalCompletedCount) goalCompletedCount.innerText = dailyGoalCompleted;
  if (goalTargetCount) goalTargetCount.innerText = targetCount;
  
  const percent = Math.min(100, Math.round((dailyGoalCompleted / targetCount) * 100));
  const offset = 314 - (314 * percent) / 100;
  if (goalRingProgress) goalRingProgress.style.strokeDashoffset = offset;
  if (goalProgressMessage) goalProgressMessage.innerText = `${percent}% of your daily challenge completed.`;
  
  // Readiness Index Gauges
  let avgScore = 0;
  if (testHistory.length > 0) {
    avgScore = testHistory.reduce((sum, h) => sum + h.rawScore, 0) / testHistory.length;
  }
  const readiness = Math.max(0, Math.min(100, Math.round(avgScore)));
  
  const dashboardReadinessScore = document.getElementById('dashboardReadinessScore');
  const dashboardReadinessStage = document.getElementById('dashboardReadinessStage');
  const dashboardReadinessBar = document.getElementById('dashboardReadinessBar');
  
  if (dashboardReadinessScore) dashboardReadinessScore.innerText = readiness;
  
  let readinessStage = "Beginner";
  if (readiness >= 86) readinessStage = "UPSC Ready";
  else if (readiness >= 71) readinessStage = "Serious Contender";
  else if (readiness >= 51) readinessStage = "Competitive Aspirant";
  else if (readiness >= 31) readinessStage = "Foundation Stage";
  
  if (dashboardReadinessStage) {
    dashboardReadinessStage.innerText = readinessStage;
    dashboardReadinessStage.className = `badge ${readiness >= 71 ? 'badge-success' : readiness >= 31 ? 'badge-info' : 'badge-danger'}`;
  }
  if (dashboardReadinessBar) dashboardReadinessBar.style.width = `${readiness}%`;
  
  // Syllabus strongest & weakest sectors
  const subCorrect = {};
  const subTotal = {};
  testHistory.forEach(h => {
    Object.keys(h.subjectScores).forEach(sub => {
      if (!subCorrect[sub]) {
        subCorrect[sub] = 0;
        subTotal[sub] = 0;
      }
      subCorrect[sub] += h.subjectScores[sub].correct;
      subTotal[sub] += h.subjectScores[sub].total;
    });
  });
  
  let strongest = "None";
  let strongestAcc = -1;
  let weakest = "None";
  let weakestAcc = 999;
  
  Object.keys(subTotal).forEach(sub => {
    const acc = Math.round((subCorrect[sub] / subTotal[sub]) * 100);
    if (acc > strongestAcc) {
      strongestAcc = acc;
      strongest = sub;
    }
    if (acc < weakestAcc) {
      weakestAcc = acc;
      weakest = sub;
    }
  });
  
  const dashStrongestSubject = document.getElementById('dashStrongestSubject');
  const dashStrongestAcc = document.getElementById('dashStrongestAcc');
  const dashWeakestSubject = document.getElementById('dashWeakestSubject');
  const dashWeakestAcc = document.getElementById('dashWeakestAcc');
  
  if (dashStrongestSubject) dashStrongestSubject.innerText = strongest;
  if (dashStrongestAcc) dashStrongestAcc.innerText = strongest !== "None" ? `${strongestAcc}% accuracy` : "No data logged";
  if (dashWeakestSubject) dashWeakestSubject.innerText = weakest;
  if (dashWeakestAcc) dashWeakestAcc.innerText = weakest !== "None" ? `${weakestAcc}% accuracy` : "No data logged";
  
  // Custom Rank Badge name
  let activeBadge = "UPSC Aspirant";
  if (readiness >= 86) activeBadge = "District Magistrate 🥇";
  else if (readiness >= 71) activeBadge = "Sub-Divisional Magistrate 🥈";
  else if (readiness >= 51) activeBadge = "Tehsildar 🥉";
  else if (readiness >= 31) activeBadge = "Naib Tehsildar 🎖️";
  
  const activeBadgeName = document.getElementById('activeBadgeName');
  if (activeBadgeName) activeBadgeName.innerText = activeBadge;
}

// 4-PART MULTI-PAGE PDF REPORT COMPILER
async function generatePDFReport() {
  try {
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
      alert("PDF Generation library (jsPDF) is not loaded. Please check your internet connection.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    if (testHistory.length === 0) return;
    const session = testHistory[0]; // report card for the most recent session
    
    const dateObj = new Date(session.timestamp);
    const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString();
    const primaryNavy = [15, 23, 42];
    const accentGold = [197, 160, 89];
    const creamBg = [253, 251, 247];
    
    // Page break checking helper
    let currentY = 24;
    function checkPageBreak(neededHeight) {
      if (currentY + neededHeight > 274) {
        doc.addPage();
        currentY = 24;
        return true;
      }
      return false;
    }
    
    // ==========================================
    // PAGE 1: REPORT CARD
    // ==========================================
    // Navy Header Band
    doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.rect(10, 10, 190, 32, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.text("SASI'S TEST ARENA", 105, 20, { align: "center" });
    doc.setFontSize(11);
    doc.text("Civil Services Preliminary Examination (GS Paper-I) Simulator", 105, 26, { align: "center" });
    doc.setFont("times", "italic");
    doc.setFontSize(9);
    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.text("Official Performance Diagnostic & AI Mentor Report Card", 105, 34, { align: "center" });
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text("ASPIRANT PROFILE SUMMARY", 15, 52);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(15, 54, 195, 54);
    
    doc.setFont("times", "normal");
    doc.setFontSize(10);
    doc.text(`Candidate Name: ${aspirantName}`, 15, 61);
    doc.text(`Session Timestamp: ${dateStr}`, 15, 67);
    doc.text(`Test Format: GS Paper-I (Static & Dynamic Concept Compilation)`, 15, 73);
    
    // Final Mock Score Box
    doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.rect(130, 56, 65, 22, 'F');
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.rect(130, 56, 65, 22);
    
    doc.setFont("times", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text("FINAL MOCK SCORE", 162.5, 62, { align: "center" });
    doc.setFontSize(16);
    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.text(`${session.rawScore.toFixed(2)} / 100`, 162.5, 71, { align: "center" });
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text("OVERALL PERFORMANCE METRICS", 15, 88);
    doc.line(15, 90, 195, 90);
    
    const corrVal = Math.round(session.attemptsCount * (session.accuracyPercentage / 100));
    const incorrVal = session.attemptsCount - corrVal;
    
    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.text("Correct Questions:", 15, 98);
    doc.text(`${corrVal} Qs`, 65, 98);
    doc.text("Incorrect Questions:", 15, 104);
    doc.text(`${incorrVal} Qs`, 65, 104);
    doc.text("Unattempted Questions:", 15, 110);
    doc.text(`${session.questions.length - session.attemptsCount} Qs`, 65, 110);
    
    doc.text("Attempt Rate %:", 110, 98);
    doc.text(`${session.attemptPercentage}%`, 165, 98);
    doc.text("Accuracy Percentage:", 110, 104);
    doc.text(`${session.accuracyPercentage}%`, 165, 104);
    doc.text("Readiness Score (0-100):", 110, 110);
    doc.text(`${session.readinessScore}`, 165, 110);
    
    // Readiness Stage Bar
    doc.setFillColor(15, 23, 42);
    doc.rect(15, 118, 180, 16, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("times", "bold");
    doc.setFontSize(9);
    doc.text(`Readiness Stage:  ${session.readinessStage.toUpperCase()}`, 25, 128);
    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.text(`Predicted AIR Range:  ${session.predictedAIR}`, 115, 128);
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text("AI MENTOR DIAGNOSTIC OVERVIEW", 15, 148);
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 150, 195, 150);
    
    // AI Mentor Card
    doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.rect(15, 156, 180, 115, 'F');
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.rect(15, 156, 180, 115);
    
    // Accent left bar
    doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.rect(15, 156, 2, 115, 'F');
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(9.5);
    doc.text("Performance Assessment:", 22, 164);
    
    doc.setFont("times", "normal");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    let coachLines = doc.splitTextToSize(session.aiReport.feedback, 166);
    doc.text(coachLines, 22, 170);
    
    let bulletY = 170 + (coachLines.length * 4.5) + 4;
    doc.setFont("times", "bold");
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text("Key Action Recommendations:", 22, bulletY);
    bulletY += 5;
    
    doc.setFont("times", "normal");
    doc.setTextColor(40, 40, 40);
    session.aiReport.improvements.forEach(imp => {
      let impLines = doc.splitTextToSize("• " + imp, 162);
      doc.text(impLines, 24, bulletY);
      bulletY += impLines.length * 4.5;
    });
    
    // ==========================================
    // PAGE 2: PERFORMANCE ANALYSIS
    // ==========================================
    doc.addPage();
    currentY = 24;
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("SECTION 2: DETAILED SYLLABUS PERFORMANCE ANALYSIS", 15, currentY);
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.line(15, currentY + 2.5, 195, currentY + 2.5);
    
    currentY += 10;
    
    doc.setFillColor(15, 23, 42);
    doc.rect(15, currentY, 180, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("times", "bold");
    doc.setFontSize(9);
    doc.text("Subject Area", 18, currentY + 5.5);
    doc.text("Score", 90, currentY + 5.5);
    doc.text("Accuracy %", 130, currentY + 5.5);
    doc.text("Attempts", 168, currentY + 5.5);
    
    currentY += 8;
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "normal");
    Object.keys(session.subjectScores).forEach(sub => {
      const stats = session.subjectScores[sub];
      if (stats.total === 0) return;
      
      const subRaw = (stats.correct * 2) - (stats.incorrect * 0.66);
      const subAtt = stats.correct + stats.incorrect;
      const subAcc = subAtt > 0 ? Math.round((stats.correct / subAtt) * 100) : 0;
      
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(15, currentY + 8, 195, currentY + 8);
      
      doc.setFont("times", "bold");
      doc.text(sub, 18, currentY + 5.5);
      doc.setFont("times", "normal");
      doc.text(`${subRaw.toFixed(2)}`, 90, currentY + 5.5);
      doc.text(`${subAcc}%`, 130, currentY + 5.5);
      doc.text(`${subAtt} / ${stats.total}`, 168, currentY + 5.5);
      
      currentY += 8;
    });
    
    currentY += 12;
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text("SYLLABUS TOPIC CONCEPTS ASSESSMENT", 15, currentY);
    doc.line(15, currentY + 2, 195, currentY + 2);
    currentY += 10;
    
    doc.setFontSize(9.5);
    doc.text("Strong Concepts (Accuracy >= 75%):", 15, currentY);
    doc.setFont("times", "normal");
    const strongStr = session.strongConcepts.join(', ') || 'No topics achieved 75% accuracy in this session.';
    let strongLines = doc.splitTextToSize(strongStr, 122);
    doc.text(strongLines, 70, currentY);
    
    currentY += Math.max(12, strongLines.length * 4.5 + 4);
    
    doc.setFont("times", "bold");
    doc.text("Weak Concepts (Accuracy < 40%):", 15, currentY);
    doc.setFont("times", "normal");
    const weakStr = session.weakConcepts.join(', ') || 'Excellent! No topics fell below 40% accuracy.';
    let weakLines = doc.splitTextToSize(weakStr, 122);
    doc.text(weakLines, 70, currentY);
    
    currentY += Math.max(15, weakLines.length * 4.5 + 6);
    
    // Diagnostics Box
    doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.rect(15, currentY, 180, 32, 'F');
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.rect(15, currentY, 180, 32);
    doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.rect(15, currentY, 2, 32, 'F');
    
    doc.setFont("times", "bold");
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text("SYLLABUS AREA DIAGNOSTICS:", 22, currentY + 8);
    doc.setFont("times", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(40, 40, 40);
    
    let weakestSubject = "Geography";
    let weakestAcc = 999;
    Object.keys(session.subjectScores).forEach(sub => {
      const stats = session.subjectScores[sub];
      const acc = stats.correct + stats.incorrect > 0 ? (stats.correct / (stats.correct + stats.incorrect)) * 100 : 0;
      if (acc < weakestAcc && stats.correct + stats.incorrect > 0) {
        weakestAcc = acc;
        weakestSubject = sub;
      }
    });
    
    const diagText = `Based on options elimination logs, your weakest subject sector is ${weakestSubject} with ${weakestAcc.toFixed(1)}% accuracy. This indicates significant gaps in primary textbook readings. You have taken a total of ${session.attemptsCount} attempts, getting ${incorrVal} incorrect answers. Focus on reducing negative marking by avoiding speculative guesses.`;
    doc.text(doc.splitTextToSize(diagText, 166), 22, currentY + 14);
    
    // ==========================================
    // PAGE 3+: QUESTION REVIEW
    // ==========================================
    doc.addPage();
    currentY = 24;
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("SECTION 3: QUESTION-BY-QUESTION REVIEW", 15, currentY);
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.line(15, currentY + 2.5, 195, currentY + 2.5);
    
    currentY += 10;
    
    session.questions.forEach((q, idx) => {
      const userAns = session.userAnswers[idx];
      const isCorrect = userAns === q.correctAnswer;
      const isUnattempted = userAns === null;
      
      const compExp = getComprehensiveExplanation(q);
      
      const qLines = doc.splitTextToSize(q.question, 180);
      let statementsLinesCount = 0;
      if (q.statements && q.statements.length > 0) {
        q.statements.forEach(stmt => {
          const stmtLines = doc.splitTextToSize(`• ${stmt}`, 175);
          statementsLinesCount += stmtLines.length;
        });
      }
      
      // Check page break for question introduction + options
      const questionBlockHeight = 8 + (qLines.length * 4.5) + (statementsLinesCount * 4.5) + (q.options.length * 4.5) + 12;
      checkPageBreak(questionBlockHeight);
      
      doc.setFont("times", "bold");
      doc.setFontSize(9.5);
      doc.text(`Q${idx + 1} — ${q.subject} > ${q.topic} ${q.subtopic ? `(${q.subtopic})` : ''}`, 15, currentY);
      
      doc.setFontSize(9);
      if (isUnattempted) {
        doc.setTextColor(100, 116, 139);
        doc.text("UNATTEMPTED", 165, currentY);
      } else if (isCorrect) {
        doc.setTextColor(16, 185, 129);
        doc.text("CORRECT", 172, currentY);
      } else {
        doc.setTextColor(239, 68, 68);
        doc.text(`INCORRECT (Choice: ${userAns || 'None'})`, 150, currentY);
      }
      
      doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(15, currentY + 1.5, 195, currentY + 1.5);
      
      currentY += 6;
      
      doc.setFont("times", "bold");
      doc.text(qLines, 15, currentY);
      currentY += qLines.length * 4.5;
      
      if (q.statements && q.statements.length > 0) {
        doc.setFont("times", "normal");
        q.statements.forEach((stmt, sIdx) => {
          let stmtLines = doc.splitTextToSize(`${sIdx + 1}. ${stmt}`, 175);
          doc.text(stmtLines, 20, currentY);
          currentY += stmtLines.length * 4.5;
        });
        currentY += 1.5;
      }
      
      doc.setFont("times", "normal");
      q.options.forEach(opt => {
        let optPrefix = `${opt.id}. ${opt.text}`;
        let isOptCorrect = opt.id === q.correctAnswer;
        let isOptChosen = opt.id === userAns;
        
        if (isOptCorrect) {
          doc.setFont("times", "bold");
          doc.setTextColor(16, 185, 129);
          optPrefix += " [Correct Answer]";
        } else if (isOptChosen) {
          doc.setFont("times", "bold");
          doc.setTextColor(239, 68, 68);
          optPrefix += " [Your Choice]";
        } else {
          doc.setFont("times", "normal");
          doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
        }
        
        doc.text(optPrefix, 20, currentY);
        doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
        doc.setFont("times", "normal");
        currentY += 4.5;
      });
      
      currentY += 3;
      
      // Study Masterclass Header
      checkPageBreak(8);
      doc.setFont("times", "bolditalic");
      doc.setFontSize(9);
      doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
      doc.text("STUDY MASTERCLASS & ELIMINATION DEEP-DIVE", 15, currentY);
      currentY += 4.5;
      
      // Render the 4 Masterclass sections as separate, dynamic cream boxes
      const sections = [
        { title: "1. CORE CONCEPT FOUNDATION (Explained from scratch):", text: compExp.foundation },
        { title: "2. OPTIONS DIAGNOSTIC ANALYSIS:", text: compExp.optionsAnalysis },
        { title: "3. ADVANCED UPSC ELIMINATION TRIGGERS:", text: compExp.triggers },
        { title: "4. CORE THEORY & EDGE CASES (Able to solve hardest level):", text: compExp.edgeCases }
      ];
      
      sections.forEach(sec => {
        let secLines = doc.splitTextToSize(sec.text, 172);
        let secHeight = 10 + (secLines.length * 3.8); // padding + text height
        
        checkPageBreak(secHeight);
        
        // Draw Cream Box
        doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
        doc.rect(15, currentY, 180, secHeight - 2, 'F');
        doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
        doc.setLineWidth(0.4);
        doc.rect(15, currentY, 180, secHeight - 2);
        
        // Left accent bar
        doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
        doc.rect(15, currentY, 2, secHeight - 2, 'F');
        
        // Title
        doc.setFont("times", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
        doc.text(sec.title, 19, currentY + 4);
        
        // Text
        doc.setFont("times", "normal");
        doc.setFontSize(8);
        doc.setTextColor(40, 40, 40);
        doc.text(secLines, 19, currentY + 8);
        
        currentY += secHeight + 1.5;
      });
      
      currentY += 6; // Margin between question blocks
      checkPageBreak(10);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(15, currentY, 195, currentY);
      currentY += 7;
    });
    
    // ==========================================
    // FINAL PAGE: REVISION ACTION PLAN
    // ==========================================
    doc.addPage();
    currentY = 24;
    
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("SECTION 4: AI REVISION ACTION PLAN", 15, currentY);
    doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setLineWidth(0.8);
    doc.line(15, currentY + 2.5, 195, currentY + 2.5);
    
    currentY += 10;
    
    doc.setFontSize(11);
    doc.text("Your Personalized 7-Day Study Program", 15, currentY);
    doc.setFontSize(9.5);
    doc.setDrawColor(226, 232, 240);
    doc.line(15, currentY + 2, 195, currentY + 2);
    
    currentY += 8;
    
    const weakTopics = getWeakestTopics();
    const planItems = [
      { day: "Day 1-2", focus: "Indian Polity & Federalism Review", details: `Focus on: ${weakTopics.polity || 'Fundamental Rights, Writs Jurisdiction'}. Read Laxmikanth Chapters 7, 8 and 12.` },
      { day: "Day 3", focus: "Core Economy Concepts Stabilization", details: `Focus on: ${weakTopics.economy || 'Monetary Policy Instruments, RBI MCLR'}. Revise Sriram IAS modules.` },
      { day: "Day 4", focus: "Physical Geography Map & Landforms Study", details: `Focus on: ${weakTopics.geography || 'Monsoon mechanics, ocean currents upwelling'}. Draw map tracks for ocean flows.` },
      { day: "Day 5", focus: "Environment Laws & Ramsar Protocols", details: `Focus on: ${weakTopics.environment || 'Wetland conservation rules, Biosphere Core zones'}. Read Shankar IAS chapters 3-5.` },
      { day: "Day 6", focus: "History Chronology & Science Developments", details: `Focus on: ${weakTopics.history || 'Buddhist Councils, Harappan sites'} & Science (${weakTopics.science || 'mRNA Vaccines, Space orbits'}).` },
      { day: "Day 7", focus: "Mistakes Review & mini Practice Drills", details: `Attempt a mistake Notebook retest session. Redo all logged incorrect choices.` }
    ];
    
    planItems.forEach(item => {
      doc.setFont("times", "bold");
      doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
      doc.text(item.day + ": " + item.focus, 18, currentY);
      
      doc.setFont("times", "normal");
      doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
      let detailLines = doc.splitTextToSize(item.details, 172);
      doc.text(detailLines, 18, currentY + 4.5);
      
      currentY += 4.5 + (detailLines.length * 4) + 3;
    });
    
    currentY += 4;
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text("Recommended Standard UPSC Reference Material", 15, currentY);
    doc.line(15, currentY + 2, 195, currentY + 2);
    
    currentY += 8;
    
    const books = [
      "• Polity: Indian Polity by M. Laxmikanth (Chapters 7, 17, 22)",
      "• Economy: Indian Economy by Sriram Srirangam (Banking & Inflation modules)",
      "• Geography: Certificate Physical & Human Geography by G.C. Leong & NCERTs",
      "• Environment: Shankar IAS Academy Textbook (Chapters 12-16)",
      "• History: A Brief History of Modern India by Spectrum (Chronology tables)",
      "• Science & Technology: Ravi P. Agrahari or Vision IAS monthly booklets"
    ];
    
    doc.setFont("times", "normal");
    doc.setFontSize(9);
    books.forEach(b => {
      doc.text(b, 18, currentY);
      currentY += 5;
    });
    
    currentY += 10;
    doc.setDrawColor(226, 232, 240);
    doc.line(130, currentY + 12, 190, currentY + 12);
    doc.setFont("times", "italic");
    doc.setFontSize(8.5);
    doc.text("SASI's Performance Evaluator Engine", 132, currentY + 16.5);
    
    // ==========================================
    // POST-PROCESSING: UNIFORM BORDERS, HEADERS & FOOTERS
    // ==========================================
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      
      // Page frame border
      doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
      doc.setLineWidth(0.8);
      doc.rect(8, 8, 194, 281);
      
      // Header for pages after Page 1
      if (i > 1) {
        doc.setFont("times", "bold");
        doc.setFontSize(8);
        doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
        doc.text("SASI'S TEST ARENA — DIAGNOSTIC & MOCK STUDY REPORT", 12, 13);
        
        doc.setFont("times", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("CONFIDENTIAL ACADEMIC REPORT", 198, 13, { align: "right" });
        
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.4);
        doc.line(12, 15, 198, 15);
      }
      
      // Footer for all pages
      doc.setDrawColor(accentGold[0], accentGold[1], accentGold[2]);
      doc.setLineWidth(0.4);
      doc.line(12, 280, 198, 280);
      
      doc.setFont("times", "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
      doc.text("SASI's Test Arena — Train Like a Future Civil Servant", 12, 284);
      
      doc.setFont("times", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`Page ${i} of ${totalPages}`, 198, 284, { align: "right" });
    }
    
    doc.save(`UPSC_Diagnostic_Report_${aspirantName.replace(' ', '_')}.pdf`);
  } catch (err) {
    console.error("Error generating PDF report:", err);
    alert("An error occurred while compiling your PDF report: " + err.message);
  }
}

// INTERACTIVE TOAST NOTIFICATION UTILITIES
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  else if (type === 'danger') icon = '❌';
  else if (type === 'warning') icon = '⚠️';
  
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  
  // Slide out and remove
  setTimeout(() => {
    toast.classList.add('fadeOut');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// MOTIVATIONAL CONFETTI PARTICLE BURST
function triggerConfetti() {
  const emojis = ['🥇', '🥈', '🥉', '✨', '🎓', '📚', '🏛️', '🔥', '⭐'];
  const container = document.body;
  const particleCount = 40;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 1.5}s`;
    particle.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 3500);
  }
}

// COMPREHENSIVE UPSC CONCEPTS EVALUATOR (100% Sincere Masterclass compiler)
function getComprehensiveExplanation(q) {
  const subject = q.subject || "";
  const topic = q.topic || "";
  const subtopic = q.subtopic || "";
  const baseExp = q.explanation || "";
  
  // 1. CONCEPT FOUNDATION (explained from scratch)
  let foundation = "";
  const tLower = topic.toLowerCase();
  
  if (tLower.includes("fundamental rights")) {
    foundation = "Fundamental Rights (Part III, Articles 12-35) form the cornerstone of the Indian Constitution, acting as negative obligations to prevent State authoritarianism and guarantee individual liberties. They are justiciable, meaning citizens can directly petition the Supreme Court under Article 32. Key core principles include Article 14 (equality before law of British origin representing absolute rule of law, equal protection of laws of US origin representing positive differential treatment), Article 15 (prohibits state discrimination on grounds ONLY of religion, race, caste, sex, place of birth), Article 19 (six democratic freedoms), and Article 21 (life and personal liberty, which has been expanded by judicial interpretation to include privacy, livelihood, and clean environment).";
  } else if (tLower.includes("parliament") || tLower.includes("legislative")) {
    foundation = "The Parliament of India operates on the Westminster model of democracy. It consists of the President, the Lok Sabha (House of the People), and the Rajya Sabha (Council of States). Ordinary legislative bills require passage by both houses and presidential assent. If a deadlock occurs, a Joint Sitting (Article 108) presided over by the Lok Sabha Speaker can be summoned by the President (not applicable for Money Bills or Constitutional Amendment Bills). The Lok Sabha holds superior authority over Money Bills (Article 110), where the Rajya Sabha's power is strictly advisory and limited to 14 days.";
  } else if (tLower.includes("federalism") || tLower.includes("emergency") || tLower.includes("governor")) {
    foundation = "Indian Federalism is described as a 'quasi-federal' structure with a unitary bias (Canadian model), rather than a strict division of powers (American model). Article 1 declares India as a 'Union of States'. Parliament has the power under Article 3 to re-organize states without their legislative consent. Under Emergency provisions (Articles 352, 356, 360), the federal structure shifts dynamically to a unitary system where the central government gains absolute control over state executive and legislative spheres. In national emergencies, fundamental rights can be suspended except Articles 20 and 21.";
  } else if (tLower.includes("judiciary") || tLower.includes("court") || tLower.includes("judicial review")) {
    foundation = "India features an integrated, single judicial system with the Supreme Court at the apex. The Supreme Court holds diverse jurisdictions: Original (disputes between Center and States under Article 131), Appellate (constitutional/civil/criminal appeals), Advisory (presidential reference under Article 143), and Writ jurisdiction (Article 32). Judicial Review is the core power of the courts to examine the constitutionality of legislative acts and executive actions, upholding the supremacy of the Constitution and the basic structure doctrine.";
  } else if (tLower.includes("monetary") || tLower.includes("banking") || tLower.includes("rbi") || tLower.includes("credit")) {
    foundation = "Monetary Policy in India is managed by the Reserve Bank of India (RBI) via the Monetary Policy Committee (MPC) to maintain price stability while supporting growth. Key quantitative tools include CRR (Cash Reserve Ratio - deposits held in cash with RBI), SLR (Statutory Liquidity Ratio - deposits held in gold/securities), Repo Rate (rate at which RBI lends to banks), and Reverse Repo/SDF (rates at which RBI absorbs liquidity). Expansionary policy lowers rates and purchases securities to boost currency flow; contractionary policy does the opposite to cool down inflation.";
  } else if (tLower.includes("inflation")) {
    foundation = "Inflation measures the rate of increase in price levels over time, eroding currency purchasing power. Headline inflation includes volatile food and energy, while Core inflation excludes them. The Wholesale Price Index (WPI) tracks bulk transactions of goods (excluding services) and is published by the Ministry of Commerce. The Consumer Price Index (CPI) tracks retail consumer baskets (including services) and is published by MoSPI. The RBI uses CPI-Combined as its key policy anchor (target range of 4% plus/minus 2%). Demand-pull inflation is caused by excess demand; cost-push inflation is caused by supply bottlenecks.";
  } else if (tLower.includes("balance of payments") || tLower.includes("rupee") || tLower.includes("exchange") || tLower.includes("depreciation")) {
    foundation = "The Balance of Payments (BoP) logs all economic transactions between a country and the rest of the world. It consists of the Current Account (trade in goods/services, unilateral transfers, remittances, and factor incomes) and the Capital Account (FDI, FPI, external commercial borrowings, and banking capital). A trade deficit occurs when imports exceed exports. Currency depreciation makes exports cheaper and more competitive, but inflates the rupee cost of crude imports and increases external debt-servicing burdens on corporate borrowers.";
  } else if (tLower.includes("monsoon") || tLower.includes("geography") || tLower.includes("climate") || tLower.includes("currents")) {
    foundation = "India's climate is dominated by the tropical monsoon system. The South-West Monsoon (June-September) originates from the high-pressure zone off Madagascar (Mascarene High) and splits into the Arabian Sea branch (striking the Western Ghats) and the Bay of Bengal branch. The North-East Monsoon (October-December) brings retreating rainfall, primarily striking the Coromandel Coast (Tamil Nadu). Key global drivers include El Nino (warming of Central Pacific, usually suppressing Indian monsoons), La Nina (cooling, boosting monsoons), and the Indian Ocean Dipole (IOD - positive phase aligns with good monsoons).";
  } else if (tLower.includes("biodiversity") || tLower.includes("ecology") || tLower.includes("environment") || tLower.includes("wetland") || tLower.includes("treaty") || tLower.includes("convention")) {
    foundation = "Environmental ecology focuses on ecosystems, biodiversity conservation, and global climate frameworks. Critical components include Protected Area networks (National Parks under absolute protection, Wildlife Sanctuaries with regulated resource extraction, and Biosphere Reserves with core/buffer/transition zones). Wetlands of international importance are regulated under the Ramsar Convention. Wildlife protection is governed by the Wildlife Protection Act, 1972, which maps species into strict schedules. Key global treaties include the UNFCCC (climate change) and CBD (biodiversity).";
  } else if (tLower.includes("history") || tLower.includes("buddhism") || tLower.includes("culture") || tLower.includes("indus") || tLower.includes("council")) {
    foundation = "Indian history is a tapestry of ancient civilizations, philosophical movements, and socio-political struggles. The Indus Valley Civilization represented a sophisticated urban culture with grid layouts and drainage. The Vedic period introduced philosophical texts (Upanishads). Heterodox sects like Buddhism and Jainism emerged as reactions to ritualistic Vedic orthodoxy, preaching non-violence, mindfulness, and middle paths. Buddhist history features four major councils that compiled teachings and led to splits (Hinayana/Mahayana). Modern history is dominated by the freedom struggle, transitioning from early moderate petitions to active mass satyagrahas led by Mahatma Gandhi.";
  } else if (tLower.includes("science") || tLower.includes("biotech") || tLower.includes("quantum") || tLower.includes("space") || tLower.includes("orbit")) {
    foundation = "Science and Technology in the UPSC context focuses on emerging cutting-edge domains. Biotechnology includes genetic engineering (CRISPR-Cas9 gene editing, which cuts DNA at specific locations), recombinant DNA technology, and mRNA vaccine platforms (which introduce a synthetic blueprint to trigger immune responses). Space technology involves launch vehicles (PSLV for polar orbits, GSLV for geostationary transfer orbits) and satellite orbits (LEO, MEO, GEO). Other critical emerging technologies include Quantum Computing (utilizing qubits, superposition, and entanglement) and Nanotechnology.";
  } else {
    // Generic high-yield foundation fallback
    foundation = `The concept of ${topic} (${subtopic ? subtopic + ', ' : ''}${subject}) represents a core pillar of the UPSC GS syllabus. Understanding this requires consolidating standard textbook foundations (NCERTs and primary reference works), analyzing the exact scope of administrative, legal, or economic terms, and mapping the theoretical rules to current policy directives or scientific discoveries.`;
  }
  
  // 2. DETAILED OPTIONS ELIMINATION ANALYSIS
  let optionsAnalysis = "";
  if (baseExp) {
    optionsAnalysis = baseExp;
  } else {
    optionsAnalysis = `Option ${q.correctAnswer} represents the conceptually correct statement that aligns with the established UPSC GS Paper-I standards.`;
  }
  
  // 3. ADVANCED UPSC ELIMINATION TRIGGERS (Standard traps)
  let triggers = "";
  if (q.type === "Statement-based" || q.question.toLowerCase().includes("consider the following") || (q.statements && q.statements.length > 0)) {
    triggers = "UPSC Statement-Based traps often rely on three methods: (1) Swapping facts, such as switching the origins of two concepts (e.g. Article 14 Equality before Law vs Equal Protection of Laws) or swapping departments/ministries. (2) Extreme qualifiers: words like 'only', 'all', 'strictly', 'always', 'completely' are red flags and are mathematically incorrect in over 85% of UPSC GS papers. (3) Inclusion of voluntary vs compulsory provisions (e.g. Article 243 local body rules). To resolve the hardest questions, always isolate each statement, check for extreme words, and verify the correct ministry or article.";
  } else {
    triggers = "Conceptual questions in UPSC require precise differentiation between closely related options. Examiners construct plausible distractors by shifting definitions slightly (e.g. mixing CRR and SLR, or confusing Current and Capital account components). When tackling the hardest level questions, eliminate options that represent absolute or unconditional statements, look for double negatives, and check if the option aligns with the constitutional text rather than general conventions.";
  }
  
  // 4. RESOLVING THE HARDEST EDGE CASES (Masterclass)
  let edgeCases = "";
  if (subject === "Polity") {
    edgeCases = "Hardest Edge Cases to Remember: (1) Article 368 constitutional amendment bills cannot be resolved via Joint Sittings; the President *must* give assent to them. (2) Fundamental Rights can be suspended during emergencies, but Articles 20 and 21 *never* lose enforcement validity. (3) Basic Structure Doctrine (Kesavananda Bharati, 1973) limits Parliament's absolute amending power, but 'Basic Structure' is not defined anywhere in the Constitution.";
  } else if (subject === "Economy") {
    edgeCases = "Hardest Edge Cases to Remember: (1) RBI's sterilized intervention utilizes Open Market Operations to absorb rupee liquidity created by buying foreign dollars, maintaining domestic inflation stability. (2) External Commercial Borrowings (ECBs) are logged under the Capital Account of BoP, but interest payments on ECBs are logged under the Current Account. (3) Revenue Deficit does not create assets, whereas Capital Deficit is associated with debt used for capital asset building.";
  } else if (subject === "Geography") {
    edgeCases = "Hardest Edge Cases to Remember: (1) Jet Streams are high-altitude westerly winds that flow in a wavy path (Rossby waves); the Subtropical Westerly Jet stream pushes monsoonal troughs over Northern India. (2) Temperature inversions occur when warm air lies above cold air, capping pollution and creating stable atmospheric traps. (3) Ocean currents are driven by wind, salinity, and temperature, with upwelling zones bringing nutrient-rich deep water to the surface, supporting major global fisheries.";
  } else if (subject.includes("Environment") || subject.includes("Ecology")) {
    edgeCases = "Hardest Edge Cases to Remember: (1) Core zones of Biosphere Reserves are strictly regulated under the Wildlife Protection Act, allowing no human habitation; buffer zones allow research, and transition zones permit agricultural settlements. (2) Ramsar wetlands are logged in the Montreux Record if they face urgent ecological threats due to human intervention. (3) CBD's Cartagena Protocol governs Biosafety (LMOs), while the Nagoya Protocol handles Access and Benefit Sharing (ABS) of genetic resources.";
  } else if (subject.includes("History")) {
    edgeCases = "Hardest Edge Cases to Remember: (1) The first Buddhist council was at Rajgriha (Ajatashatru), the second at Vaishali (Kalasoka), the third at Pataliputra (Ashoka), and the fourth at Kashmir (Kanishka), which split Buddhism into Hinayana and Mahayana. (2) The Indian National Congress's 1929 Lahore session adopted the resolution for Purna Swaraj (complete independence), led by Jawaharlal Nehru. (3) Ashoka's Major Rock Edicts (e.g., Edict XIII) mention Dhamma policies and name contemporary Greek kings, cementing chronological sync.";
  } else {
    edgeCases = "Hardest Edge Cases to Remember: (1) CRISPR-Cas9 utilizes a guide RNA to direct the Cas9 enzyme to cut double-stranded DNA at precise locations, allowing targeted gene insertion or deletion. (2) mRNA vaccines use lipid nanoparticles to deliver mRNA blueprints encoding the viral spike protein directly into human host cells, bypassing cell nucleus entry. (3) Orbits matters: GSLV places payloads in Geostationary Transfer Orbit (GTO) at 36,000 km, while PSLV targets Sun-Synchronous Polar Orbits at 600-800 km.";
  }
  
  return {
    foundation,
    optionsAnalysis,
    triggers,
    edgeCases
  };
}
