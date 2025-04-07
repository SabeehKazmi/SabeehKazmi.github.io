document.addEventListener("DOMContentLoaded", function () {
    const asciiArt1 = document.getElementById("ascii-art");
    const asciiArt2 = document.getElementById("ascii-art-2");
    const reverseButton = document.getElementById("reverse");

    function toggleImage() {
        const showingFirst = asciiArt1.style.display !== "none";

        asciiArt1.style.display = showingFirst ? "none" : "block";
        asciiArt2.style.display = showingFirst ? "block" : "none";
    }

    asciiArt1.addEventListener("click", toggleImage);
    asciiArt2.addEventListener("click", toggleImage);

    reverseButton.addEventListener("click", function () {
        document.body.classList.toggle("reverse-colors");
        reverseButton.classList.toggle("reverse-colors");
    });
});
