// ============ LOADER ============
const loader = document.getElementById('loader');
const beginBtn = document.getElementById('beginBtn');
const site = document.getElementById('site');
const voiceHey = document.getElementById('voiceHey');

beginBtn.addEventListener('click', () => {
  try { voiceHey.currentTime = 0; voiceHey.play().catch(() => {}); } catch (e) {}
  loader.classList.add('fade-out');
  site.classList.remove('hidden');
  document.body.style.overflow = 'auto';
  setTimeout(() => { loader.style.display = 'none'; }, 1300);
  window.scrollTo(0, 0);
});

// ============ SCROLL REVEAL ============
const revealTargets = document.querySelectorAll('.story-block, .sunset-diptych');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealTargets.forEach(el => revealObserver.observe(el));

// ============ QUIZ ============
const quizData = [
  {
    q: "What's my favourite thing about you?",
    options: ["Your smile", "Your empathy", "Your eyes", "Everything — there's nothing I don't love"],
    correctIndex: 3,
    feedback: "There isn't one thing I don't love. I like everything about you.",
  },
  {
    q: "What annoys me the most (and I still don't really mind)?",
    options: ["Being late to plans", "Waiting for you to get ready", "Losing at games", "Cold coffee"],
    correctIndex: 1,
    feedback: "It does annoy me, ngl. But then you walk out looking like this, and suddenly waiting feels worth it.",
    image: "photos/hotel-red-dress-kiss.jpg"
  },
  {
    q: "What do I admire most in you?",
    options: ["How ambitious you are", "How much empathy you carry", "How organised you are", "Your sense of humour"],
    correctIndex: 1,
    feedback: "You have so much empathy in you. It's one of the things I love most about who you are.",
  },
  {
    q: "Where did I fall in love with you all over again?",
    options: ["A rooftop in Delhi", "La Digue, Seychelles", "Our own kitchen", "Phi Phi Islands"],
    correctIndex: 1,
    feedback: "Watching you fall in love with La Digue is a memory I'll keep forever.",
  },
  {
    q: "What do I want, more than anything?",
    options: ["To travel the world", "Every chapter to have you in it", "A quiet life", "To make you proud"],
    correctIndex: 1,
    feedback: "Every chapter, every place, every year — I want you in all of it. Forever.",
  },
];

const quizContainer = document.getElementById('quizContainer');
let quizIndex = 0;

function renderQuiz() {
  quizContainer.innerHTML = '';
  if (quizIndex >= quizData.length) {
    const done = document.createElement('div');
    done.className = 'quiz-done active';
    done.innerHTML = `<p>You know me better than I thought. ♡</p>`;
    quizContainer.appendChild(done);
    return;
  }
  const item = quizData[quizIndex];
  const wrap = document.createElement('div');
  wrap.className = 'quiz-question active';

  const qText = document.createElement('p');
  qText.className = 'quiz-q-text';
  qText.textContent = item.q;
  wrap.appendChild(qText);

  const optsWrap = document.createElement('div');
  optsWrap.className = 'quiz-options';

  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next';
  nextBtn.textContent = quizIndex === quizData.length - 1 ? 'Finish' : 'Next question →';
  nextBtn.addEventListener('click', () => {
    quizIndex++;
    renderQuiz();
  });

  item.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      Array.from(optsWrap.children).forEach(c => c.style.pointerEvents = 'none');
      optsWrap.children[item.correctIndex].classList.add('correct');
      let html = item.feedback;
      feedback.innerHTML = html;
      if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        feedback.appendChild(img);
      }
      feedback.classList.add('show');
      nextBtn.classList.add('show');
    });
    optsWrap.appendChild(btn);
  });

  wrap.appendChild(optsWrap);
  wrap.appendChild(feedback);
  wrap.appendChild(nextBtn);
  quizContainer.appendChild(wrap);
}
renderQuiz();

// ============ CONFESSIONS ============
const confessions = [
  "I admire how kind you are.",
  "I know you don't even realise how beautiful your heart is.",
  "You've loved me without asking me to change.",
  "I genuinely can't think of one thing I'd change about you.",
  "I'll always wait an extra hour if it means I get to see you smile.",
  "You make even the ordinary days feel like ones worth remembering.",
];

const confessionsGrid = document.getElementById('confessionsGrid');
confessions.forEach(text => {
  const card = document.createElement('div');
  card.className = 'confession-card';
  card.addEventListener('click', () => {
    if (card.classList.contains('revealed')) return;
    card.classList.add('revealed');
    card.textContent = text;
  });
  confessionsGrid.appendChild(card);
});

// ============ SECRET HEART ============
const secretHeart = document.getElementById('secretHeart');
const secretProgress = document.getElementById('secretProgress');
const secretReveal = document.getElementById('secretReveal');
let tapCount = 0;

secretHeart.addEventListener('click', () => {
  if (tapCount >= 5) return;
  tapCount++;
  if (tapCount < 5) {
    secretProgress.textContent = `${tapCount} / 5`;
  } else {
    secretProgress.textContent = '';
    secretReveal.classList.add('show');
  }
});

// ============ MEMORY CONSTELLATION ============
const memories = [
  { img: 'photos/date-restaurant.jpg', label: 'First Date', caption: "I don't remember what we ordered. I remember how happy I felt." },
  { img: 'photos/engagement-ring.jpg', label: 'The Ring', caption: 'The moment it became official.' },
  { img: 'photos/proposal-kneel.jpg', label: 'Proposal', caption: 'One knee, one question, one yes — Phi Phi Islands, 19 Jan 2025.' },
  { img: 'photos/scuba-heart-hands.jpg', label: 'Scuba Diving', caption: 'Thirty feet underwater, and you still made time for a heart.' },
  { img: 'photos/sunset-orange-dress-1.jpg', label: 'La Digue', caption: 'You in that orange dress, watching the waves break.' },
  { img: 'photos/wedding-smile-close.jpg', label: 'Wedding', caption: 'Out of everyone there, my eyes never left you. 24 Feb 2025.' },
  { img: 'photos/night-pink-dinner.jpg', label: 'A Night Out', caption: 'Every place became beautiful because you were there.' },
  { img: 'photos/rainy-garden-walk.jpg', label: 'The Long Wait', caption: 'You made me wait for hours. I never really minded.' },
];

const sky = document.getElementById('constellationSky');
const positions = [
  [10, 20], [30, 55], [50, 15], [68, 45], [85, 25], [20, 75], [55, 70], [78, 68]
];

memories.forEach((m, i) => {
  const node = document.createElement('div');
  node.className = 'star-node';
  const [left, top] = positions[i % positions.length];
  node.style.left = left + '%';
  node.style.top = top + '%';
  node.innerHTML = `<img src="${m.img}" alt="${m.label}"><span class="star-label">${m.label}</span>`;
  node.addEventListener('click', () => openConstellation(m));
  sky.appendChild(node);
});

const cmModal = document.getElementById('constellationModal');
const cmImage = document.getElementById('cmImage');
const cmCaption = document.getElementById('cmCaption');
const cmClose = document.getElementById('cmClose');

function openConstellation(m) {
  cmImage.src = m.img;
  cmImage.alt = m.label;
  cmCaption.textContent = m.caption;
  cmModal.classList.add('show');
}
cmClose.addEventListener('click', () => cmModal.classList.remove('show'));
cmModal.addEventListener('click', (e) => { if (e.target === cmModal) cmModal.classList.remove('show'); });

// ============ LETTER ENVELOPE ============
const envelope = document.getElementById('envelope');
const letterPaper = document.getElementById('letterPaper');
envelope.addEventListener('click', () => {
  if (envelope.classList.contains('opened')) return;
  envelope.classList.add('opened');
  setTimeout(() => letterPaper.classList.add('show'), 400);
});

// ============ ENDING VOICE REPLAY ============
const endingVoiceBtn = document.getElementById('endingVoiceBtn');
endingVoiceBtn.addEventListener('click', () => {
  try { voiceHey.currentTime = 0; voiceHey.play().catch(() => {}); } catch (e) {}
});
