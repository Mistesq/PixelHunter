import AbstractView from "./abstract-view";
import getResultScreen from "./resultScreen";
import {isFailed} from "../data/data";

class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const {state} = this;
    const fail = isFailed(state);

    const template = `
    <section class="result">
        <h2 class="result__title">${fail ? `Поражение` : `Победа!`}</h2>
        ${getResultScreen(state)}
    </section>
   `;
  }
}

export default StatsView;
