import { t, onLanguageChange } from './i18n.js';

const SWIPE_DISTANCE = 50;

export function initCarousel() {
  const root = document.querySelector('.carousel');
  const slides = [...root.querySelectorAll('.carousel__slide')];
  const viewport = root.querySelector('.carousel__viewport');
  const dotsBox = root.querySelector('.carousel__dots');
  const dialog = document.querySelector('.photo-dialog');
  const dialogImg = dialog.querySelector('.photo-dialog__img');
  let current = 0;
  let touchStartX = null;
  let swiped = false;

  const dots = slides.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel__dot';
    dot.addEventListener('click', () => show(index));
    dotsBox.append(dot);
    return dot;
  });

  function labelDots() {
    dots.forEach((dot, index) => dot.setAttribute('aria-label', t('carousel_dot').replace('{n}', index + 1)));
  }

  function show(index) {
    const count = slides.length;
    current = (index + count) % count;
    slides.forEach((slide, slideIndex) => {
      const offset = (slideIndex - current + count) % count;
      slide.classList.toggle('carousel__slide_center', offset === 0);
      slide.classList.toggle('carousel__slide_right', offset === 1);
      slide.classList.toggle('carousel__slide_left', offset === count - 1);
    });
    dots.forEach((dot, dotIndex) => dot.setAttribute('aria-current', String(dotIndex === current)));
  }

  function openPhoto(img) {
    dialogImg.src = img.currentSrc || img.src;
    dialogImg.alt = img.alt;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      if (swiped) return;
      if (index === current) openPhoto(slide.querySelector('img'));
      else show(index);
    });
  });

  root.querySelector('.carousel__arrow_prev').addEventListener('click', () => show(current - 1));
  root.querySelector('.carousel__arrow_next').addEventListener('click', () => show(current + 1));

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  viewport.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.touches[0].clientX;
      swiped = false;
    },
    { passive: true },
  );

  viewport.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < SWIPE_DISTANCE) return;
    swiped = true;
    show(current + (distance < 0 ? 1 : -1));
    setTimeout(() => {
      swiped = false;
    }, 400);
  });

  dialog.querySelector('.photo-dialog__close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  labelDots();
  onLanguageChange(labelDots);
  show(0);
}
