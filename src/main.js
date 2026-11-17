import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createScene } from './scene.js';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
document.body.classList.add('is-loading');
$('.js-year').textContent = new Date().getFullYear();

/* ------------------------------------------------------------------ */
/*  Smooth (inertia) scroll                                            */
/* ------------------------------------------------------------------ */
const lenis = new Lenis({
  lerp: reduce ? 1 : 0.085,
  smoothWheel: !reduce,
  wheelMultiplier: 0.95,
  touchMultiplier: 1.3,
});
lenis.stop();
lenis.on('scroll', ScrollTrigger.update);

/* ------------------------------------------------------------------ */
/*  3D scene                                                           */
/* ------------------------------------------------------------------ */
const canvas = $('.webgl');
const projects = $$('.project');
let scene = null;
try {
  scene = createScene(canvas, { hero: $('#hero'), projects, outro: $('#contact') });
} catch (err) {
  console.warn('WebGL unavailable, continuing without 3D', err);
  canvas.remove();
  $$('.btn--explore').forEach((b) => b.remove());
}

if (import.meta.env.DEV) window.__scene = scene;

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
  scene?.frame();
});
if (import.meta.env.DEV) {
  // test helper: jump somewhere and let the camera settle even when rAF is throttled
  window.__goto = (y) => { lenis.scrollTo(y, { immediate: true, force: true }); ScrollTrigger.update(); for (let i = 0; i < 90; i++) scene?.frame(0.05); };
}
gsap.ticker.lagSmoothing(0);

/* ------------------------------------------------------------------ */
/*  Text splitting (keeps <em>/<i>/<b> wrappers)                       */
/* ------------------------------------------------------------------ */
function splitWords(el, cls = 'wm') {
  const walk = (node, target) => {
    node.childNodes.forEach((n) => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return target.appendChild(document.createTextNode(' '));
          const outer = document.createElement('span');
          outer.className = cls;
          const inner = document.createElement('span');
          inner.textContent = part;
          outer.appendChild(inner);
          target.appendChild(outer);
        });
      } else if (n.nodeType === 1) {
        const clone = n.cloneNode(false);
        walk(n, clone);
        target.appendChild(clone);
      }
    });
  };
  const frag = document.createDocumentFragment();
  walk(el, frag);
  el.innerHTML = '';
  el.appendChild(frag);
  return $$(`.${cls} > span`, el);
}

function splitChars(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        [...n.textContent].forEach((c) => {
          const s = document.createElement('span');
          s.className = 'ch';
          s.textContent = c;
          frag.appendChild(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
  return $$('.ch', el);
}

/* ------------------------------------------------------------------ */
/*  Scroll animations                                                  */
/* ------------------------------------------------------------------ */
const heroChars = splitChars($('.hero__line > span'));

$$('[data-split]').forEach((el) => {
  const words = splitWords(el);
  if (el.closest('.hero')) return; // hero is animated by the intro timeline
  gsap.from(words, {
    yPercent: 115,
    rotate: 4,
    duration: 1.2,
    ease: 'expo.out',
    stagger: 0.05,
    scrollTrigger: { trigger: el, start: 'top 88%' },
  });
});

$$('[data-reveal]').forEach((el) => {
  gsap.from(el, {
    y: 50,
    autoAlpha: 0,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: { trigger: el, start: 'top 90%' },
  });
});

$$('[data-img-reveal]').forEach((el) => {
  const img = $('img', el);
  gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
    clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut',
    scrollTrigger: { trigger: el, start: 'top 80%' },
  });
  gsap.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
  gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
});

// statement: words light up as you scroll
$$('[data-scrub-words]').forEach((el) => {
  const words = splitWords(el, 'w').map((s) => s.parentElement);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 82%',
    end: 'bottom 50%',
    onUpdate: (self) => {
      const n = self.progress * words.length * 1.05;
      words.forEach((w, i) => { w.style.opacity = Math.max(0.16, Math.min(1, n - i)); });
    },
  });
});

// number counters
$$('[data-count]:not([data-plain])').forEach((el) => {
  const o = { v: 0 };
  gsap.to(o, {
    v: +el.dataset.count, duration: 1.8, ease: 'power3.out',
    onUpdate: () => { el.textContent = Math.round(o.v); },
    scrollTrigger: { trigger: el, start: 'top 92%' },
  });
});

// marquee reacts to scroll velocity
const marquee = gsap.to('.marquee__track', { xPercent: -50, duration: 32, ease: 'none', repeat: -1 });
let velBoost = 0;
lenis.on('scroll', ({ velocity }) => { velBoost = velocity; });
gsap.ticker.add(() => {
  velBoost *= 0.92;
  const ts = 1 + Math.min(Math.abs(velBoost) * 0.25, 6);
  marquee.timeScale(velBoost < -0.5 ? -ts : ts);
});

/* ------------------------------------------------------------------ */
/*  Projects: sticky chapters with stepped panels                      */
/* ------------------------------------------------------------------ */
projects.forEach((sec) => {
  const panels = $$('.panel', sec);
  const bar = $('.project__progress span', sec);
  let current = 0;
  ScrollTrigger.create({
    trigger: sec,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      bar.style.transform = `scaleX(${self.progress})`;
      const idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length * 0.999));
      if (idx !== current) {
        panels[current].classList.remove('is-active');
        panels[idx].classList.add('is-active');
        current = idx;
      }
    },
  });
});

/* ------------------------------------------------------------------ */
/*  Horizontal gallery                                                 */
/* ------------------------------------------------------------------ */
const gallery = $('.gallery');
const track = $('.gallery__track');
const gBar = $('.gallery__bar span');
const gImgs = $$('.g:not(.g--tall) .g__img img', track);
function sizeGallery() {
  const dist = Math.max(0, track.scrollWidth - window.innerWidth);
  gallery.style.height = `${dist + window.innerHeight}px`;
  return dist;
}
let gDist = sizeGallery();
ScrollTrigger.create({
  trigger: gallery,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    track.style.transform = `translate3d(${-self.progress * gDist}px,0,0)`;
    gBar.style.transform = `scaleX(${self.progress})`;
    const vw = window.innerWidth;
    gImgs.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      const c = (r.left + r.width / 2 - vw / 2) / vw;
      img.style.transform = `translate3d(${c * -8}%,0,0) scale(1.18)`;
    });
  },
});

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */
const nav = $('.nav');
lenis.on('scroll', ({ scroll, direction }) => {
  nav.classList.toggle('is-scrolled', scroll > 40);
  if (document.body.classList.contains('menu-open')) return;
  nav.classList.toggle('is-hidden', direction === 1 && scroll > 300);
});

const navTargets = [['#works', '#works'], ['#about', '#about'], ['#gallery', '#gallery'], ['#contact', '#contact']];
navTargets.forEach(([href, sel]) => {
  const target = $(sel);
  ScrollTrigger.create({
    trigger: target,
    start: 'top 50%',
    end: 'bottom 50%',
    onToggle: ({ isActive }) => $$(`.nav__links a[href="${href}"]`).forEach((a) => a.classList.toggle('is-active', isActive)),
  });
});

function closeMenu() {
  document.body.classList.remove('menu-open');
  $('.nav__burger').setAttribute('aria-expanded', 'false');
  $('.menu').setAttribute('aria-hidden', 'true');
  lenis.start();
}
$('.nav__burger').addEventListener('click', () => {
  const open = !document.body.classList.contains('menu-open');
  if (!open) return closeMenu();
  document.body.classList.add('menu-open');
  nav.classList.remove('is-hidden');
  $('.nav__burger').setAttribute('aria-expanded', 'true');
  $('.menu').setAttribute('aria-hidden', 'false');
  lenis.stop();
});

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  e.preventDefault();
  const wasOpen = document.body.classList.contains('menu-open');
  if (wasOpen) closeMenu();
  const target = id === '#top' ? 0 : $(id);
  // land a little inside project chapters so the camera has arrived
  const offset = target && target.classList?.contains('project') ? window.innerHeight * 0.15 : 0;
  lenis.scrollTo(target, { offset, duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
});

/* ------------------------------------------------------------------ */
/*  Cursor, magnetic buttons, hover image                              */
/* ------------------------------------------------------------------ */
if (finePointer) {
  const cursor = $('.cursor');
  const label = $('.cursor__label');
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.45, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.45, ease: 'power3' });
  window.addEventListener('pointermove', (e) => {
    cursor.classList.add('is-visible');
    xTo(e.clientX);
    yTo(e.clientY);
  });
  document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
  document.addEventListener('pointerover', (e) => {
    const c = e.target.closest('[data-cursor]');
    const l = e.target.closest('a, button');
    cursor.classList.toggle('is-hover', !!c);
    cursor.classList.toggle('is-link', !c && !!l);
    label.textContent = c ? c.dataset.cursor : '';
  });

  $$('[data-magnetic]').forEach((el) => {
    const xm = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const ym = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xm((e.clientX - r.left - r.width / 2) * 0.3);
      ym((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => { xm(0); ym(0); });
  });

  const hi = $('.hover-img');
  const hx = gsap.quickTo(hi, 'left', { duration: 0.6, ease: 'power3' });
  const hy = gsap.quickTo(hi, 'top', { duration: 0.6, ease: 'power3' });
  $$('[data-hover-img]').forEach((li) => {
    li.addEventListener('pointerenter', () => { hi.src = li.dataset.hoverImg; hi.classList.add('is-on'); });
    li.addEventListener('pointerleave', () => hi.classList.remove('is-on'));
    li.addEventListener('pointermove', (e) => { hx(e.clientX + 170); hy(e.clientY); });
  });
}

/* ------------------------------------------------------------------ */
/*  Explore-in-3D mode                                                 */
/* ------------------------------------------------------------------ */
const names = ['01 — Public Toilet', '02 — The Living Unit', '03 — After Hours', '04 — Step by Step'];
let exploring = false;
function openExplore(i) {
  if (!scene) return;
  exploring = true;
  lenis.stop();
  document.body.classList.add('is-exploring');
  $('.explore').setAttribute('aria-hidden', 'false');
  $('.js-explore-name').textContent = names[i];
  scene.enterExplore(i);
}
function closeExplore() {
  if (!exploring) return;
  exploring = false;
  scene.exitExplore();
  document.body.classList.remove('is-exploring');
  $('.explore').setAttribute('aria-hidden', 'true');
  lenis.start();
}
$$('[data-explore]').forEach((b) => b.addEventListener('click', () => openExplore(+b.dataset.explore)));
$('.js-explore-close').addEventListener('click', closeExplore);

/* ------------------------------------------------------------------ */
/*  Lightbox                                                           */
/* ------------------------------------------------------------------ */
const lb = $('.lightbox');
const lbImg = $('img', lb);
function openLightbox(src, alt = '') {
  lbImg.src = src;
  lbImg.alt = alt;
  $('.lightbox__scroll').scrollTop = 0;
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  lenis.stop();
}
function closeLightbox() {
  if (!lb.classList.contains('is-open')) return;
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  lenis.start();
}
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-lightbox]');
  if (t) openLightbox(t.dataset.lightbox, $('img', t)?.alt);
});
lb.addEventListener('click', (e) => { if (e.target !== lbImg) closeLightbox(); });
window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeLightbox();
  closeExplore();
  if (document.body.classList.contains('menu-open')) closeMenu();
});

/* ------------------------------------------------------------------ */
/*  Loader → intro                                                     */
/* ------------------------------------------------------------------ */
function intro() {
  const count = { v: 0 };
  const countEl = $('.js-count');
  const ready = Promise.all([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((r) => setTimeout(r, reduce ? 200 : 1500)),
  ]);
  const tl = gsap.timeline();
  tl.from('.loader__word', { yPercent: 40, autoAlpha: 0, duration: 1, ease: 'expo.out' })
    .to(count, { v: 88, duration: 1.3, ease: 'power2.inOut', onUpdate: () => { countEl.textContent = Math.round(count.v); } }, 0)
    .to('.loader__bar span', { scaleX: 0.88, duration: 1.3, ease: 'power2.inOut' }, 0);

  ready.then(() => {
    gsap.timeline({
      onComplete: () => {
        $('.loader').remove();
        document.body.classList.remove('is-loading');
        lenis.start();
        ScrollTrigger.refresh();
      },
    })
      .to(count, { v: 100, duration: 0.4, onUpdate: () => { countEl.textContent = Math.round(count.v); } })
      .to('.loader__bar span', { scaleX: 1, duration: 0.4 }, '<')
      .to('.loader__inner', { yPercent: -30, autoAlpha: 0, duration: 0.7, ease: 'expo.in' }, '+=0.05')
      .to('.loader', { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, '-=0.25')
      .from(heroChars, { yPercent: 110, rotate: 6, duration: 1.4, ease: 'expo.out', stagger: 0.045 }, '-=0.55')
      .from('.hero__meta > *, .hero__by', { y: 16, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=1.1')
      .from($$('.hero .wm > span'), { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.02 }, '-=1.0')
      .from('.hero__index li', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.07 }, '-=1.0')
      .fromTo('.hero__scroll, .nav', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, clearProps: 'opacity,visibility' }, '-=0.8');
  });
}
intro();

/* ------------------------------------------------------------------ */
/*  Resize                                                             */
/* ------------------------------------------------------------------ */
let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    gDist = sizeGallery();
    ScrollTrigger.refresh();
  }, 200);
});
window.addEventListener('load', () => {
  gDist = sizeGallery();
  ScrollTrigger.refresh();
});
