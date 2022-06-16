'use strict';

// you can also use getElementById if you want to

//DRAW FLOWCHARTS!

// Selecting elements
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')

//querySelector needs # if it is an id

let totalScore0El = document.querySelector('#score--0');
let totalScore1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

const scores = [0, 0];
let activePlayer = 0;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// starting conditions
totalScore0El.textContent = 0;
totalScore1El.textContent = 0;
diceEl.classList.add('hidden')

// Roll dice functionality

btnRoll.addEventListener('click', function (){
    //1. Generate random dice roll
    let dice = Math.trunc(Math.random() * 6)+1;
    //2. Display the dice
    diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled one
    if (dice !== 1){
        // add dice to current score
        currentScore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {

        switchPlayer()
    }
})
btnHold.addEventListener('click', function (){
    // add current score to activePlayer score

    //when it is player zero it will be scores[0]
    //when it is player one it will be scores[1]
    //scores means total score really - total for player plus current gives you new score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // if score is over 100
    if ((scores[activePlayer]) >= 100) {
        // finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }

     //switch player
    switchPlayer()
})



