import AbstractView from "./abstract-view";
import {getAnswersHandler} from "../utils";
import getProgressBar from "./progressBar";

class GameOneImageView extends AbstractView {
  constructor(state, level, callback) {
    super();
    this.level = level;
    this.state = state;
    this.callback = callback;
    this.handleAnswers = this.handleAnswers.bind(this);
  }

  get template() {
    const {question, answers} = this.level;
    const {
      image: {width, height, url}
    } = answers[0];
    const {state} = this;

    return `
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
      ${getProgressBar(state.answers)}`;
  }

  bind() {
     this.formElement = this._element.querySelector(`form`);
     this.answersHandler = getAnswersHandler(this.handleAnswers);
     this.formElement.addEventListener(`change`, this.answersHandler);
   }

   unbind() {
     this.formElement.removeEventListener(`click`, this.answersHandler);
   }

   handleAnswers(answer) {
     this.unbind();
     this.callback(answer, this.state);
   }
 }

 export default GameOneImageView;
