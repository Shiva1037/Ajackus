const form = document.getElementById("employeeForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (!validateEmail(data.email)) {
    alert("Invalid email address.");
    return;
  }

  const newEmp = {
    id: Date.now(),
    ...data
  };

  if (!window.employeeData) window.employeeData = [];
  window.employeeData.push(newEmp);

  alert("Employee added!");
  window.location.href = "index.html";
});

function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
