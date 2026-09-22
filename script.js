let attendance = [];

document.getElementById("attendanceForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const date = new Date().toLocaleDateString();

  attendance.push({ name, date });

  const li = document.createElement("li");
  li.textContent = `${name} - Present (${date})`;
  document.getElementById("attendanceList").appendChild(li);

  document.getElementById("attendanceForm").reset();
});

function generateMonthlyReport() {
  const report = attendance.reduce((acc, entry) => {
    acc[entry.name] = (acc[entry.name] || 0) + 1;
    return acc;
  }, {});

  console.log("Monthly Attendance Report:", report);
  alert(JSON.stringify(report, null, 2));
}