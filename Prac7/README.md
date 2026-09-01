# Experiment / Case Study No.: 7

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac7/`

---

## Experiment Title

**DOM Manipulation, Event Handling, Dynamic Task Manager (To-Do List) and Advanced Client-Side Form Validation**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

### a) Dynamic DOM Manipulation
JavaScript can dynamically add, remove, and modify HTML elements and attributes on the page.
- **`document.createElement()`**: Creates a new HTML element node.
- **`element.appendChild()`**: Adds a node to the end of the list of children of a specified parent node.
- **`element.remove()`**: Removes the element from the DOM tree.

### b) Event Listeners & Event Handling
Event listeners listen for explicit user interactions such as clicks, key presses, or form submissions.
```javascript
element.addEventListener("click", function(event) {
    // Event handling logic
});
```

### c) Client-Side Form Validation
Form validation ensures required input data is captured in the correct format before submitting data to a server.
- **`e.preventDefault()`**: Prevents the default browser form submission behavior.
- **Class toggling**: Dynamically adds or removes error indicator CSS classes (`invalid`, `show`).

---

## Experiment Program Code

### Part 1: `Prac7/Prac7.1/index.html` — Interactive Task Manager (To-Do List)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <style>
        :root {
            --bg-light: #f3f4f6;
            --bg-soft: #e5e7eb;
            --card-bg: #ffffff;
            --text-main: #1f2937;
            --accent: #4f46e5;
            --danger: #ef4444;
        }

        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, var(--bg-light), var(--bg-soft));
        }

        .container {
            width: 440px;
            max-width: 90vw;
            background: var(--card-bg);
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        ul { list-style: none; padding: 0; }
        li { display: flex; justify-content: space-between; margin-bottom: 8px; }
        button.edit { background: var(--accent); color: white; border: none; padding: 4px 8px; border-radius: 4px; }
        button.delete { background: var(--danger); color: white; border: none; padding: 4px 8px; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Interactive Task Manager</h2>
        <input type="text" id="taskInput" placeholder="Enter new task...">
        <button id="addBtn">Add Task</button>

        <ul id="taskList"></ul>
    </div>

    <script>
        let input = document.getElementById("taskInput");
        let addBtn = document.getElementById("addBtn");
        let taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", function() {
            let task = input.value.trim();

            if (task === "") {
                alert("Please enter a task");
                return;
            }

            let li = document.createElement("li");
            let span = document.createElement("span");
            let editBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");

            span.innerText = task;
            editBtn.innerText = "Edit";
            editBtn.className = "edit";
            deleteBtn.innerText = "Delete";
            deleteBtn.className = "delete";

            editBtn.addEventListener("click", function() {
                let newTask = prompt("Edit task:", span.innerText);
                if (newTask !== null && newTask.trim() !== "") {
                    span.innerText = newTask.trim();
                }
            });

            deleteBtn.addEventListener("click", function() {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            input.value = "";
        });
    </script>
</body>
</html>
```

---

### Part 2: `Prac7/Prac7.2/index.html` — Registration Form with Validation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form Validation</title>
    <style>
        .form-group.invalid input { border-color: #d32f2f; }
        .form-group .error { display: none; color: #d32f2f; font-size: 12px; }
        .form-group.invalid .error { display: block; }
        .success-msg { display: none; color: #2e7d32; font-weight: bold; }
        .success-msg.show { display: block; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Registration Form</h1>
        <div id="successMsg" class="success-msg">Registration Successful!</div>
        
        <form id="registrationForm">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" id="firstname">
                <div class="error">First name is required</div>
            </div>

            <div class="form-group">
                <label>Username</label>
                <input type="text" id="username">
                <div class="error">Username is required</div>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email">
                <div class="error">Please enter a valid email</div>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" id="password">
                <div class="error">Password must be at least 6 characters</div>
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" id="repassword">
                <div class="error">Passwords do not match</div>
            </div>

            <div class="checkbox-group">
                <input type="checkbox" id="terms">
                <label for="terms">I agree to terms & conditions</label>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>

    <script>
        const form = document.getElementById('registrationForm');
        const successMsg = document.getElementById('successMsg');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('invalid');
            });
            successMsg.classList.remove('show');

            const firstname = document.getElementById('firstname').value.trim();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const repassword = document.getElementById('repassword').value;
            const terms = document.getElementById('terms').checked;

            let isValid = true;

            if (!firstname) {
                document.getElementById('firstname').closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!username) {
                document.getElementById('username').closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (email && !isValidEmail(email)) {
                document.getElementById('email').closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!password || password.length < 6) {
                document.getElementById('password').closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (password !== repassword) {
                document.getElementById('repassword').closest('.form-group').classList.add('invalid');
                isValid = false;
            }

            if (!terms) {
                alert('Please agree to the terms & conditions');
                isValid = false;
            }

            if (isValid) {
                successMsg.classList.add('show');
                form.reset();
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 3000);
            }
        });

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        ['firstname', 'username', 'email', 'password', 'repassword'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                this.closest('.form-group').classList.remove('invalid');
            });
        });
    </script>
</body>
</html>
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac7/`

---

## Result / Conclusion

The practical was executed successfully. Dynamic DOM element manipulation, event delegation, and real-time form validation techniques were successfully demonstrated in creating interactive web applications.
