import AbstractView from "./abstract-view";
import getResultScreen from "./resultScreen";

class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const {state} = this;
    return  `
    <section class="result">
        <h2 class="result__title">${this.state.lives < 0 ? `Поражение` : `Победа!`}</h2>
        ${getResultScreen(state)}
    </section>
   `;
  }
}

export default StatsView;
