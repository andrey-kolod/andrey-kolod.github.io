import { lifeModalSlide } from "./modal.js";
import {
  sliderContainer,
  sliderDotsContainer,
  sliderArrowLeft,
  sliderArrowRight,
} from "./constants.js";
import { language } from "../index.js";
import { translations } from "./translations.js";

export async function carousel () {
    const images = [
        '/dist/bike.jpg',
        '/dist/football.jpg',
        '/dist/guitar.jpg',
        '/dist/office.jpg',
        '/dist/sup.jpg',
        '/dist/vata.jpg',
      ];

      let currentIndex = 0;
      let touchStartX = 0;
      let touchEndX = 0;
      await language;
      const slideHandlers = new Map();
      
      function createSlides() {        
        // Создание слайдов
        images.forEach((src, index) => {
          const slide = document.createElement('div');
          slide.classList.add('life__slide');
          slide.innerHTML = `<img src="${src}" alt="${translations.life.attr[`picture_${index + 1}`][language]}" class="tr_life_slide_${index + 1}">`;
          sliderContainer.appendChild(slide);
      
          // Создание точек
          const dot = document.createElement('span');
          dot.classList.add('life__slider_dot');
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
          });
          sliderDotsContainer.appendChild(dot);
        });
      
        // Обработка свайпов
        sliderContainer.addEventListener('touchstart', (e) => {
          touchStartX = e.touches[0].clientX;
        });
      
        sliderContainer.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].clientX;
          handleSwipe();
        });
      
        // Обработка стрелок
        if (sliderArrowLeft) {
          sliderArrowLeft.addEventListener('click', () => moveSlider(-1));
        } 
        if (sliderArrowRight) {
          sliderArrowRight.addEventListener('click', () => moveSlider(1));
        } 
        updateSlider();
      }
      
      // Свайп влево и вправо
      function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const minSwipeDistance = 50;
      
        if (swipeDistance > minSwipeDistance) {
          moveSlider(-1);
        }
        if (swipeDistance < -minSwipeDistance) {
          moveSlider(1);
        }
      }
      
      // Обновление слайдера
      function updateSlider() {
        const slides = document.querySelectorAll('.life__slide');
        const dots = document.querySelectorAll('.life__slider_dot');

        // Очистка всех обработчиков
    slides.forEach((slide) => {
      if (slideHandlers.has(slide)) {
        slide.removeEventListener('click', slideHandlers.get(slide));
        slideHandlers.delete(slide);
      }

      // Удаление старых установленных onclick
      slide.onclick = null;
    });
      
        // Обновление слайдов
        slides.forEach((slide, index) => {
          const handleSlideClick = () => lifeModalSlide(slide);
          slide.classList.remove('life__slide_center', 'life__slide_left', 'life__slide_right', 'life__slide_side', 'life__slide_active'); 
          const offset = (index - currentIndex + images.length) % images.length;      
          if (offset === 0) {
            slide.classList.add('life__slide_center', 'life__slide_active');
            // Создание функции с аргементом для передачи ее в eventListener
            const handler = () => lifeModalSlide(slide);
            slide.addEventListener('click', handler);
            // Добавление eventa в Map для дальнейшеого удаления
            slideHandlers.set(slide, handler);
          } else if (offset === 1) {
            slide.classList.add('life__slide_side', 'life__slide_right', 'life__slide_active');
          } else if (offset === images.length - 1) {
            slide.classList.add('life__slide_side', 'life__slide_left', 'life__slide_active');
          }
        });
    
        // Обновление точек
        dots.forEach((dot, index) => {
          dot.classList.toggle('life__slider_dot_active', index === currentIndex);
        });
      
        // Обработчики кликов по слайдам
        slides.forEach((slide, index) => {
          slide.onclick = () => {
            if (slide.classList.contains('life__slide_side')) {
              currentIndex = (index === (currentIndex + 1) % images.length) 
                ? (currentIndex + 1) % images.length 
                : (currentIndex - 1 + images.length) % images.length;
              updateSlider();
            } 
          };
        });
      }
      
      // Переключение слайдов
      function moveSlider(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateSlider();
        
      }
      
      // Создание слайдов при загрузке страницы
      document.addEventListener('DOMContentLoaded', () => {
        createSlides();
        document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') moveSlider(-1);
          if (e.key === 'ArrowRight') moveSlider(1);
        });
      });

}