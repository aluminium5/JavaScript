let students = [];

function addStudent() {
  const nameInput = document.getElementById("studentName");
  const marksInput = document.getElementById("studentMarks");
  const errorMsg = document.getElementById("errorMsg");

  const name = nameInput.value.trim();
  const marks = Number(marksInput.value);

  errorMsg.textContent = "";

  if (name === "") {
    errorMsg.textContent = "Please enter the student's name.";
    return;
  }

  if (marksInput.value === "" || Number.isNaN(marks) || marks < 0 || marks > 100) {
    errorMsg.textContent = "Please enter valid marks between 0 and 100.";
    return;
  }

  students.push({
    id: students.length + 1,
    name: name,
    marks: marks
  });

  renderTable();

  nameInput.value = "";
  marksInput.value = "";
  nameInput.focus();
}

function renderTable() {
  const table = document.getElementById("studentTable");
  const tableBody = document.getElementById("tableBody");
  const findBtn = document.getElementById("findBtn");
  const resultCards = document.getElementById("resultCards");

  tableBody.innerHTML = students
    .map(function (student) {
      return `<tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
      </tr>`;
    })
    .join("");

  if (students.length >= 2) {
    table.style.display = "table";
    findBtn.style.display = "block";
  } else if (students.length === 1) {
    table.style.display = "table";
    findBtn.style.display = "none";
  } else {
    table.style.display = "none";
    findBtn.style.display = "none";
  }

  resultCards.style.display = "none";
}

function findMaxMin() {
  if (students.length < 2) {
    document.getElementById("errorMsg").textContent = "Add at least two students to compare.";
    return;
  }

  const allMarks = students.map(function (student) {
    return student.marks;
  });

  const maxMarks = Math.max(...allMarks);
  const minMarks = Math.min(...allMarks);

  const topStudent = students.find(function (student) {
    return student.marks === maxMarks;
  });

  const bottomStudent = students.find(function (student) {
    return student.marks === minMarks;
  });

  document.getElementById("maxName").textContent = topStudent.name;
  document.getElementById("maxMarks").textContent = `${maxMarks} / 100`;
  document.getElementById("minName").textContent = bottomStudent.name;
  document.getElementById("minMarks").textContent = `${minMarks} / 100`;

  document.getElementById("resultCards").style.display = "flex";
}

function resetAll() {
  students = [];

  document.getElementById("studentName").value = "";
  document.getElementById("studentMarks").value = "";
  document.getElementById("errorMsg").textContent = "";
  document.getElementById("tableBody").innerHTML = "";
  document.getElementById("studentTable").style.display = "none";
  document.getElementById("findBtn").style.display = "none";
  document.getElementById("resultCards").style.display = "none";
}
