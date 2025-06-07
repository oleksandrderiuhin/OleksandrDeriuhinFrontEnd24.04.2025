function randomImg(){
    const imgAr = ['<img src="IMG_6243.JPG" alt="#" />',
        '<img src="IMG_6245.JPG" alt="#" />',
        '<img src="openart-image_-SylLu-N_1748119588606_raw.svg" alt="#" />',
        '<img src="Знімок%20екрана%202025-04-09%20о%2013.30.56.png" alt="#" />',
        '<img src="Знімок%20екрана%202025-04-09%20о%2013.35.46.png" alt="#" />'];

    const rnd = Math.floor(Math.random()*imgAr.length);

    const rndImg = imgAr[rnd];

    const imgTag = document.getElementById('img');

    imgTag.innerHTML = rndImg;
}

window.onload = randomImg;