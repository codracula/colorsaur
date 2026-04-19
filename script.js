// ============================================
// COLORSAUR — Pixel Art Site Scripts
// ============================================

// --- Nav scroll state ---
const navbar = document.getElementById('navbar');
const syncNav = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', syncNav, { passive: true });
syncNav();

// --- Mobile nav ---
const toggle   = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setOpen(open) {
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const [a, b, c] = toggle.querySelectorAll('span');
  a.style.transform = open ? 'translateY(8px) rotate(45deg)'   : '';
  b.style.opacity   = open ? '0' : '';
  c.style.transform = open ? 'translateY(-8px) rotate(-45deg)' : '';
}

toggle.addEventListener('click', () => setOpen(!navLinks.classList.contains('open')));

document.addEventListener('click', e => {
  if (navLinks.classList.contains('open') && !document.querySelector('.nav').contains(e.target))
    setOpen(false);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    setOpen(false);
    toggle.focus();
  }
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

// --- Active nav highlight ---
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinkEls.forEach(l => l.classList.remove('active'));
    const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (match) match.classList.add('active');
  });
}, { threshold: 0.4 }).observe && sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinkEls.forEach(l => l.classList.remove('active'));
      const m = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (m) m.classList.add('active');
    });
  }, { threshold: 0.4 }).observe(s)
);

// --- Scroll reveal ---
const revealTargets = document.querySelectorAll(
  '.section-header, .px-card, .vision-card, .mission-layout, .tuned-banner, .contact-card, .about-layout, .hero-copy, .hero-art'
);

revealTargets.forEach(el => {
  el.classList.add('reveal');
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
  const idx = siblings.indexOf(el);
  if (idx > 0 && idx <= 3) el.classList.add(`reveal-d${idx}`);
});

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' })
  .observe && revealTargets.forEach(el =>
    new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' }).observe(el)
  );

// --- Pixel card "press" bounce on hover ---
document.querySelectorAll('.px-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.08s, box-shadow 0.08s';
  });
});

// --- Smooth anchor scroll (nav offset) ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

// --- Pixel cursor sparkle trail (subtle, fun) ---
const canvas = document.createElement('canvas');
canvas.id = 'sparkle-canvas';
canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}, { passive: true });

const particles = [];
const COLORS = ['#ffd93d','#f472b6','#a855f7','#4dd9ac','#ff6b6b','#60c8f0'];

window.addEventListener('mousemove', e => {
  // Only on desktop
  if (window.innerWidth < 768) return;
  if (Math.random() > 0.35) return;
  particles.push({
    x: e.clientX, y: e.clientY,
    size: Math.random() * 6 + 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    life: 1,
    vx: (Math.random() - 0.5) * 2,
    vy: Math.random() * -2 - 1,
  });
  if (particles.length > 40) particles.shift();
}, { passive: true });

(function animSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= 0.04;
    p.x += p.vx;
    p.y += p.vy;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    // Draw as a pixel square (no sub-pixel rendering)
    const s = Math.ceil(p.size);
    ctx.fillRect(Math.round(p.x - s/2), Math.round(p.y - s/2), s, s);
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animSparkles);
})();
