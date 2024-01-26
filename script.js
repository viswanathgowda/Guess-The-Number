'use strict';

const btn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const success = document.querySelector('.number');
let state = true;

btn.addEventListener('click', () => {
  const randomNumber = Math.trunc(Math.random() * 20) + 1;
  if (state) {
    if (Number(guess.value) > randomNumber) {
      message.textContent = '📈' + ' ' + 'too high';
      score.innerHTML = Number(score.textContent) - 1;
    } else if (Number(guess.value) < randomNumber) {
      message.textContent = '📉' + ' ' + 'too low';
      score.innerHTML = Number(score.textContent) - 1;
    } else if (Number(guess.value) === randomNumber) {
      message.textContent = '🎉' + ' ' + 'Correct Answer';
      score.innerHTML = Number(score.textContent) - 1;
      highscore.textContent = score.innerHTML;
      body.style.backgroundColor = '#60b347';
      state = false;
      success.innerHTML = guess.value;
    }
  }
});

again.addEventListener('click', () => {
  state = true;
  message.textContent = 'Start guessing...';
  score.innerHTML = '20';
  highscore.textContent = '0';
  body.style.backgroundColor = '#222';
  success.innerHTML = '?';
});
