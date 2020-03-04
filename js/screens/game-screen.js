import GameThreeImagesView from "./gameThreeImages-view";
import GameOneImageView from "./gameOneImage-view";
import GameTwoImagesView from "./gameTwoImages-view";
import {QuestionTypes, AnswerTypes} from "../constants";
import {renderScreen, getRenderContainer} from "../utils";
import getCorrectAnswerType from "../data/getCorrectAnswerType";
import StatsView from "../screens/stats-view";
import HeaderView from "./header-view";

const gameScreen = (model) => {
  window.model = model;
  const container = getRenderContainer();
  const game = getRenderContainer();
  const header = new HeaderView(model.state);
  let timeout;

  const updateView = (spot, view) => {
    spot.innerHTML = ``;
    spot.appendChild(view.element);
  };

  const toggleScreens = (answer) => {
    clearTimeout(timeout);

    const correct = model.isCorrect(answer);
    const answerType = correct
      ? getCorrectAnswerType(model.state.timer)
      : AnswerTypes.WRONG;

    model.toggleLevel(answerType);

    if (model.gameOver) {
      renderScreen(new StatsView(model.state).element);
      return;
    }
    startTimeout();
    header.updateTimer(model.state);
    header.updateLives(model.state);
    updateView(game, getGameView());
  };

  const getGameView = () => {
    switch (model.levelType) {
      case QuestionTypes.GAME_TWO_SCREEN:
        return new GameTwoImagesView(model.state, model.levelData, toggleScreens);
      case QuestionTypes.GAME_THREE_SCREEN:
        return new GameThreeImagesView(model.state, model.levelData, toggleScreens);
      case QuestionTypes.GAME_ONE_SCREEN:
        return new GameOneImageView(model.state, model.levelData, toggleScreens);
      default:
        throw new Error(`incorrect type of GameView`);
    }
  };

  const firstGameScreen = getGameView().element;
  const startTimeout = () => {
    timeout = setTimeout(() => {
      const timer = model.tick();

      if (timer) {
        header.updateTimer(model.state);
        startTimeout();
      } else {
        toggleScreens(false);
      }
    }, 1000);
  };

  startTimeout();

  game.appendChild(firstGameScreen);
  container.appendChild(header.element);
  container.appendChild(game);

  return container;
};

export default gameScreen;
