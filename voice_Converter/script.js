let speech = new SpeechSynthesisUtterance();

let voices = [];

let select_list = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (select_list.options[i] = new Option(voice.name, i)));
}

select_list.addEventListener('change', ()=>{
    speech.voice = voices[select_list.value];
})

document.querySelector('button').addEventListener('click', ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})