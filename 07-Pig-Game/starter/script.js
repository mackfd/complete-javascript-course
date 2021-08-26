'use strict';

// Seelcting elemennts 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const current0El = document.querySelector('#current--0'); 
const current1El = document.querySelector('#current--1'); 

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player1El = document.querySelector('.player--0')
const player2El = document.querySelector('.player--1')

let scores, currentScore, playing, activePlayer;
// set up initial conditions
const init = function() {
    scores = [0,0];
    currentScore = 0;
    playing = true; 
    activePlayer = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    document.querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
    document.querySelector(`.player--0`)
    .classList.add('player--active');
};

init();

const switchPlayer = function(){
    document.getElementById(
        `current--${activePlayer}`
        ).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
        // player2El.classList.add('player--active')
        // player1El.classList.remove('player--active')
        // instead of useing add and remove we can use toggle
        // if case we dont have value in the class 
        // toggle will add it 
        // or if it is in the class , toggle will delete it
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');   
};


// Rollind dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generate random dice roll number
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(`click roll dice with number = ${diceNum}`);
    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    // 3. check for rolled 1: if true, switch to next player 
    if (diceNum !== 1) {
        currentScore += diceNum;
        document.getElementById(
            `current--${activePlayer}`
            ).textContent = currentScore;
    } else {
        //switch to next player 
        switchPlayer();
        }
    } 
});

btnHold.addEventListener('click', function() {
    if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = 
    scores[activePlayer];

    // 2. Check if player's score is >=100
    // Finish the game 
    if (scores[activePlayer] >= 100) {
        playing = false;
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
    // 3. Switch to the next player
        switchPlayer();
      }   
    }
});

btnNew.addEventListener('click', init);




