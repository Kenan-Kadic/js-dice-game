'use strict';

// you can also use getElementById if you want to

//DRAW FLOWCHARTS!

// Selecting elements
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

const scores = [0, 0];
let activePlayer = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

// ROll dice functionality

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
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        //toggle adds class if not there--if there removes it
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
    //If true switch to next player
})



