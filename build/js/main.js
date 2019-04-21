(function () {
  'use strict';

  var userScore = 0;
  var computerScore = 0;
  var computerScoreSpan = document.getElementById("computer-score");
  var userScoreSpan = document.getElementById("user-score");
  var result = document.querySelector(".result > div");
  var rockDiv = document.getElementById("r");
  var paperDiv = document.getElementById("p");
  var sissorsDiv = document.getElementById("s");
  var inputForm = document.querySelector("#name");
  var btnForm = document.querySelector(".form-board > .btnForm");
  var divForm = document.querySelector(".forma");
  var userName = document.getElementById("user-label");
  var myselfForm = document.querySelector(".form-board");
  var Elements = {
    userScore: userScore,
    computerScore: computerScore,
    computerScoreSpan: computerScoreSpan,
    userScoreSpan: userScoreSpan,
    result: result,
    rockDiv: rockDiv,
    paperDiv: paperDiv,
    sissorsDiv: sissorsDiv,
    inputForm: inputForm,
    btnForm: btnForm,
    userName: userName,
    myselfForm: myselfForm,
    divForm: divForm
  };

  var choices = ["r", "p", "s"];
  var getComputerChoise = function getComputerChoise() {
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };
  var convertWord = function convertWord(letter) {
    if (letter === "r") {
      return "\u043A\u0430\u043C\u0435\u043D\u044C";
    } else if (letter === "p") {
      return "\u0431\u0443\u043C\u0430\u0433\u0430";
    } else {
      return "\u043D\u043E\u0436\u043D\u0438\u0446\u044B";
    }
  };

  var win = function win(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add("green-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("green-glow");
    }, 1000);
    Elements.userScore++;
    Elements.userScoreSpan.textContent = Elements.userScore;
    Elements.result.innerHTML = "".concat(convertWord(userChoice)).concat(smallUserWord, " \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438 ").concat(convertWord(computerChoice)).concat(smallCompWord, ". \u0412\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438!");
  };

  var lose = function lose(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add("red-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("red-glow");
    }, 1000);
    Elements.computerScore++;
    Elements.computerScoreSpan.textContent = Elements.computerScore;
    Elements.result.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " \u041F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438 ").concat(convertWord(computerChoice)).concat(smallCompWord, ". \u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438");
  };

  var draw = function draw(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add("gray-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("gray-glow");
    }, 1000);
    Elements.computerScoreSpan.textContent = Elements.computerScore;
    Elements.result.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " \u041D\u0438\u0447\u044C\u044F ").concat(convertWord(computerChoice), " ").concat(smallCompWord, ". \u0423 \u0432\u0430\u0441 \u043D\u0438\u0447\u044C\u044F");
  };

  var game = function game(userChoice) {
    var computerChoice = getComputerChoise();

    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;

      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;

      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  };

  var init = function init() {
    Elements.rockDiv.addEventListener("click", function () {
      return game("r");
    });
    Elements.paperDiv.addEventListener("click", function () {
      return game("p");
    });
    Elements.sissorsDiv.addEventListener("click", function () {
      return game("s");
    });
    Elements.inputForm.addEventListener("input", function () {
      Elements.divForm.style.display = "none";
      Elements.userName.textContent = Elements.inputForm.value;
    });
  };

  init();

}());

//# sourceMappingURL=main.js.map
