let sel = document.getElementById('select');
let list = document.querySelector('#soc_list');
let caret = document.querySelector('#caret');
let items = document.getElementsByClassName('items');
let sel_media = document.getElementById('sel_media');

list.classList.toggle('hide');

sel.onclick = ()=>{
    caret.classList.toggle('rotate');
    list.classList.toggle('hide');
}

for(item of items){
    item.onclick = function(){
        sel_media.innerHTML = this.textContent;
        list.classList.toggle('hide');
        caret.classList.toggle('rotate');
    }
}