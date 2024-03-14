let countDownDate = new Date("March 14, 2024 00:00:00").getTime();

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
    
    if(dis < 0){
        document.getElementById('day').innerHTML = "0";
        document.getElementById('hour').innerHTML = "0";
        document.getElementById('min').innerHTML = "0";
        document.getElementById('sec').innerHTML = "0";
    }
    
}, 1000)