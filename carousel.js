const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.client-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let index = 0;
let startX = 0;
let currentTranslate = 0;

// Crear indicadores
cards.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-indicators button');

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Botones
nextBtn.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
});

// Swipe Mobile
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        index = (index + 1) % cards.length;
    } else if (diff < -50) {
        index = (index - 1 + cards.length) % cards.length;
    }

    updateCarousel();
}); 