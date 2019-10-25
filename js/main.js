'use strict';
const INIT_SCREEN_ID = 0;
const screens = [
  `intro`,
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`,
];

const arrowsTemplate = document.createElement(`template`);

arrowsTemplate.innerHTML = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
  </div>
`;

document.body.appendChild(arrowsTemplate.content);

let currentScreen = INIT_SCREEN_ID;
const mainSection = document.querySelector(`.central`);
const templateScreens = screens.map((template) => document.querySelector(`#${template}`));

const renderScreen = (screenNumber) => {
  if (screenNumber > 0 && screenNumber <= templateScreens.length - 1) {
    currentScreen = screenNumber;
  }
  else {
    return true;
  }

  console.log(currentScreen);
  mainSection.innerHTML = ``;
  const currentFragment = templateScreens[currentScreen].content.cloneNode(true);
  mainSection.appendChild(currentFragment);
};

const createArrowNavigation = () => {
  const leftArrow = document.querySelector(`.arrows__btn--left`);
  const rightArrow = document.querySelector(`.arrows__btn--right`);
  leftArrow.addEventListener(`click`, previousSlideHandler);
  rightArrow.addEventListener(`click`, nextSlideHandler);
  document.addEventListener(`keydown`, arrowKeyDownHandler);
};

const previousSlideHandler = () => {
  renderScreen(currentScreen - 1);
};

const nextSlideHandler = () => {
  renderScreen(currentScreen + 1);
};

const arrowKeyDownHandler = (evt) => {
  switch (evt.key) {
    case `ArrowLeft`:
      renderScreen(currentScreen - 1);
      break;
    case `ArrowRight`:
      renderScreen(currentScreen + 1);
      break;
  }
};

createArrowNavigation();
