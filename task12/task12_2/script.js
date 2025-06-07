const container = document.getElementById('bigButton');

container.addEventListener('click', function(event) {

    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        alert('Ви натиснули кнопку: ' + buttonText);
    }
});



