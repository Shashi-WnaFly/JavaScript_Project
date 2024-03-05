let galary = document.querySelector('.galary');
let nxtbtn = document.getElementById('nextBtn');
let bckBtn = document.getElementById('backBtn');

galary.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    galary.style.scrollBehavior = 'auto';
    galary.scrollLeft += evt.deltaY;
})

nxtbtn.addEventListener('click', ()=>{
    galary.style.scrollBehavior = 'smooth';
    galary.scrollLeft += 900;
})

bckBtn.addEventListener('click', ()=>{
    galary.style.scrollBehavior = 'smooth';
    galary.scrollLeft -= 900;
})