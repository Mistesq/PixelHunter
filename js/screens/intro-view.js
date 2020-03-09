import AbstractView from "./abstract-view";

class IntroView extends AbstractView {
  constructor(callback) {
    super();
    this.callback = callback;
    this.onAsreriskClick = this.onAsreriskClick.bind(this);
  }

  get template() {
    return `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
  `;
  }

  bind() {
    this._asterisk = this._element.querySelector(`.intro__asterisk`);
    this._asterisk.addEventListener(`click`, this.onAsreriskClick);
  }

  unbind() {
    this._asterisk.removeEventListener(`click`, this.onAsreriskClick);
  }

  onAsreriskClick(event) {
    this.callback(event);
    this.unbind();
  }
}

export default IntroView;
