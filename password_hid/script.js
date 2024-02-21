let eye = document.getElementById('eyeIcon');
let pssword = document.querySelector('#pssword');

eye.addEventListener('click', ()=>{
    if(pssword.type == 'password'){
        pssword.type = 'text';
        eye.src = './images/eye.png'
    }
    else{
        pssword.type = 'password';
        eye.src = './images/hidden.png'
    }
})