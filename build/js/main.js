(function () {
  'use strict';

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
  var render = function render(template) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = template;
    return wrapper;
  };
  var mainContent = document.querySelector("#main");
  var changeScreen = function changeScreen(element) {
    mainContent.innerHTML = "";
    mainContent.appendChild(element);
  };

  var resultText = function resultText(Score) {
    var uT = String(Score);
    var val = uT[uT.length - 1];

    switch (val) {
      case "1":
        return "\u043E\u0447\u043A\u043E";
        break;

      case "2":
      case "3":
      case "4":
        return "\u043E\u0447\u043A\u0430";
        break;

      default:
        return "\u043E\u0447\u043A\u043E\u0432";
    }
  };

  var gameTemplate = render("\n\n<div class=\"score-board\">\n<div class='help'>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\n<div class=\"helper\"> \n    <div class=\"helper-text\">\n        <p>\u0427\u0435\u0433\u043E \u0445\u043E\u0447\u0443?</p>\n        <div class=\"help-cross\">X</div>\n    </div> \n </div>\n</div>\n<button type=\"button\" class=\"btn-start-timer\">\u0421\u0442\u0430\u0440\u0442</button>\n<div class=\"timer\">\n<p class=\"timer-p\"></p>\n</div>\n    <div id=\"user-label\" class=\"score-board-badge score-board-badge-user\">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C</div>\n    <div id=\"computer-label\" class=\"score-board-badge-computer score-board-badge\">\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440</div>\n    <span id=\"user-score\" class=\"score-board-user\">0</span>:<span id=\"computer-score\" class=\"score-board-computer\">0</span>\n  </div>\n  <div class=\"result\">\n    <div class=\"result-title\">\n    <p>\u0418\u0433\u0440\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C.</p>\n  </div>\n  </div>\n  <div class=\"choices\">\n    <div class=\"choice rock\" id=\"r\" >\n    <img src=\"img/rock.svg\" alt=\"rock\" data-target=\"r\">\n    </div>\n    <div class=\"choice paper\" id=\"p\" >\n    <img src=\"img/paper.svg\" alt=\"paper\" data-target=\"p\">\n    </div>\n    <div class=\"choice scissors\" id=\"s\">\n    <img src=\"img/scissors.svg\" alt=\"scissors\"  data-target=\"s\">\n    </div>\n    </div>    \n");
  var userScore = 0;
  var computerScore = 0;
  var computerScoreSpan = gameTemplate.querySelector(".score-board-computer");
  var userScoreSpan = gameTemplate.querySelector(".score-board-user");
  var resultP = gameTemplate.querySelector(".result-title > p");
  var helpGameTemp = gameTemplate.querySelector(".help");
  var helpDiv = gameTemplate.querySelector(".helper");
  var helpCross = gameTemplate.querySelector(".help-cross");
  helpGameTemp.addEventListener("click", function () {
    helpDiv.classList.add("help-show");
  });
  helpCross.addEventListener("click", function () {
    helpDiv.classList.remove("help-show");
    alert("\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
  });

  var win = function win(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = "".concat(convertWord(userChoice)).concat(smallUserWord, " \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438 ").concat(convertWord(computerChoice)).concat(smallCompWord, ". \u0412\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438!");
    userChoiceDiv.classList.add("green-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("green-glow");
    }, 1000);
  };

  var lose = function lose(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " \u041F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438 ").concat(convertWord(computerChoice)).concat(smallCompWord, ". \u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438");
    userChoiceDiv.classList.add("red-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("red-glow");
    }, 1000);
  };

  var draw = function draw(userChoice, computerChoice) {
    var smallUserWord = "\u0412\u044B".fontsize(3).sup();
    var smallCompWord = "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440".fontsize(3).sup();
    var userChoiceDiv = document.getElementById(userChoice);
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " \u041D\u0438\u0447\u044C\u044F ").concat(convertWord(computerChoice), " ").concat(smallCompWord, ". \u0423 \u0432\u0430\u0441 \u043D\u0438\u0447\u044C\u044F");
    userChoiceDiv.classList.add("gray-glow");
    setTimeout(function () {
      userChoiceDiv.classList.remove("gray-glow");
    }, 1000);
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

  var rockDiv = gameTemplate.querySelector(".rock");
  var paperDiv = gameTemplate.querySelector(".paper");
  var scissorsDiv = gameTemplate.querySelector(".scissors");
  rockDiv.addEventListener("click", function () {
    return game("r");
  });
  paperDiv.addEventListener("click", function () {
    return game("p");
  });
  scissorsDiv.addEventListener("click", function () {
    return game("s");
  });
  var timerS = gameTemplate.querySelector(".timer-p");
  var minute = 10;
  var btnStartGame = gameTemplate.querySelector(".btn-start-timer");
  var resultGameRSP = render("\n    <div class=\"winner\"><span>\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C  </span><span> : </span><span class=\"winner-span\"></span></div>\n  <div class=\"result-field\">\n    <div class=\"user-result\"><span>\u0438\u0433\u0440\u043E\u043A: </span> <p></p></div>\n    <div class=\"computer-result\"><span>\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440: </span><p></p></div> \n  </div>\n");
  var resultUser = resultGameRSP.querySelector(".user-result > p");
  var timerInerval;
  var resultComputer = resultGameRSP.querySelector(".computer-result > p");
  var winner = resultGameRSP.querySelector(".winner-span");

  var timeCounter = function timeCounter() {
    minute--;

    if (minute < 5) {
      timerS.style.color = "red";
    }

    if (minute >= 0) {
      timerS.innerHTML = minute;
    } else {
      timerS.innerHTML = "\u0418\u0433\u0440\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430";
      resultUser.innerHTML = "".concat(userScore, ". ").concat(resultText(userScore), " ");
      resultComputer.innerHTML = "".concat(computerScore, ". ").concat(resultText(computerScore), " ");
      stopInterval();

      if (userScore > computerScore) {
        winner.innerHTML = "\u0412\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438";
      } else {
        winner.innerHTML = "\u041A\u043E\u043C\u043F";
      }

      changeScreen(resultGameRSP);
    }
  };

  btnStartGame.addEventListener("click", function () {
    btnStartGame.style.display = "none";
    timerInerval = setInterval(timeCounter, 1000);
  });

  function stopInterval() {
    clearInterval(timerInerval);
  }

  var formTemplate = render("\n  <h1 class=\"formH\">\u0423\u043A\u0430\u0436\u0438 \u0441\u0432\u043E\u0435 \u0438\u043C\u044F</h1>\n<div id=\"wrapper\">\n\t<form id=\"signin\" method=\"#\" action=\"#\">\n\t\t<input type=\"text\" id=\"user\" name=\"user\" placeholder=\"us\" />\n\t\t<button type=\"submit\" class=\"btn-form\" disabled >B</button>\t\t\n\t</form>\n</div>\n");
  var inputForm = formTemplate.querySelector("form > input");
  var btnForm = formTemplate.querySelector(".btn-form");
  var userGameName = gameTemplate.querySelector(".score-board-badge-user");
  inputForm.addEventListener("input", function () {
    if (inputForm.value.length > 3) {
      btnForm.removeAttribute("disabled");
      btnForm.setAttribute("id", "color");
      btnForm.style.backgroundColor = "red";
      userGameName.innerHTML = inputForm.value;
    }
  });
  btnForm.addEventListener("click", function () {
    changeScreen(gameTemplate);
  });

  var introTemplate = render("<section class=\"intro\">\n<div class=\"intro-text\">\n  \u041A\u0430\u043C\u0435\u043D\u044C-\u043D\u043E\u0436\u043D\u0438\u0446\u044B-\u0431\u0443\u043C\u0430\u0433\u0430 \u2013 \u044D\u0442\u043E \u0434\u0440\u0435\u0432\u043D\u044F\u044F \u0438\u0433\u0440\u0430, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0430\u044F \u0432 \u041A\u0438\u0442\u0430\u0435. \u0420\u0430\u043D\u044C\u0448\u0435 \u0432 \u043D\u0435\u0435 \u0438\u0433\u0440\u0430\u043B\u0438 \u0432\u043E\u0435\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438 \u043F\u043E\u0437\u0434\u043D\u0435\u0439 \u0434\u0438\u043D\u0430\u0441\u0442\u0438\u0438 \u0425\u0430\u043D\u044C, \n  \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u044D\u0442\u0430 \u0438\u0433\u0440\u0430 \u043B\u044E\u0431\u0438\u043C\u0430 \u043C\u043D\u043E\u0433\u0438\u043C\u0438 \u0448\u043A\u043E\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043D\u0435\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u0441\u043F\u043E\u0440, \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0436\u0435\u0440\u0435\u0431\u044C\u0435\u0432\u043A\u0443 \u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0443\u0431\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F.\n</div>\n<div class=\"intro-block\">\n  <button type=\"button\" class=\"intro-btn btn btn-out\">\u0418\u0433\u0440\u0430\u0442\u044C</button>\n</div>\n</section>");
  var greetingButton = introTemplate.querySelector(".intro-btn");
  greetingButton.addEventListener("click", function () {
    changeScreen(formTemplate);
  });

  var currentDate = document.querySelector(".sad");
  var timeLocal = function timeLocal() {
    var timeD = new Date();
    currentDate.innerHTML = "\u0427\u0430\u0441\u044B : ".concat(timeD.getHours(), "  \u041C\u0438\u043D : ").concat(timeD.getMinutes(), " \u0421\u0435\u043A : ").concat(timeD.getSeconds());
  };

  setInterval(timeLocal, 1000);
  changeScreen(introTemplate);

}());

//# sourceMappingURL=main.js.map
