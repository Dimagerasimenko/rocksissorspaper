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
