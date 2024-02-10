let [hours, minutes, seconds] = [0,0,0];
let stop = document.getElementById('stop');
let play_pause = document.getElementById('play_pause');
let reset = document.querySelector('#reset');
let text = document.querySelector('#watch');

let timer = null;

function watchStart(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? '0'+hours : hours;
    let m = minutes < 10 ? '0'+minutes : minutes;
    let s = seconds < 10 ? '0'+seconds : seconds;
    text.innerHTML = h +":"+ m +":"+ s;
}

function play(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(watchStart, 1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    text.innerHTML = "00:00:00";
}