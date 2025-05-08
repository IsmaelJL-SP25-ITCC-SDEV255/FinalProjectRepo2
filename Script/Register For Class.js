document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const courseName = document.getElementById('course').value;

    if (!courseName || courseName === 'Default') {
        alert('Please select a valid course.');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ courseName });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Successfully added ${courseName} to your cart!`);

    window.location.href = 'Cart.html';
});