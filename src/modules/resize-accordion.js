import { openBackgroundCard } from "./constants.js";

// --- изменение размера background_item_story в background_item  ---
export function resizeDescription() {
  openBackgroundCard.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetElement = e.target.closest(".background__item");
      if (targetElement.classList.contains("background__item_opened")) {
        targetElement.classList.remove("background__item_opened");
        return;
      }
      if (!targetElement.classList.contains("background__item_opened")) {
        targetElement.classList.add("background__item_opened");
        return;
      }
    });
  });
}
