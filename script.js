// ============================================
// COLORSAUR — Site Scripts
// ============================================

// --- Navbar scroll state ---
const navbar = document.getElementById('navbar');
const syncNav = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', syncNav, { passive: true });
syncNav();

// --- Mobile nav toggle ---
const toggle   = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setOpen(open) {
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const [a, b, c] = toggle.querySelectorAll('span');
  a.style.transform = open ? 'translateY(7.5px) rotate(45deg)'  : '';
  b.style.opacity   = open ? '0' : '';
  c.style.transform = open ? 'translateY(-7.5px) rotate(-45deg)' : '';
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

// --- Active nav link on scroll ---
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinkEls.forEach(l => l.classList.remove('active'));
    const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (match) match.classList.add('active');
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObs.observe(s));

// --- Scroll reveal ---
const revealEls = document.querySelectorAll(
  '.section-header, .feature-card, .vision-card, .mission-layout, .tuned-banner, .contact-card, .about-layout, .hero-copy, .hero-art'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
  const idx = siblings.indexOf(el);
  if (idx > 0 && idx < 4) el.classList.add(`reveal-d${idx}`);
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });

revealEls.forEach(el => revealObs.observe(el));

// --- Card tilt on hover ---
document.querySelectorAll('.feature-card, .vision-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r   = card.getBoundingClientRect();
    const dx  = (e.clientX - r.left - r.width  / 2) / r.width;
    const dy  = (e.clientY - r.top  - r.height / 2) / r.height;
    card.style.transform = `translateY(-5px) perspective(600px) rotateX(${dy * -5}deg) rotateY(${dx * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// --- Smooth anchor scroll ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});
