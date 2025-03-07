document.addEventListener('DOMContentLoaded', function () {
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        heroOverlay.style.opacity = 0;
        setTimeout(() => {
            heroOverlay.style.transition = 'opacity 1s';
            heroOverlay.style.opacity = 1;
        }, 300);
    }
});
