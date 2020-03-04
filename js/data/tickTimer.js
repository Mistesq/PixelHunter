const tickTimer = ({timer}) => {
  timer--;

  if (timer < 0) {
    return false;
  }

  return timer;
};

export default tickTimer;
