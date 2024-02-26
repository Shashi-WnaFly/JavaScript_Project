let wb = document.querySelector('#wb');
let container = document.querySelector('.container');

wb.addEventListener('click', (e)=>{
    container.classList.add(e.target);
})