export const choices = [`r`, `p`, `s`];

export const getComputerChoise = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

export const convertWord = (letter) => {
  if (letter === `r`) {
    return `камень`;
  } else if (letter === `p`) {
    return `бумага`;
  } else {
    return `ножницы`;
  }
};

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



