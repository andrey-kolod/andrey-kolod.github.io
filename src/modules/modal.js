import {
  pageBody,
  skills,
  modal,
  modalTitle,
  modalImg,
  modalStory,
  modalCloseButton,
} from "./constants.js";
import { closeNavBar } from "./nav-bar.js";

// Открыть модальное окно
function openModal(itm, title, img, story) {
  modal.classList.add("modal_active");
  modalTitle.textContent = title;
  // Условие для выбора типа модального окна (удаляет не нужные элементы)
  if (img === '') {
    modalImg.style.setProperty("display", "none");   
  }
  if (img !== '') {
    modalTitle.style.setProperty("display", "none");  
    modalStory.style.setProperty("display", "none");
  }
  modalImg.src = img;
  modalStory.textContent = story;
  document.body.classList.add("overlay");
}

// Закрыть модальное окно
function closeModal() {
  modal.classList.remove("modal_active");
  document.body.classList.remove("overlay");
  setTimeout(() => {
    modalTitle.textContent = "";
    modalTitle.style.removeProperty("display");
    modalStory.textContent = "";
    modalStory.style.removeProperty("display");
    modalImg.src = "";
    modalImg.setAttribute("alt", "");
    modalImg.style.removeProperty("display");
  }, 200);
}


function closeModalOnButtonClick() {
  modalCloseButton.addEventListener("click", () => {
    closeModal();
  });
}

export function closeModalClickOutside() {
  pageBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      closeModal();
      closeNavBar();
    }
  });
}

export function closeModalPushEsc() {
  pageBody.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (e.target.classList.contains("overlay")) {
      closeModal();
      closeNavBar();
    }
  });
}

// Открытие модального окна со скилами
export function skillModalEventListener() {
  skills.forEach((skill) => {
    skill.addEventListener("click", () => {
      const title = skill.querySelector(".skill__name").textContent;
      const story = skill.querySelector(".skill__story_container").textContent;
      openModal(skill, title, '', story);
    });
  });
closeModalOnButtonClick();
}

// Открытие модального окна с фотками (обработчик в image-carousel.js)
export function lifeModalSlide(el) {
    const img = el.children[0].src;
    openModal(el, '', img, '');
closeModalOnButtonClick();
}
