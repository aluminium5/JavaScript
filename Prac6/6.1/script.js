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