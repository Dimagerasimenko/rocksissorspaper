import {Elements} from "./element";
import {getComputerChoise, convertWord} from "./util";

const win = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add(`green-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`green-glow`);
  },
  1000);

  Elements.userScore++;
  Elements.userScoreSpan.textContent = Elements.userScore;
  Elements.result.innerHTML = `${convertWord(userChoice)}${smallUserWord} победили ${convertWord(computerChoice)}${smallCompWord}. Вы победили!`;
};

const lose = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add(`red-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`red-glow`);
  },
  1000);

  Elements.computerScore++;
  Elements.computerScoreSpan.textContent = Elements.computerScore;
  Elements.result.innerHTML = `${convertWord(userChoice)} ${smallUserWord} Проиграли ${convertWord(computerChoice)}${smallCompWord}. Вы проиграли`;
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);

  userChoiceDiv.classList.add(`gray-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`gray-glow`);
  },
  1000);
  Elements.computerScoreSpan.textContent = Elements.computerScore;
  Elements.result.innerHTML = `${convertWord(userChoice)} ${smallUserWord} Ничья ${convertWord(computerChoice)} ${smallCompWord}. У вас ничья`;
};

export const game = (userChoice) => {
  const computerChoice = getComputerChoise();
  switch (userChoice + computerChoice) {
    case `rs`:
    case `pr`:
    case `sp`:
      win(userChoice, computerChoice);
      break;
    case `rp`:
    case `ps`:
    case `sr`:
      lose(userChoice, computerChoice);
      break;
    case `rr`:
    case `pp`:
    case `ss`:
      draw(userChoice, computerChoice);
      break;
  }
};


