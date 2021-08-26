'use strict';

// taking modal hidden class
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal')

const openModel = function() {
    //console.log(`button '${btnsShowModal[i].textContent}' cliked`);
    // to remove method we pass the name of a class without a . (dot) in front of it
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) 
    btnsShowModal[i].addEventListener('click', openModel);

// in addEventListener we didn't use closeModel() because 
// JS will instantly execute function
// but we wanty to execute function when click happend

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel)