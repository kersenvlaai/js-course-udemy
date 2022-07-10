"use strict";

const secretNumberGenerator = () => Math.floor(Math.random() * 20) + 1;

const changeTextContent = (element, text) =>
  (document.querySelector(element).textContent = text);

const changeValue = (element, value) =>
  (document.querySelector(element).value = value);

let secretNumber = secretNumberGenerator();
let score = 20;
let highscore = 0;

function checkHighscore(score) {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").style.width = "15rem";
  changeTextContent(".number", "?");
  changeValue(".guess", "");
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = secretNumberGenerator();
  score = 20;
  changeTextContent(".score", score);
  changeTextContent(".message", "Start guessing!");
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    changeTextContent(".message", "Correct number!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    changeTextContent(".number", secretNumber);
    checkHighscore(score);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Incorrect number! Guess lower..."
          : "Incorrect number! Guess higher...";
      score--;
      changeTextContent(".score", score);
    } else {
      changeTextContent(
        ".message",
        "You lost! Correct number was " + secretNumber
      );
      changeTextContent(".score");
    }
  } else {
  }
});
