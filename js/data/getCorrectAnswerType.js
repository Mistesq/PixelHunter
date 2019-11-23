import {AnswerTypes} from '../constants';

const getCorrectAnswerType = (timerTime) => {
  if (timerTime < 10) {
    return {type: AnswerTypes.SLOW};
  }

  if (timerTime > 20) {
    return {type: AnswerTypes.FAST};
  }

  return {type: AnswerTypes.NORMAL};
};

export default getCorrectAnswerType;
