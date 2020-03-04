import GameThreeImagesView from "./gameThreeImages-view";
import GameOneImageView from "./gameOneImage-view";
import GameTwoImagesView from "./gameTwoImages-view";
import {QuestionTypes, AnswerTypes} from "../constants";
import {getRenderContainer} from "../utils";
import getCorrectAnswerType from "../data/getCorrectAnswerType";
import HeaderView from "./header-view";
import Application from "../application";

const gameScreen = (model) => {
  const container = getRenderContainer();
  const game = getRenderContainer();
  const header = new HeaderView(model.state);
  let timeout;

  const stopTimeout = () => {
    clearTimeout(timeout);
  };

  const updateView = (spot, view) => {
    spot.innerHTML = ``;
    spot.appendChild(view.element);
  };

  const toggleScreens = (answer) => {
    const correct = model.isCorrect(answer);
    const answerType = correct
      ? getCorrectAnswerType(model.state.timer)
      : AnswerTypes.WRONG;

    stopTimeout();
    model.toggleLevel(answerType);

    if (model.gameOver) {
      Application.showStats(model);
      return;
    }

    header.updateTimer(model.state);
    header.updateLives(model.state);
    updateView(game, getGameView());
    startTimeout();
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

  header.onBackButton = () => {
    stopTimeout();
    Application.showGreetingScreen();
  };

  startTimeout();


  game.appendChild(firstGameScreen);
  container.appendChild(header.element);
  container.appendChild(game);

  return container;
};

export default gameScreen;
