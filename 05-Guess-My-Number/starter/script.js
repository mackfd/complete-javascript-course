'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent =
// 'Correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent = 999;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 6;
// console.log(document.querySelector('.guess').value);

let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function() {
const guess = document.querySelector('.guess').value;
const guessed = Number(guess);


if (guess.length === 0) {
    
    //console.log('No data given');
    document.querySelector('.message').textContent = 'No data given';
} else {
    document.querySelector('.message').textContent = "let's rock";
};  
if (guessed === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'
} else if (guessed > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score --;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'GAME OVER!';
        score --;
        document.querySelector('.score').textContent = score;
    }
} else if (guessed < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score --;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'GAME OVER!';
        score --;
        document.querySelector('.score').textContent = score;
    }
}
});
