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