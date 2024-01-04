"use strict";
let number = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No Number!');
    }else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? 'Too High!': 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;            
        }else{
            displayMessage('You lose');
            document.querySelector('.score').textContent = 0;
        }
    }else{
        displayMessage('Correct!');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess').disabled = true;

        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }


});

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    document.querySelector('.guess').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

});
