import {projectCards } from "./constants.js";

export function turnCards () {
  const allCards = projectCards;
  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      turnCard(card);
    })
  });
  
}

function turnCard(card) {
if (!card.classList.contains("flipped")) {
  card.classList.add("flipped");
  } else {
    card.classList.remove("flipped");
  }
}

export function turnAllCardsInStartState() {
  projectCards.forEach((card) => {
    card.classList.remove("flipped");
  })
}