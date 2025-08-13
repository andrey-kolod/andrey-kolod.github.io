"use strict";

import {
  animation,
  backgroundBackState,
  projectCardsStartState,
} from "./modules/observer.js";
import {
  burgerButton,
  sideNavCloseButton,
  aboutInfoWrapper,
  background,
  skillsSection,
  projects,
  life,
  footer,
} from "./modules/constants.js";
import { openNavBar, closeNavBar } from "./modules/nav-bar.js";
import { resizeDescription } from "./modules/resize-accordion.js";
import { backgroundItemState } from "./modules/background_item_state.js";
import {
  skillModalEventListener,
  closeModalClickOutside,
  closeModalPushEsc,
} from "./modules/modal.js";
import { turnCards } from "./modules/project-cards.js";
import { anchorScroll } from "./modules/anchor-scroll.js";
import { carousel } from "./modules/image-carousel.js";
import { languageToogler } from "./modules/language-toogle.js";
import { displayCurrentSection } from "./modules/current-section.js";
import { setSkillsSectionSize } from "./modules/skills-section-size.js";
import { getLocalLanguage, language as lang, chooseLanguage } from "./modules/set-language.js";

// -------------------

// --- ИНИЦИАЛИЗАЦИЯ ЯЗЫКА ---
getLocalLanguage();
export const language = lang;

// --- ОТКРЫТИЕ/ЗАКРЫТИЕ SKILLS ПРИ МОБИЛЬНОМ РАЗРЕШЕНИИ ---
setSkillsSectionSize();

// --- ОБОЗНАЧЕНИЕ ТЕКУЩЕЙ СЕКЦИИ В NAV ---
displayCurrentSection();

// --- ДОБАВЛЕНИЕ КНОПОЧЕК ВЫБОРА ЯЗЫКА ---
languageToogler();
chooseLanguage();

// --- ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЮ ---
anchorScroll();

// --- ОТКРЫТИЕ/ЗАКРЫТИЕ НАВИГАЦИОННОГО МЕНЮ ---
// Открытие навигационного меню
burgerButton.addEventListener("click", openNavBar);

// Закрытие навигационного меню
sideNavCloseButton.addEventListener("click", closeNavBar);

// --- АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ---
animation.observe(aboutInfoWrapper);
animation.observe(background);
animation.observe(skillsSection);
animation.observe(projects);
animation.observe(life);
animation.observe(footer);

// --- УВЕЛИЧЕНИЕ ШИРИНЫ ОПИСАНИЯ ДОЛЖНОСТИ ---
resizeDescription();

// --- ХОВЕР НА КАРТОЧКУ ОПЫТА В BACKGROUND ---
backgroundItemState();

// --- ВОЗВРАТ BACKGROUND В НАЧАЛЬНОЕ СОСОТОЯНИЕ ---
backgroundBackState.observe(background);

// --- Открытие модального окна SKILLS ---
skillModalEventListener();

// --- Закрыть SKILL MODAL кликом на оверлей или Esc
closeModalClickOutside();
closeModalPushEsc();
// --- Переворачивание карточек PROJECTS ---
turnCards();

// --- Переворачивание карточек PROJECTS ---
projectCardsStartState.observe(projects);

// --- КАРУСЕЛЬ ФОТОГРАФИЙ ---
carousel();