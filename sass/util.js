export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const mainSection = document.querySelector(`.central`);

export const changeScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};
