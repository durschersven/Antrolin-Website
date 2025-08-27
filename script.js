/* Antrolin Website JS */

// Add product to cart
function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} wurde dem Warenkorb hinzugefügt.`);
}

// Remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Load cart items and update table
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const tbody = document.getElementById('cart-table-body');
  const subtotalEl = document.getElementById('cart-subtotal');
  if (!tbody || !subtotalEl) return;
  tbody.innerHTML = '';
  let subtotal = 0;
  cart.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `\n      <td>${item.name}</td>\n      <td>${item.quantity}</td>\n      <td>CHF ${item.price.toFixed(2)}</td>\n      <td>CHF ${(item.price * item.quantity).toFixed(2)}</td>\n      <td><button onclick="removeFromCart(${index})">Entfernen</button></td>\n    `;
    tbody.appendChild(tr);
    subtotal += item.price * item.quantity;
  });
  subtotalEl.textContent = `CHF ${subtotal.toFixed(2)}`;
}

// Checkout function - redirect to Shopify checkout or show message
function checkout() {
  // Replace the URL below with your actual Shopify checkout link or cart URL
  window.location.href = 'https://6ciira-iw.myshopify.com/cart';
}

// Automatically load cart on cart page
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-page')) {
      loadCart();
    }
  });
}
