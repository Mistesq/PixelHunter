import {render, handleBackButtonClick } from "../utils";
import getHeader from "./header";
import getResultScreen from "./resultScreen";
import {isFailed} from "../data/data";

const getStatsScreen = (state) => {
  const fail = isFailed(state);

  const template = `
  ${getHeader()}
  <section class="result">
      <h2 class="result__title">${fail ? `Поражение` : `Победа!`}</h2>
      ${getResultScreen(state)}
  </section>
 `;

  const element = render(template);

  handleBackButtonClick(element);

  return element;
};

export default getStatsScreen;
