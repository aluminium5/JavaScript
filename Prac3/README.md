# Experiment / Case Study No.: 3

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac3/`

---

## Experiment Title

**Implement Control Structures and Form Validation; Create a Grading System Based on User-Entered Marks**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript provides control structures that help in decision-making and repetition of tasks. Form validation ensures that user inputs are correct before submitting the data.

**a) Control Structures**
- Used to control the flow of program execution.
- Includes `if`, `if-else`, `else-if`, `switch`, `for`, `while`, and `do-while`.

**b) Form Validation**
- Checks whether user input is valid.
- Prevents incorrect or incomplete data from being submitted.

**c) Conditional Statements**
- Used to compare values and execute specific blocks of code.
- Helpful in implementing grading systems and validations.

---

## Experiment Program Code

### `Grade-check/index.html` — Grade Calculator

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Grade Calculator</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<main class="container">
		<h1>Grade Calculator</h1>
		<p class="subtitle">Enter your name and marks to see the grade instantly.</p>

		<form id="gradeForm">
			<div class="form-group">
				<label for="name">Student Name</label>
				<input type="text" id="name" placeholder="Enter your name">
			</div>

			<div class="form-group">
				<label for="marks">Marks</label>
				<input type="number" id="marks" min="0" max="100" placeholder="Enter marks out of 100">
			</div>

			<button type="submit">Check Grade</button>
		</form>

		<div id="result"></div>
	</main>

	<script src="script.js"></script>
</body>
</html>
```

### `Grade-check/script.js`

```javascript
document.getElementById("gradeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    // Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (marks === "") {
        alert("Please enter marks.");
        return;
    }

    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let grade;

    // Control Structure
    if (marks >= 90) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 50) {
        grade = "D";
    }
    else {
        grade = "F (Fail)";
    }

    result.style.display = "block";

    result.innerHTML = `
        <h3>Result</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Marks:</strong> ${marks}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;

});
```

### `Grade-check/styles.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background:
        radial-gradient(circle at top, rgba(249, 115, 22, 0.16), transparent 34%),
        linear-gradient(135deg, #fff8f1 0%, #fdf2e8 100%);
    color: #1f2937;
}

.container {
    width: 100%;
    max-width: 420px;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(234, 88, 12, 0.14);
    padding: 32px;
    border-radius: 20px;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    backdrop-filter: blur(10px);
}

h1 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 10px;
    color: #111827;
}

.subtitle {
    text-align: center;
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.5;
}

.form-group {
    margin-bottom: 16px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    color: #374151;
}

input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    font-size: 1rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    background: #fff;
}

input:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.16);
}

button {
    width: 100%;
    padding: 13px 16px;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(135deg, #f97316, #ea580c);
    box-shadow: 0 14px 24px rgba(234, 88, 12, 0.24);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 30px rgba(234, 88, 12, 0.28);
}

#result {
    margin-top: 20px;
    display: none;
    padding: 18px;
    background: #fff7ed;
    border: 1px solid #fed7aa;
    border-radius: 14px;
    line-height: 1.7;
}

#result h3 {
    margin-bottom: 8px;
    color: #c2410c;
}

@media (max-width: 480px) {
    .container {
        padding: 24px;
        border-radius: 16px;
    }

    h1 {
        font-size: 1.5rem;
    }
}
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac3/Grade-check/index.html`

---

## Case Study Title

**Password Validation Webpage using JavaScript**

---

## Case Study Program Code

### `Password/index.html` — Password Checker

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Simple Password Checker</title>
	<style>
		:root {
			color-scheme: dark;
			--bg1: #050505;
			--bg2: #111111;
			--card: rgba(14, 14, 14, 0.96);
			--text: #f8f1d4;
			--muted: #b8ab7d;
			--accent: #d4af37;
			--accent-dark: #b88f1f;
			--danger: #ff6b6b;
			--success: #6fdc9a;
			--border: #3a3320;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			min-height: 100vh;
			font-family: Arial, Helvetica, sans-serif;
			color: var(--text);
			background:
				radial-gradient(circle at top left, rgba(212, 175, 55, 0.18), transparent 30%),
				radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.1), transparent 26%),
				linear-gradient(135deg, var(--bg1), var(--bg2));
			display: grid;
			place-items: center;
			padding: 24px;
		}

		.card {
			width: min(100%, 460px);
			background: var(--card);
			border: 1px solid rgba(212, 175, 55, 0.22);
			border-radius: 20px;
			box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
			overflow: hidden;
		}

		.header {
			padding: 24px 24px 12px;
			text-align: center;
		}

		.header h1 {
			margin: 0 0 8px;
			font-size: 1.55rem;
		}

		.header p {
			margin: 0;
			color: var(--muted);
			font-size: 0.95rem;
			line-height: 1.4;
		}

		.content {
			padding: 12px 24px 24px;
		}

		label {
			display: block;
			margin: 18px 0 6px;
			font-weight: 700;
			font-size: 0.95rem;
		}

		input {
			width: 100%;
			padding: 12px 14px;
			border: 1px solid var(--border);
			border-radius: 10px;
			font-size: 1rem;
			outline: none;
			transition: border-color 0.2s ease, box-shadow 0.2s ease;
		}

		input:focus {
			border-color: var(--accent);
			box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
		}

		button {
			border: 0;
			border-radius: 10px;
			padding: 12px 14px;
			font-size: 1rem;
			font-weight: 700;
			cursor: pointer;
		}

		.primary {
			background: var(--accent);
			color: #15120a;
			width: 100%;
			margin-top: 16px;
		}

		.primary:hover {
			background: var(--accent-dark);
		}

		.message {
			min-height: 22px;
			margin-top: 18px;
			font-size: 0.95rem;
			font-weight: 700;
			text-align: center;
		}

		.message.success {
			color: var(--success);
		}

		.message.error {
			color: var(--danger);
		}

		.footer {
			padding: 0 24px 22px;
			text-align: center;
			color: var(--muted);
			font-size: 0.88rem;
		}

		.helper {
			margin-top: 10px;
			color: var(--muted);
			font-size: 0.9rem;
			line-height: 1.5;
		}
	</style>
</head>
<body>
	<main class="card">
		<div class="header">
			<h1>Password Checker</h1>
			<p>Enter the password and click the button to check it.</p>
		</div>
		<div class="content">
			<label for="password">Password</label>
			<input id="password" type="password" placeholder="Enter password">
			<div class="helper">Use the button below to validate the password against the fixed value.</div>
			<button class="primary" type="button" onclick="checkPassword()">Check Password</button>
			<div id="result" class="message" aria-live="polite"></div>
		</div>

		<div class="footer">
			Simple client-side password demo.
		</div>
	</main>

	<script src="script.js"></script>
</body>
</html>
```

### `Password/script.js`

```javascript
function checkPassword(){

	let enteredPassword =
		document.getElementById("password").value;

	let hasUppercase = false;
	let hasLowercase = false;
	let hasSpecialCharacter = false;

	if(enteredPassword.length < 8){

		document.getElementById("result").innerHTML =
		"Password must be at least 8 characters long";

		document.getElementById("result").style.color =
		"red";

	}else{

		for(let i = 0; i < enteredPassword.length; i++){

			let currentCharacter = enteredPassword[i];
			let characterCode = currentCharacter.charCodeAt(0);

			if(characterCode >= 65 && characterCode <= 90){
				hasUppercase = true;
			}else if(characterCode >= 97 && characterCode <= 122){
				hasLowercase = true;
			}else{
				hasSpecialCharacter = true;
			}

		}

		if(hasUppercase === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one uppercase letter";

			document.getElementById("result").style.color =
			"red";

		}else if(hasLowercase === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one lowercase letter";

			document.getElementById("result").style.color =
			"red";

		}else if(hasSpecialCharacter === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one special character";

			document.getElementById("result").style.color =
			"red";

		}else{

			document.getElementById("result").innerHTML =
			"Login Successful";

			document.getElementById("result").style.color =
			"green";

		}

	}

}
```

---

## Output

> **Attach the case study output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac3/Password/index.html`

---

## Result / Conclusion

The practical was completed successfully. Control structures and form validation were implemented using JavaScript. A password validation system and a grading system were developed to validate user input and display the appropriate grade based on the entered marks.
