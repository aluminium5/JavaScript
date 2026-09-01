# Experiment / Case Study No.: 5

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac5/`

---

## Experiment Title

**Array & Object Manipulation, Array Methods (map, filter, reduce), AtharvCart Shopping Cart & Student Marks Analyzer**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript arrays and objects are fundamental data structures used to store and manipulate collections of data efficiently. Modern ES6 array iteration methods provide functional programming capabilities to refine, filter, and calculate values dynamically.

### a) Objects in JavaScript
An object is a standalone entity with properties and types. Properties consist of key-value pairs.
```javascript
const student = { id: 1, name: "Atharv", marks: 95 };
```

### b) Arrays in JavaScript
An array is a special variable that can hold more than one value at a time.
```javascript
let cart = [];
```

### c) ES6 Array Iteration Methods
- **`map()`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **`filter()`**: Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- **`reduce()`**: Executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element, resulting in a single output value.
- **`find()`**: Returns the first element in the provided array that satisfies the provided testing function.

---

## Experiment Program Code

### Part 1: `Prac5.1/AtharvCart/index.html` — Shopping Cart Interface

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Atharv's Cart</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="brand">
        <h1>Atharv Lulekar</h1>
        <p class="prn">PRN: 24070521036</p>
      </div>
      <div class="meta">Simple Cart — Practice 5.1</div>
    </header>

    <main class="grid">
      <section class="cart panel">
        <h2 class="title">Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="cartBody"></tbody>
        </table>
        <p id="emptyMsg" class="empty">No items yet.</p>
      </section>

      <aside class="controls panel">
        <h3 class="title">Add Item</h3>
        <div class="form">
          <input id="itemName" type="text" placeholder="Item name" />
          <div class="row">
            <input id="itemPrice" type="number" placeholder="Price (₹)" min="0" />
            <input id="itemQty" type="number" placeholder="Qty" min="1" value="1" />
          </div>
          <button id="addBtn">Add to Cart</button>
        </div>

        <hr />

        <div class="summary">
          <div class="line"><span>Subtotal</span><span id="subtotal">₹0.00</span></div>
          <div class="line bold"><span>Total</span><span id="total">₹0.00</span></div>
        </div>

        <button id="checkoutBtn" class="checkout">Checkout</button>
        <p id="msg" class="msg"></p>
      </aside>
    </main>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### `Prac5.1/AtharvCart/script.js` — Array & Reduce Logic

```javascript
let cart = [];
let nextId = 1;

function addItem() {
  const nameEl  = document.getElementById("itemName");
  const priceEl = document.getElementById("itemPrice");
  const qtyEl   = document.getElementById("itemQty");

  const name  = nameEl.value.trim();
  const price = parseFloat(priceEl.value);
  const qty   = parseInt(qtyEl.value, 10);

  if (!name || isNaN(price) || price < 0 || isNaN(qty) || qty < 1) {
    showMsg("Please fill in all fields correctly.", "#ef4444");
    return;
  }

  cart.push({ id: nextId++, name, price, qty, subtotal: price * qty });

  nameEl.value = "";
  priceEl.value = "";
  qtyEl.value = "1";

  showMsg("", "");
  render();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  render();
}

function render() {
  const tbody    = document.getElementById("cartBody");
  const emptyMsg = document.getElementById("emptyMsg");
  tbody.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
    cart.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>₹${item.price.toFixed(2)}</td>
        <td>₹${item.subtotal.toFixed(2)}</td>
        <td><button class="del" onclick="removeItem(${item.id})">✕</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  const subtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
  const total    = subtotal;

  document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent    = `₹${total.toFixed(2)}`;

  updateMeta();
}

function checkout() {
  if (cart.length === 0) { showMsg("Cart is empty!", "#ef4444"); return; }
  const subtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
  const total    = subtotal;
  showMsg(`Order placed! Total paid: ₹${total.toFixed(2)}`, "#16a34a");
  cart = [];
  render();
}

function showMsg(text, color) {
  const el = document.getElementById("msg");
  el.textContent = text;
  el.style.color = color || "";
}

function updateMeta() {
  const meta = document.querySelector('.meta');
  if (!meta) return;
  const count = cart.reduce((s, i) => s + i.qty, 0);
  meta.textContent = `Items in cart: ${count}`;
}

const addBtn = document.getElementById('addBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
if (addBtn) addBtn.addEventListener('click', addItem);
if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

render();
```

---

### Part 2: `Prac5.2/index.html` — Student Marks Analyzer

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Practical 5.2 - Student Marks</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Student Marks Analyzer</h1>
    <p class="subtitle">Find the highest and lowest scorer from an array of student objects.</p>

    <div class="input-row">
      <input type="text" id="studentName" placeholder="Student Name" />
      <input type="number" id="studentMarks" placeholder="Marks (0-100)" min="0" max="100" />
      <button onclick="addStudent()">Add</button>
    </div>

    <p id="errorMsg" class="error"></p>

    <table id="studentTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>

    <button id="findBtn" class="find-btn" onclick="findMaxMin()">Find Highest and Lowest</button>

    <div id="resultCards" class="result-cards">
      <div class="card max-card">
        <p class="label">Highest Scorer</p>
        <p id="maxName" class="student-name">-</p>
        <p id="maxMarks" class="student-marks">-</p>
      </div>
      <div class="card min-card">
        <p class="label">Lowest Scorer</p>
        <p id="minName" class="student-name">-</p>
        <p id="minMarks" class="student-marks">-</p>
      </div>
    </div>

    <button class="reset-btn" onclick="resetAll()">Reset</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `Prac5.2/script.js` — Array Methods (map, Math.max/min, find)

```javascript
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
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac5/`

---

## Result / Conclusion

The practical was executed successfully. JavaScript objects, arrays, and ES6 array manipulation methods (`map`, `filter`, `reduce`, `find`) were effectively implemented to manage dynamic interactive applications including the AtharvCart shopping cart and Student Marks Analyzer.
