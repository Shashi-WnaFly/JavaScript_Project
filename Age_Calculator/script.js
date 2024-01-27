let cal = document.querySelector('#cal')
let dob_picker = document.querySelector('input')
let para = document.querySelector('#para')

dob_picker.max = new Date().toISOString().split("T")[0];

function days(m, y){
    if(m===1||m===3||m===5||m===7||m===8||m===10||m===12) return 31;
    else if(m===2){
        if(y%4 === 0) return 29
        return 29
    }
    else return 30;
}

cal.addEventListener( 'click', () => {

    let dob = new Date(dob_picker.value);
    let d1 = dob.getDate()
    let m1 = dob.getMonth()+1
    let y1 = dob.getFullYear()

    let today = new Date()
    let d2 = today.getDate()
    let m2 = today.getMonth()+1
    let y2 = today.getFullYear()

    let d3, m3, y3

    if(d2 >= d1){
        d3 = d2-d1
    }
    else if(d2 < d1){
        let dm = days(m2, y1)
        d2 = d2 + dm
        d3 = d2 - d1;
        --m2
    }
    if(m2 >= m1){
        m3 = m2-m1
    }
    else{
        m2 = m2 + 12
        m3 = m2 - m1
        --y2
    }
    y3 = y2 - y1
    para.innerHTML = `You are <span>${y3}</span> year , <span>${m3}</span> months and <span>${d3}</span> days`
})