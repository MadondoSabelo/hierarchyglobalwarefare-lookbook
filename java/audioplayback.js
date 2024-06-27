// Select the audio element
const audio = document.getElementById("background-music");

// Play the audio when the page loads
window.onload = function() {
  audio.play();
};

// Pause the audio when the user navigates to a new page
window.onbeforeunload = function() {
  audio.pause();
};