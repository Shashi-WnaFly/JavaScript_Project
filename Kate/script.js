let wb = document.querySelector('#wb');

wb.addEventListener('click', ()=>{
    if(document.body.classList.contains('dark-theme')){
        wb.src = './images/moon.png';
    }
    else{
        wb.src = './images/sun.png';

    }
    document.body.classList.toggle("dark-theme");
})