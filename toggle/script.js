let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let round = document.querySelector('.roundBtn');

btn.addEventListener('click', ()=>{
    body.classList.toggle('back');
    round.classList.toggle('right');
    btn.classList.toggle('btn_m');
})