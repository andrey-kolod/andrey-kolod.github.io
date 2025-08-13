import {
  aboutAnimation,
  aboutInfoWrapperClass,
  backgroundAnimation,
  backgroundClass,
  backgroundCards,
  backgroundItemCheckboxes,
  backgroundTitles,
  backgroundIcons,
  backgroundItems,
  backgroundItemOpenArrows,
  cvLinks,
  skills,
  skillsTitle,
  skillsDivider,
  skillsDividerClass,
  skillsAnimationClass,
  projectCards,
  projectsTitle,
  projectDivider,
  projectDividerClass,
  projectAnimationClass,
  projectsSection,
  lifeSection,
  lifeTitle,
  lifeAnimationClass,
  lifeSlider,
  lifeSliderDots,
  lifeSliderArrowLeft,
  lifeSliderArrowRight,
  lifeDivider,
  lifeDividerClass,
  footerAnimationClass,
  footerContainer,
} from "./constants.js";
import { cardsAnimationDelay } from "./cards-animation-delay.js";
import { turnAllCardsInStartState } from "./project-cards.js";
 
// -----------------
// --- НАБЛЮДЕНИЕ ЗА АНИМАЦИЕЙ ---

function getAnimation(entries, observer) {
  entries.forEach((entry) => {
    // --- Наблюдение за секцией ABOUT ---
    if (
      entry.isIntersecting &&
      entry.target.classList.contains(aboutInfoWrapperClass)
    ) {
      aboutAddAnimation(entry);
      observer.unobserve(entry.target);
    }
    // --- Наблюдение за секцией BACKGROUND ---
    if (
      entry.isIntersecting &&
      entry.target.classList.contains(backgroundClass)
    ) {
      backgroundAddAnimation();
      observer.unobserve(entry.target);
    }
    // --- Наблюдение за секцией SKILLS ---
    if (entry.isIntersecting && entry.target.classList.contains("skills")) {
      skillsAddAnimation();
      observer.unobserve(entry.target);
    }
    // --- Наблюдение за секцией PROJECTS ---
    if (entry.isIntersecting && entry.target.classList.contains(projectsSection)) {
      projectsAddAnimation();
      observer.unobserve(entry.target);
    }
    // --- Наблюдение за секцией LIFE ---
    if (entry.isIntersecting && entry.target.classList.contains(lifeSection)) {
      lifeAddAnimation();
      observer.unobserve(entry.target);
    }
    // --- Наблюдение за секцией FOOTER ---
    if (entry.isIntersecting && entry.target.classList.contains(lifeSection)) {
      footerAddAnimation();
      observer.unobserve(entry.target);
    }
  });
}
export const animation = new IntersectionObserver(getAnimation, {
  root: null,
  threshold: 0.2,
});

// -------------------
// --- НАБЛЮДЕНИЕ ЗА СОСТОЯНИЕМ BACKGROUND ---
function getBackgroundBackState(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backgroundItemOpenArrows.forEach((item) => {
        item.textContent = "▼";
        item.classList.remove("hoveredArrow");
        backgroundItems.forEach((item) => {
          item.classList.remove("background__item_opened");
        });
        backgroundItemCheckboxes.forEach((item) => {
          item.checked = false;
        });
      });
    }
  });
}

export const backgroundBackState = new IntersectionObserver(getBackgroundBackState,
  {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
  }
);

// сбор всех элементов background в массив
const backgroundCardsElemets = [
  ...backgroundCards,
  ...backgroundTitles,
  ...backgroundIcons,
  ...backgroundItems,
  ...cvLinks,
];

// ----------------
// --- НАБЛЮДЕНИЕ ЗА СОСТОЯНИЕМ PROJECTS-CARDS ---

function getProjectCardsStartState(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      turnAllCardsInStartState();
    }
  });
}

export const projectCardsStartState = new IntersectionObserver(
  getProjectCardsStartState,
  {
    root: null,
    threshold: 1,
    rootMargin: "150% 0px -150% 0px",
  }
);

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в ABOUT ---
function aboutAddAnimation(entry) {
  entry.target.classList.add(aboutAnimation);
  entry.target.children[0].classList.add(aboutAnimation);
  entry.target.children[1].classList.add(aboutAnimation);
}

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в BACKGROUND ---
function backgroundAddAnimation() {
  backgroundCardsElemets.forEach((item) => {
    item.classList.add(backgroundAnimation);
  });
}

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в SKILLS ---
function skillsAddAnimation() {
  skillsTitle.classList.add(skillsAnimationClass);
  if (skillsDivider && skillsDivider.classList.contains(skillsDividerClass)) {
    skillsDivider.classList.add(skillsAnimationClass);
    }
  cardsAnimationDelay(skills, skillsAnimationClass);
}

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в PROJECTS ---
function projectsAddAnimation() {
  projectsTitle.classList.add(projectAnimationClass);
    if (projectDivider && projectDivider.classList.contains(projectDividerClass)) {
    projectDivider.classList.add(projectAnimationClass);
    }
  cardsAnimationDelay(projectCards, projectAnimationClass);
}

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в LIFE ---
function lifeAddAnimation() {
  lifeTitle.classList.add(lifeAnimationClass);
  if (lifeDivider && lifeDivider.classList.contains(lifeDividerClass)) {
    lifeDivider.classList.add(lifeAnimationClass);
    }
  lifeSlider.classList.add(lifeAnimationClass);
  lifeSliderDots.classList.add(lifeAnimationClass);
  lifeSliderArrowLeft.classList.add(lifeAnimationClass);
  lifeSliderArrowRight.classList.add(lifeAnimationClass);
}

// --- ФУНКЦИЯ ДОБАВЛЕНИЯ АНИМАЦИИ в FOOTER ---
function footerAddAnimation() {
  footerContainer.classList.add(footerAnimationClass);
}