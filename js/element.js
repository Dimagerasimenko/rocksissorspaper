

let userScore = 0;
let computerScore = 0;

let computerScoreSpan = document.getElementById(`computer-score`);
let userScoreSpan = document.getElementById(`user-score`);
let rockDiv = document.getElementById(`r`);
let paperDiv = document.getElementById(`p`);
let sissorsDiv = document.getElementById(`s`);
let inputForm = document.querySelector(`#name`);
let btnForm = document.querySelector(`.form-board > .btnForm`);
let divForm = document.querySelector(`.forma`);
let userName = document.getElementById(`user-label`);
let myselfForm = document.querySelector(`.form-board`);


export const Elements = {
  userScore,
  computerScore,
  computerScoreSpan,
  userScoreSpan,
  rockDiv,
  paperDiv,
  sissorsDiv,
  inputForm,
  btnForm,
  userName,
  myselfForm,
  divForm
};
