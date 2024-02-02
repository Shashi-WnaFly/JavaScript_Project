let input_txt = document.querySelector('#input_txt');
let btn = document.querySelector('#btn');
let img = document.querySelector('#qr_code');

btn.addEventListener('click', () => {
    if(input_txt.value === "") alert("Please Enter some value!");
    else{
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input_txt.value;
        
    }
})
