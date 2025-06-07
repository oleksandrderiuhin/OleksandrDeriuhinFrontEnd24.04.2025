let isColored = false;

function button() {
    const textBlock = document.getElementById("text");

    if (isColored) {
        textBlock.style.color = "black";
    } else {
        textBlock.style.color = "red";

    isColored = !isColored;
}}