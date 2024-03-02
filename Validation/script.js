let name_err = document.querySelector('#name-err');
let phone_err = document.querySelector('#phone-err');
let email_err = document.querySelector('#email-err');
let message_err = document.querySelector('#message-err');
let submit_err = document.querySelector('#submit-err');

function nameError(){
    let name = document.getElementById('contact_name').value;
    if(name.length == 0){
        name_err.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_err.innerHTML = 'Write full name';
        return false;
    }
    name_err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}