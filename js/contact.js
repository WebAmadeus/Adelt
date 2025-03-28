document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Vänligen fyll i alla fält');
            return;
        }

        const formData = new FormData(contactForm);

        console.log('Contact Form Submitted:', Object.fromEntries(formData));

        alert('Tack för ditt meddelande! Vi återkommer snart.');
        contactForm.reset();
    });
