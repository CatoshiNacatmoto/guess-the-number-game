'use strict';

const checkNumber = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const background = document.querySelector('body');
const number = document.querySelector('.number');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let point = 20;
let topScore = 0;

checkNumber.addEventListener('click', () => {
  const guestNum = +guessInput.value;

  if (guestNum === secretNumber) {
    //print highscore
    if (point > topScore) {
      topScore = point;
      highscore.textContent = topScore;
      console.log(topScore);
    }
    //background turn green
    background.style.backgroundColor = '#60b347';

    //show the mystery number
    number.innerHTML = secretNumber;

    message.textContent = 'You guess the correct number';

    guessInput.disabled = true;
    checkNumber.disabled = true;
  } else if (!guestNum) {
    message.textContent = 'No Number!';
  } else {
    //print message if to low or to high
    message.textContent = guestNum < secretNumber ? 'too low' : 'too high';
    //score -1 after each false guess
    point--;
    score.innerHTML = point;
    if (point === 0) message.textContent = 'You lost';

    //reseting the field after fail attempt
    guessInput.value = '';
  }
});

function playAgain() {
  //reset the point to 20
  background.style.backgroundColor = '#222';
  message.textContent = 'Start Guessing';
  point = 20;
  score.innerHTML = point;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = '';

  guessInput.disabled = false;
  checkNumber.disabled = false;
}

// Add the again  functionality
again.addEventListener('click', playAgain);
