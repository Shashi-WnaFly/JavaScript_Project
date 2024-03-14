let org = document.querySelector('.img_org');
let img_box = document.querySelector('.img_box');

let leftSpace = img_box.offsetLeft;

img_box.onmousemove = function (e){
    let boxWidth = (e.pageX - leftSpace) + "px";

    org.style.width = boxWidth;
}