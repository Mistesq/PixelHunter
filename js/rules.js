import {render, changeScreen} from './util';
import gameOneTemplate from './game-1';
import backToGreeting from './back';

const rulesTemplate = render(`<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`);

const rulesForm = rulesTemplate.querySelector(`.rules__form`);
const rulesInput = rulesTemplate.querySelector(`.rules__input`);
const rulesBtn = rulesForm.querySelector(`.rules__button`);
const backBtn = rulesTemplate.querySelector(`.back`);

backToGreeting(backBtn);

// const clearInput = () => {
//   nameInput.value = ``;
//   nextBtn.disabled = true;
// };

const rulesInputHandler = () => {
  rulesBtn.disabled = rulesInput.value !== `` ? false : true;
}

rulesInput.addEventListener(`input`, rulesInputHandler);

rulesForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  changeScreen(gameOneTemplate);
});

export default rulesTemplate;
