import {getComputerChoise, render, convertWord, changeScreen} from "./util";
import {resultText} from "./gramar";


const gameTemplate = render(`

<div class="score-board">
<div class='help'>Подсказка
<div class="helper"> 
    <div class="helper-text">
        <p>Чего хочу?</p>
        <div class="help-cross">X</div>
    </div> 
 </div>
</div>
<button type="button" class="btn-start-timer">Старт</button>
<div class="timer">
<p class="timer-p"></p>
</div>
    <div id="user-label" class="score-board-badge score-board-badge-user">Пользователь</div>
    <div id="computer-label" class="score-board-badge-computer score-board-badge">Компьютер</div>
    <span id="user-score" class="score-board-user">0</span>:<span id="computer-score" class="score-board-computer">0</span>
  </div>
  <div class="result">
    <div class="result-title">
    <p>Игра пока не началась.</p>
  </div>
  </div>
  <div class="choices">
    <div class="choice rock" id="r" >
    <img src="img/rock.svg" alt="rock" data-target="r">
    </div>
    <div class="choice paper" id="p" >
    <img src="img/paper.svg" alt="paper" data-target="p">
    </div>
    <div class="choice scissors" id="s">
    <img src="img/scissors.svg" alt="scissors"  data-target="s">
    </div>
    </div>    
`);

let userScore = 0;
let computerScore = 0;
let computerScoreSpan = gameTemplate.querySelector(`.score-board-computer`);
let userScoreSpan = gameTemplate.querySelector(`.score-board-user`);
let resultP = gameTemplate.querySelector(`.result-title > p`);
let helpGameTemp = gameTemplate.querySelector(`.help`);
let helpDiv = gameTemplate.querySelector(`.helper`);
let helpCross = gameTemplate.querySelector(`.help-cross`);

helpGameTemp.addEventListener(`click`, () => {
  helpDiv.classList.add(`help-show`);
});

helpCross.addEventListener(`click`, () => {
  helpDiv.classList.remove(`help-show`);
  alert(`работает`);

});

const win = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertWord(userChoice)}${smallUserWord} победили ${convertWord(computerChoice)}${smallCompWord}. Вы победили!`;
  userChoiceDiv.classList.add(`green-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`green-glow`);
  },
  1000);
};

const lose = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertWord(userChoice)} ${smallUserWord} Проиграли ${convertWord(computerChoice)}${smallCompWord}. Вы проиграли`;
  userChoiceDiv.classList.add(`red-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`red-glow`);
  },
  1000);
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = `Вы`.fontsize(3).sup();
  const smallCompWord = `Компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertWord(userChoice)} ${smallUserWord} Ничья ${convertWord(computerChoice)} ${smallCompWord}. У вас ничья`;
  userChoiceDiv.classList.add(`gray-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`gray-glow`);
  },
  1000);
};

const game = (userChoice) => {
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

const rockDiv = gameTemplate.querySelector(`.rock`);
const paperDiv = gameTemplate.querySelector(`.paper`);
const scissorsDiv = gameTemplate.querySelector(`.scissors`);
rockDiv.addEventListener(`click`, () => game(`r`));
paperDiv.addEventListener(`click`, () => game(`p`));
scissorsDiv.addEventListener(`click`, () => game(`s`));


let timerS = gameTemplate.querySelector(`.timer-p`);
let minute = 10;
const btnStartGame =gameTemplate.querySelector(`.btn-start-timer`);

const resultGameRSP = render(`
    <div class="winner"><span>Победитель  </span><span> : </span><span class="winner-span"></span></div>
  <div class="result-field">
    <div class="user-result"><span>игрок: </span> <p></p></div>
    <div class="computer-result"><span>компьютер: </span><p></p></div> 
  </div>
`);
let resultUser = resultGameRSP.querySelector(`.user-result > p`);
let timerInerval;
let resultComputer = resultGameRSP.querySelector(`.computer-result > p`);
let winner = resultGameRSP.querySelector(`.winner-span`);

let timeCounter = () => {
  minute--;
  if (minute < 5){
    timerS.style.color = `red`;
  }
  if (minute >= 0) {
    timerS.innerHTML = minute;
  } else {
    timerS.innerHTML = `Игра закончена`;
    resultUser.innerHTML =`${userScore}. ${resultText(userScore)} `;
    resultComputer.innerHTML = `${computerScore}. ${resultText(computerScore)} `;
    stopInterval();
    if (userScore > computerScore) {
      winner.innerHTML = `Вы победили`;
    } else {
      winner.innerHTML = `Комп`;
    }
    changeScreen(resultGameRSP);
  }
};


btnStartGame.addEventListener(`click`, () => {
  btnStartGame.style.display = `none`;
  timerInerval = setInterval(timeCounter, 1000);
});



function stopInterval() {
clearInterval(timerInerval);
};



export default gameTemplate;
