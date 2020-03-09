import AbstractView from "./abstract-view";

class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    const {error} = this;
    return `
      <section class="modal">
        <div class="modal__inner">
          <h2 class="modal__title">Произошла ошибка!</h2>
          <p class="modal__text modal__text--error">${error}. Пожалуйста, перезагрузите страницу.</p>
        </div>
      </section>
    `;
  }
}

export default ErrorView;
