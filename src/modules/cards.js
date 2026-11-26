// На компьютере карточку переворачивает наведение (CSS),
// на телефоне — касание, с клавиатуры — Enter/пробел или Tab к ссылке на обороте.
const TOUCH_QUERY = window.matchMedia('(hover: none)');

export function initCards() {
  document.querySelectorAll('.card').forEach((card) => {
    const toggle = () => card.classList.toggle('card_flipped');

    card.addEventListener('click', (event) => {
      if (event.target.closest('a') || !TOUCH_QUERY.matches) return;
      toggle();
    });

    card.addEventListener('keydown', (event) => {
      if (event.target !== card || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      toggle();
    });

    card.addEventListener('focusin', (event) => {
      if (event.target.closest('a')) card.classList.add('card_flipped');
    });

    card.addEventListener('focusout', (event) => {
      if (!card.contains(event.relatedTarget)) card.classList.remove('card_flipped');
    });
  });
}
