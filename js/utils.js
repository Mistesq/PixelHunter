import GreetingView from "./screens/greeting-view";
import {DEBUG} from "./constants";

export const isDebug = () => {
  const hash = window.location.hash.replace(`#`, ``);

  return hash.toLowerCase() === DEBUG;
};

export const handleBackButtonClick = (element, unsubscribe) => {
  const arrow = element.querySelector(`.back`);

  const onBackButtonClick = () => {
    if (unsubscribe) {
      unsubscribe();
    }

    arrow.removeEventListener(`click`, onBackButtonClick);
    renderScreen(new GreetingView().element);
  };

  arrow.addEventListener(`click`, onBackButtonClick);
};

export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const mainContent = document.querySelector(`#main`);

export const renderScreen = (element) => {
  mainContent.innerHTML = ``;
  mainContent.appendChild(element);
};

export const getAnswersHandler = (callback) => (event) => {
  const form = event.currentTarget;
  const formInputs = Array.from(form.elements);
  const questionNames = new Set();
  const checkedInputs = formInputs.filter((input) => input.checked === true);

  formInputs.forEach((input) => questionNames.add(input.name));

  if (checkedInputs.length === questionNames.size) {
    const answer = checkedInputs.map((input) => input.value);

    callback(answer);
  }
};

export const getRenderContainer = (template = ``, tagName = `div`) => {
  const wrapper = document.createElement(tagName);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const handleRotate = (event) => {
  const {target} = event;

  target.classList.add(`rotated`);
};

export const isFailed = (state) => {
  return state.lives < 0;
};
