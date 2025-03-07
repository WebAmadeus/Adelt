document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    }
});
