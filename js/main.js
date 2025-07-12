const employeeList = document.getElementById("employeeList");

function renderEmployees(employees) {
  employeeList.innerHTML = "";

  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    employeeList.appendChild(card);
  });
}

function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    window.employeeData = window.employeeData.filter(emp => emp.id !== id);
    renderEmployees(window.employeeData);
  }
}

function editEmployee(id) {
  alert("Edit functionality is not yet implemented.");
}

window.onload = () => {
  renderEmployees(window.employeeData);
};
