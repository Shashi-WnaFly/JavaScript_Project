let play_pause = document.getElementById('play_pause');
let scroler = document.getElementById('scroler');
let song = document.getElementById('song');
let play_pauseIcon = document.querySelector('#play_pauseIcon');

song.onloadedmetadata = () => {
    scroler.max = song.duration;
    scroler.value = song.currentTime;
}

play_pause.addEventListener('click', () => {
    if(play_pauseIcon.classList.contains('fa-pause')){
        song.pause();
        play_pauseIcon.classList.remove('fa-pause');
        play_pauseIcon.classList.add('fa-play');
    }
    else{
        song.play();
        play_pauseIcon.classList.add('fa-pause');
        play_pauseIcon.classList.remove('fa-play');
    }
})

if(song.play()){
    setInterval( () => {
        scroler.value = song.currentTime;
    }, 500);
}

scroler.onchange = () => {
    song.play();
    song.currentTime = scroler.value;
    play_pauseIcon.classList.add('fa-pause');
    play_pauseIcon.classList.remove('fa-play');
}