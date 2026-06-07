/* ===== MOODWAVE APP ===== */

// ---- Mood Data ----
// Songs: all public domain / CC-licensed from Internet Archive & ccMixter
const MOODS = {
  happy: {
    fa: 'شاد',
    en: 'Happy',
    color: '#FFD700',
    glow: '#FF8C00',
    bgColors: ['#2a1a00', '#1a1000', '#0a0800'],
    tracks: [
      {
        title: 'Rondo Alla Turca – Mozart',
        desc_fa: 'موزارت — یه ریتم شاد که همه می‌شناسنش',
        desc_en: 'Mozart\'s joyful Turkish March — timeless and bright',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Mozart_-_Rondo_Alla_Turca.ogg',
        duration: '3:31'
      },
      {
        title: 'Spring – Vivaldi (Four Seasons)',
        desc_fa: 'ویوالدی — بهار، سرزندگی و شادی خالص',
        desc_en: 'Vivaldi\'s Spring — pure joy and energy',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Vivaldi_-_Spring_I._Allegro_-_John_Harrison_violin.ogg',
        duration: '3:45'
      }
    ]
  },
  sad: {
    fa: 'غمگین',
    en: 'Sad',
    color: '#4A90D9',
    glow: '#1a3a6b',
    bgColors: ['#000a1a', '#00060f', '#000408'],
    tracks: [
      {
        title: 'Moonlight Sonata – Beethoven',
        desc_fa: 'بتهوون — سونات مهتاب، غم خالص',
        desc_en: 'Beethoven\'s Moonlight Sonata — melancholy in its purest form',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Beethoven_Moonlight_Sonata_1st_movement.ogg',
        duration: '5:06'
      },
      {
        title: 'Clair de Lune – Debussy',
        desc_fa: 'دبوسی — نور ماه، آرامش در غم',
        desc_en: 'Debussy\'s moonlit dream — beautiful sadness',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Clair_de_lune.ogg',
        duration: '4:54'
      }
    ]
  },
  energetic: {
    fa: 'پر‌انرژی',
    en: 'Energetic',
    color: '#FF3CAC',
    glow: '#784BA0',
    bgColors: ['#1a0020', '#0f0015', '#08000f'],
    tracks: [
      {
        title: 'In the Hall of the Mountain King – Grieg',
        desc_fa: 'گریگ — تو تالار پادشاه کوه، هیجان انگیز و پر انرژی',
        desc_en: 'Grieg\'s iconic crescendo — pure unstoppable energy',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Grieg_-_In_the_Hall_of_the_Mountain_King.ogg',
        duration: '2:32'
      },
      {
        title: 'Ride of the Valkyries – Wagner',
        desc_fa: 'واگنر — پرواز والکیری‌ها، قدرت مطلق',
        desc_en: 'Wagner\'s powerful ride — feel like a conqueror',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Ride_of_the_Valkyries.ogg',
        duration: '5:26'
      }
    ]
  },
  calm: {
    fa: 'آروم',
    en: 'Calm',
    color: '#00F5A0',
    glow: '#00D9F5',
    bgColors: ['#001a10', '#000f09', '#000805'],
    tracks: [
      {
        title: 'Gymnopédie No.1 – Erik Satie',
        desc_fa: 'اریک ساتی — ژیمنوپدی، آرامش محض',
        desc_en: 'Satie\'s dreamy piano — the sound of pure calm',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Gymnopedie_No_1.ogg',
        duration: '3:03'
      },
      {
        title: 'Air on the G String – Bach',
        desc_fa: 'باخ — آریا، نفس کشیدن عمیق در موزیک',
        desc_en: 'Bach\'s serene Air — breathe and let go',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Johann_Sebastian_Bach_-_Air_on_the_G_String.ogg',
        duration: '5:41'
      }
    ]
  },
  angry: {
    fa: 'عصبانی',
    en: 'Angry',
    color: '#FF4500',
    glow: '#8B0000',
    bgColors: ['#1a0000', '#0f0000', '#080000'],
    tracks: [
      {
        title: 'Symphony No.5 – Beethoven',
        desc_fa: 'بتهوون — سمفونی پنجم، همون چهار نت معروف',
        desc_en: 'Beethoven\'s 5th — raw power and fury unleashed',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Beethoven_symphony_no5_p1_orch.ogg',
        duration: '7:42'
      },
      {
        title: 'Toccata and Fugue – Bach',
        desc_fa: 'باخ — توکاتا، وزنه‌ای روی قلب',
        desc_en: 'Bach\'s dark organ — dramatic and overwhelming',
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Bach_toccata_fugue_dm.ogg',
        duration: '9:31'
      }
    ]
  },
  romantic: {
    fa: 'عاشقانه',
    en: 'Romantic',
    color: '#FF69B4',
    glow: '#C71585',
    bgColors: ['#1a0010', '#0f0009', '#080005'],
    tracks: [
      {
        title: 'Canon in D – Pachelbel',
        desc_fa: 'پاخلبل — کانون در ر، آهنگ عروسی‌های دنیا',
        desc_en: 'Pachelbel\'s Canon — the soundtrack of love',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Johann_Pachelbel_-_Canon_in_D_major.ogg',
        duration: '4:04'
      },
      {
        title: 'Nocturne Op.9 No.2 – Chopin',
        desc_fa: 'شوپن — نوکتورن، موزیک لحظه‌های خاص',
        desc_en: 'Chopin\'s Nocturne — tender and deeply romantic',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Frederic_Chopin_-_Nocturne_in_E-flat_major%2C_Op_9_No_2_%28Santiago_de_Murcia%29.ogg',
        duration: '4:32'
      }
    ]
  }
};

// ---- State ----
let state = {
  lang: 'fa',
  mood: null,
  trackIndex: 0,
  playing: false,
  progress: 0,
  progressTimer: null
};

const audio = new Audio();
audio.volume = 0.7;

// ---- DOM Refs ----
const $ = id => document.getElementById(id);
const canvas = $('bg-canvas');
const ctx = canvas.getContext('2d');
const particlesEl = $('particles');
const moodGrid = $('mood-grid');
const playerSection = $('player-section');
const playerCard = $('player-card');
const vinyl = $('vinyl');
const btnPlay = $('btn-play');
const btnPrev = $('btn-prev');
const btnNext = $('btn-next');
const progressFill = $('progress-fill');
const progressThumb = $('progress-thumb');
const timeCurrent = $('time-current');
const toast = $('toast');

// ---- Canvas Background ----
let orbs = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initOrbs() {
  orbs = [];
  const mood = state.mood ? MOODS[state.mood] : null;
  const colors = mood ? mood.bgColors : ['#0a0020', '#050010', '#020008'];
  for (let i = 0; i < 5; i++) {
    orbs.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 200 + Math.random() * 300,
      color: colors[i % colors.length],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: 0.3 + Math.random() * 0.4
    });
  }
}

function drawBg() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#08080f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  orbs.forEach(o => {
    const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
    grad.addColorStop(0, o.color.replace(')', `, ${o.opacity})`).replace('rgb', 'rgba').replace('#', 'rgba(') || `${o.color}${Math.round(o.opacity * 255).toString(16).padStart(2,'0')}`);
    grad.addColorStop(1, 'transparent');

    // Simple hex-to-rgba conversion
    const hex = o.color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const g2 = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
    g2.addColorStop(0, `rgba(${r},${g},${b},${o.opacity})`);
    g2.addColorStop(1, `rgba(${r},${g},${b},0)`);

    ctx.fillStyle = g2;
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
    ctx.fill();

    o.x += o.vx;
    o.y += o.vy;
    if (o.x < -o.r) o.x = canvas.width + o.r;
    if (o.x > canvas.width + o.r) o.x = -o.r;
    if (o.y < -o.r) o.y = canvas.height + o.r;
    if (o.y > canvas.height + o.r) o.y = -o.r;
  });

  requestAnimationFrame(drawBg);
}

// ---- Particles ----
function spawnParticles(mood) {
  particlesEl.innerHTML = '';
  const color = MOODS[mood].color;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      animation-duration: ${4 + Math.random() * 6}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    particlesEl.appendChild(p);
  }
}

// ---- Ripple effect ----
function createRipple(card, e) {
  const rippleContainer = card.querySelector('.mood-ripple');
  const circle = document.createElement('div');
  circle.className = 'ripple-circle';
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  circle.style.width = '20px';
  circle.style.height = '20px';
  circle.style.marginLeft = '-10px';
  circle.style.marginTop = '-10px';
  rippleContainer.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
}

// ---- Toast ----
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ---- Mood Theme ----
function applyMoodTheme(mood) {
  const m = MOODS[mood];
  document.documentElement.style.setProperty('--mood-color', m.color);
  document.documentElement.style.setProperty('--mood-glow', m.glow);

  // Remove old mood classes
  document.body.classList.forEach(c => { if (c.startsWith('mood-')) document.body.classList.remove(c); });
  document.body.classList.add(`mood-${mood}`);

  // Re-init orbs with mood colors
  initOrbs();
}

// ---- Player ----
function loadTrack(mood, index) {
  const m = MOODS[mood];
  const track = m.tracks[index];

  $('player-mood-indicator').style.background = m.color;
  $('player-mood-indicator').style.boxShadow = `0 0 20px ${m.color}`;

  $('track-mood-label').textContent = state.lang === 'fa' ? m.fa : m.en;
  $('track-mood-label').style.color = m.color;

  $('track-title').textContent = track.title;
  $('track-desc').textContent = state.lang === 'fa' ? track.desc_fa : track.desc_en;
  $('time-total').textContent = track.duration;

  $('vinyl').querySelector('.vinyl-label').style.background = m.color;
  $('vinyl').querySelector('.vinyl-label').style.boxShadow = `0 0 20px ${m.color}`;

  $('btn-play').style.background = m.color;
  $('btn-play').style.borderColor = m.color;
  $('btn-play').style.boxShadow = `0 0 24px ${m.glow}`;

  audio.src = track.url;
  resetProgress();
}

function resetProgress() {
  clearInterval(state.progressTimer);
  state.progress = 0;
  progressFill.style.width = '0%';
  progressThumb.style.left = '0%';
  timeCurrent.textContent = '0:00';
}

function startProgress() {
  clearInterval(state.progressTimer);
  const dur = parseDuration($('time-total').textContent);
  const step = 100 / (dur * 10);
  state.progressTimer = setInterval(() => {
    state.progress = Math.min(state.progress + step, 100);
    progressFill.style.width = state.progress + '%';
    progressThumb.style.left = state.progress + '%';
    const elapsed = Math.round((state.progress / 100) * dur);
    timeCurrent.textContent = formatTime(elapsed);
    if (state.progress >= 100) {
      clearInterval(state.progressTimer);
      nextTrack();
    }
  }, 100);
}

function parseDuration(str) {
  const [m, s] = str.split(':').map(Number);
  return m * 60 + s;
}
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function playPause() {
  if (state.playing) {
    audio.pause();
    clearInterval(state.progressTimer);
    state.playing = false;
    btnPlay.textContent = '▶';
    vinyl.classList.remove('spinning');
  } else {
    audio.play().catch(() => {
      // Browser may block autoplay — still animate
    });
    startProgress();
    state.playing = true;
    btnPlay.textContent = '⏸';
    vinyl.classList.add('spinning');
  }
}

function nextTrack() {
  const tracks = MOODS[state.mood].tracks;
  state.trackIndex = (state.trackIndex + 1) % tracks.length;
  loadTrack(state.mood, state.trackIndex);
  if (state.playing) {
    audio.play().catch(() => {});
    startProgress();
    vinyl.classList.add('spinning');
  }
}

function prevTrack() {
  const tracks = MOODS[state.mood].tracks;
  state.trackIndex = (state.trackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(state.mood, state.trackIndex);
  if (state.playing) {
    audio.play().catch(() => {});
    startProgress();
    vinyl.classList.add('spinning');
  }
}

// ---- Select Mood ----
function selectMood(mood, cardEl, e) {
  state.mood = mood;
  state.trackIndex = 0;
  state.playing = false;

  applyMoodTheme(mood);
  spawnParticles(mood);
  createRipple(cardEl, e);

  loadTrack(mood, 0);
  playerCard.classList.add('active');
  playerSection.classList.add('visible');
  playerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

  vinyl.classList.remove('spinning');
  btnPlay.textContent = '▶';

  // Auto-play after short delay
  setTimeout(() => {
    playPause();
  }, 600);

  const moodData = MOODS[mood];
  const msg = state.lang === 'fa'
    ? `حال ${moodData.fa} — موزیکت آماده‌ست! 🎵`
    : `${moodData.en} mood — your music is ready! 🎵`;
  showToast(msg);
}

// ---- Language ----
const STRINGS = {
  fa: {
    heroSubtitle: 'الان چه حالی داری؟',
    heroTitle: 'حالت رو<br>انتخاب کن',
    heroDesc: 'ما یه موزیک کامل برات پیدا می‌کنیم',
    changeMood: 'تغییر حال',
  },
  en: {
    heroSubtitle: "What's your vibe right now?",
    heroTitle: 'Pick Your<br>Mood',
    heroDesc: "We'll find the perfect soundtrack for you",
    changeMood: 'Change Mood',
  }
};

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', lang === 'en');

  const s = STRINGS[lang];
  $('hero-subtitle').textContent = s.heroSubtitle;
  $('hero-title').innerHTML = s.heroTitle;
  $('hero-desc').textContent = s.heroDesc;
  $('change-mood-btn').textContent = s.changeMood;

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  if (state.mood) {
    const m = MOODS[state.mood];
    $('track-mood-label').textContent = lang === 'fa' ? m.fa : m.en;
    const track = m.tracks[state.trackIndex];
    $('track-desc').textContent = lang === 'fa' ? track.desc_fa : track.desc_en;
  }
}

// ---- Volume toggle ----
let muted = false;
$('btn-vol').addEventListener('click', () => {
  muted = !muted;
  audio.volume = muted ? 0 : 0.7;
  $('btn-vol').textContent = muted ? '🔇' : '🔊';
});

// ---- Progress bar click ----
document.querySelector('.progress-bar').addEventListener('click', e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  state.progress = pct * 100;
  progressFill.style.width = state.progress + '%';
  progressThumb.style.left = state.progress + '%';
  const dur = parseDuration($('time-total').textContent);
  timeCurrent.textContent = formatTime(Math.round(pct * dur));
});

// ---- Event Listeners ----
document.querySelectorAll('.mood-card').forEach(card => {
  card.addEventListener('click', e => selectMood(card.dataset.mood, card, e));
});

btnPlay.addEventListener('click', playPause);
btnNext.addEventListener('click', nextTrack);
btnPrev.addEventListener('click', prevTrack);

$('change-mood-btn').addEventListener('click', () => {
  playerSection.classList.remove('visible');
  state.playing = false;
  audio.pause();
  clearInterval(state.progressTimer);
  vinyl.classList.remove('spinning');
  btnPlay.textContent = '▶';
  moodGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ---- Keyboard Shortcuts ----
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && state.mood) { e.preventDefault(); playPause(); }
  if (e.code === 'ArrowRight' && state.mood) nextTrack();
  if (e.code === 'ArrowLeft' && state.mood) prevTrack();
});

// ---- Init ----
window.addEventListener('resize', () => { resizeCanvas(); });
resizeCanvas();
initOrbs();
drawBg();
setLang('fa');
