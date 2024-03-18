let score = document.querySelector('#score');
let count = 0;
setInterval(()=>{
    if(count == 66){
        clearInterval();
    }
    else{
        score.innerHTML = count + '%'
        count++;
    }
}, 28);

