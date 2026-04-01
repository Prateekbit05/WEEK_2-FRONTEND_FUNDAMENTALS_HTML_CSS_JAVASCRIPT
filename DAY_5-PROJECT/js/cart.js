let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cartCount");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = cart.reduce((a,c)=>a+c.qty,0);
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
}

saveCart();
