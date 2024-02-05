
let toast_box = document.querySelector('.toast');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Success Submit Successfully';
let invalidMsg = '<i class="fa-solid fa-circle-xmark"></i>Invalid! Please Try Again';
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i>Error! Please Fix The Error';

function toast_fun(msg){
    let div = document.createElement('div');
    div.classList.add('toast_not');
    div.innerHTML = msg;
    toast_box.appendChild(div);

    if(msg.includes('Invalid!')){
        div.classList.add('invalid');
    }
    else if(msg.includes('Error!')){
        div.id = 'error';
    }

    setTimeout( ()=>{
        div.remove();
    },6000)
}