const body = document.querySelector("body");

const checkOutPage = document.querySelector("#checkout_page");

let cartArr = JSON.parse(localStorage.getItem("CART")) || [];

/* CHECKOUT PAGE JS */
const checkOutNames = [];
const section = document.querySelector(".payment_page #payment_section");

const paymentRendering = (i, btn, checkOut) => {
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
                <li>Total Amount: ${JSON.stringify(checkOut)}</li>
                <li class="transaction_reason">Reason: <span></span>.</li>
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
    const reason = section.querySelector(".transaction_reason span");
    reason.innerText =
      i === 1
        ? "Original Piece Purchase"
        : i >= 2
        ? "Multiple Original Pieces Purchase"
        : "Original Piece Purchase";
    const form = document.querySelector("#checkout_page form");
    const popUpContainer = document.querySelector(".popup_container");
    const loading = document.querySelector(".loading");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let params = {
        from_name: form.querySelector("#full_name").value,
        from_address: form.querySelector("#physical_address").value,
        from_number: `+251${form.querySelector("#number").value}`,
        from_email: form.querySelector("#email").value,
        from_item: JSON.stringify(checkOutNames),
        from_price: `$ETB ${checkOut}`,
        from_method: btn.innerText,
      };
      popUpContainer.classList.add("blur");
      body.classList.add("covered");
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
          alert("Purchase Failed, Try Again");
          window.close();
        });
      localStorage.clear();
    });
  };
};

let checkOut = 0;

for (let i = 0; i < cartArr.length; i++) {
  const obj = cartArr[i];
  let addedPriceCommaPos = obj.itemPrice.indexOf(",");
  let addedPrice = obj.itemPrice.replace(
    obj.itemPrice.charAt(addedPriceCommaPos),
    ""
  );
  const addedPriceFinal = Number(addedPrice.replace("ETB", ""));

  checkOut += addedPriceFinal;

  const checkOutImageContainer = document.querySelector(".checkout_images");

  const checkOutNameContainer = document.querySelector(".name_collection");

  const checkOutTotalPrice = document.querySelector(
    ".checkout_item_details .main_details .prices li:first-child span"
  );

  let deliveryCost = document.querySelector(".delivery_cost span");
  deliveryCost = Number(deliveryCost.textContent);

  const checkoutFinalPrice = document.querySelector(".total span");

  const imgLi = document.createElement("li");

  imgLi.innerHTML = `
    <img oncontextmenu="return false;" draggable="false" alt="image of ${obj.itemImg}" src="${obj.itemImg}" />
  `;
  checkOutImageContainer.appendChild(imgLi);

  const nameLi = document.createElement("li");

  nameLi.innerHTML = `${obj.itemName}`;
  nameLi.className = "checkout_item_name";

  checkOutNameContainer.appendChild(nameLi);

  checkOutNames.push(obj.itemName);

  checkOutTotalPrice.innerText = checkOut;

  checkoutFinalPrice.innerText = checkOut + deliveryCost;

  const paymentChoices = checkOutPage.querySelectorAll("#payment_method li");

  // CHECK INPUT TO PROCEED

  const checkBox = document.querySelector("#enabler_check label article");
  const checkedIcon = document.querySelector("#enabler_check label img");

  checkBox.onclick = () => {
    checkedIcon.classList.toggle("checkedIcon");

    paymentChoices.forEach((btn) => {
      btn.addEventListener(
        "click",
        paymentRendering(cartArr.length, btn, checkOut)
      );
      btn.innerHTML = `
      <a href="#payment_section">${btn.innerText}</a>
    `;
    });
  };
  const cancelBtn = document.querySelector(".cancel_btn");
  cancelBtn.onclick = () => {
    window.close();
  };
}
