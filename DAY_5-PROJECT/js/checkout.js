protectPage();

function pay() {
  alert("Payment Successful 🎉");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
