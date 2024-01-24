let createBtn = document.querySelector('#createBtn');
let txtArea = document.querySelector('#textArea');
let container = document.querySelector('.container');

container.addEventListener( 'click', (e) => {
    if(e.target === createBtn) createNotes();
    if(e.target.className === "del") e.target.parentElement.remove();
    saveData();
} )

function createNotes(){
    let para = document.createElement('P');
    para.setAttribute("contenteditable", "true");
    para.className = "input_box";
    let img = document.createElement('img');
    img.className = "del";
    img.src = "./images/delete (1).png";
    txtArea.appendChild(para).appendChild(img);
    saveData();
}

function saveData(){
    localStorage.setItem("data", txtArea.innerHTML);
}

function showData(){
    txtArea.innerHTML = localStorage.getItem("data");
}

showData();