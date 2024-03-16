let d_date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let today = new Date();

d_date.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();