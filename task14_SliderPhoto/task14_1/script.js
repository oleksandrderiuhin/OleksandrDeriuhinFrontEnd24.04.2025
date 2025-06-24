    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    let currentIndex = 0;

    function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dotsContainer.children[i].classList.toggle('active', i === index);
    });

    prevBtn.style.display = index === 0 ? 'none' : 'block';
    nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}

    function createDots() {
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
}

    prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
}
});

    nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
}
});

    createDots();
    showSlide(currentIndex);

