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

export const INITIAL_STATE = {
  lives: 3,
  level: 1,
  timer: 30,
};

export const MAX_LEVEL = 10;
