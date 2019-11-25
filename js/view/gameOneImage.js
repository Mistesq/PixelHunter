import {render, renderScreen, getAnswersHandler, handleBackButtonClick } from "../utils";
import {toggleScreens, questions, getRandomQuestion} from "../data/data";
import getHeader from "../view/header";
import getProgressBar from "../view/progressBar";

const getGameOneImage = (state, level) => {
  const {question, answers} = level;
  const { image: {width, height, url} } = answers[0];
  const template = `
  ${getHeader(state)}
  <section class="game">
    <p class="game__task">${question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${url}" alt="Option 1" width="${width}" height="${height}">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${getProgressBar(state.answers)}
  `;

  const element = render(template);
  const formElement = element.querySelector(`form`);

  const showNextScreen = (answer) => {
    unsubscribe();
    toggleScreens(answer, state);
  };

  const unsubscribe = () => {
    formElement.removeEventListener(`change`, answersHandler);
  };

  const answersHandler = getAnswersHandler(showNextScreen);

  formElement.addEventListener(`change`, answersHandler);
  handleBackButtonClick(element, unsubscribe);

  return element;
};

export default getGameOneImage;
