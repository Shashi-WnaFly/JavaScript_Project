let pass = document.querySelector('#password');
let msg = document.getElementById('msg');
let span = document.getElementById('spn_msg');
let sub = document.querySelector('#submit');

pass.addEventListener('input', ()=>{
    if(pass.value.length <= 4){
        msg.style.display = 'block';
        span.innerHTML = 'Weak';
        msg.style.color = '#ff2600';
        pass.style.borderColor = '#ff2600';
    }
    else if(pass.value.length <= 6){
        msg.style.display = 'block';
        span.innerHTML = 'Medium';
        msg.style.color = '#ffea00';
        pass.style.borderColor = '#ffea00';
    }
    else if(pass.value.length >= 8){
        msg.style.display = 'block';
        span.innerHTML = 'Strong';
        msg.style.color = '#1ec71e';
        pass.style.borderColor = '#1ec71e';
    }
    else{
        msg.style.display = 'none';
    }
})

sub.addEventListener('click', ()=>{
    pass.innerHTML = '';
})