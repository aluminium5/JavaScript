# Experiment / Case Study No.: 2

**Student Name:** Atharv Lulekar  
**PRN:** 24070521036  
**File Path:** `Prac2/` and `Prac2_shoppingweb/`

---

## Experiment Title

**Demonstration of var, let, const, Template Literals, Destructuring and Billing Calculator using JavaScript**

---

## Software / Tools Required

- Visual Studio Code
- Google Chrome
- HTML5
- JavaScript (ES6)

---

## Theory

JavaScript ES6 introduced several modern features that make programming easier and more efficient.

**a) var**
- Function-scoped variable.
- Can be redeclared and updated.

**b) let**
- Block-scoped variable.
- Can be updated but cannot be redeclared in the same scope.

**c) const**
- Block-scoped variable.
- Cannot be reassigned after initialization.

**d) Template Literals**
- Template literals allow embedding variables directly inside strings using backticks (`` ` ``) and `${}`.

**e) Destructuring**
- Destructuring extracts values from arrays or objects into separate variables.

---

## Experiment Program Code

### `index.html` — Billing Calculator (Internal JS with var, let, const, Template Literals & Destructuring)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Billing Calculator</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
	<style>
		:root {
			--bg-1: #0f172a;
			--bg-2: #111827;
			--card: rgba(255, 255, 255, 0.95);
			--card-border: rgba(148, 163, 184, 0.28);
			--text: #0f172a;
			--muted: #475569;
			--accent: #0f766e;
			--accent-2: #f59e0b;
			--shadow: 0 20px 60px rgba(15, 23, 42, 0.28);
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			min-height: 100vh;
			font-family: "Inter", Arial, sans-serif;
			color: var(--text);
			background:
				radial-gradient(circle at top left, rgba(245, 158, 11, 0.26), transparent 30%),
				radial-gradient(circle at bottom right, rgba(15, 118, 110, 0.28), transparent 32%),
				linear-gradient(145deg, var(--bg-1), var(--bg-2));
			display: grid;
			place-items: center;
			padding: 24px;
		}

		.shell {
			width: min(1080px, 100%);
			display: grid;
			grid-template-columns: 1.05fr 0.95fr;
			gap: 24px;
			align-items: stretch;
		}

		.hero,
		.panel {
			background: var(--card);
			border: 1px solid var(--card-border);
			border-radius: 28px;
			box-shadow: var(--shadow);
			backdrop-filter: blur(14px);
		}

		.hero {
			padding: 40px;
			color: #e2e8f0;
			background:
				linear-gradient(160deg, rgba(15, 23, 42, 0.98), rgba(17, 24, 39, 0.92)),
				linear-gradient(145deg, rgba(15, 118, 110, 0.45), rgba(245, 158, 11, 0.22));
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 560px;
			overflow: hidden;
			position: relative;
		}

		.hero::after {
			content: "";
			position: absolute;
			inset: auto -80px -120px auto;
			width: 260px;
			height: 260px;
			border-radius: 50%;
			background: radial-gradient(circle, rgba(245, 158, 11, 0.28), transparent 70%);
			pointer-events: none;
		}

		.badge {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			width: fit-content;
			padding: 8px 14px;
			border-radius: 999px;
			background: rgba(255, 255, 255, 0.08);
			color: #f8fafc;
			font-size: 0.82rem;
			font-weight: 700;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			backdrop-filter: blur(8px);
		}

		.hero h1 {
			margin: 18px 0 10px;
			font-size: clamp(2.1rem, 4vw, 3.5rem);
			line-height: 1.04;
			max-width: 10ch;
		}

		.hero p {
			margin: 0;
			max-width: 52ch;
			color: rgba(226, 232, 240, 0.82);
			line-height: 1.75;
			font-size: 1rem;
		}

		.panel {
			padding: 30px;
		}

		.panel h2 {
			margin: 0 0 8px;
			font-size: 1.7rem;
		}

		.panel .subtitle {
			margin: 0 0 24px;
			color: var(--muted);
			line-height: 1.6;
		}

		form {
			display: grid;
			gap: 16px;
		}

		.field {
			display: grid;
			gap: 8px;
		}

		label {
			font-size: 0.92rem;
			font-weight: 700;
			color: #1e293b;
		}

		input {
			width: 100%;
			border: 1px solid #cbd5e1;
			border-radius: 14px;
			padding: 14px 16px;
			font: inherit;
			color: var(--text);
			background: #fff;
			outline: none;
			transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
		}

		input:focus {
			border-color: rgba(15, 118, 110, 0.7);
			box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.12);
			transform: translateY(-1px);
		}

		.actions {
			display: flex;
			gap: 12px;
			flex-wrap: wrap;
			margin-top: 4px;
		}

		.btn {
			border: 0;
			border-radius: 14px;
			padding: 14px 18px;
			font: inherit;
			font-weight: 700;
			cursor: pointer;
			transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
		}

		.btn:hover {
			transform: translateY(-2px);
			box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
		}

		.btn-primary {
			background: linear-gradient(135deg, var(--accent), #115e59);
			color: #fff;
		}

		.btn-secondary {
			background: #e2e8f0;
			color: #0f172a;
		}

		.output {
			margin-top: 22px;
			padding: 20px;
			border-radius: 20px;
			background: linear-gradient(180deg, #f8fafc, #eef2f7);
			border: 1px solid #dbe4ee;
			min-height: 220px;
		}

		.output h2,
		.output h3,
		.output p {
			margin-top: 0;
		}

		.output h2 {
			margin-bottom: 14px;
			font-size: 1.25rem;
		}

		.output p {
			margin-bottom: 10px;
			color: #334155;
		}

		.identity-card {
			margin-top: 18px;
			padding: 16px 18px;
			border-radius: 18px;
			background: rgba(255, 255, 255, 0.08);
			border: 1px solid rgba(255, 255, 255, 0.12);
		}

		.identity-card strong {
			display: block;
			margin-bottom: 6px;
			color: #fff;
			font-size: 0.98rem;
		}

		.identity-card span {
			display: block;
			color: rgba(226, 232, 240, 0.8);
			line-height: 1.55;
		}

		.note {
			margin-top: 16px;
			font-size: 0.86rem;
			color: #64748b;
		}

		@media (max-width: 900px) {
			.shell {
				grid-template-columns: 1fr;
			}

			.hero {
				min-height: auto;
			}
		}

		@media (max-width: 640px) {
			body {
				padding: 14px;
			}

			.hero,
			.panel {
				padding: 22px;
				border-radius: 22px;
			}

			.stats {
				grid-template-columns: 1fr;
			}
		}
	</style>
</head>
<body>
	<main class="shell">
		<section class="hero" aria-label="Billing calculator introduction">
			<div>
				<span class="badge">Prac 2 | JavaScript Billing</span>
				<h1>Smart billing interface</h1>
				<div class="identity-card">
					<strong>Student Details</strong>
					<span>ATHARV LULEKAR</span>
					<span>PRN: 24070521036</span>
				</div>
			</div>
		</section>

		<section class="panel" aria-label="Billing form">
			<h2>Generate Bill</h2>
			<p class="subtitle">Fill in the form and press <strong>Calculate Bill</strong> to view the total amount with GST.</p>

			<form onsubmit="event.preventDefault(); calculateBill();">
				<div class="field">
					<label for="Name">Customer Name</label>
					<input id="Name" type="text" placeholder="Enter customer name" required>
				</div>

				<div class="field">
					<label for="product">Product</label>
					<input id="product" type="text" placeholder="Enter product name" required>
				</div>

				<div class="field">
					<label for="price">Price (₹)</label>
					<input id="price" type="number" min="0" step="0.01" placeholder="0.00" required>
				</div>

				<div class="field">
					<label for="quantity">Quantity</label>
					<input id="quantity" type="number" min="1" step="1" placeholder="1" required>
				</div>

				<div class="actions">
					<button class="btn btn-primary" type="submit">Calculate Bill</button>
					<button class="btn btn-secondary" type="reset">Clear Form</button>
				</div>
			</form>

			<section class="output" id="output" aria-live="polite">
				<h2>Billing Details</h2>
				<p>Your calculated bill will appear here.</p>
			</section>
		</section>
	</main>

	<script>
		function calculateBill(){
			var customerName = document.getElementById("Name").value;
			let product = document.getElementById("product").value;
			let price = Number(document.getElementById("price").value);
			let quantity = Number(document.getElementById("quantity").value);
			const GST = 0.18;

			let subtotal = price * quantity;
			let gstAmount = subtotal * GST;
			let total = subtotal + gstAmount;

			const bill = {
				customerName,
				product,
				subtotal,
				gstAmount,
				total
			};

			const { customerName: name, product: item, subtotal: sub, gstAmount: gst, total: finalAmount } = bill;

			document.getElementById("output").innerHTML = `
				<h2>Billing Details</h2>
				<p><b>Customer:</b> ${name}</p>
				<p><b>Product:</b> ${item}</p>
				<p><b>Subtotal:</b> ₹${sub}</p>
				<p><b>GST (18%):</b> ₹${gst.toFixed(2)}</p>
				<h3>Total Amount: ₹${finalAmount.toFixed(2)}</h3>
			`;

			console.log(`Customer: ${name}`);
			console.log(`Product: ${item}`);
			console.log(`Total Bill: ₹${finalAmount.toFixed(2)}`);
		}
	</script>
</body>
</html>
```

### `gst_calculator.js` — External GST Calculator Script

```javascript
function calculateBill(){
  var customerName = document.getElementById("Name").value;
  let product = document.getElementById("product").value;
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);
  const GST = 0.18
 
  let subtotal = price * quantity;
  let gstAmount= subtotal * GST;
  let total= subtotal + gstAmount;
  const bill ={
    customerName,
    product,
    subtotal,
    gstAmount,
    total
  }
   const {customerName: name, product: item, subtotal: sub, gstAmount: gst, total: finalAmount } = bill;

    //template literal
    document.getElementById("output").innerHTML = `
    <h2>Billing Details</h2>
    <p><b>Customer:</b> ${name}</p>
    <p><b>Product:</b> ${item}</p>
    <p><b>Subtotal: </b> ₹${sub}</p>
    <p><b>GST (18%):</b> ₹${gst.toFixed(2)}</p>
    <h3>Total Amount: ₹${finalAmount.toFixed(2)}</h3>
    `;

    console.log(`Customer: ${name}`);
    console.log(`Product: ${item}`);
    console.log(`Total Bill: ₹${finalAmount.toFixed(2)}`);

}
```

---

## Output

> **Attach the program output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac2/index.html`

---

## Case Study Title

**Billing Calculator Webpage for a Shopping App using JavaScript, HTML, and CSS**

---

## Case Study Program Code

### `Prac2_shoppingweb/index.html` — Shoppers Avenue (Shopping Webpage)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Shoppers avenue</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header class="topbar">
		<h1>Shoppers avenue</h1>
		<p>Simple essentials. Clear prices. Quick bill total.</p>
		<p class="meta">ATHARV LULEKAR | PRN: 24070521036</p>
	</header>

	<main class="page">
		<section class="catalog" aria-labelledby="catalog-title">
			<h2 id="catalog-title">Products</h2>

			<article class="item">
				<img src="tshirt.svg" alt="Cotton T-shirt" class="product-image">
				<div>
					<h3>Cotton T-Shirt</h3>
					<p>Soft everyday wear</p>
				</div>
				<div class="item-actions">
					<span>₹499</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="499" class="qty-input">
					</label>
				</div>
			</article>

			<article class="item">
				<img src="sneakers.svg" alt="Casual sneakers" class="product-image">
				<div>
					<h3>Casual Sneakers</h3>
					<p>Lightweight and clean</p>
				</div>
				<div class="item-actions">
					<span>₹1299</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="1299" class="qty-input">
					</label>
				</div>
			</article>

			<article class="item">
				<img src="backpack.svg" alt="Canvas backpack" class="product-image">
				<div>
					<h3>Canvas Backpack</h3>
					<p>Useful for daily carry</p>
				</div>
				<div class="item-actions">
					<span>₹899</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="899" class="qty-input">
					</label>
				</div>
			</article>

			<article class="item">
				<img src="socks.svg" alt="Pair of socks" class="product-image">
				<div>
					<h3>Comfort Socks</h3>
					<p>Soft pair for daily use</p>
				</div>
				<div class="item-actions">
					<span>₹199</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="199" class="qty-input">
					</label>
				</div>
			</article>

			<article class="item">
				<img src="underwear.svg" alt="Underwear" class="product-image">
				<div>
					<h3>Inner Wear</h3>
					<p>Breathable everyday comfort</p>
				</div>
				<div class="item-actions">
					<span>₹349</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="349" class="qty-input">
					</label>
				</div>
			</article>

			<article class="item">
				<img src="cap.svg" alt="Cap" class="product-image">
				<div>
					<h3>Classic Cap</h3>
					<p>Simple street style</p>
				</div>
				<div class="item-actions">
					<span>₹299</span>
					<label>
						Qty
						<input type="number" min="0" value="0" data-price="299" class="qty-input">
					</label>
				</div>
			</article>
		</section>

		<aside class="bill" aria-labelledby="bill-title">
			<h2 id="bill-title">Bill Summary</h2>
			<div class="bill-row"><span>Subtotal</span><strong id="subtotal">₹0</strong></div>
			<div class="bill-row"><span>GST (18%)</span><strong id="tax">₹0</strong></div>
			<div class="bill-row total"><span>Total</span><strong id="total">₹0</strong></div>
			<button type="button" id="calculateBtn">Calculate Bill</button>
			<p class="hint">Enter quantities for any products, then calculate your bill.</p>
		</aside>
	</main>

	<footer class="footer">
		<p class="meta">ATHARV LULEKAR | PRN: 24070521036</p>
		<p>Simple shopping page built with HTML5, CSS, and JavaScript.</p>
	</footer>

	<script src="script.js"></script>
</body>
</html>
```

### `Prac2_shoppingweb/script.js`

```javascript
function formatRupees(amount) {
  return `₹${amount.toFixed(0)}`;
}

function calculateBill() {
  const quantityInputs = document.querySelectorAll('.qty-input');
  let subtotal = 0;

  quantityInputs.forEach((input) => {
    const quantity = Number(input.value) || 0;
    const price = Number(input.dataset.price) || 0;
    subtotal += quantity * price;
  });

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = formatRupees(subtotal);
  document.getElementById('tax').textContent = formatRupees(tax);
  document.getElementById('total').textContent = formatRupees(total);
}

document.getElementById('calculateBtn').addEventListener('click', calculateBill);

document.querySelectorAll('.qty-input').forEach((input) => {
  input.addEventListener('input', calculateBill);
});

calculateBill();
```

### `Prac2_shoppingweb/style.css`

```css
:root {
  color-scheme: light;
  --bg: #f4f1ea;
  --panel: #ffffff;
  --text: #1f2933;
  --muted: #667085;
  --line: #d6d1c4;
  --accent: #1f6f5b;
  --accent-dark: #175545;
  --shadow: 0 12px 30px rgba(31, 41, 51, 0.08);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #fbfaf7 0%, var(--bg) 100%);
}

.topbar,
.footer {
  text-align: center;
  padding: 24px 16px;
}

.topbar h1,
.catalog h2,
.bill h2 {
  margin: 0 0 8px;
}

.topbar p,
.hint,
.footer p,
.item p {
  color: var(--muted);
}

.meta {
  margin: 6px 0 0;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.page {
  width: min(1000px, calc(100% - 32px));
  margin: 0 auto 24px;
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 20px;
}

.catalog,
.bill {
  background: var(--panel);
  border: 1px solid rgba(214, 209, 196, 0.9);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 20px;
}

.catalog {
  display: grid;
  gap: 14px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #faf8f4;
}

.product-image {
  width: 78px;
  height: 78px;
  flex: 0 0 auto;
  object-fit: contain;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(214, 209, 196, 0.9);
  padding: 10px;
}

.item h3,
.item p {
  margin: 0;
}

.item-actions {
  display: grid;
  justify-items: end;
  gap: 8px;
  min-width: 115px;
}

.item-actions span {
  font-weight: 700;
}

label {
  display: grid;
  gap: 4px;
  font-size: 0.9rem;
}

input[type="number"] {
  width: 92px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  font: inherit;
}

.bill {
  align-self: start;
  display: grid;
  gap: 12px;
}

.bill-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.bill-row.total {
  border-bottom: 0;
  font-size: 1.08rem;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 12px 16px;
  background: var(--accent);
  color: #fff;
  font: inherit;
  cursor: pointer;
}

button:hover {
  background: var(--accent-dark);
}

@media (max-width: 760px) {
  .page {
    grid-template-columns: 1fr;
  }

  .item {
    flex-direction: column;
    align-items: flex-start;
  }

  .item-actions {
    justify-items: start;
  }

  .product-image {
    width: 70px;
    height: 70px;
  }
}
```

---

## Output

> **Attach the case study output/screenshot here.**  
> The screenshot must clearly display:
> - **Student Name:** Atharv Lulekar
> - **PRN:** 24070521036
> - **File Path:** `Prac2_shoppingweb/index.html`

---

## Result / Conclusion

The practical was completed successfully. The concepts of `var`, `let`, `const`, template literals, and destructuring were implemented. A billing calculator was developed that accepts user input, performs calculations, and displays the final bill accurately using JavaScript. A shopping app webpage (Shoppers Avenue) was also created as the case study.
