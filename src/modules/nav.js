const MOBILE_QUERY = window.matchMedia('(max-width: 768px)');

export function initNav() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  function setOpen(open) {
    nav.classList.toggle('nav_open', open);
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', () => setOpen(!nav.classList.contains('nav_open')));

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('nav_open')) {
      setOpen(false);
      burger.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header')) setOpen(false);
  });

  MOBILE_QUERY.addEventListener('change', () => setOpen(false));
}
