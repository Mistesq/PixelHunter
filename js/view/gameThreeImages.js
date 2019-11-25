import {render, renderScreen, getAnswersHandler, handleBackButtonClick } from "../utils";
import {toggleScreens, questions, getRandomQuestion} from "../data/data";
import getHeader from "../view/header";
import getProgressBar from "../view/progressBar";

const getOption = ({url, width, height}, index) => {

  return `
  <div class="game__option">
    <img src="${url}" alt="Option ${index + 1}" width="${width}" height="${height}">
  </div>`;
};

const getGameThreeImages = (state, level) => {
  const {answers, question} = level;
  const template = `
  ${getHeader(state)}
  <section class="game">
    <p class="game__task">${question}</p>
    <form class="game__content  game__content--triple">
      ${answers
        .map((answer, index) => getOption(answer.image, index + 1))
        .join(``)}
    </form>
    ${getProgressBar(state.answers)}
  </section>
  `;

  const element = render(template);
  const formElement = element.querySelector(`form`);
  const images = formElement.querySelectorAll(`img`);

  const showNextScreen = (answer) => {
    unsubscribe();
    toggleScreens(answer, state);
  };

  const answerHandler = (event) => {
    if (event.target.tagName === `IMG`) {
      const answer = new Array(3).fill(`photo`);
      images.forEach((img, index) => {
        if (event.target === img) {
          answer[index] = `painting`;
        }

        showNextScreen(answer);
      });
    }
  };

  const unsubscribe = () => {
    formElement.removeEventListener(`click`, answerHandler);
  };

  formElement.addEventListener(`click`, answerHandler);
  handleBackButtonClick(element, unsubscribe);

  return element;
};

export default getGameThreeImages;
