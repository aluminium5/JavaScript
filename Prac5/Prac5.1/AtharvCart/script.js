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

// wire buttons
const addBtn = document.getElementById('addBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
if (addBtn) addBtn.addEventListener('click', addItem);
if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

render();
