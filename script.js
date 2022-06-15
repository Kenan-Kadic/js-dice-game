'use strict';

// you can also use getElementById if you want to

//DRAW FLOWCHARTS!

// Selecting elements
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
        activePlayer = activePlayer === 0 ? 1 : 0;

        //guess what should happen on else
        //you need to keep track of who is currently active player
        //switch to other player
        //current score should be reset to zero
        //you need a total score
        // nothing should be added to the total score if one
    }
    //If true switch to next player
})



