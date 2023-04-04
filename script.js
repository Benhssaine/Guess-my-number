"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */

const wrongGuess = function (life) {
  document.querySelector(".hearts").textContent = "";
  life.pop();
  for (let index = 0; index < life.length; index++) {
    document.querySelector(".hearts").textContent += life[index];
  }
};

// defining the secret number ( generating a random number )

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let stateVictory = false;
// managing health

let life = ["❤️", "❤️", "❤️"];

for (let index = 0; index < life.length; index++) {
  document.querySelector(".hearts").textContent += life[index];
}

let highScore = 0;

// on click event, events after clicking the buttong check!

document.querySelector(".check").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);
  document.querySelector(".maintitle").textContent = "Guess My Number!";
  //  no user input
  if (!userInput) {
    document.querySelector(".message").textContent = "🚫 No input... ";
    // guess Correct
  } else if (userInput > 20 || userInput < 1) {
    document.querySelector(".message").textContent = "🚫 Input out of range";
    document.querySelector(".maintitle").textContent =
      "Input range : ( 1 -> 20)";
  } else if (userInput === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct number !";
    document.querySelector("body").style.transition = "1s";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".maintitle").textContent = "You guessed it right !";
    document.querySelector(".number").style.width = "30rem";
    stateVictory = true;
    if (highScore < life.length) {
      highScore = life.length;
      document.querySelector(".highscore").textContent = "";
      for (let index = 0; index < life.length; index++) {
        document.querySelector(".highscore").textContent += life[index];
      }
    }
    // guess higher than input
  } else if (userInput > secretNumber) {
    if (life.length > 0) {
      document.querySelector(".message").textContent = `${
        Number(userInput - 5) > secretNumber
          ? "📈 Number guess too high"
          : "📈 High"
      }`;
      wrongGuess(life);
      if (life.length === 1) {
        document.querySelector(".maintitle").textContent = "Careful now 👀";
        document.querySelector("body").style.backgroundColor = "#fc9003";
        document.querySelector("body").style.transition = "1s";
      }
      if (life.length === 0) {
        document.querySelector(".maintitle").textContent =
          "Game Over 😔, click again !";
        document.querySelector(".message").textContent = "💥 You lost the game";
        document.querySelector("body").style.transition = "1s";
        document.querySelector("body").style.backgroundColor = "#ed3e3e";
        document.querySelector(".again").style.backgroundColor = "#60b347";
      }
    }
    // guess lower than input
  } else if (userInput < secretNumber) {
    if (life.length > 0) {
      document.querySelector(".message").textContent = `${
        Number(userInput + 5) < secretNumber
          ? "📉 Number guess too low"
          : "📉 Low"
      }`;
      wrongGuess(life);
      if (life.length === 1) {
        document.querySelector(".maintitle").textContent = "Careful now 👀";
        document.querySelector("body").style.backgroundColor = "#fc9003";
        document.querySelector("body").style.transition = "1s";
      }
      if (life.length === 0) {
        document.querySelector(".maintitle").textContent =
          "Game Over 😔, click again !";
        document.querySelector(".message").textContent = "💥 You lost the game";
        document.querySelector("body").style.transition = "1s";
        document.querySelector("body").style.backgroundColor = "#ed3e3e";
        document.querySelector(".again").style.backgroundColor = "#60b347";
      }
    }
  } else {
    document.querySelector(".maintitle").textContent =
      "Game Over 😔, click again !";
    document.querySelector("body").style.backgroundColor = "#ed3e3e";
    document.querySelector(".again").style.backgroundColor = "#eee";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  if (life.length === 0 || stateVictory) {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".maintitle").textContent = "Guess My Number!";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".again").style.backgroundColor = "#eee";
    document.querySelector(".hearts").textContent = "";
    life = ["❤️", "❤️", "❤️"];
    for (let index = 0; index < life.length; index++) {
      document.querySelector(".hearts").textContent += life[index];
    }
    stateVictory = false;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    highScore = 0;
  }
});
