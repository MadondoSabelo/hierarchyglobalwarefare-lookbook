document.addEventListener('DOMContentLoaded', function() {
  var enterButton = document.getElementById('enterButton');
  var audio = new Audio('audio/background-music.mp3'); // Replace with the path to your audio file

  enterButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action to control the audio
      audio.play().then(function() {
          // Redirect to the lookbook page after the audio starts playing
          window.location.href = 'lookbook';
      }).catch(function(error) {
          console.error('Error playing audio:', error);
          // Redirect to the lookbook page even if the audio fails to play
          window.location.href = 'lookbook';
      });
  });
});
