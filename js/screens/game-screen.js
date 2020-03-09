import GameThreeImagesView from "./gameThreeImages-view";
import GameOneImageView from "./gameOneImage-view";
import GameTwoImagesView from "./gameTwoImages-view";
import {QuestionTypes, AnswerTypes} from "../constants";
import {getRenderContainer, isDebug} from "../utils";
import getCorrectAnswerType from "../data/getCorrectAnswerType";
import HeaderView from "./header-view";
import Application from "../application";
import ConfirmationView from "./confirmation-view";
import DebugView from "./debug-view";

const gameScreen = (model) => {
  const container = getRenderContainer();
  const game = getRenderContainer();
  const header = new HeaderView(model.state);
  const confirmation = new ConfirmationView();
  let timeout;
  const debug = isDebug();
  let debugView;

  if (debug) {
    debugView = new DebugView();
    document.body.appendChild(debugView.element);
  }

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
    const {state} = model;

    header.updateTimer(state);
    header.updateLives(state);
    updateView(game, getGameView());
    startTimeout();
  };

  const getHint = (level) => {
    return JSON.stringify(level.answers.map((answer)=> answer.type));
  };

  const getGameView = () => {
    const {state, levelData, levelType} = model;

    if (debug) {
      debugView.show(getHint(levelData));
    }

    switch (levelType) {
      case QuestionTypes.GAME_TWO_SCREEN:
        return new GameTwoImagesView(state, levelData, toggleScreens);
      case QuestionTypes.GAME_THREE_SCREEN:
        return new GameThreeImagesView(state, levelData, toggleScreens);
      case QuestionTypes.GAME_ONE_SCREEN:
        return new GameOneImageView(state, levelData, toggleScreens);
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

  const handleCloseConfirmation = () => {
    container.removeChild(confirmation.element);
    startTimeout();
  };

  confirmation.onCloseButtonClick = handleCloseConfirmation;
  confirmation.onCancelButtonClick = handleCloseConfirmation;
  confirmation.onOkButtonClick = Application.start;

  header.onBackButton = () => {
    stopTimeout();
    container.appendChild(confirmation.element);
  };

  startTimeout();


  game.appendChild(firstGameScreen);
  container.appendChild(header.element);
  container.appendChild(game);

  return container;
};

export default gameScreen;
