let pass = document.querySelector('#password');
let msg = document.getElementById('msg');
let span = document.getElementById('spn_msg');

pass.addEventListener('input', ()=>{
    if(pass.value.length <= 4){
        msg.style.display = 'block';
        span.innerHTML = 'Weak';
        msg.style.color = 'red';
        pass.style.borderColor = 'red';
    }
    else if(pass.value.length <= 6){
        msg.style.display = 'block';
        span.innerHTML = 'Medium';
        msg.style.color = 'orange';
        pass.style.borderColor = 'orange';
    }
    else if(pass.value.length >= 8){
        msg.style.display = 'block';
        span.innerHTML = 'Strong';
        msg.style.color = 'green';
        pass.style.borderColor = 'green';
    }
    else{
        msg.style.display = 'none';
    }
})

function pass_submit(){
    pass.innerHTML = '';
}