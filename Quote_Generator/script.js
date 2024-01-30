const api_url = "https://api.quotable.io/random";

let new_quote = document.querySelector('#New_quote');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let tweet = document.querySelector('#tweet');

new_quote.addEventListener('click', () => {
    get_Quote(api_url);
})

tweet.addEventListener('click', () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  --- by " + author.innerHTML, "Tweet Window", "width=600 height=300");
})

async function get_Quote(url){
    const responce = await fetch(url);
    let data = await responce.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

get_Quote(api_url);
