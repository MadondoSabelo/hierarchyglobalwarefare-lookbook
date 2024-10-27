document.addEventListener('DOMContentLoaded', function() {
    var enterButton = document.getElementById('enterButton');
    var audio = new Audio('audio/background-music.mp3'); // Replace with the path to your audio file

    // Check if the audio has been played previously and set its state
    if (sessionStorage.getItem('audioPlayed') === 'true') {
        audio.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    }

    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action to control the audio
        
        // Play the audio
        audio.play().then(function() {
            // Set the audioPlayed state in sessionStorage
            sessionStorage.setItem('audioPlayed', 'true');

            // Load content dynamically (for example, loading the lookbook content)
            loadContent('lookbook.html'); // Replace with the actual path to your content file
        }).catch(function(error) {
            console.error('Error playing audio:', error);
            // Load content even if the audio fails to play
            loadContent('lookbook.html');
        });
    });

    // Function to load content dynamically
    function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Replace the current page content with the new content
                document.body.innerHTML = xhr.responseText;
                // Play the audio again if the lookbook is loaded
                audio.play().catch(function(error) {
                    console.error('Error playing audio after loading new content:', error);
                });
            } else {
                console.error('Error loading content:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Request failed');
        };
        xhr.send();
    }
});
