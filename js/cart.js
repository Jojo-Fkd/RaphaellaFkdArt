window.scrollTo(0, 0);

let cartArr = JSON.parse(localStorage.getItem("CART")) || [];

let checkOutArr = JSON.parse(localStorage.getItem("checkOutArr"));

const emptyCondition = document.querySelector(".empty_condition");

const shoppingCart = document.querySelector(".shopping-cart");

const shoppingCartContainer = document.querySelector(".shopping-cart section");

const checkOutTotal = document.querySelector(".checkout_total");

const checkOutPriceContainer = document.querySelector(".checkout_price span");

const checkOutBtn = document.querySelector(".checkout_btn");

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
                ${obj.itemValue}
              </li>
            </ul>
            <ul>
              <li class="cartItem-price">${obj.itemPrice}</li>
              <li class="delete_btn">
                <span></span>
              </li>
            </ul>
        </figcaption>
  `;

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

  /* checkOutBtn.onclick = () => {
    const checkOutObj = {
      checkOutImg: obj.itemImg,
      checkOutName: obj.itemName,
      checkOutTotal: Number(checkOutPrice),
    };
    let nameCondition = checkOutArr.some((item) => {
      return item.checkOutName === checkOutObj.checkOutName;
    });
    if (nameCondition === false) {
      checkOutArr.push(checkOutObj);
      localStorage.setItem("checkOutArr", JSON.stringify(checkOutArr));
    }
  }; */
}

/* EMPTY CONDITION BUTTON TO SHOP LINKAGE */

const popUpContainer = document.querySelector(".popup_container");
const popup = document.querySelector(".shop_popup");
const backBtn = popup.querySelector(".back_btn");

const goShoppingBtn = document.querySelector(".empty_condition button");

goShoppingBtn.onclick = () => {
  popup.classList.add("active");
  popUpContainer.classList.add("blur");
  backBtn.onclick = () => {
    popup.classList.remove("active");
    popUpContainer.classList.remove("blur");
  };
};

pageState();
