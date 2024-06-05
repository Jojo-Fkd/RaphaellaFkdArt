// CART AMOUNT DISPLAY
const cartAmountDisplay = document.querySelectorAll("sub.cart_amount");
const cart = JSON.parse(localStorage.getItem("CART"));

const cartAmount = cart
  ? JSON.stringify(cart.length)
  : cart === null
  ? "0"
  : "0";

cartAmountDisplay.forEach((display) => {
  display.innerText = cartAmount;
});
