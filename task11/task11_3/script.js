
const imageNames = ['IMG_6243.JPG',
    'IMG_6245.JPG',
    'openart-image_-SylLu-N_1748119588606_raw.svg',
    'Знімок екрана 2025-04-09 о 13.30.56.png',
    'Знімок екрана 2025-04-09 о 13.35.46.png'];


const randomIndex = Math.floor(Math.random() * imageNames.length);


const img = document.createElement('img');
img.src = 'images/' + imageNames[randomIndex];
img.alt = 'Випадкове зображення';
img.style.maxWidth = '300px';


const container = document.getElementById('img');
container.appendChild(img);