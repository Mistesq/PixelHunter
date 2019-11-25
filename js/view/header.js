import {initialState} from "../constants";

const getHeader = (state) => {
  const fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
  const emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`;
  let gameState = ``;

  const getLives = (currentLives, maxLives) => {
    return new Array(maxLives - currentLives)
      .fill(emptyHeart)
      .concat(new Array(currentLives).fill(fullHeart))
      .join(``);
  };

  if (state) {
    gameState = `
<div class="game__timer">${state.timer}</div>
<div class="game__lives">
  ${getLives(state.lives, initialState.lives)}
</div>`;
  }

  return `<header class="header">
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>
  ${gameState}
</header>`;
};

export default getHeader;
