import RulesView from "./rules-view";
import Application from "../application";
import {getRenderContainer} from "../utils";
import HeaderView from "./header-view";

const rulesScreen = () => {
  let name = ``;
  const rules = new RulesView();
  const container = getRenderContainer();
  const header = new HeaderView();

  header.onBackButton = Application.showGreetingScreen;

  rules.onFormSubmit = (event) => {
    event.preventDefault();
    rules.unbind();
    Application.showGame(name);
  };

  rules.onInputChange = (event) => {
    const {value} = event.target;
    name = value;

    rules.button.disabled = !value;
  };

  container.appendChild(header.element);
  container.appendChild(rules.element);

  return container;
};

export default rulesScreen;
