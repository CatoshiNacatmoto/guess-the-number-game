'use strict';

const checkNumber = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const background = document.querySelector('body');
const number = document.querySelector('.number');

const correctNum = Math.trunc(Math.random() * 20) + 1;

console.log(correctNum);

let point = 20;

checkNumber.addEventListener('click', () => {
  const guestNum = +guessInput.value;
  if (guestNum === correctNum) {
    //print message if correct
    message.innerHTML = 'You guess the correct number';
    //print highscore
    highscore.innerHTML = point;
    //background turn green
    background.style.backgroundColor = '#60b347';

    //show the mystery number
    number.innerHTML = correctNum;
  } else {
    //score -1 after each false guess
    point--;

    score.innerHTML = point;
    //print message if to low or to high
    message.innerHTML = guestNum < correctNum ? 'too low' : 'too high';

    //reseting the field after fail attempt
    guessInput.value = '';
  }
});
