import {Points} from '../constants';

const calculatePoints = (answers, lives) => {
  const correctAnserPoints = answers.reduce(
      (acc, item) => acc + Points[item.type],
      0
  );

  const livePoints = lives * 50;

  return correctAnserPoints + livePoints;
};

export default calculatePoints;
