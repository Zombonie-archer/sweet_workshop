const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('mobileMenuClose');
const mobileMenuLinks = mobileMenu.querySelectorAll(
  "a[href^='#'], a[data-scroll-top]"
);

const TABLET_BREAKPOINT = 768;

function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');

  const hamburgerBtn = document.getElementById('hamburger');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');

  closeBtn.focus();
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');

  const hamburgerBtn = document.getElementById('hamburger');
  if (hamburgerBtn) {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.focus();
  }
}

function isMenuOpen() {
  return mobileMenu.classList.contains('is-open');
}

document.addEventListener('click', e => {
  const hamburgerBtn = e.target.closest('#hamburger');
  if (hamburgerBtn) {
    isMenuOpen() ? closeMenu() : openMenu();
  }
});

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isMenuOpen()) {
    closeMenu();
  }
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen()) closeMenu();
  });
});

mobileMenu
  .querySelectorAll("a[href^='#']:not([data-scroll-top])")
  .forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' || href.length <= 1) return;

    link.addEventListener('click', e => {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

mobileMenu.querySelectorAll('[data-scroll-top]').forEach(logo => {
  logo.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= TABLET_BREAKPOINT && isMenuOpen()) {
    closeMenu();
  }
});
