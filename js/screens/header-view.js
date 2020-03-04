import AbstractView from "./abstract-view";
import {initialState, TimerRanges} from "../constants";

class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
    this.emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`;
    this.fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
  }

  get template() {
    const state = this._state;

    let gameState = ``;

    if (state) {
      gameState = `
<div class="game__timer">${state.timer}</div>
<div class="game__lives">
  ${this.getLives(state.lives, initialState.lives)}
</div>`;
    }

    return `
<header class="header">
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
  }

  bind() {
    this.backButton = this._element.querySelector(`button.back`);
    this.backButton.addEventListener(`click`, this.onBackButton);
    this.gameLives = this._element.querySelector(`.game__lives`);
    this.gameTimer = this._element.querySelector(`.game__timer`);
  }

  getLives(currentLives, maxLives) {
    return new Array(maxLives - currentLives)
      .fill(this.emptyHeart)
      .concat(new Array(currentLives).fill(this.fullHeart))
      .join(``);
  }

  onBackButton() {
    console.log('work');
  }

  updateLives(state) {
    this.gameLives.innerHTML = this.getLives(state.lives, initialState.lives);
  }

  updateTimer(state) {
    const {timer} = state;
    if (timer <= TimerRanges.BLINK) {
      this.gameTimer.classList.add(`game__timer--blink`);
    } else {
      this.gameTimer.classList.remove(`game__timer--blink`);
    }

    this.gameTimer.innerHTML = timer;
  }
}

export default HeaderView;
