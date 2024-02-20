let submit = document.getElementById('sub');
let popup = document.querySelector('.popup');
let close = document.querySelector('.btn');

submit.addEventListener('click', ()=>{
    popup.classList.add('hidPop');
})

close.addEventListener('click', ()=>{
    popup.classList.remove('hidPop');
})