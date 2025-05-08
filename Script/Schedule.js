document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];
    const schedule = JSON.parse(localStorage.getItem('schedule')) || [];

    schedule.forEach((item, index) => {
        const row = scheduleTable.insertRow();
        const courseCell = row.insertCell(0);
        const actionCell = row.insertCell(1);

        courseCell.textContent = item.courseName;

        const dropButton = document.createElement('button');
        dropButton.textContent = 'Drop';
        dropButton.onclick = () => dropClass(index);
        actionCell.appendChild(dropButton);
    });
});

function dropClass(index) {
    const schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    schedule.splice(index, 1); 
    localStorage.setItem('schedule', JSON.stringify(schedule)); 
    location.reload(); 
}