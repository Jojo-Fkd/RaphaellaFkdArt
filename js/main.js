const body = document.querySelector("body");

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

// MOBILE DROP ICON ACTIVATION

const dropIcon = document.querySelector("li.drop-icon");
const sideBarElements = document.querySelector(".side-bar-elements");

dropIcon.onclick = () => {
  dropIcon.classList.toggle("active");
  sideBarElements.classList.toggle("active");
  body.classList.toggle("covered");
};
