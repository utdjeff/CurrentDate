
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateCalendar() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    document.getElementById('day').textContent = days[day];
    var date = today.getDate();
    document.getElementById('date').textContent = date;
    document.getElementById('month').textContent = months[month];
    var year = today.getFullYear();
    document.getElementById('year').textContent = year.toString();
}

updateCalendar();