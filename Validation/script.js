let name_err = document.querySelector('#name-err');
let phone_err = document.querySelector('#phone-err');
let email_err = document.querySelector('#email-err');
let message_err = document.querySelector('#message-err');
let submit_err = document.querySelector('#submit-err');

function validateName(){
    let name = document.getElementById('contact_name').value;
    if(name.length == 0){
        name_err.innerHTML = 'Name is required';
        name_err.style.color = 'red'
        return false;
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_err.innerHTML = 'Write full name';
        name_err.style.color = 'red'
        return false;
    }
    name_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    name_err.style.color = 'seagreen';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact_phone').value;
    if(phone.length == 0){
        phone_err.innerHTML = 'phone no. is required';
        phone_err.style.color = 'red'
        return false;
    }
    else if(phone.length !== 10){
        phone_err.innerHTML = 'phone should be 10 digits';
        phone_err.style.color = 'red'
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
        phone_err.innerHTML = 'phone no. is required';
        phone_err.style.color = 'red'
        return false;
    }
    phone_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    phone_err.style.color = 'seagreen';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contact_email').value;
    if(email.length == 0){
        email_err.innerHTML = 'Email is required';
        email_err.style.color = 'red';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_err.innerHTML = 'invalid email';
        email_err.style.color = 'red';
        return false;
    }
    email_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    email_err.style.color = 'seagreen';
    return true;
}

function validateMsg(){
    let msg = document.querySelector('#contact_msg').value;
    let c = 30-msg.length;
    if(msg.length < 30){
        message_err.innerHTML = c+` character are remaining`;
        message_err.style.color = 'red';
        return false;
    }
    message_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    message_err.style.color = 'seagreen';
    return true;
}

function validateForm(){
    
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submit_err.style.display = 'block';
        submit_err.innerHTML = 'Please fix some error';
        submit_err.style.color = 'red';
        setTimeout( ()=>{
            submit_err.style.display = 'none';
        }, 3000)
        return false;
    }
}

