let element = document.getElementById("text")

const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)

recognition.lang = "en-GB"
recognition.continuous = true;

recognition.onresult = (event) => {
    for (const result of event.results){
        element.innerText = result[0].transcript
    }
}

document.onclick = () => {
    recognition.start()
}