document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // MOBILE VERSION ~ SIDE BAR
  const body = document.querySelector("body");
  const sideBarBtn = document.querySelector(".side_bar_container");
  const sideBarBtn2 = document.querySelector(".side_bar_icon");
  const sideBar = document.querySelector(".side_bar_elements");
  const sideBarCloseBtn = document.querySelector(".side_bar_close");

  sideBarBtn.addEventListener("click", () => {
    body.classList.toggle("covered");
    sideBarCloseBtn.classList.toggle("active");
    sideBarBtn2.classList.toggle("disappear");
    sideBar.classList.toggle("active");
  });

  // SHOP POPUP
  const shopLink = document.querySelector(".nav-elements li:first-child");
  const popUpContainer = document.querySelector(".popup_container");
  const popup = document.querySelector(".shop_popup");
  const backBtn = popup.querySelector(".back_btn");

  popup.classList.remove("active");
  popUpContainer.classList.remove("blur");

  const poupFunction = () => {
    popup.classList.add("active");
    popUpContainer.classList.add("blur");
    backBtn.onclick = () => {
      popup.classList.remove("active");
      popUpContainer.classList.remove("blur");
    };
  };

  shopLink.onclick = () => {
    poupFunction();
  };

  // CART AMOUNT DISPLAY
  const cartAmountDisplay = document.querySelectorAll("sub.cart_amount");
  const cartAmount = JSON.parse(localStorage.getItem("CART")).length || 0;

  cartAmountDisplay.forEach((display) => {
    display.innerText = JSON.stringify(cartAmount);
  });
};
