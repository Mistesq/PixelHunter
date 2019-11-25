import {initialState, AnswerTypes} from "../constants";

const toggleLevel = (answer, state) => {
  let {level, lives, answers} = state;
  level++;

  if (answer === AnswerTypes.WRONG) {
    lives--;
  }

  return {level, lives, timer: initialState.timer, answers: [...answers, answer]};
};

export default toggleLevel;
