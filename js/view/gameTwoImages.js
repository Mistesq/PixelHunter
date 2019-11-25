import {render, renderScreen, getAnswersHandler, handleBackButtonClick } from "../utils";
import {toggleScreens, questions, getRandomQuestion} from "../data/data";
import getHeader from "../view/header";
import getProgressBar from "../view/progressBar";

const getOption = ({url, width, height}, index) => {

  return `
  <div class="game__option">
    <img src="${url}" alt="Option ${index}" width="${width}" height="${height}">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question${index}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question${index}" type="radio" value="painting">
      <span>Рисунок</span>
    </label>
  </div>`;
};

const getGameTwoImages = (state, level) => {
  const {question, answers} = level;
  const template = `
  ${getHeader(state)}
  <section class="game">
    <p class="game__task">${question}</p>
    <form class="game__content">
      ${answers.map((answer, index) => getOption(answer.image, index + 1)).join(``)}
    </form>
    ${getProgressBar(state.answers)}
  </section>
  `;

  const element = render(template);
  const formElement = element.querySelector(`form`);

  const showNextScreen = (answer) => {
    unsubscribe();
    toggleScreens(answer, state);
  };

  const answersHandler = getAnswersHandler(showNextScreen);

  const unsubscribe = () => {
    formElement.removeEventListener(`change`, answersHandler);
  };

  formElement.addEventListener(`change`, answersHandler);
  handleBackButtonClick(element, unsubscribe);

  return element;
};

export default getGameTwoImages;
