"use strict"

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curr0 = document.getElementById('current--0');
const curr1 = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currScore = 0;

btnRoll.addEventListener('click', function(){
    
    const dice = getRandom(1,6);

    diceEl.classList.remove('hidden');
    //console.log(dice);
    diceEl.src = `PigGame/dice-${dice}.png`;

    if(dice !== 1){
        currScore += dice;
        curr0.textContent = currScore;
    }else{
        currScore = 0;
        curr0.textContent = currScore;
    }

});

btnHold.addEventListener('click', function(){

});

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
