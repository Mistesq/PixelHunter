import {AnswerTypes, MAX_LEVEL} from "../constants";

const statusTemlates = {
  [AnswerTypes.WRONG]: `<li class="stats__result stats__result--wrong"></li>`,
  [AnswerTypes.SLOW]: `<li class="stats__result stats__result--slow"></li>`,
  [AnswerTypes.FAST]: `<li class="stats__result stats__result--fast"></li>`,
  [AnswerTypes.NORMAL]: `<li class="stats__result stats__result--correct"></li>`,
  UNKNOWN: `<li class="stats__result stats__result--unknown"></li>`
};

const getProgressBar = (answers) => {
  const items = answers
    .map((answer) => statusTemlates[answer])
    .concat(new Array(MAX_LEVEL - answers.length).fill(statusTemlates.UNKNOWN))
    .join(``);

  return `<ul class="stats">${items}</ul>`;
};

export default getProgressBar;
