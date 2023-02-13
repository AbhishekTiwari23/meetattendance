let attendanceData = JSON.parse(localStorage.getItem('latest_meet_attendance'));

// Get the table element
let table = document.getElementById("attendance-table");

// Loop through the attendance data and add a new row for each date
for (let i = 0; i < attendanceData.length; i++) {
  let row = table.insertRow();
  let dateCell = row.insertCell(0);
  let attendanceCell = row.insertCell(1);
  dateCell.innerHTML = attendanceData[i].date;
  attendanceCell.innerHTML = attendanceData[i].attendance;
}
console.log(table)