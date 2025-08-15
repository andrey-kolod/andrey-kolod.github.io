import { skillsWrapperButton, skillsWrapper } from "./constants.js";

export function setSkillsSectionSize() {
skillsWrapperButton.addEventListener("click", () => {
  skillsWrapper.classList.toggle("skills__wrapper_opened");
  if (skillsWrapper.classList.contains("skills__wrapper_opened")) {
    skillsWrapperButton.textContent = 'СВЕРНУТЬ'.toUpperCase();
    
  }
  if (!skillsWrapper.classList.contains("skills__wrapper_opened")) {
    skillsWrapperButton.textContent = 'БОЛЬШЕ'.toUpperCase();
  }
})
}