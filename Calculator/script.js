let input = document.querySelector('#input-box');
let cal = document.querySelector('.calculator')

cal.addEventListener('click', (e) => {
    if(e.target.id === 'del'){
        input.value = input.value.toString().slice(0, -1);
    }

    else if(e.target.id === 'al_Clr'){
        input.value = "";
    }

    else if(e.target.id === 'equal'){
        input.value = eval(input.value);
    }

    else if(e.target.tagName === 'BUTTON'){
        input.value += e.target.innerHTML;
    }
})