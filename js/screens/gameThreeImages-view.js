import AbstractView from "./abstract-view";
import getProgressBar from "./progressBar";
import {ImageTypes} from "../constants";

class GameThreeImagesView extends AbstractView {
  constructor(state, level, callback) {
    super();
    this.level = level;
    this.state = state;
    this.callback = callback;
    this.handleAnswers = this.handleAnswers.bind(this);
    this.answerHandler = this.answerHandler.bind(this);
  }

  static getOption({url, width, height}, index) {

    return `
    <div class="game__option">
      <img src="${url}" alt="Option ${index + 1}" width="${width}" height="${height}">
    </div>`;
  };

  get template() {
     const {answers, question} = this.level;
     const {state} = this;

     return `
       <section class="game">
         <p class="game__task">${question}</p>
         <form class="game__content  game__content--triple">
           ${answers
             .map((answer, index) =>
               GameThreeImagesView.getOption(answer.image, index + 1)
             )
             .join(``)}
         </form>
         ${getProgressBar(state.answers)}
       </section>`;
   }

   bind() {
     this.formElement = this._element.querySelector(`form`);
     this.images = this.formElement.querySelectorAll(`img`);
     this.formElement.addEventListener(`click`, this.answerHandler);
   }

   unbind() {
     this.formElement.removeEventListener(`click`, this.answersHandler);
   }

   getAnswerKeys(answers) {
    const paintings = answers.filter(
        (answer) => answer.type === ImageTypes.PAINTING
    );

    if (paintings.length === 1) {
      return {fill: ImageTypes.PHOTO, answer: ImageTypes.PAINTING};
    }

    return {fill: ImageTypes.PAINTING, answer: ImageTypes.PHOTO};
  }

   answerHandler(event) {
     const answerKeys = this.getAnswerKeys(this.level.answers);

     if (event.target.tagName === `IMG`) {
       const answer = new Array(3).fill(answerKeys.fill);
       this.images.forEach((img, index) => {
         if (event.target === img) {
           answer[index] = answerKeys.answer;
         }
       });
       this.handleAnswers(answer);
     }
   }

   handleAnswers(answer) {
     this.unbind();
     this.callback(answer, this.state);
   }
 }

export default GameThreeImagesView;
