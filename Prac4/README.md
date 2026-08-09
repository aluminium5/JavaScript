# Experiment / Case Study No.: 4

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac4/`

---

## Experiment Title

**Use Function Types, Scope and Closures; Apply Try-Catch; Build a Palindrome Checker**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript provides different types of functions and scope mechanisms that make programs modular and reusable. Exception handling helps in managing runtime errors effectively.

**a) Function Types**
- Functions perform specific tasks.
- JavaScript supports function declarations, function expressions, and arrow functions.

**b) Scope**
- Scope determines the accessibility of variables.
- Types include global scope, function scope, and block scope.

**c) Closures**
- A closure is a function that remembers variables from its outer scope.
- It allows access to outer variables even after the outer function has finished execution.

**d) Try-Catch**
- Used for exception handling.
- Prevents program termination by catching runtime errors.

**e) Palindrome Checker**
- A palindrome is a word or number that reads the same forward and backward.
- JavaScript can compare the original and reversed string to determine whether it is a palindrome.

---

## Experiment Program Code

### `Palindrome/index.html` — Palindrome Checker

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Palindrome Checker</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div class="card">
    <h1>Palindrome Checker</h1>
    <h1>Atharv Lulekar</h1>
    <h1>24070521036</h1>
    <p class="subtitle">Does it read the same forwards & backwards?</p>

    <input type="text" id="wordInput" placeholder="Enter a word or phrase">
    <button onclick="checkPalindrome()">Check</button>

    <p id="result"></p>
    <p id="error"></p>
  </div>

  <script src="script.js"></script>

</body>

</html>
```

### `Palindrome/script.js` — (Function Declaration, Expression, Arrow Function, Closure, Try-Catch)

```javascript
function isPalindrome(word) {
  var reversed = word.split("").reverse().join("");
  return word === reversed;
}

var cleanWord = function (word) {
  return word.toLowerCase().replace(/[^a-z0-9]/g, "");
};

var showResult = (message) => {
  document.getElementById("error").innerText = "";
  document.getElementById("result").innerText = message;
};

function makeCounter() {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}
var counter = makeCounter();

function checkPalindrome() {
  try {
    var input = document.getElementById("wordInput").value;

    if (input.trim() === "") {
      throw new Error("Please enter a word!");
    }

    var cleaned = cleanWord(input);
    var result = isPalindrome(cleaned);

    if (result) {
      showResult('"' + input + '" is a Palindrome! ');
    } else {
      showResult('"' + input + '" is NOT a Palindrome ');
    }
  } catch (error) {
    alert(error.message);
  }
}
```

### `Palindrome/style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ffe4ec 0%, #e8f1ff 55%, #fff4d7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background: #fffaf6;
  padding: 40px 36px;
  border-radius: 16px;
  border: 1px solid #f2c96c;
  box-shadow: 0 12px 28px rgba(55, 84, 170, 0.18);
  width: 100%;
  max-width: 420px;
  text-align: center;
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #2f4fa3;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 0.85rem;
  color: #7e8ec7;
  margin-bottom: 28px;
}

input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border: 1px solid #f2c96c;
  border-radius: 10px;
  outline: none;
  color: #23408f;
  transition: border-color 0.2s;
  margin-bottom: 12px;
  background: #fff;
}

input:focus {
  border-color: #4d7bff;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background: linear-gradient(135deg, #4d7bff 0%, #7aa1ff 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: linear-gradient(135deg, #3568f5 0%, #f2c96c 100%);
}

#result {
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #2f4fa3;
}

#error {
  margin-top: 12px;
  font-size: 0.9rem;
  color: #d4507d;
}

.footer {
  margin-top: 24px;
  font-size: 0.8rem;
  color: #7e8ec7;
  text-align: center;
}
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac4/Palindrome/index.html`

---

## Case Study Title

**Vehicle Registration Number Validation Webpage using JavaScript**

---

## Case Study Program Code

### `Vehicle-Registration/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vehicle Registration Validator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="card">
    <div class="top">
      <p class="tag">Task 4.b - Atharv Lulekar - 24070521036</p>
      <h1>Vehicle Registration</h1>
      <p class="desc">Enter your 10-character registration number below</p>
    </div>

    <div class="input-wrap">
      <input
        type="text"
        id="regInput"
        placeholder="MH12AB1234"
        maxlength="10"
        autocomplete="off"
        spellcheck="false"
      />
      <span id="charCount">0/10</span>
    </div>

    <button id="validateBtn" onclick="validateRegistration()">Validate</button>

    <ul class="rules">
      <li id="rule1"><span></span> Not empty</li>
      <li id="rule2"><span></span> Exactly 10 chars</li>
      <li id="rule3"><span></span> [1-2] State - letters</li>
      <li id="rule4"><span></span> [3-4] District - digits</li>
      <li id="rule5"><span></span> [5-6] Series - letters</li>
      <li id="rule6"><span></span> [7-10] Vehicle - digits</li>
    </ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `Vehicle-Registration/script.js`

```javascript
function isUpperLetter(ch) {
  return ch >= "A" && ch <= "Z";
}

function isDigit(ch) {
  return ch >= "0" && ch <= "9";
}

function validateRegistration() {
  const input = document.getElementById("regInput");
  const registrationNumber = input.value.trim();

  for (let i = 1; i <= 6; i++) {
    document.getElementById("rule" + i).classList.remove("pass", "fail");
  }

  try {
    if (registrationNumber.length === 0) {
      setRule(1, false);
      throw new Error("Registration number cannot be empty.");
    }
    setRule(1, true);

    if (registrationNumber.length !== 10) {
      setRule(2, false);
      throw new Error("Length must be exactly 10 characters. You entered " + registrationNumber.length + ".");
    }
    setRule(2, true);

    if (!isUpperLetter(registrationNumber[0]) || !isUpperLetter(registrationNumber[1])) {
      setRule(3, false);
      throw new Error("First 2 characters (State Code) must be uppercase letters. Got: " + registrationNumber[0] + registrationNumber[1]);
    }
    setRule(3, true);

    if (!isDigit(registrationNumber[2]) || !isDigit(registrationNumber[3])) {
      setRule(4, false);
      throw new Error("Characters 3-4 (District Code) must be digits. Got: " + registrationNumber[2] + registrationNumber[3]);
    }
    setRule(4, true);

    if (!isUpperLetter(registrationNumber[4]) || !isUpperLetter(registrationNumber[5])) {
      setRule(5, false);
      throw new Error("Characters 5-6 (Series) must be uppercase letters. Got: " + registrationNumber[4] + registrationNumber[5]);
    }
    setRule(5, true);

    if (!isDigit(registrationNumber[6]) || !isDigit(registrationNumber[7]) || !isDigit(registrationNumber[8]) || !isDigit(registrationNumber[9])) {
      setRule(6, false);
      throw new Error(
        "Last 4 characters (Vehicle Number) must be digits. Got: " +
          registrationNumber[6] +
          registrationNumber[7] +
          registrationNumber[8] +
          registrationNumber[9]
      );
    }
    setRule(6, true);

    showResult("valid", "Valid Registration!");
  } catch (err) {
    showResult("invalid", err.message);
  }
}

function setRule(ruleNum, passed) {
  document.getElementById("rule" + ruleNum).classList.add(passed ? "pass" : "fail");
}

function showResult(type, title) {
  const btn = document.getElementById("validateBtn");
  btn.classList.remove("result-valid", "result-invalid");
  void btn.offsetWidth;

  if (type === "valid") {
    btn.textContent = "\u2713 Valid Registration!";
    btn.classList.add("result-valid");
  } else {
    btn.textContent = "\u2717 " + title;
    btn.classList.add("result-invalid");
  }
}

document.getElementById("regInput").addEventListener("input", function () {
  document.getElementById("charCount").textContent = this.value.length + "/10";

  const btn = document.getElementById("validateBtn");
  btn.textContent = "Validate";
  btn.classList.remove("result-valid", "result-invalid");

  for (let i = 1; i <= 6; i++) {
    document.getElementById("rule" + i).classList.remove("pass", "fail");
  }

  this.value = this.value.toUpperCase();
});

document.getElementById("regInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateRegistration();
  }
});
```

### `Vehicle-Registration/style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(160deg, #f8fafc 0%, #f2f4f7 50%, #edf2f7 100%);
  font-family: 'Manrope', sans-serif;
  color: #1f2937;
}

.card {
  width: 100%;
  max-width: 430px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.top {
  margin-bottom: 16px;
}

.tag {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 10px;
}

.top h1 {
  font-size: 1.9rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.15;
}

.desc {
  margin-top: 8px;
  color: #475569;
  font-size: 0.92rem;
}

.input-wrap {
  position: relative;
  margin-bottom: 14px;
}

#regInput {
  width: 100%;
  border: 1.5px solid #dbe1e8;
  border-radius: 12px;
  background: #f8fafc;
  padding: 13px 60px 13px 14px;
  font-size: 0.98rem;
  letter-spacing: 0.14em;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}

#regInput::placeholder {
  color: #94a3b8;
  letter-spacing: 0.08em;
}

#regInput:focus {
  border-color: #7aa2d8;
  box-shadow: 0 0 0 3px rgba(122, 162, 216, 0.18);
  background: #ffffff;
}

#charCount {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 0.72rem;
  color: #64748b;
}

#validateBtn {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 13px;
  background: #3b82f6;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

#validateBtn:hover {
  background: #2563eb;
}

#validateBtn:active {
  transform: translateY(1px);
}

#validateBtn.result-valid {
  background: #10b981;
}

#validateBtn.result-invalid {
  background: #ef4444;
}

.rules {
  list-style: none;
  margin-top: 16px;
  border-top: 1px solid #e5e7eb;
  padding-top: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 12px;
}

.rules li {
  font-size: 0.76rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 8px;
}

.rules li span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #cbd5e1;
  flex-shrink: 0;
}

.rules li.pass {
  color: #0f766e;
}

.rules li.pass span {
  background: #14b8a6;
}

.rules li.fail {
  color: #b91c1c;
}

.rules li.fail span {
  background: #ef4444;
}

@media (max-width: 480px) {
  .card {
    padding: 22px;
  }

  .top h1 {
    font-size: 1.6rem;
  }

  .rules {
    grid-template-columns: 1fr;
  }
}
```

---

## Output

> **Attach the case study output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac4/Vehicle-Registration/index.html`

---

## Result / Conclusion

The practical was completed successfully. Function types (declaration, expression, arrow function), scope, closures, and try-catch exception handling were implemented successfully. A vehicle registration number validator and a palindrome checker were developed using JavaScript to validate user input and demonstrate string manipulation concepts.
