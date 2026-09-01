# Experiment / Case Study No.: 6

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac6/`

---

## Experiment Title

**Demonstration of String Methods, Regular Expressions (Regex), Email Validation, String Reversing and Vowel Counter**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript provides powerful built-in methods and Regular Expressions (Regex) for string manipulation, pattern matching, searching, and validation.

### a) String Manipulation Methods
- **`split()`**: Splits a string into an array of substrings based on a specified separator.
- **`replace()`**: Searches a string for a specified value or regex pattern and returns a new string where specified values are replaced.
- **`indexOf()`**: Returns the index of the first occurrence of a specified text in a string.
- **`trim()`**: Removes whitespace from both ends of a string.

### b) Regular Expressions (Regex)
A regular expression is an object that describes a pattern of characters. Used for form validation, searching, and text replacement.
- **`test()`**: Tests for a match in a string. Returns `true` or `false`.
- **`match()`**: Retrieves the result of matching a string against a regular expression pattern.

```javascript
// Pattern for standard email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

---

## Experiment Program Code

### Part 1: `Prac6/6.1/index.html` — String & Regex Workbench

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>String Methods and Regular Expressions</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">Prac 6</p>
      <h1>String Methods and Regular Expressions</h1>
      <p class="lead">
        Enter a paragraph and an email address to see how string methods and regex work together.
      </p>
    </section>

    <section class="card">
      <div class="field-group">
        <label for="paragraph">Enter a paragraph</label>
        <textarea id="paragraph" rows="6">JavaScript is a powerful programming language. It is widely used for web development.</textarea>
      </div>

      <div class="field-group">
        <label for="email">Enter email</label>
        <input type="text" id="email" placeholder="Enter your email">
      </div>

      <button onclick="processString()">Process String</button>
    </section>

    <section class="results-grid" id="output"></section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

### `Prac6/6.1/script.js` — Regex & String Processor

```javascript
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function createResultCard(title, contentHtml) {
  return `
    <article class="result-card">
      <h3>${escapeHtml(title)}</h3>
      <p>${contentHtml}</p>
    </article>
  `;
}

function processString() {
  var paragraph = document.getElementById('paragraph').value;
  var email = document.getElementById('email').value.trim();
  var output = document.getElementById('output');

  if (paragraph.trim() === '') {
    output.innerHTML = createResultCard('Error', '<span class="invalid">Please enter a paragraph.</span>');
    return;
  }

  var words = paragraph.trim().split(/\s+/);
  var vowels = paragraph.match(/[aeiou]/gi) || [];
  var vowelCount = vowels.length;
  var replacedParagraph = paragraph.replace(/JavaScript/gi, 'JavaScript Programming');
  var searchWord = 'powerful';
  var position = paragraph.indexOf(searchWord);
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var emailStatus = emailRegex.test(email) ? '<span class="valid">Valid</span>' : '<span class="invalid">Invalid</span>';
  var extractedEmails = 'For queries contact student@gmail.com'.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
  var reversedParagraph = paragraph.split('').reverse().join('');

  output.innerHTML = [
    createResultCard('1. Original Paragraph', escapeHtml(paragraph)),
    createResultCard('2. split() - Words', escapeHtml(words.join(', '))),
    createResultCard('3. match() - Vowels', vowels.length ? escapeHtml(vowels.join(', ')) : 'No vowels found'),
    createResultCard('4. Vowel Count', 'Total number of vowels: <strong>' + vowelCount + '</strong>'),
    createResultCard('5. replace() - Replaced Text', escapeHtml(replacedParagraph)),
    createResultCard('6. indexOf() - Search Word', 'Position of <strong>' + escapeHtml(searchWord) + '</strong>: <strong>' + position + '</strong>'),
    createResultCard('7. Email Validation Using Regex', 'Email: <strong>' + escapeHtml(email || 'Not entered') + '</strong><br>Result: ' + emailStatus),
    createResultCard('8. Regex - Extracted Information', extractedEmails.length ? escapeHtml(extractedEmails.join(', ')) : 'No email found'),
    createResultCard('9. reverse() - Reversed Paragraph', escapeHtml(reversedParagraph))
  ].join('');
}
```

---

### Part 2: `Prac6/6.2/index.html` — String Reverser & Vowel Counter

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String & Count Vowels</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>String Utilities</h1>
        
        <section class="card">
            <h2>1. Reverse String</h2>
            <input type="text" id="stringInput" placeholder="Enter text to reverse">
            <button onclick="reverseString()">Reverse</button>
            <div id="reverseOutput"></div>
        </section>

        <section class="card">
            <h2>2. Count Vowels</h2>
            <textarea id="paragraph" placeholder="Enter paragraph to count vowels"></textarea>
            <button onclick="countVowels()">Count Vowels</button>
            <div id="vowelOutput"></div>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

### `Prac6/6.2/script.js` — Reverser & Individual Vowel Analytics

```javascript
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function reverseString() {
    let str = document.getElementById("stringInput").value;
    let reversed = str.split("").reverse().join("");

    document.getElementById("reverseOutput").innerHTML = `
        <div class="output-card">
            <h3>1. Original String</h3>
            <p>${escapeHtml(str)}</p>

            <h3>2. Reversed String</h3>
            <p><b>${escapeHtml(reversed)}</b></p>
        </div>
    `;
}

function countVowels() {
    let paragraph = document.getElementById("paragraph").value;

    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    let a = (paragraph.match(/a/gi) || []).length;
    let e = (paragraph.match(/e/gi) || []).length;
    let i = (paragraph.match(/i/gi) || []).length;
    let o = (paragraph.match(/o/gi) || []).length;
    let u = (paragraph.match(/u/gi) || []).length;

    document.getElementById("vowelOutput").innerHTML = `
        <div class="output-card">
            <h3>1. Original Paragraph</h3>
            <p>${escapeHtml(paragraph)}</p>

            <h3>2. Vowels Found</h3>
            <p>${vowels ? escapeHtml(vowels.join(", ")) : "No vowels found"}</p>

            <h3>3. Total Vowel Count</h3>
            <p>Total number of vowels: <b>${vowelCount}</b></p>

            <h3>4. Individual Vowel Count</h3>
            <div class="vowel-grid">
                <span class="vowel-badge">a = <b>${a}</b></span>
                <span class="vowel-badge">e = <b>${e}</b></span>
                <span class="vowel-badge">i = <b>${i}</b></span>
                <span class="vowel-badge">o = <b>${o}</b></span>
                <span class="vowel-badge">u = <b>${u}</b></span>
            </div>
        </div>
    `;
}
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac6/`

---

## Result / Conclusion

The practical was executed successfully. JavaScript string methods (`split`, `reverse`, `join`, `replace`, `indexOf`) and Regular Expressions (`match`, `test`) were applied to handle string reversal, vowel counting, and email validation dynamically.
