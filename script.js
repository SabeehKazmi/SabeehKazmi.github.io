document.addEventListener("DOMContentLoaded", function () {
    const asciiArt1 = document.getElementById("ascii-art");
    const asciiArt2 = document.getElementById("ascii-art-2");
    const reverseButton = document.getElementById('reverse');
    const entertainButton = document.getElementById('entertain-yourself');

    // Function to toggle between images when clicked on the actual ASCII content
    function toggleImage(event) {
        // Check if the click was on a <pre> element containing the image
        if (event.target.tagName === "PRE") {
            if (asciiArt1.style.display === "none") {
                asciiArt1.style.display = "block";
                asciiArt2.style.display = "none";
            } else {
                asciiArt1.style.display = "none";
                asciiArt2.style.display = "block";
            }
        }
    }

    // Add event listeners to both images
    asciiArt1.addEventListener("click", toggleImage);
    asciiArt2.addEventListener("click", toggleImage);

    // Reverse the colors
    reverseButton.addEventListener('click', function() {
        console.log('Button clicked!');
        document.body.classList.toggle('reverse-colors');
        
        // Also toggle the button color scheme
        reverseButton.classList.toggle('reverse-colors');
        entertainButton.classList.toggle('reverse-colors');
    });
});
