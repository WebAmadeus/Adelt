document.addEventListener('DOMContentLoaded', () => {
    const sellForm = document.getElementById('sell-application');

    sellForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const jewelryType = document.getElementById('jewelry-type').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').files[0];
        const estimatedValue = document.getElementById('estimated-value').value;

        if (!name || !email || !jewelryType || !description || !image || !estimatedValue) {
            alert('Vänligen fyll i alla fält');
            return;
        }

        const formData = new FormData(sellForm);

        console.log('Sell Application Submitted:', Object.fromEntries(formData));

        alert('Tack för din ansökan! Vi återkommer inom 24 timmar.');
        sellForm.reset();
    });
});
