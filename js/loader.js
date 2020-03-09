const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = `11041987`;

const toJSON = (response) => response.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const prepareData = (questionsData) => {
  return new Promise((resolve) => {
    const imageData = [];
    const loadedImages = [];

    questionsData.forEach((question) => {
      question.answers.forEach((answer) => {
        imageData.push(answer.image);
      });
    });

    imageData.forEach((data) => {
      const image = new Image();

      image.src = data.url;
      image.onload = () => {
        loadedImages.push(image);

        if (loadedImages.length === imageData.length) {
          resolve(questionsData);
        }
      };
    });
  });
};

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
        .then(checkStatus)
        .then((response) => response.json())
        .then(prepareData);
  }

  static saveResult(data, playerName) {
    const options = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`, options)
        .then(checkStatus);
  }

  static loadResulsts(playerName) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`)
        .then(checkStatus)
        .then(toJSON);
  }
}

export default Loader;
