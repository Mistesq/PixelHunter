import {renderScreen} from './utils';
import IntroView from "./view/intro-view";
import GreetingView from "./view/greeting-view";
import RulesView from "./view/rules-view";
import {renderFirstGameScreen} from "./data/data";

const showRulesScreen = () => {
  renderScreen(new RulesView(renderFirstGameScreen).element);
};

const showGreetingScreen = () => {
  renderScreen(new GreetingView(showRulesScreen).element);
  console.log(new GreetingView(showRulesScreen));
  console.log(new GreetingView(showRulesScreen).element);
};

renderScreen(new IntroView(showGreetingScreen).element);
