let org = document.querySelector('.img_org');
let img_box = document.querySelector('.img_box');
let origin = document.querySelector('#origin');
let line = document.getElementById('hor-line');

let leftSpace = img_box.offsetLeft;
origin.style.width = img_box.offsetWidth+"px";

img_box.onmousemove = function (e){
    let boxWidth = (e.pageX - leftSpace) + "px";

    org.style.width = boxWidth;
    line.style.left = boxWidth;
}