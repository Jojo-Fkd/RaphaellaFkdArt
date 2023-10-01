const body = document.querySelector("body");

const purchaseItem = JSON.parse(localStorage.getItem("purchaseItem"));

const purchasePage = document.querySelector("#purchase_page");

const purchaseImg = purchasePage.querySelector("figure img");
purchaseImg.src = purchaseItem.itemImg;
const purchaseName = purchasePage.querySelector(
  "figure figcaption .purchase_item_name"
);
purchaseName.innerHTML = purchaseItem.itemName;
const subTotal = purchasePage.querySelector(".sub_total");
subTotal.innerText = purchaseItem.itemPrice;
let deliveryPrice = purchasePage.querySelector(".delivery_cost span").innerText;

const purchasePrice = purchasePage.querySelector(".total span");

let addedPriceCommaPos = purchaseItem.itemPrice.indexOf(",");
let addedPrice = purchaseItem.itemPrice.replace(
  purchaseItem.itemPrice.charAt(addedPriceCommaPos),
  ""
);
const addedPriceFinal = Number(addedPrice.replace("ETB", ""));

purchasePrice.innerText = addedPriceFinal + Number(deliveryPrice);
const section = document.querySelector(".payment_page #payment_section");

const paymentRendering = (btn) => {
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
      ? "Bank Of Abyssinia"
      : "";

  section.innerHTML = `
            <article>
              <header>
                <h3>${btn.innerText}</h3>
                <span>${bank}</span>
              </header>
              <ul>
                <li class="indetification">My Indentification: ${bankNo}</li>
                <li>Total Amount: ${JSON.stringify(
                  addedPriceFinal + Number(deliveryPrice)
                )}</li>
                <li>Reason: Original Piece (${
                  purchaseItem.itemName
                }) purchase.</li>
              </ul>
              <ol class="steps">
                <li>
                  Make the transaction in the ${btn.innerText} app.
                </li>
                <li>When the transaction is successful, click Done.</li>
              </ol>
              <section>
                <button type="button"><a href="#">Back</a></button>
                <button type="submit" id="done">Done</button>
              </section>
            </article>
          `;
  const backBtn = section.querySelector("article section button:first-child");
  backBtn.onclick = () => {};
  const form = document.querySelector("#purchase_page form");
  const popUpContainer = document.querySelector(".popup_container");
  const loading = document.querySelector(".loading");
  body.classList.add("covered");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let params = {
      from_name: form.querySelector("#full_name").value,
      from_address: form.querySelector("#physical_address").value,
      from_number: `+251${form.querySelector("#number").value}`,
      from_email: form.querySelector("#email").value,
      from_item: purchaseItem.itemName,
      from_price: `${purchaseItem.itemPrice}`,
      from_method: btn.innerText,
    };
    popUpContainer.classList.add("blur");
    loading.classList.add("activated");
    emailjs
      .send("service_b6cs0jg", "template_fj566gr", params)
      .then(() => {
        loading.classList.remove("activated");
        const paymentPopup = popUpContainer.querySelector(".payment_popup");
        paymentPopup.classList.add("active");
        const okBtn = paymentPopup.querySelector("ul li");
        okBtn.onclick = () => {
          window.close();
        };
      })
      .catch(() => {
        popUpContainer.classList.add("blur");
        const failedPaymentPopup = popUpContainer.querySelector(
          ".failed_payment_popup"
        );
        failedPaymentPopup.classList.add("active");
        const okBtn = failedPaymentPopup.querySelector("ul li");
        okBtn.onclick = () => {
          location.reload();
        };
      });
  });
};

// CHECK INPUT TO PROCEED

const checkBox = document.querySelector("#enabler_check label article");
const checkedIcon = document.querySelector("#enabler_check label img");

checkBox.onclick = () => {
  checkedIcon.classList.toggle("checkedIcon");

  // PAYMENT PAGE
  const paymentChoices = purchasePage.querySelectorAll("#payment_method li");

  paymentChoices.forEach((btn) => {
    btn.innerHTML = `
      <a href="#payment_section">${btn.innerText}</a>
    `;
    btn.onclick = () => {
      paymentRendering(btn);
    };
  });
};

const cancelBtn = purchasePage.querySelector(".cancel_btn");
cancelBtn.onclick = () => {
  window.close();
};
