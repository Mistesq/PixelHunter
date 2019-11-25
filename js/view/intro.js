import {render, renderScreen} from '../utils';
import greetingTemplate from './greeting';

const getInroScreen = () => {
  const template = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
  `;
  const element = render(template);
  const asterisk = element.querySelector(`.intro__asterisk`);

  const onAsreriskClick = () => {
    renderScreen(greetingTemplate());
  };

  asterisk.addEventListener(`click`, onAsreriskClick);

  return element;
};

export default getInroScreen;
