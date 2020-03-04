export const AnswerTypes = {
  FAST: `fast`,
  SLOW: `slow`,
  NORMAL: `normal`,
  WRONG: `wrong`
};

export const Points = {
  [AnswerTypes.FAST]: 150,
  [AnswerTypes.SLOW]: 50,
  [AnswerTypes.NORMAL]: 100,
  [AnswerTypes.WRONG]: 0
};

export const TimerRanges = {
  BLINK: 5,
  SLOW: 10,
  FAST: 20
};

export const initialState = {
  lives: 3,
  level: 1,
  timer: 30,
  answers: []
};

export const MAX_LEVEL = 5;

export const QuestionTypes = {
  GAME_ONE_SCREEN: `oneImage`,
  GAME_TWO_SCREEN: `twoImages`,
  GAME_THREE_SCREEN: `threeImages`
};

export const Bonuses = {
  [AnswerTypes.FAST]: 50,
  [AnswerTypes.SLOW]: -50,
  [AnswerTypes.NORMAL]: 100,
  LIVES: 50
};
