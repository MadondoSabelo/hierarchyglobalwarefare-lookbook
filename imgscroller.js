
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#image-scroller .image-container img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentImageIndex = 0;

    // Hide all images except the first one
    for (let i = 1; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Function to show the next image
    function showNextImage() {
        if (currentImageIndex < images.length - 1) {
            images[currentImageIndex].style.display = "none";
            currentImageIndex++;
            images[currentImageIndex].style.display = "block";
            updateImageCounter();
        }
    }

    // Function to show the previous image
    function showPrevImage() {
        if (currentImageIndex > 0) {
            images[currentImageIndex].style.display = "none";
            currentImageIndex--;
            images[currentImageIndex].style.display = "block";
            updateImageCounter();
        }
    }

    // Function to update the image counter
    function updateImageCounter() {
        document.getElementById("image-counter").textContent = currentImageIndex + 1;
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);
});