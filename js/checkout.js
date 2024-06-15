const body = document.querySelector("body");

// CLIENT DECIDED TO CHECKOUT

let cartArr = JSON.parse(localStorage.getItem("CART")) || [];
let totalPrice = 0;

for (let i = 0; i < cartArr.length; i++) {
  let obj = cartArr[i];
  const checkOutItemsContainer = document.querySelector(".checkout-items");
  const figure = document.createElement("figure");
  figure.innerHTML = `
            <img src="${obj.itemImg}" alt="image of ${obj.itemName}" />
            <figcaption>
              <ul>
                <li class="item-name">${obj.itemName}</li>
                <li class="item-description">${obj.itemValue}, ${obj.itemAmount}</li>
              </ul>           
              <p class="price">${obj.itemPrice}</p>
            </figcaption>
  `;

  if (obj.itemAmount === undefined) {
    figure.querySelector(
      "figcaption ul li.item-description"
    ).innerHTML = `${obj.itemValue}`;
  }

  checkOutItemsContainer.append(figure);

  let addedPriceCommaPos = obj.itemPrice.indexOf(",");
  let addedPrice = obj.itemPrice.replace(
    obj.itemPrice.charAt(addedPriceCommaPos),
    ""
  );
  const addedPriceFinal = Number(addedPrice.replace("ETB", ""));
  totalPrice += addedPriceFinal;
}

// CLIENT CHOOSES PAYMENT METHOD

const options = document.querySelectorAll(".options label input");
const paymentMethods = document.querySelectorAll(".payment-information");

options.forEach((option) => {
  option.onclick = () => {
    const chosenMethod = option.nextElementSibling.innerText;
    if (chosenMethod === "CBE") {
      paymentMethods.forEach((method) => {
        if (method.id === "CBE-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    } else if (chosenMethod === "Telebirr") {
      paymentMethods.forEach((method) => {
        if (method.id === "Telebirr-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    } else if (chosenMethod === "BOA") {
      paymentMethods.forEach((method) => {
        if (method.id === "BOA-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    }
  };
});

// CLIENT WANTS TO SEE THE PREVIEW OF THEIR CHECKOUT

const previewBtn = document.querySelector("#preview-btn");
const previewPopup = document.querySelector(".preview-popup");

previewBtn.onclick = () => {
  previewPopup.classList.add("preview");
  body.style.overflow = "hidden";
  previewPopup.querySelector(".preview-card button").onclick = () => {
    previewPopup.classList.remove("preview");
    body.style.overflow = "auto";
  };
};

const form = document.querySelector("main");
const inputs = form.querySelectorAll("input.main-input");
let fullName;
let email;
let phoneNum;
let pickUp;
let payment;

inputs.forEach((input) => {
  if (
    (input.type === "radio" && input.id === "point-1") ||
    input.id === "point-2"
  ) {
    if (input.checked === true) {
      pickUp = input.nextElementSibling.textContent;
    }
  } else if (
    (input.type === "radio" && input.id === "cbe") ||
    input.id === "boa" ||
    input.id === "telebirr"
  ) {
    if (input.checked === true) {
      payment = input.nextElementSibling.textContent;
    }
  }
  input.addEventListener("input", () => {
    if (input.id === "name") {
      fullName = input.value === "" ? "Not found" : input.value;
    } else if (input.id === "email") {
      email = input.value === "" ? "Not found" : input.value;
    } else if (input.id === "phone-num") {
      phoneNum = input.value === "" ? "Not found" : input.value;
    } else if (input.id === "point-1") {
      pickUp = "4 Kilo";
    } else if (input.id === "point-2") {
      pickUp = "Ayat Zone 3";
    } else if (input.id === "cbe") {
      payment = "CBE";
    } else if (input.id === "boa") {
      payment = "BOA";
    } else if (input.id === "telebirr") {
      payment = "Telebirr";
    }
    const previewContent = previewPopup.querySelector(
      ".preview-card .preview-content"
    );
    previewContent.innerHTML = `
          <label for="name">
            <span class="input-label">Full Name:</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="${fullName}"
              disabled
            />
          </label>
          <label for="email">
            <span class="input-label">Email Address:</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="${email}"
              disabled
            />
          </label>
          <label for="phone-num">
            <span class="input-label">Phone Number:</span>
            <div>
              <p>+251</p>
              <input
                type="tel"
                id="phone-num"
                name="phone-num"
                placeholder="${phoneNum}"
                disabled
              />
            </div>
          </label>
          <article class="delivery-preview">
            <p>Pick up point: <span>${pickUp}</span></p>
          </article>
          <article class="payment-preview">
            <p>Payment Method: <span>${payment}</span></p>
          </article>
          <article class="total-preview">
            <p>Total: <span></span></p>
          </article>
      `;
    previewContent.querySelector(
      ".total-preview span"
    ).innerText = `ETB ${totalPrice}`;
  });
});
