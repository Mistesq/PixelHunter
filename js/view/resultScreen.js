import getProgressBar from "./progressBar";
import {AnswerTypes, Bonuses} from "../constants";
import {isFailed} from "../data/data";

const countResults = ({answers, lives}) => {
  const countBonusesByAnswerType = (userAnswers, answerType) => {
    const quantity = userAnswers.filter((answer) => answer === answerType)
      .length;

    return {
      summ: quantity * Bonuses[answerType],
      quantity
    };
  };

  const countPointsForAllCorrectAnswers = (userAnswers) => {
    const quantity = userAnswers.filter(
        (answer) => answer !== AnswerTypes.WRONG
    ).length;

    return {
      summ: quantity * Bonuses[AnswerTypes.NORMAL],
      quantity
    };
  };

  const countLivesPoints = (userLives) => {
    return {
      quantity: userLives,
      summ: userLives * Bonuses.LIVES
    };
  };

  const result = {
    fast: countBonusesByAnswerType(answers, AnswerTypes.FAST),
    slow: countBonusesByAnswerType(answers, AnswerTypes.SLOW),
    correct: countPointsForAllCorrectAnswers(answers),
    lives: countLivesPoints(lives)
  };

  const total = Object.values(result).reduce((acc, value) => value.summ + acc, 0);

  return Object.assign({}, result, {total});
};

const getResultScreen = (state) => {
  if (isFailed(state)) {
    return `
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            ${getProgressBar(state.answers)}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
    `;
  }

  const results = countResults(state);

  return `
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        ${getProgressBar(state.answers)}
      </td>
      <td class="result__points">× ${Bonuses[AnswerTypes.NORMAL]}</td>
      <td class="result__total">${results.correct.summ}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">
        ${results.fast.quantity}
        <span class="stats__result stats__result--fast"></span>
      </td>
      <td class="result__points">${Bonuses[AnswerTypes.FAST]}</td>
      <td class="result__total">${results.fast.summ}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">
        ${results.lives.quantity}
        <span class="stats__result stats__result--alive"></span>
      </td>
      <td class="result__points">× ${Bonuses.LIVES}</td>
      <td class="result__total">
        ${results.lives.summ}
      </td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">
        ${results.slow.quantity}
        <span class="stats__result stats__result--slow"></span>
      </td>
      <td class="result__points">${Bonuses[AnswerTypes.SLOW]}</td>
      <td class="result__total">${results.slow.summ}</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">
        ${results.total}
      </td>
    </tr>
  </table>
  `;
};

export default getResultScreen;
