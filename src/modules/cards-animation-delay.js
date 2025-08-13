// --- Поочередное появления карточек ---
export async function cardsAnimationDelay(cards, selector) {
  for (const card of cards) {
    await new Promise((resolve) => {
      setTimeout(() => {
        card.classList.add(selector);
        resolve();
      }, 50);
    });
  }
}