let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let round = document.querySelector('.roundBtn');

btn.addEventListener('click', ()=>{
    // body.style.background = '#212121';
    round.classList.toggle('right');
})