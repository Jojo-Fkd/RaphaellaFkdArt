window.scrollTo(0, 0);

let cartArr = JSON.parse(localStorage.getItem("CART")) || [];

let checkOutArr = JSON.parse(localStorage.getItem("checkOutArr"));

const emptyCondition = document.querySelector(".empty_condition");

const shoppingCart = document.querySelector(".shopping-cart");

const shoppingCartContainer = document.querySelector(".shopping-cart section");

const checkOutTotal = document.querySelector(".checkout_total");

const checkOutPriceContainer = document.querySelector(".checkout_price span");

let checkOutPrice = Number(
  document.querySelector(".checkout_price span").textContent
);

const pageState = () => {
  let length = shoppingCartContainer.children.length;
  if (length === 0) {
    emptyCondition.style.display = "flex";
    checkOutTotal.style.display = "none";
  } else if (length > 0) {
    emptyCondition.style.display = "none";
    checkOutTotal.style.display = "flex";
  }
};

for (let i = 0; i < cartArr.length; i++) {
  let obj = cartArr[i];

  const figure = document.createElement("figure");
  figure.innerHTML = `
        <img oncontextmenu="return false;" draggable="false" src="${obj.itemImg}" alt="image of ${obj.itemName}" />
        <figcaption>
            <ul>
              <li class="cartItem-name">${obj.itemName}</li>
              <li class="cartItem-description">
                ${obj.itemValue}, ${obj.itemAmount}
              </li>
            </ul>
            <ul>
              <li class="cartItem-price">${obj.itemPrice}</li>
              <li class="delete_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                >
                <path 
                fill="var(--BTNCOLOR)"
                d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                />
              </li>
            </ul>
        </figcaption>
  `;

  if (obj.itemAmount === undefined) {
    figure.querySelector(
      "figcaption ul li.cartItem-description"
    ).innerHTML = `${obj.itemValue}`;
  }

  shoppingCartContainer.appendChild(figure);
  const cancelBtn = figure.querySelector(".delete_btn");
  cancelBtn.onclick = () => {
    cartArr.splice(i, 1);
    localStorage.setItem("CART", JSON.stringify(cartArr));
    scrollTo(0, 0);
    location.reload();
  };

  let addedPriceCommaPos = obj.itemPrice.indexOf(",");
  let addedPrice = obj.itemPrice.replace(
    obj.itemPrice.charAt(addedPriceCommaPos),
    ""
  );
  const addedPriceFinal = Number(addedPrice.replace("ETB", ""));
  checkOutPrice += addedPriceFinal;

  checkOutPriceContainer.innerText = Number(checkOutPrice);
  pageState();
}

pageState();
