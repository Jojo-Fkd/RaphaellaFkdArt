window.scrollTo(0, 0);

const cartArr = JSON.parse(localStorage.getItem("CART")) || [];

const emptyCondition = document.querySelector(".empty_condition");

const shoppingCart = document.querySelector(".shopping-cart");

const shoppingCartContainer = document.querySelector(".shopping-cart section");

const checkOutTotal = document.querySelector(".checkout_total");

const checkOutPriceContainer = document.querySelector(".checkout_price span");

const checkOutBtn = document.querySelector(".checkout_btn");

const checkOutPage = document.querySelector("#checkout_page");
checkOutPage.style.display = "none";

let checkOutPrice = Number(
  document.querySelector(".checkout_price span").textContent
);

const pageState = () => {
  let length = shoppingCartContainer.children.length;
  if (length === 0) {
    emptyCondition.style.display = "flex";
    checkOutPage.style.display = "none";
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

  /* CHECKOUT PAGE JS */

  const checkOutImageContainer = document.querySelector(".checkout_images");

  const checkOutNameContainer = document.querySelector(".name_collection");

  const checkOutTotalPrice = document.querySelector(
    ".checkout_item_details .main_details .prices li:first-child span"
  );

  const li = document.createElement("li");

  li.innerHTML = `
    <img oncontextmenu="return false;" draggable="false" alt="image of ${obj.itemImg}" src="${obj.itemImg}" />
  `;
  checkOutImageContainer.appendChild(li);

  const li2 = document.createElement("li");

  li2.innerHTML = `${obj.itemName}`;
  li2.className = ".checkout_item_name";
  checkOutNameContainer.appendChild(li2);

  checkOutTotalPrice.innerText = Number(checkOutPrice);

  const checkoutFinalPrice = document.querySelector(".total span");

  let deliveryCost = document.querySelector(".delivery_cost span");
  deliveryCost = Number(deliveryCost.textContent);

  checkoutFinalPrice.innerText = Number(checkOutPrice) + deliveryCost;

  checkOutBtn.onclick = () => {
    window.scrollTo(0, 0);
    shoppingCart.style.display = "none";
    checkOutPage.style.display = "block";
    const paymentPage = document.querySelector(".payment_page");
    const paymentChoices = checkOutPage.querySelectorAll("#payment_method li");
    paymentChoices.forEach((btn) => {
      btn.onclick = () => {
        // IDENTIFICATION
        const bankNo =
          btn.innerText === "CBE birr"
            ? "100043158608"
            : btn.innerText === "Telebirr"
            ? `<span>+251</span> 960420004`
            : btn.innerText === "BOA"
            ? "112367179"
            : "";
        // PAYMENT METHODS
        const bank =
          btn.innerText === "CBE birr"
            ? "Commercial Bank Of Ethiopia"
            : btn.innerText === "Telebirr"
            ? "Ethio Telecom"
            : btn.innerText === "BOA"
            ? "Bank Of Abisynia"
            : "";

        const section = document.createElement("section");
        section.innerHTML = `
            <article>
              <header>
                <h3>${btn.innerText}</h3>
                <span>${bank}</span>
              </header>
              <ul>
                <li class="indetification">My Indentification: ${bankNo}</li>
                <li>Total Amount: ${JSON.stringify(
                  Number(checkOutPrice) + deliveryCost
                )}</li>
              </ul>
              <ol class="steps">
                <li>Take a Screenshot of the transaction.</li>
                <li>Click the "Add Image" button to your right.</li>
                <li>Choose the Screenshot you just took.</li>
              </ol>
            </article>
           <section class="screenshot_container">
              <img class="screenshot">
              <label for="input-file">Add Image</label>
              <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" />
            </section>
          `;
        paymentPage.appendChild(section);
        section.id = "payment_section";
        let screenShot = section.querySelector(".screenshot");
        let inputFile = section.querySelector("#input-file");

        inputFile.onchange = () => {
          screenShot.src = URL.createObjectURL(inputFile.files[0]);
        };
        checkOutPage.style.display = "none";
      };
    });
    const cancelBtn = document.querySelector(".cancel_btn");
    cancelBtn.onclick = () => {
      window.scrollTo(0, 0);
      shoppingCart.style.display = "block";
      checkOutPage.style.display = "none";
    };
  };
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
