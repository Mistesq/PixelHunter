import RulesView from "./rules-view";
import Application from "../application";
import {getRenderContainer} from "../utils";
import HeaderView from "./header-view";
import GameModel from "../game-model";
import {questions} from "../data/data";

const rulesScreen = () => {
  let name = ``;
  const rules = new RulesView();
  const container = getRenderContainer();
  const header = new HeaderView();

  header.onBackButton = Application.showGreetingScreen;

  rules.onFormSubmit = (event) => {
    event.preventDefault();
    rules.unbind();
    const model = new GameModel(name, questions);

    Application.showGame(model);
  };

  rules.onInputChange = (event) => {
    const {value} = event.target;
    name = value;

    if (value) {
      rules.button.disabled = false;
    } else {
      rules.button.disabled = true;
    }
  };

  container.appendChild(header.element);
  container.appendChild(rules.element);

  return container;
};

export default rulesScreen;
