import {render, changeScreen} from './util';
import greetingTemplate from './greeting';

const introTemplate = render(`<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`);

const greetingButton = introTemplate.querySelector(`.intro__asterisk`);

greetingButton.addEventListener(`click`, () => changeScreen(greetingTemplate));

export default introTemplate;
