document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table').getElementsByTagName('tbody')[0];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
        const row = cartTable.insertRow();
        const courseCell = row.insertCell(0);
        const actionCell = row.insertCell(1);

        courseCell.textContent = item.courseName;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        actionCell.appendChild(removeButton);
    });
});

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); 
}

function sendToSchedule() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const schedule = JSON.parse(localStorage.getItem('schedule')) || [];

    schedule.push(...cart);

    localStorage.setItem('schedule', JSON.stringify(schedule));
    localStorage.removeItem('cart');

    alert('Classes have been added to your schedule!');
    window.location.href = 'Schedule.html';
}