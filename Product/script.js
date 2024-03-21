let prod_img = document.querySelector('#prod_img');
let control = document.querySelector('.controls');
let btn = document.getElementsByClassName('btn');

// for(bt of btn){
//     console.log(bt);
// }

btn[0].onclick = ()=>{
    prod_img.src = './images/image1.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = ()=>{
    prod_img.src = './images/image2.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = ()=>{
    prod_img.src = './images/image3.png';

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}