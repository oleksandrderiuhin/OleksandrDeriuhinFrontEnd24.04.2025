let userLink = null;

document.getElementById('openWindow').addEventListener('click', function() {
    const link = prompt(userLink)
    if (link && link.trim() !== "" && (link.startsWith("http://") || link.startsWith("https://"))) {
        userLink = link;
        alert("Посилання збережено!");
    } else {
        alert("Некоректне посилання або відміна вводу.");
    }
});

document.getElementById('openLink').addEventListener('click', function() {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert("Спочатку введіть посилання!");
    }
});


