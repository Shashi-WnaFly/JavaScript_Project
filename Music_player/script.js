let play_pause = document.getElementById('#play_pause');
let scroler = document.getElementById('#scroler');
let song = document.getElementById('#song');

song.onloadedmetadata = () => {
    scroler.max = song.duration;
    scroler.value = song.currentTime;
}

play_pause.addEventListener('click', () => {
    if(play_pause.classList.contains('fa-pause')){
        play_pause.classList.remove('fa-pause');
        play_pause.classList.add('fa-play');
    }
    else{
        play_pause.classList.add('fa-pause');
        play_pause.classList.remove('fa-play');
    }
})