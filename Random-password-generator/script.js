let password = document.querySelector('#password');
let copi = document.querySelector('#copy');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "~@#$%^&*()_+/=-{}][";
const allChars = upperCase+lowerCase+num+symbol;

const len = 12;

function createPassword(){

    let pass = "";
    pass += upperCase[Math.floor(Math.random()*26)];
    pass += lowerCase[Math.floor(Math.random()*26)];
    pass += num[Math.floor(Math.random()*10)];
    pass += symbol[Math.floor(Math.random()*19)];

    while(len > pass.length){
        pass += allChars[Math.floor(Math.random()*81)];
    }
    password.value = pass;
    pass = null;
}

copi.addEventListener( 'click', () => {
    // password.select();
    // document.execCommand("copy"); so, this method is deprecated.
    navigator.clipboard.writeText(password.value);
    password.value = "";
    alert("Copied");
})