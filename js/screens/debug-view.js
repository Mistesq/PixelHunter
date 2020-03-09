import AbstractView from "./abstract-view";

class DebugView extends AbstractView {
  constructor(message = ``) {
    super();
    this._message = message;
  }

  get template() {
    const {_message} = this;
    return `<div class="debug-box" style="
      position: absolute;
      padding: 20px;
      top: 0;
      right: 0;
      background-color: rgba(0,0,0, 0.8);
      width: 300px;
      height: 120px;
      font-size: 16px;
      font-family: Arial, sans-serif;
      color: #13e013;">${_message}</div>`;
  }

  show(message) {
    this.container.innerHTML = message;
  }

  bind() {
    this.container = this._element.querySelector(`.debug-box`);
  }
}

export default DebugView;
