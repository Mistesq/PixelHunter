import {changeScreen} from './util';
import greetingTemplate from './greeting';

const backToGreeting = (backButton) => {
  backButton.addEventListener(`click`, () => changeScreen(greetingTemplate));
};

export default backToGreeting;
