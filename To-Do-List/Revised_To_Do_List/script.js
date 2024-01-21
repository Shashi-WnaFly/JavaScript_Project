let add = document.querySelector("#add")
let text = document.querySelector('#text')
let list = document.querySelector('#list')

add.addEventListener('click', () => {
    if(text.value === ""){
        alert('Please enter any value.')
    }
    else{
        add_Li(text, list)
    }
    saveData()
})

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
    }
    else{
        e.target.parentElement.remove()
    }
    saveData()
}, false)

function add_Li(text, list){
    let li = document.createElement('LI')
    li.innerHTML = text.value
    list.appendChild(li)
    let span = document.createElement('span')
    li.appendChild(span)
    text.value = ""
}

function saveData(){
    localStorage.setItem("data", list.innerHTML)
}

function showData (){
    list.innerHTML = localStorage.getItem('data')
}

showData()