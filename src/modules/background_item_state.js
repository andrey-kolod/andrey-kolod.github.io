import {
  backgroundItemTitles,
  backgroundItemEstablishments,
  backgroundItemTimePeriods,
  backgroundItemOpenArrows,
  backgroundItemStorys,
  backgroundItemCheckboxes,
} from "./constants.js";

// --- ХОВЕР НА КАРТОЧКУ ОПЫТА В BACKGROUND ---

let backgroundHoveredElements = [];
backgroundHoveredElements.push(
  ...backgroundItemTitles,
  ...backgroundItemEstablishments,
  ...backgroundItemTimePeriods,
  ...backgroundItemOpenArrows,
  ...backgroundItemStorys
);

export function backgroundItemState() {
  // Добавить событие ховер на background_item
  backgroundHoveredElements.forEach((item) => {
    // наведение мыши на элементы
    item.addEventListener("mouseenter", function () {
      this.parentElement.classList.add("hovered");
      this.parentElement.children[4].classList.add("hoveredArrow");
      this.parentElement.parentElement.classList.add("hoveredElement");
      changeBackgroundItemOpenArrow(item, "▲", "▼");
      // отведение мыши с элемента
      item.addEventListener("mouseleave", function () {
        if (this.parentNode.children[0].checked) {
          this.parentElement.classList.remove("hovered");
          this.parentElement.parentElement.classList.remove("hoveredElement");
        }
        if (!this.parentNode.children[0].checked) {
          this.parentElement.classList.remove("hovered");
          this.parentElement.children[4].classList.remove("hoveredArrow");
          this.parentElement.parentElement.classList.remove("hoveredElement");
        }
      });

      // нажатие на элемент, замена стрелки при открытии/сворачивании
      item.addEventListener("click", function () {
        changeBackgroundItemOpenArrow(item, "▼", "▲");
        // если (карточка открыта)
        if (!item.parentElement.children[0].checked) {
          // перебор чек-боксов
          backgroundItemCheckboxes.forEach((item) => {
            if (item.checked) {
              item.checked = false;
              item.parentElement.parentElement.classList.remove(
                "background__item_opened"
              );
              item.parentElement.children[4].textContent = "▼";
              item.parentElement.children[4].classList.remove("hoveredArrow");
            }
          });
        }
      });
    });
  });
}

// Функция выбора стрелки в зависимости от состояния checkbox(карточки)
function changeBackgroundItemOpenArrow(item, arrow1, arrow2) {
  if (item.parentNode.children[0].checked) {
    item.parentElement.children[4].textContent = arrow1;
    item.parentElement.children[4].textContent === "▼" ? "▲" : "▼";
  }
  if (!item.parentNode.children[0].checked) {
    item.parentElement.children[4].textContent = arrow2;
    item.parentElement.children[4].textContent === "▼" ? "▲" : "▼";
  }
}
