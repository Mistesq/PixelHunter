export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const mainContent = document.querySelector(`#main`);

export const changeScreen = (element) => {
  mainContent.innerHTML = ``;
  mainContent.appendChild(element);
};
