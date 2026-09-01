function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ── Program 1: Reverse a String ──

function reverseString() {

    let str = document.getElementById("stringInput").value;

    // split the string into an array of characters,
    // reverse the array, and join it back into a string
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

// ── Program 2: Count Vowels in a Paragraph ──

function countVowels() {

    let paragraph = document.getElementById("paragraph").value;

    // match() - Find all vowels (case-insensitive)
    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    // Count each vowel separately
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
