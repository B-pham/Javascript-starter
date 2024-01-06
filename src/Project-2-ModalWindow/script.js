'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function hideModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        console.log("button clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        hideModal();
    }
});


