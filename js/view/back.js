import {renderScreen} from '../utils';
import greetingTemplate from './greeting';

const backToGreeting = (backButton) => {
  backButton.addEventListener(`click`, () => renderScreen(greetingTemplate));
};

export default backToGreeting;
