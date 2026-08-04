# Experiment / Case Study No.: 1

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac1/`

---

## Experiment Title

**Demonstration of Inline, Internal and External JavaScript, Console Methods and Uses Information Webpage**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript is a client-side scripting language used to make web pages interactive. It can be included in an HTML document in three different ways:

**a) Inline JavaScript:** JavaScript code is written directly inside HTML elements using event attributes like `onclick`.

**b) Internal JavaScript:** JavaScript code is written inside the `<script>` tag within the HTML file.

**c) External JavaScript:** JavaScript code is written in a separate `.js` file and linked using the `<script src=""></script>` tag.

### Console Methods

JavaScript provides several console methods for debugging:
- `console.log()`
- `console.error()`
- `console.warn()`
- `console.info()`
- `console.table()`
- `console.time()`

---

## Experiment Program Code

### `index.html` — SIT Nagpur CSE Department Page (Internal + External JS)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIT Nagpur - CSE Department</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap" rel="stylesheet">
    <script src="script.js"></script>
    <style>
        :root {
            --surface: #fbf9f8;
            --surface-container: #efeded;
            --primary: #000a1e;
            --secondary: #775a19;
            --outline: #c4c6cf;
            --text: #1b1c1c;
            --muted: #44474e;
            --white: #ffffff;
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            font-family: 'Inter', Arial, sans-serif;
            color: var(--text);
            background: linear-gradient(135deg, rgba(251,249,248,0.97), rgba(239,237,237,0.95)),
                        url('https://www.collegeselect.net/wp-content/uploads/elementor/thumbs/Symbiosis-p4q64ecny4lkkac0msuucfnd19781shb1r1vyahe28.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
        }

        .page {
            max-width: 1280px;
            margin: 0 auto;
            padding: 24px 20px 48px;
        }

        .hero-card {
            background: rgba(255,255,255,0.92);
            border: 1px solid var(--outline);
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 4px 20px rgba(0, 10, 30, 0.06);
            backdrop-filter: blur(8px);
        }

        .eyebrow {
            display: inline-block;
            padding: 6px 10px;
            background: #f5f3f3;
            color: var(--secondary);
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        h1, h2 {
            font-family: 'Source Serif 4', Georgia, serif;
            margin: 0 0 12px;
            color: var(--primary);
        }

        h1 { font-size: 2.2rem; }
        h2 { font-size: 1.5rem; }

        p {
            color: var(--muted);
            line-height: 1.7;
            margin: 0 0 16px;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 20px;
        }

        .btn {
            display: inline-block;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 6px;
            font-weight: 600;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
            border: 1px solid transparent;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 10, 30, 0.08);
        }

        .btn-primary {
            background: var(--primary);
            color: var(--white);
        }

        .btn-secondary {
            background: transparent;
            color: var(--primary);
            border-color: var(--primary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 24px;
        }

        .card {
            background: var(--white);
            border: 1px solid var(--outline);
            border-radius: 10px;
            padding: 18px;
            transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .card:hover {
            border-color: var(--secondary);
            transform: translateY(-2px);
        }

        .card h3 {
            margin: 0 0 8px;
            color: var(--primary);
            font-size: 1.05rem;
        }

        .student-identity {
            margin-top: 18px;
            padding: 16px;
            border: 1px solid var(--outline);
            border-radius: 10px;
            background: #fffdf8;
        }

        .student-identity strong {
            display: block;
            color: var(--primary);
            margin-bottom: 6px;
            font-size: 0.98rem;
        }

        .toggle-panel {
            margin-top: 20px;
            display: none;
            background: var(--surface-container);
            border: 1px solid var(--outline);
            border-radius: 10px;
            padding: 16px;
        }

        @media (max-width: 800px) {
            .grid { grid-template-columns: 1fr; }
            .hero-card { padding: 24px; }
            h1 { font-size: 1.8rem; }
        }
    </style>
    <script>
        function showMessage(){
            console.log("Department Home Page Loaded");
        }

        function toggleHighlights(){
            const panel = document.getElementById("togglePanel");
            const button = document.getElementById("toggleBtn");
            const isVisible = panel.style.display === "block";
            panel.style.display = isVisible ? "none" : "block";
            button.textContent = isVisible ? "View Highlights" : "Hide Highlights";
        }

        window.addEventListener("load", function(){
            showMessage();
            const today = new Date();
            document.getElementById("today").textContent = today.toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        });
    </script>
</head>
<body>
    <main class="page">
        <section class="hero-card">
            <div class="eyebrow">Academic Excellence System</div>
            <h1>Symbiosis Institute of Technology, Nagpur</h1>
            <h2>Computer Science & Engineering Department</h2>
            <p>
                The Computer Science & Engineering Department offers quality education in
                Artificial Intelligence, Machine Learning, Data Science, Cyber Security,
                Software Engineering, and Cloud Computing.
            </p>
            <div class="student-identity">
                <strong>Student Details</strong>
                <div>ATHARV LULEKAR</div>
                <div>PRN : 24070521036</div>
            </div>
            <p id="today" style="font-weight:600; color:var(--primary);"></p>
            <div class="actions">
                <a class="btn btn-primary" href="student.html">Student Information Portal</a>
                <a class="btn btn-secondary" href="https://sitnagpur.edu.in/#" target="_blank" rel="noopener noreferrer">Visit SIT Nagpur</a>
                <button class="btn btn-secondary" id="toggleBtn" onclick="toggleHighlights()">View Highlights</button>
            </div>

            <div class="toggle-panel" id="togglePanel">
                <strong>Department Highlights</strong>
                <p>Industry-focused curriculum, research-led learning, and strong placement support for future-ready engineers.</p>
            </div>

            <div class="grid">
                <article class="card">
                    <h3>Innovative Learning</h3>
                    <p>Hands-on labs and project-based teaching for modern computing challenges.</p>
                </article>
                <article class="card">
                    <h3>Research Driven</h3>
                    <p>Cutting-edge work in AI, cybersecurity, data science, and cloud systems.</p>
                </article>
                <article class="card">
                    <h3>Student Success</h3>
                    <p>Dedicated mentoring, industry exposure, and a strong academic culture.</p>
                </article>
            </div>
        </section>
    </main>
</body>
</html>
```

### `script.js` — External JavaScript File

```javascript
alert("Welcome to SIT Nagpur");

console.log("Welcome to SIT Nagpur");
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac1/index.html`

---

## Case Study Title

**Making of a webpage of student information connected to the SIT Nagpur department webpage and using JavaScript to display a "Welcome" alert**

---

## Case Study Program Code

### `student.html` — Student Information Portal (Inline JS)

```html
<!DOCTYPE html>
<html>
<head>

<title>Student Information Portal</title>

<style>

body{
    font-family:Arial;
    margin:20px;
}

input{
    padding:5px;
    margin:5px;
    width:250px;
}

button{
    padding:5px 15px;
    margin:5px;
}

table{
    width:80%;
    border-collapse:collapse;
    margin-top:20px;
}

table,th,td{
    border:1px solid black;
}

th,td{
    padding:10px;
    text-align:center;
}

a{
    text-decoration:none;
    border:1px solid black;
    padding:8px;
}

</style>

<script>

function addStudent(){

    var prn=document.getElementById("prn").value;
    var name=document.getElementById("name").value;
    var sem=document.getElementById("sem").value;
    var gpa=document.getElementById("gpa").value;

    if(prn=="" || name=="" || sem=="" || gpa==""){
        alert("Please fill all fields");
        return;
    }

    if(parseFloat(gpa) < 7.5){
        alert("GPA must be 7.5 or above to register");
        return;
    }

    var table=document.getElementById("studentTable");

    var row=table.insertRow(-1);

    row.insertCell(0).innerHTML=prn;
    row.insertCell(1).innerHTML=name;
    row.insertCell(2).innerHTML=sem;
    row.insertCell(3).innerHTML=gpa;

    console.log(prn);
    console.log(name);
    console.log(sem);
    console.log(gpa);

    document.getElementById("prn").value="";
    document.getElementById("name").value="";
    document.getElementById("sem").value="";
    document.getElementById("gpa").value="";
}

</script>

</head>

<body>

<h1>Student Information Portal</h1>

<a href="#register">Go to Registration</a>
&nbsp;&nbsp;
<a href="index.html">Back to Home</a>

<br><br>

<h2>Registered Students</h2>

<table id="studentTable">

<tr>
<th>PRN</th>
<th>Name</th>
<th>Semester</th>
<th>GPA</th>
</tr>

</table>

<br><br><br>

<hr>

<h2 id="register">Student Registration</h2>

<p><strong>Eligibility Criteria:</strong> Minimum GPA required is 7.5</p>

<label>PRN</label><br>
<input type="text" id="prn"><br>

<label>Name</label><br>
<input type="text" id="name"><br>

<label>Semester</label><br>
<input type="text" id="sem"><br>

<label>GPA</label><br>
<input type="number" id="gpa" step="0.01" min="0" max="10"><br>

<button onclick="addStudent()">Register</button>

</body>
</html>
```

---

## Output

> **Attach the case study output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac1/student.html`

---

## Result / Conclusion

The practical was performed successfully. Different methods of JavaScript, including internal, inline, and external, were demonstrated. A webpage of student information connected to the SIT Nagpur department webpage was created, and JavaScript was used to display a "Welcome" alert successfully.
