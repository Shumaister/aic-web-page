// Carrusel simple para los clientes
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function scrollCarousel(direction) {
    if (!track) return;
    const cardWidth = track.querySelector('.client-card').offsetWidth + 16; // 16px gap
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => scrollCarousel(-1));
    nextBtn.addEventListener('click', () => scrollCarousel(1));
}
