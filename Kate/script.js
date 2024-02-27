let wb = document.querySelector('#wb');

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

let stat = localStorage.getItem("theme");

if(stat == "light"){
    wb.src = './images/moon.png';
    document.body.classList.remove("dark-theme");
}
else if(stat == "dark"){
    wb.src = './images/sun.png';
    document.body.classList.add("dark-theme");
}

wb.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains('dark-theme')){
        wb.src = './images/sun.png';
        localStorage.setItem("theme", "dark");
    }
    else{
        wb.src = './images/moon.png';
        localStorage.setItem("theme", "light");
    }
})