import { en, scriptTexts } from './translations.js';

const STORAGE_KEY = 'language';
const LANGUAGES = ['ru', 'en'];

const textElements = document.querySelectorAll('[data-i18n]');
const attrElements = document.querySelectorAll('[data-i18n-attr]');
const langButton = document.querySelector('.lang-button');

const dictionaries = { ru: { ...scriptTexts.ru }, en: { ...scriptTexts.en, ...en } };
const listeners = [];
let current = 'ru';

function attrPairs(element) {
  return element.dataset.i18nAttr.split(';').map((pair) => pair.split(':'));
}

function collectRussian() {
  textElements.forEach((element) => {
    dictionaries.ru[element.dataset.i18n] = element.textContent.replace(/\s+/g, ' ').trim();
  });
  attrElements.forEach((element) => {
    attrPairs(element).forEach(([attr, key]) => {
      dictionaries.ru[key] = element.getAttribute(attr);
    });
  });
}

export function t(key) {
  return dictionaries[current][key] ?? dictionaries.ru[key] ?? key;
}

export function onLanguageChange(callback) {
  listeners.push(callback);
}

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : 'ru';
  } catch {
    return 'ru';
  }
}

function save(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Хранилище недоступно (приватный режим) — язык просто не запомнится.
  }
}

function apply(language) {
  current = language;
  document.documentElement.lang = language;

  textElements.forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  attrElements.forEach((element) => {
    attrPairs(element).forEach(([attr, key]) => element.setAttribute(attr, t(key)));
  });
  langButton.lang = language === 'ru' ? 'en' : 'ru';

  listeners.forEach((callback) => callback(language));
}

export function initI18n() {
  collectRussian();
  const language = readSaved();
  if (language !== 'ru') apply(language);

  langButton.addEventListener('click', () => {
    const next = current === 'ru' ? 'en' : 'ru';
    save(next);
    apply(next);
  });
}
