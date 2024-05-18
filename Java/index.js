
        // JavaScript for image scroller
        let currentIndex = 0; // Current index of the displayed image
        const totalImages = document.querySelectorAll('.image-container img').length; // Total number of images

        // Function to show the current image
        function showImage(index) {
            const container = document.querySelector('.image-container');
            const offset = -index * container.offsetWidth; // Calculate offset based on container width
            container.style.transform = `translateX(${offset}px)`; // Apply transform to show the current image
            document.getElementById('image-counter').textContent = index + 1; // Update image counter
        }

        // Function to show the next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages; // Increment index, loop back to 0 if reached the end
            showImage(currentIndex);
        }

        // Function to show the previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Decrement index, loop back to end if reached 0
            showImage(currentIndex);
        }

        // Initially show the first image
        showImage(currentIndex);
