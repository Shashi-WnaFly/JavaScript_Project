let countDownDate = new Date("April 1, 2024 00:00:00").getTime();

let left = setInterval( ()=> {
    let now = new Date();
    let dis = countDownDate - now;
    let dy = Math.floor(dis / (1000*60*60*24));
    let hr = Math.floor(dis % (1000*60*60*24)/(1000*60*60));
    let min = Math.floor(dis % (1000*60*60)/(1000*60));
    let sec = Math.floor(dis % (1000*60)/1000);

    document.getElementById('day').innerHTML = dy;
    document.getElementById('hour').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    
}, 1000)