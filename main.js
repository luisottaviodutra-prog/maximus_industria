/* Navegacao entre telas */
(function () {
  'use strict';

  var pages = [].slice.call(document.querySelectorAll('.page-section'));
  var nav = document.getElementById('nav');

  if (!pages.length) return;

  function getPage(id) {
    return pages.find(function (page) {
      return page.id === id;
    });
  }

  function showPage(id, updateHistory) {
    var page = getPage(id) || getPage('inicio') || pages[0];

    pages.forEach(function (item) {
      var active = item === page;
      item.classList.toggle('active', active);
      item.setAttribute('aria-hidden', !active);
    });

    if (nav) {
      [].forEach.call(nav.querySelectorAll('a[href^="#"]'), function (link) {
        var active = link.getAttribute('href') === '#' + page.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }

    if (updateHistory && window.location.hash !== '#' + page.id) {
      window.history.pushState(null, '', '#' + page.id);
    }

    window.scrollTo(0, 0);
  }

  function pageIdFromHash() {
    return window.location.hash.slice(1);
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;

    var id = link.getAttribute('href').slice(1);
    if (!getPage(id)) return;

    event.preventDefault();
    showPage(id, true);
  });

  window.addEventListener('popstate', function () {
    showPage(pageIdFromHash(), false);
  });

  window.addEventListener('hashchange', function () {
    showPage(pageIdFromHash(), false);
  });

  showPage(pageIdFromHash(), false);
})();

/* Menu mobile */
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  if (!btn || !nav) return;

  function set(open) {
    var translations = (window.MAXIMUS_I18N || {})[document.documentElement.lang] || {};
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', translations[open ? 'menu_close' : 'menu_open'] || (open ? 'Fechar menu' : 'Abrir menu'));
  }

  btn.addEventListener('click', function () {
    set(!nav.classList.contains('open'));
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) set(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
})();

/* Tooltip do glossario */
(function () {
  'use strict';

  var SEL = '.glossary-term';
  var tip = document.createElement('div');
  tip.className = 'glossary-tip';
  tip.id = 'glossary-tip';
  tip.setAttribute('role', 'tooltip');
  tip.innerHTML = '<div class="glossary-tip__box"><strong></strong><span></span></div>';
  document.body.appendChild(tip);

  var title = tip.querySelector('strong');
  var body = tip.querySelector('span');
  var current = null;
  var pinned = false;

  function place(term) {
    var r = term.getBoundingClientRect();
    var w = tip.offsetWidth;
    var h = tip.offsetHeight;
    var gap = 10;
    var margin = 12;
    var vw = document.documentElement.clientWidth;
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
    var translations = (window.MAXIMUS_I18N || {})[document.documentElement.lang] || {};
    title.textContent = translations[term.dataset.i18n] || term.dataset.term || term.textContent;
    body.textContent = translations[term.dataset.i18nTooltip] || term.dataset.tooltip;
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
    if (current === term && pinned) {
      hide();
      return;
    }

    show(term);
    pinned = true;
  }

  document.addEventListener('pointerover', function (e) {
    if (e.pointerType !== 'mouse' || pinned) return;

    var term = e.target.closest(SEL);
    if (term) show(term);
  });

  document.addEventListener('pointerout', function (e) {
    if (e.pointerType !== 'mouse' || pinned) return;

    var term = e.target.closest(SEL);
    if (term && !(e.relatedTarget && term.contains(e.relatedTarget))) hide();
  });

  document.addEventListener('click', function (e) {
    var term = e.target.closest(SEL);
    if (term) toggle(term);
    else hide();
  });

  document.addEventListener('focusin', function (e) {
    var term = e.target.closest(SEL);
    if (term) show(term);
  });

  document.addEventListener('focusout', function (e) {
    if (e.target.closest(SEL) && !pinned) hide();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hide();
    } else if (
      (e.key === 'Enter' || e.key === ' ') &&
      e.target.matches &&
      e.target.matches(SEL)
    ) {
      e.preventDefault();
      toggle(e.target);
    }
  });
})();

/* Seletor de idiomas */
(function () {
  'use strict';

  var KEY = 'maximus-lang';
  var LABEL = { 'pt-BR': 'PT', en: 'EN', es: 'ES', fr: 'FR', ar: 'AR' };
  var box = document.getElementById('lang');

  if (!box) return;

  var btn = box.querySelector('.lang__btn');
  var cur = btn.querySelector('span');
  var nodes = [].slice.call(document.querySelectorAll('[data-i18n]'));
  var meta = document.querySelector('meta[name="description"]');
  var pt = { title: document.title, desc: meta.content };

  nodes.forEach(function (node) {
    node.dataset.pt = node.textContent;
  });

  function set(code) {
    var translations = (window.MAXIMUS_I18N || {})[code] || {};

    nodes.forEach(function (node) {
      var value = translations[node.dataset.i18n];
      node.textContent = value !== undefined ? value : node.dataset.pt;
    });

    document.title = translations.title || pt.title;
    meta.content = translations.desc || pt.desc;
    var structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      var organization = JSON.parse(structuredData.textContent);
      organization.description = translations.schema_desc;
      structuredData.textContent = JSON.stringify(organization);
    }

    [].forEach.call(document.querySelectorAll('[data-i18n-content]'), function (node) {
      var value = translations[node.dataset.i18nContent];
      if (value !== undefined) node.setAttribute('content', value);
    });

    [].forEach.call(document.querySelectorAll('[data-i18n-aria-label]'), function (node) {
      var value = translations[node.dataset.i18nAriaLabel];
      if (value !== undefined) node.setAttribute('aria-label', value);
    });

    var menu = document.getElementById('menuBtn');
    var nav = document.getElementById('nav');
    if (menu && nav) {
      menu.setAttribute('aria-label', translations[nav.classList.contains('open') ? 'menu_close' : 'menu_open']);
    }

    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    cur.textContent = LABEL[code];

    [].forEach.call(box.querySelectorAll('[data-lang]'), function (button) {
      button.setAttribute('aria-current', button.dataset.lang === code);
    });

    try {
      localStorage.setItem(KEY, code);
    } catch (e) {}

    window.dispatchEvent(new Event('resize'));
  }

  function toggle(open) {
    box.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  }

  btn.addEventListener('click', function () {
    toggle(!box.classList.contains('open'));
  });

  box.addEventListener('click', function (e) {
    var button = e.target.closest('[data-lang]');

    if (button) {
      set(button.dataset.lang);
      toggle(false);
      btn.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!box.contains(e.target)) toggle(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') toggle(false);
  });

  var saved;

  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}

  if (saved && LABEL[saved] && saved !== 'pt-BR') set(saved);
  else set('pt-BR');
})();
