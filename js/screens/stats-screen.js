import StatsView from "./stats-view";
import HeaderView from "./header-view";
import Application from "../application";
import {getRenderContainer} from "../utils";

const statsScreen = (data) => {
  const container = getRenderContainer();
  const header = new HeaderView();
  const stats = new StatsView(data);

  header.onBackButton = Application.start;

  container.appendChild(header.element);
  container.appendChild(stats.element);

  return container;
};

export default statsScreen;
