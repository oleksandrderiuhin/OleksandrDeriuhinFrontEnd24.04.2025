let isColored = false;

function button() {
    const textBlock = document.getElementById("text");

    if (isColored) {
        textBlock.style.color = "black"; // початковий колір
    } else {
        textBlock.style.color = "red"; // змінений колір
    }

    isColored = !isColored;
}