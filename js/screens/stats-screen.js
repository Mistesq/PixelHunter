import StatsView from "./stats-view";
import HeaderView from "./header-view";
import Application from "../application";
import {getRenderContainer} from "../utils";

const statsScreen = (model) => {
  const container = getRenderContainer();
  const header = new HeaderView();
  const stats = new StatsView(model.state);

  header.onBackButton = Application.showGreetingScreen;

  container.appendChild(header.element);
  container.appendChild(stats.element);

  return container;
};

export default statsScreen;
