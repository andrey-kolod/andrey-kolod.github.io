import {
  headerNavList,
  header,
  active,
  overlay,
  sideBarLanguageLinks,
} from "./constants.js";

// Открытие навигационного меню

export function openNavBar() {
  headerNavList.classList.add(active);
  header.classList.add(overlay);
}

// Закрытие навигационного меню
export function closeNavBar() {
  headerNavList.classList.remove(active);
  header.classList.remove(overlay);
}
