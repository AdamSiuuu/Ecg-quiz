'use strict';

const QUESTIONS = [
  // FOUNDATIONS — 7 questions
  {
    id: 'e1', level: 'easy', topic: 'ECG PURPOSE',
    question: 'What does an electrocardiogram (ECG) record?',
    options: [
      'The electrical activity of the heart',
      'The amount of oxygen carried by the blood',
      'The pressure inside the heart chambers',
      'The exact force of each heartbeat'
    ],
    correct: 'The electrical activity of the heart',
    explanation: 'An ECG records electrical signals produced by the heart over time using electrodes on the skin. It does not directly measure blood pressure, blood oxygen, or the mechanical force of each beat.'
  },
  {
    id: 'e2', level: 'easy', topic: 'ECG WAVES',
    question: 'On this simplified ECG, which labeled wave represents atrial depolarization?',
    waveform: 'labeled',
    options: ['The P wave', 'The QRS complex', 'The T wave', 'The ST segment'],
    correct: 'The P wave',
    explanation: 'The P wave represents depolarization (electrical activation) of the atria. In a typical sinus beat, it appears before the QRS complex.'
  },
  {
    id: 'e3', level: 'easy', topic: 'ECG WAVES',
    question: 'What electrical event does the QRS complex mainly represent?',
    options: [
      'Atrial depolarization',
      'Ventricular depolarization',
      'Ventricular repolarization',
      'The resting state of the SA node'
    ],
    correct: 'Ventricular depolarization',
    explanation: 'The QRS complex represents ventricular depolarization. Atrial repolarization also occurs around this time but is usually hidden within the much larger QRS complex.'
  },
  {
    id: 'e4', level: 'easy', topic: 'ECG WAVES',
    question: 'What does the T wave mainly represent?',
    options: [
      'Atrial depolarization',
      'Ventricular depolarization',
      'Ventricular repolarization',
      'Electrical activity from the skin electrodes'
    ],
    correct: 'Ventricular repolarization',
    explanation: 'The T wave represents ventricular repolarization, the electrical recovery phase of the ventricles after depolarization.'
  },
  {
    id: 'e5', level: 'easy', topic: 'HEART RATE',
    question: 'For a typical adult at rest, which range is commonly used as the reference range for heart rate?',
    options: ['20–40 beats per minute', '40–59 beats per minute', '60–100 beats per minute', '120–180 beats per minute'],
    correct: '60–100 beats per minute',
    explanation: 'A commonly used adult resting heart-rate reference range is 60–100 beats per minute. Age, fitness, medications, symptoms, and clinical context can affect how a rate is interpreted.'
  },
  {
    id: 'e6', level: 'easy', topic: 'RHYTHM RECOGNITION',
    question: 'Which description best fits a typical normal sinus rhythm?',
    waveform: 'normal',
    options: [
      'Regular beats with a consistent P wave before each QRS complex',
      'No QRS complexes anywhere on the strip',
      'Completely irregular beats with no distinct P waves',
      'A P wave that always follows the QRS complex'
    ],
    correct: 'Regular beats with a consistent P wave before each QRS complex',
    explanation: 'A typical sinus rhythm is organized by the sinoatrial (SA) node. The rhythm is usually regular, with a consistent P wave before each QRS complex; rate and the full ECG still matter when assessing a real tracing.'
  },
  {
    id: 'e7', level: 'easy', topic: 'ECG LEADS',
    question: 'Why does a standard 12-lead ECG provide more information than a single ECG lead?',
    options: [
      'It records the heart from multiple electrical viewpoints',
      'It measures twelve different blood pressure readings',
      'It records twelve separate heartbeats at once',
      'It removes the need to interpret the waveform'
    ],
    correct: 'It records the heart from multiple electrical viewpoints',
    explanation: 'The standard 12-lead ECG uses electrodes to create twelve views of the heart’s electrical activity in different directions. A “lead” is a viewpoint, not simply one separate electrode.'
  },

  // RHYTHM BASICS — 7 questions
  {
    id: 'm1', level: 'medium', topic: 'PR INTERVAL',
    question: 'The PR interval is measured from which point to which point?',
    options: [
      'The start of the P wave to the start of the QRS complex',
      'The start of the QRS complex to the end of the T wave',
      'The peak of one R wave to the peak of the next R wave',
      'The end of the T wave to the start of the next P wave'
    ],
    correct: 'The start of the P wave to the start of the QRS complex',
    explanation: 'The PR interval extends from the beginning of the P wave to the beginning of the QRS complex. It includes atrial depolarization and the time taken for the impulse to conduct toward the ventricles.'
  },
  {
    id: 'm2', level: 'medium', topic: 'PAPER TIMING',
    question: 'At the standard paper speed of 25 mm/s, how much time does one small horizontal box represent?',
    options: ['0.02 seconds', '0.04 seconds', '0.20 seconds', '1.00 second'],
    correct: '0.04 seconds',
    explanation: 'At 25 mm/s, a 1 mm small box represents 1 ÷ 25 second, or 0.04 s. Five small boxes make one large box, which represents 0.20 s.'
  },
  {
    id: 'm3', level: 'medium', topic: 'HEART RATE',
    question: 'On a regular rhythm strip, there are 4 large boxes between consecutive R-wave peaks. Using the 300 rule, what is the estimated rate?',
    options: ['50 beats/min', '60 beats/min', '75 beats/min', '120 beats/min'],
    correct: '75 beats/min',
    explanation: 'For a regular rhythm on standard ECG paper, estimate rate with 300 divided by the number of large boxes between R waves. Here, 300 ÷ 4 = 75 beats/min.'
  },
  {
    id: 'm4', level: 'medium', topic: 'RHYTHM TERMS',
    question: 'For a typical adult at rest, the term bradycardia generally describes a heart rate below:',
    options: ['40 beats/min', '60 beats/min', '100 beats/min', '120 beats/min'],
    correct: '60 beats/min',
    explanation: 'Bradycardia generally refers to an adult heart rate below 60 beats/min. A slower rate can be normal in some people, including trained athletes; the number alone does not determine whether it is a problem.'
  },
  {
    id: 'm5', level: 'medium', topic: 'RHYTHM TERMS',
    question: 'For a typical adult at rest, tachycardia generally means a heart rate above:',
    options: ['50 beats/min', '60 beats/min', '100 beats/min', '200 beats/min'],
    correct: '100 beats/min',
    explanation: 'Tachycardia generally refers to an adult heart rate above 100 beats/min. Exercise, fever, stress, medication, and many other factors may increase heart rate, so context matters.'
  },
  {
    id: 'm6', level: 'medium', topic: 'RHYTHM RECOGNITION',
    question: 'Which ECG pattern is characteristic of atrial fibrillation (AF) when atrioventricular conduction is present?',
    waveform: 'afib',
    options: [
      'Irregularly irregular R–R intervals and no distinct repeating P waves',
      'A perfectly regular rhythm with one clear P wave before each QRS',
      'A flat line with no electrical activity at all',
      'Only tall T waves with no QRS complexes'
    ],
    correct: 'Irregularly irregular R–R intervals and no distinct repeating P waves',
    explanation: 'Atrial fibrillation commonly produces irregularly irregular R–R intervals and no distinct repeating P waves. This teaching illustration is simplified; a real diagnosis requires assessment of an actual ECG by a qualified clinician.'
  },
  {
    id: 'm7', level: 'medium', topic: 'QT INTERVAL',
    question: 'What does the QT interval broadly cover?',
    options: [
      'Only atrial depolarization',
      'Ventricular depolarization through ventricular repolarization',
      'Only the time between two R-wave peaks',
      'The time between the P wave and the start of the QRS complex'
    ],
    correct: 'Ventricular depolarization through ventricular repolarization',
    explanation: 'The QT interval runs from the start of the QRS complex to the end of the T wave. It spans ventricular depolarization and repolarization; interpretation depends on heart rate and often uses a corrected QT (QTc).'
  },

  // SIGNAL ANALYSIS — 7 questions
  {
    id: 'h1', level: 'hard', topic: 'INTERVALS',
    question: 'In a typical adult ECG, which statement best describes the usual QRS duration reference?',
    options: [
      'It is generally less than 120 milliseconds',
      'It is normally 200–300 milliseconds',
      'It must be exactly 40 milliseconds',
      'It is measured from the start of P to the start of QRS'
    ],
    correct: 'It is generally less than 120 milliseconds',
    explanation: 'A typical adult QRS duration is usually under 120 ms. A wider QRS can have several causes and needs interpretation with the full ECG and clinical context; this quiz is not intended for diagnosis.'
  },
  {
    id: 'h2', level: 'hard', topic: 'HEART RATE',
    question: 'At 25 mm/s, 15 small boxes separate two consecutive R-wave peaks on a regular rhythm. Using the 1500 rule, what is the estimated rate?',
    options: ['60 beats/min', '75 beats/min', '100 beats/min', '150 beats/min'],
    correct: '100 beats/min',
    explanation: 'At 25 mm/s, the small-box method estimates rate on a regular rhythm as 1500 divided by the number of small boxes between R waves. 1500 ÷ 15 = 100 beats/min.'
  },
  {
    id: 'h3', level: 'hard', topic: 'PR INTERVAL',
    question: 'A measured PR interval is 240 ms on an adult ECG. Which statement is the most appropriate basic interpretation?',
    options: [
      'It is longer than the usual 120–200 ms reference range',
      'It is shorter than the usual reference range',
      'It proves the patient has atrial fibrillation',
      'It measures ventricular repolarization'
    ],
    correct: 'It is longer than the usual 120–200 ms reference range',
    explanation: 'The usual adult PR interval reference range is about 120–200 ms. A 240 ms interval is prolonged; in the right ECG context this may be consistent with first-degree AV block, but one measurement alone is not a complete diagnosis.'
  },
  {
    id: 'h4', level: 'hard', topic: 'RHYTHM RECOGNITION',
    question: 'This simplified strip has a slow, regular rhythm. If the measured rate is 48 beats/min and each QRS is preceded by a consistent P wave, which term best describes the pattern?',
    waveform: 'brady',
    options: ['Sinus bradycardia pattern', 'Atrial fibrillation pattern', 'Sinus tachycardia pattern', 'Ventricular fibrillation pattern'],
    correct: 'Sinus bradycardia pattern',
    explanation: 'A rate below 60 beats/min with a regular sinus pattern (consistent P waves before each QRS) can be described as sinus bradycardia. The trace is illustrative, and clinical significance depends on symptoms and context.'
  },
  {
    id: 'h5', level: 'hard', topic: 'ECG MEASUREMENT',
    question: 'Why should the QT interval not be interpreted using one fixed time cutoff without considering heart rate?',
    options: [
      'The QT interval varies with heart rate, so correction may be needed',
      'The QT interval measures only the height of the R wave',
      'The QT interval cannot be seen on an ECG',
      'The QT interval is always identical in every person'
    ],
    correct: 'The QT interval varies with heart rate, so correction may be needed',
    explanation: 'The QT interval normally changes with heart rate. Clinicians often consider a rate-corrected value (QTc) and the method used, rather than interpreting the raw QT interval in isolation.'
  },
  {
    id: 'h6', level: 'hard', topic: 'PAPER TIMING',
    question: 'At 25 mm/s, five small boxes make one large box. What duration does one large box represent?',
    options: ['0.04 seconds', '0.10 seconds', '0.20 seconds', '0.50 seconds'],
    correct: '0.20 seconds',
    explanation: 'Each small box represents 0.04 s at 25 mm/s. Five small boxes make one large box: 5 × 0.04 = 0.20 s.'
  },
  {
    id: 'h7', level: 'hard', topic: 'RHYTHM RECOGNITION',
    question: 'A regular rhythm has 3 large boxes between R-wave peaks on standard paper. What is the estimated rate using the 300 rule?',
    options: ['60 beats/min', '75 beats/min', '100 beats/min', '150 beats/min'],
    correct: '100 beats/min',
    explanation: 'Use 300 ÷ the number of large boxes between R waves for a regular rhythm. 300 ÷ 3 = 100 beats/min. The estimate assumes standard paper speed and a reasonably regular rhythm.'
  }
];

const LEVELS = {
  easy: { label: 'Foundations', shortLabel: 'FOUNDATIONS', buttonLabel: 'Start Foundations', topic: 'Level 01' },
  medium: { label: 'Rhythm basics', shortLabel: 'RHYTHM BASICS', buttonLabel: 'Start Rhythm Basics', topic: 'Level 02' },
  hard: { label: 'Signal analysis', shortLabel: 'SIGNAL ANALYSIS', buttonLabel: 'Start Signal Analysis', topic: 'Level 03' }
};
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];
const BADGES = {
  easy: { title: 'Foundations Master', icon: '🌱', description: 'You mastered the ECG foundations.' },
  medium: { title: 'Rhythm Detective', icon: '🫀', description: 'You solved every rhythm-basics question.' },
  hard: { title: 'Signal Analyst', icon: '⚡', description: 'You aced the signal-analysis challenge.' }
};
const BADGE_STORAGE_KEY = 'ecg-quest-earned-badges';
const QUESTION_TIME_LIMIT = 15;

function getEarnedBadges() {
  try {
    const saved = JSON.parse(localStorage.getItem(BADGE_STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved.filter((level) => Object.hasOwn(BADGES, level)) : [];
  } catch (error) {
    return [];
  }
}

function saveEarnedBadge(level) {
  const earned = new Set(getEarnedBadges());
  earned.add(level);
  try { localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify([...earned])); } catch (error) { /* Badges still appear for this round if storage is unavailable. */ }
}

function renderBadgeCollection() {
  const container = $('#badge-collection-list');
  if (!container) return;
  const earned = new Set(getEarnedBadges());
  container.replaceChildren();
  Object.entries(BADGES).forEach(([level, badge]) => {
    const item = document.createElement('div');
    item.className = `collection-badge${earned.has(level) ? ' is-earned' : ' is-locked'}`;
    const icon = document.createElement('span');
    icon.className = 'collection-badge-icon';
    icon.textContent = earned.has(level) ? badge.icon : '🔒';
    icon.setAttribute('aria-hidden', 'true');
    const details = document.createElement('span');
    details.className = 'collection-badge-details';
    const name = document.createElement('strong');
    name.textContent = badge.title;
    const status = document.createElement('small');
    status.textContent = earned.has(level) ? 'UNLOCKED' : '7/7 CORRECT TO UNLOCK';
    details.append(name, status);
    item.append(icon, details);
    container.append(item);
  });
}


let selectedLevel = 'easy';
let quizQuestions = [];
let currentOptions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let answerRecords = [];
let questionStartedAt = 0;
let timerInterval = null;
let timeRemaining = QUESTION_TIME_LIMIT;

const $ = (selector) => document.querySelector(selector);
const welcomeScreen = $('#welcome-screen');
const quizScreen = $('#quiz-screen');
const resultsScreen = $('#results-screen');
const startButton = $('#start-quiz');
const answerGrid = $('#answer-grid');
const feedbackPanel = $('#feedback-panel');
const nextButton = $('#next-question');

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showScreen(name) {
  if (name !== 'quiz') stopQuestionTimer();
  if (name === 'welcome') renderBadgeCollection();
  welcomeScreen.hidden = name !== 'welcome';
  quizScreen.hidden = name !== 'quiz';
  resultsScreen.hidden = name !== 'results';
  if (name === 'welcome') window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'quiz') window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'results') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLevelSelection() {
  document.querySelectorAll('.level-card').forEach((card) => {
    const isSelected = card.dataset.level === selectedLevel;
    card.classList.toggle('is-selected', isSelected);
    card.setAttribute('aria-pressed', String(isSelected));
  });
  startButton.innerHTML = `${LEVELS[selectedLevel].buttonLabel} <span aria-hidden="true">→</span>`;
}

document.querySelectorAll('.level-card').forEach((card) => {
  card.addEventListener('click', () => {
    selectedLevel = card.dataset.level;
    updateLevelSelection();
  });
});

$('#jump-to-levels').addEventListener('click', (event) => {
  event.preventDefault();
  $('#levels').scrollIntoView({ behavior: 'smooth', block: 'start' });
  const firstCard = $('.level-card.is-selected');
  if (firstCard) firstCard.focus({ preventScroll: true });
});

$('#brand-home').addEventListener('click', (event) => {
  if (!welcomeScreen.hidden) return;
  event.preventDefault();
  showScreen('welcome');
});

$('#references-link').addEventListener('click', (event) => {
  event.preventDefault();
  $('#references').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

startButton.addEventListener('click', () => startQuiz(selectedLevel));
$('#play-again').addEventListener('click', () => startQuiz(selectedLevel));
$('#choose-level').addEventListener('click', () => showScreen('welcome'));
$('#exit-quiz').addEventListener('click', () => {
  const hasProgress = currentIndex > 0 || answered;
  if (!hasProgress || window.confirm('Leave this round and return to the level selection? Your current answers will not be saved.')) {
    showScreen('welcome');
  }
});
nextButton.addEventListener('click', advanceQuestion);

function stopQuestionTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateQuestionTimer() {
  const elapsed = (performance.now() - questionStartedAt) / 1000;
  timeRemaining = Math.max(0, QUESTION_TIME_LIMIT - elapsed);
  const displaySeconds = Math.ceil(timeRemaining);
  $('#timer-count').textContent = `${displaySeconds}s`;
  $('#timer-progress').setAttribute('aria-valuenow', String(displaySeconds));
  $('#timer-fill').style.width = `${(timeRemaining / QUESTION_TIME_LIMIT) * 100}%`;
  $('#timer-fill').classList.toggle('is-urgent', timeRemaining <= 5);
  $('#timer-count').classList.toggle('is-urgent', timeRemaining <= 5);
  if (timeRemaining <= 0) chooseAnswer(null, true);
}

function startQuestionTimer() {
  stopQuestionTimer();
  questionStartedAt = performance.now();
  timeRemaining = QUESTION_TIME_LIMIT;
  updateQuestionTimer();
  timerInterval = setInterval(updateQuestionTimer, 100);
}

function startQuiz(level) {
  stopQuestionTimer();
  selectedLevel = level;
  updateLevelSelection();
  quizQuestions = shuffle(QUESTIONS.filter((question) => question.level === level));
  currentIndex = 0;
  score = 0;
  answered = false;
  answerRecords = [];
  $('#live-score').textContent = '0';
  $('#quiz-level-label').textContent = LEVELS[level].shortLabel;
  nextButton.disabled = true;
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[currentIndex];
  if (!question) {
    renderResults();
    return;
  }

  answered = false;
  currentOptions = shuffle(question.options);
  $('#question-counter').textContent = `QUESTION ${String(currentIndex + 1).padStart(2, '0')} / ${String(quizQuestions.length).padStart(2, '0')}`;
  $('#question-topic').textContent = question.topic;
  $('#question-title').textContent = question.question;
  $('#live-score').textContent = String(score);
  $('#feedback-panel').hidden = true;
  $('#feedback-panel').classList.remove('is-wrong');
  $('#feedback-title').textContent = '';
  $('#feedback-explanation').textContent = '';
  $('#feedback-icon').textContent = '✓';
  $('#choose-level').setAttribute('aria-label', 'Choose another difficulty level');
  nextButton.disabled = true;
  nextButton.innerHTML = 'Choose an answer <span aria-hidden="true">→</span>';
  $('#progress-fill').style.width = `${(currentIndex / quizQuestions.length) * 100}%`;
  $('#progress-bar').setAttribute('aria-valuenow', String(currentIndex));

  const waveformContainer = $('#waveform-container');
  if (question.waveform) {
    waveformContainer.hidden = false;
    waveformContainer.innerHTML = createWaveform(question.waveform);
  } else {
    waveformContainer.hidden = true;
    waveformContainer.innerHTML = '';
  }

  answerGrid.replaceChildren();
  currentOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.dataset.answer = option;
    const letter = document.createElement('span');
    letter.className = 'answer-letter';
    letter.textContent = OPTION_LETTERS[index];
    letter.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = option;
    button.append(letter, text);
    button.addEventListener('click', () => chooseAnswer(option));
    answerGrid.append(button);
  });
  $('#question-title').focus({ preventScroll: true });
  startQuestionTimer();
}

function chooseAnswer(chosen, timedOut = false) {
  if (answered) return;
  stopQuestionTimer();
  const question = quizQuestions[currentIndex];
  const elapsedSeconds = Math.min(QUESTION_TIME_LIMIT, Math.max(0, (performance.now() - questionStartedAt) / 1000));
  const isCorrect = !timedOut && chosen === question.correct;
  answered = true;
  if (isCorrect) score += 1;
  answerRecords.push({ question, chosen: timedOut ? 'No answer — time expired' : chosen, isCorrect, timeSeconds: elapsedSeconds, timedOut });

  answerGrid.querySelectorAll('.answer-option').forEach((button) => {
    button.disabled = true;
    const option = button.dataset.answer;
    if (option === question.correct) button.classList.add('is-correct');
    else if (option === chosen) button.classList.add('is-wrong');
    else button.classList.add('is-muted');
    if (option === question.correct) {
      const letter = button.querySelector('.answer-letter');
      letter.textContent = '✓';
    } else if (option === chosen && !isCorrect) {
      button.querySelector('.answer-letter').textContent = '×';
    }
  });

  $('#live-score').textContent = String(score);
  const feedback = $('#feedback-panel');
  feedback.hidden = false;
  feedback.classList.toggle('is-wrong', !isCorrect);
  $('#feedback-icon').textContent = isCorrect ? '✓' : '×';
  $('#feedback-title').textContent = timedOut ? 'Time is up!' : (isCorrect ? 'Correct — well done!' : 'Not quite — keep learning.');
  $('#feedback-explanation').textContent = `${timedOut ? `You ran out of time. Correct answer: ${question.correct}. ` : (!isCorrect ? `Correct answer: ${question.correct}. ` : '')}${question.explanation}`;
  nextButton.disabled = false;
  nextButton.innerHTML = currentIndex === quizQuestions.length - 1
    ? 'See my results <span aria-hidden="true">→</span>'
    : 'Next question <span aria-hidden="true">→</span>';
  $('#progress-fill').style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;
  $('#progress-bar').setAttribute('aria-valuenow', String(currentIndex + 1));
}

function advanceQuestion() {
  if (!answered) return;
  currentIndex += 1;
  if (currentIndex >= quizQuestions.length) renderResults();
  else renderQuestion();
}

function renderResults() {
  showScreen('results');
  const total = quizQuestions.length;
  const correct = answerRecords.filter((record) => record.isCorrect).length;
  const missed = total - correct;
  const percent = Math.round((correct / total) * 100);
  const ring = $('#score-ring');
  ring.style.setProperty('--score', `${percent}%`);
  $('#result-percent').textContent = `${percent}%`;
  $('#correct-count').textContent = String(correct);
  $('#review-count').textContent = String(missed);
  $('#total-count').textContent = String(total);
  $('#result-level').textContent = LEVELS[selectedLevel].shortLabel;
  const averageTime = answerRecords.reduce((sum, record) => sum + record.timeSeconds, 0) / Math.max(1, answerRecords.length);
  $('#average-time').textContent = `${averageTime.toFixed(1)}s`;

  let title = 'A good start!';
  let message = 'Review the explanations, then give this level another try.';
  if (percent === 100) {
    title = 'Perfect round!';
    message = 'Excellent work. You answered every question correctly.';
  } else if (percent >= 80) {
    title = 'Great progress!';
    message = 'Your ECG fundamentals are coming together. Review any missed answers to keep improving.';
  } else if (percent >= 60) {
    title = 'You are building the basics.';
    message = 'You have a solid starting point. The answer review will help you connect the concepts.';
  }
  $('#results-title').textContent = title;
  $('#results-message').textContent = message;

  const earnedBadge = $('#earned-badge');
  if (percent === 100) {
    const badge = BADGES[selectedLevel];
    const alreadyEarned = getEarnedBadges().includes(selectedLevel);
    saveEarnedBadge(selectedLevel);
    $('#earned-badge-title').textContent = badge.title;
    $('#earned-badge-message').textContent = alreadyEarned
      ? `Perfect score again! Your ${badge.title} badge is safely in your collection.`
      : `Perfect score! ${badge.description} Your badge is now in your collection.`;
    earnedBadge.hidden = false;
    earnedBadge.classList.toggle('is-repeat', alreadyEarned);
  } else {
    earnedBadge.hidden = true;
    earnedBadge.classList.remove('is-repeat');
  }

  const list = $('#review-list');
  list.replaceChildren();
  answerRecords.forEach((record, index) => {
    const { question, chosen, isCorrect } = record;
    const article = document.createElement('article');
    article.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

    const head = document.createElement('div');
    head.className = 'review-item-head';
    const titleEl = document.createElement('h4');
    titleEl.textContent = `${String(index + 1).padStart(2, '0')}. ${question.question}`;
    const status = document.createElement('span');
    status.className = `review-status ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
    status.textContent = record.timedOut ? '⌛ TIME UP' : (isCorrect ? '✓ CORRECT' : '↻ REVIEW');
    head.append(titleEl, status);

    const answers = document.createElement('div');
    answers.className = 'review-answer';
    appendReviewValue(answers, 'Your answer', chosen, isCorrect ? 'correct-value' : '');
    appendReviewValue(answers, 'Response time', `${record.timeSeconds.toFixed(1)} seconds`, '');
    if (!isCorrect) appendReviewValue(answers, 'Correct answer', question.correct, 'correct-value');

    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';
    explanation.textContent = question.explanation;
    article.append(head, answers, explanation);
    list.append(article);
  });
}

function appendReviewValue(parent, labelText, valueText, valueClass) {
  const label = document.createElement('span');
  label.className = 'answer-label';
  label.textContent = labelText;
  const value = document.createElement('span');
  value.className = `answer-value ${valueClass}`.trim();
  value.textContent = valueText;
  parent.append(label, value);
}

function createWaveform(type) {
  const title = {
    labeled: 'Simplified ECG with the P wave, QRS complex, and T wave labeled',
    normal: 'Illustrative regular ECG rhythm with repeated P QRS and T waveforms',
    afib: 'Simplified illustrative irregular rhythm with no distinct repeating P waves',
    brady: 'Illustrative slower regular ECG rhythm'
  }[type] || 'Illustrative ECG waveform';
  const gridId = `grid-${type}`;
  const defs = `<defs>
    <pattern id="${gridId}-small" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f2e0e3" stroke-width=".7"/></pattern>
    <pattern id="${gridId}-big" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="url(#${gridId}-small)"/><path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e9cbd0" stroke-width="1"/></pattern>
  </defs>`;

  if (type === 'labeled') {
    const path = 'M12 112 L72 112 Q86 112 99 99 Q111 82 124 112 L164 112 L178 125 L192 45 L207 139 L222 112 L277 112 Q292 112 307 89 Q322 72 338 112 L386 112 L400 125 L414 45 L429 139 L444 112 L500 112 Q515 112 530 89 Q545 72 561 112 L610 112 L624 125 L638 45 L653 139 L668 112 L768 112';
    return `<svg viewBox="0 0 780 170" role="img" aria-label="${title}">${defs}<rect width="780" height="170" fill="#fffafb"/><rect width="780" height="170" fill="url(#${gridId}-big)"/><path d="${path}" fill="none" stroke="#148578" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"/><g fill="#425b60" font-family="Arial, sans-serif" font-size="12" font-weight="700"><text x="110" y="59" text-anchor="middle">P wave</text><text x="200" y="26" text-anchor="middle">QRS complex</text><text x="323" y="58" text-anchor="middle">T wave</text></g><g stroke="#9aacab" stroke-width="1" stroke-dasharray="3 3"><path d="M110 64V85"/><path d="M200 30V43"/><path d="M323 63V72"/></g></svg>`;
  }

  const width = 780;
  const height = 174;
  const baseline = 104;
  const duration = 6;
  const rate = type === 'brady' ? 48 : 75;
  const cycle = 60 / rate;
  const beats = [0.28, 1.02, 1.63, 2.68, 3.42, 4.25, 5.37];
  const gauss = (value, center, spread) => Math.exp(-0.5 * ((value - center) / spread) ** 2);
  const points = [];

  for (let x = 8; x <= width - 8; x += 2) {
    const t = (x / width) * duration;
    let signal = 0;
    if (type === 'afib') {
      // Deliberately schematic: irregular ventricular activations and a fibrillatory baseline.
      signal += 2.8 * Math.sin(2 * Math.PI * t * 7.2) + 1.4 * Math.sin(2 * Math.PI * t * 11.7);
      for (const beat of beats) {
        signal += 49 * gauss(t, beat, 0.019);
        signal -= 15 * gauss(t, beat + 0.035, 0.027);
        signal += 11 * gauss(t, beat + 0.19, 0.085);
      }
    } else {
      const phase = (t % cycle) / cycle;
      signal += 7 * gauss(phase, 0.19, 0.035);  // P
      signal -= 9 * gauss(phase, 0.365, 0.013); // Q
      signal += 51 * gauss(phase, 0.40, 0.010); // R
      signal -= 16 * gauss(phase, 0.43, 0.015); // S
      signal += 18 * gauss(phase, 0.66, 0.065); // T
    }
    const y = Math.max(16, Math.min(height - 13, baseline - signal));
    points.push(`${x},${y.toFixed(2)}`);
  }
  const path = `M${points.join(' L')}`;
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}">${defs}<rect width="${width}" height="${height}" fill="#fffafb"/><rect width="${width}" height="${height}" fill="url(#${gridId}-big)"/><path d="${path}" fill="none" stroke="#148578" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// Start in a consistent state and keep the selected level in sync with the button.
updateLevelSelection();
renderBadgeCollection();
