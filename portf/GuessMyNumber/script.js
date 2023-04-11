'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 9;
// document.querySelector(`.guess`).value = 11;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // error number
  if (guess < 1 || guess > 20) {
    document.querySelector(
      `.message`
    ).textContent = `👈 Число должно быть между 1 и 20!`;

    // conrrect
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Точно! Молодец!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //wrong number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `📈 Слишком большое!` : `📉 Слишком маленькое!`
      );
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥 Попытки кончились!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`👈 Напиши число...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
