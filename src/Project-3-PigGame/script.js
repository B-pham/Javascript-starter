"use strict"

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function(){
    
    const dice = getRandom(1,6);

    diceEl.classList.remove('hidden');
    //console.log(dice);
    diceEl.src = `PigGame/dice-${dice}.png`;

    if(dice !== 1){
        currScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currScore;
    }else{
        currScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currScore;

        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }

});

btnHold.addEventListener('click', function(){

});

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
