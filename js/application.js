import {renderScreen} from "./utils";
import IntroView from "./screens/intro-view";
import GreetingView from "./screens/greeting-view";
import rulesScreen from "./screens/rules-screen";
import gameScreen from "./screens/game-screen";

class Application {
  static showInto() {
    renderScreen(new IntroView(Application.showGreetingScreen).element);
  }

  static showGreetingScreen() {
    renderScreen(new GreetingView(Application.showRulesScreen).element);
  }

  static showRulesScreen() {
    renderScreen(rulesScreen());
  }

  static showGame(model) {
    renderScreen(gameScreen(model));
  }
}

export default Application;
