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
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click',function() {

    const guess = document.querySelector('.guess').value;
    const guessed = Number(guess);

    if (guess.length === 0) {
        //console.log('No data given');
        document.querySelector('.message').textContent = 'No data given';
    } else {
        document.querySelector('.message').textContent = "let's rock";
    };  
        
    // when player wins 
    if (guessed === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    } 
    
    // when number is too high 
    else if (guessed > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'GAME OVER!';
            score --;
            document.querySelector('.score').textContent = score;
        }
    } 
    
    // when number is too low
    else if (guessed < secretNumber) {
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

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222'
});
