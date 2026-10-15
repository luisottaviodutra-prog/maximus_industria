/* ============ MÓDULO 1: MENU MOBILE ============ */
(function () {
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (!btn || !nav) return;
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();

/* ============ MÓDULO 2: GLOSSÁRIO (um único tooltip reutilizado, delegação de eventos) ============ */
(function () {
  'use strict';
  var SEL = '.glossary-term';
  var tip = document.createElement('div');
  tip.className = 'glossary-tip';
  tip.id = 'glossary-tip';
  tip.setAttribute('role', 'tooltip');
  tip.innerHTML = '<div class="glossary-tip__box"><strong></strong><span></span></div>';
  document.body.appendChild(tip);
  var title = tip.querySelector('strong'), body = tip.querySelector('span');
  var current = null, pinned = false;

  function place(term) {
    var r = term.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var gap = 10, margin = 12, vw = document.documentElement.clientWidth;
    var cx = r.left + r.width / 2;
    var x = Math.min(Math.max(cx - w / 2, margin), vw - w - margin);
    var above = r.top - h - gap > margin;
    var y = above ? r.top - h - gap : r.bottom + gap;
    tip.dataset.place = above ? 'top' : 'bottom';
    tip.style.setProperty('--ax', Math.round(cx - x) + 'px');
    tip.style.transform = 'translate3d(' + Math.round(x) + 'px,' + Math.round(y) + 'px,0)';
  }
  function show(term) {
    if (current === term) return;
    hide();
    current = term;
    title.textContent = term.dataset.term || term.textContent;
    body.textContent = term.dataset.tooltip;
    term.setAttribute('aria-describedby', tip.id);
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('resize', hide);
    place(term);
    tip.classList.add('is-open');
  }
  function hide() {
    if (!current) return;
    window.removeEventListener('scroll', hide);
    window.removeEventListener('resize', hide);
    current.removeAttribute('aria-describedby');
    current = null;
    pinned = false;
    tip.classList.remove('is-open');
  }
  function toggle(term) {
    if (current === term && pinned) { hide(); return; }
    show(term);
    pinned = true;
  }

  /* Mouse: hover abre/fecha. Toque e teclado: clique/Enter fixam. */
  document.addEventListener('pointerover', function (e) {
    if (e.pointerType !== 'mouse' || pinned) return;
    var t = e.target.closest(SEL);
    if (t) show(t);
  });
  document.addEventListener('pointerout', function (e) {
    if (e.pointerType !== 'mouse' || pinned) return;
    var t = e.target.closest(SEL);
    if (t && !(e.relatedTarget && t.contains(e.relatedTarget))) hide();
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest(SEL);
    if (t) toggle(t); else hide();
  });
  document.addEventListener('focusin', function (e) {
    var t = e.target.closest(SEL);
    if (t) show(t);
  });
  document.addEventListener('focusout', function (e) {
    if (e.target.closest(SEL) && !pinned) hide();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hide();
    else if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches(SEL)) {
      e.preventDefault();
      toggle(e.target);
    }
  });
})();

/* ============ MÓDULO 3: SELETOR DE IDIOMAS ============ */
(function () {
  'use strict';
  var KEY = 'maximus-lang', LABEL = { 'pt-BR': 'PT', en: 'EN', es: 'ES', fr: 'FR', ar: 'AR' };
  var box = document.getElementById('lang'); if (!box) return;
  var btn = box.querySelector('.lang__btn'), cur = btn.querySelector('span');
  var nodes = [].slice.call(document.querySelectorAll('[data-i18n]'));
  var meta = document.querySelector('meta[name="description"]'), pt = { title: document.title, desc: meta.content };
  nodes.forEach(function (n) { n.dataset.pt = n.innerHTML; });

  function set(code) {
    var d = (window.MAXIMUS_I18N || {})[code] || {};
    nodes.forEach(function (n) { var v = d[n.dataset.i18n]; n.innerHTML = v !== undefined ? v : n.dataset.pt; });
    document.title = d.title || pt.title; meta.content = d.desc || pt.desc;
    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    cur.textContent = LABEL[code];
    [].forEach.call(box.querySelectorAll('[data-lang]'), function (b) { b.setAttribute('aria-current', b.dataset.lang === code); });
    try { localStorage.setItem(KEY, code); } catch (e) {}
    window.dispatchEvent(new Event('resize'));
  }
  function toggle(open) { box.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }

  btn.addEventListener('click', function () { toggle(!box.classList.contains('open')); });
  box.addEventListener('click', function (e) { var b = e.target.closest('[data-lang]'); if (b) { set(b.dataset.lang); toggle(false); btn.focus(); } });
  document.addEventListener('click', function (e) { if (!box.contains(e.target)) toggle(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  var saved; try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved && LABEL[saved] && saved !== 'pt-BR') set(saved); else set('pt-BR');
})();
