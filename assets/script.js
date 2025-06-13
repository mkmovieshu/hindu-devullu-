let synth = window.speechSynthesis;
let utterance;

function playText(elementId) {
  if (synth.speaking) {
    synth.cancel();
  }
  const text = document.getElementById(elementId).innerText;
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'te-IN';
  synth.speak(utterance);
}

function pauseSpeech() {
  if (synth.speaking) {
    synth.cancel();
  }
}
