
let speech;
function playText(id) {
  const text = document.getElementById(id).innerText;
  speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'te-IN';
  window.speechSynthesis.speak(speech);
}
function pauseSpeech() {
  window.speechSynthesis.cancel();
}
