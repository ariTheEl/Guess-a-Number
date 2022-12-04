`use strict`;

let secretNumber = Math.trunc(Math.random() * 18) + 18;
let score = 20;
let highscore = 0;
const body = document.querySelector("body");
const message = document.querySelector(".message");
const high = document.querySelector(".highscore");
const playerScore = document.querySelector(".score");
const guess = document.querySelector(".guess");

const check = function () {
  const number = document.querySelector(".number");
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "No Number was selected!!!";
  } else if (guess === secretNumber) {
    body.style.backgroundColor = "#dd1818";
    number.style.width = "40rem";
    number.style.borderRadius = "50%";
    message.textContent = `Correct Number!!!`;
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      high.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber
          ? `The selected number is higher than the answer!!!`
          : `The selected number is lower than the answer!!!`;
      score--;
      playerScore.textContent = score;
    } else {
      message.textContent = "Game Over!!! You Lose!!!";
      playerScore.textContent = 0;
      message.textContent = "Start Guessing.......";
    }
  }
};

const reset = function () {
  const number = document.querySelector(".number");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 18) + 18;
  playerScore.textContent = score;
  body.style.backgroundColor = "#0a0a0a";
  message.textContent = "Start Guessing.......";
  number.style.width = "15rem";
  number.style.borderRadius = "0%";
  number.textContent = " ? ";
  document.querySelector(".guess").value = " ";
};

document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", reset);
