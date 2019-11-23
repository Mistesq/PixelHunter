const tickTimer = ({timer, lives, level}) => {
  timer--;

  if (timer < 0) {
    return false;
  }

  return {timer, lives, level};
};

export default tickTimer;
