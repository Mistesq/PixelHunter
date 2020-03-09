import AbstractView from "./abstract-view";
import getResultScreen from "./resultScreen";
import {isFailed} from "../utils";

class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    const {data} = this;
    data.sort((a, b) => b.date - a.date);
    const fail = isFailed(data[0]);

    return  `
    <section class="result">
        <h2 class="result__title">${fail ? `Поражение` : `Победа!`}</h2>
        ${data.map((state, index) => getResultScreen(state, index + 1))}
    </section>
   `;
  }
}

export default StatsView;
