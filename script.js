document.addEventListener("DOMContentLoaded", function () {
    const asciiArt1 = document.getElementById("ascii-art");
    const asciiArt2 = document.getElementById("ascii-art-2");

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
});
