document.addEventListener("DOMContentLoaded", function () {
    const asciiArt1 = document.getElementById("ascii-art");
    const asciiArt2 = document.getElementById("ascii-art-2");
    const reverseButton = document.getElementById('reverse');

    function toggleImage(event) {
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

    asciiArt1.addEventListener("click", toggleImage);
    asciiArt2.addEventListener("click", toggleImage);

    reverseButton.addEventListener('click', function() {
        document.body.classList.toggle('reverse-colors');
        reverseButton.classList.toggle('reverse-colors');
    });
});
