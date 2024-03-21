let prod_img = document.querySelector('#prod_img');
let btn = document.getElementsByClassName('btn');

btn[0].onclick = ()=>{
    prod_img.src = './images/image1.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    btn[0].classList.add("active");
}

btn[1].onclick = ()=>{
    prod_img.src = './images/image2.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    btn[1].classList.add("active");
}

btn[2].onclick = ()=>{
    prod_img.src = './images/image3.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    btn[2].classList.add("active");
}