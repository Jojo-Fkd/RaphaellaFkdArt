const checkOutPage = document.querySelector("#checkout_page");
const checkOutArr = JSON.parse(localStorage.getItem("checkOutArr"));
/* CHECKOUT PAGE JS */
const checkOutNames = [];
const section = document.querySelector(".payment_page #payment_section");

const paymentRendering = (obj, btn) => {
  let deliveryCost = document.querySelector(".delivery_cost span");
  deliveryCost = Number(deliveryCost.textContent);

  const checkoutFinalPrice = document.querySelector(".total span");

  checkoutFinalPrice.innerText = Number(obj.checkOutTotal) + deliveryCost;

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
                <li>Total Amount: ${JSON.stringify(
                  Number(obj.checkOutTotal) + deliveryCost
                )}</li>
                <li>Reason: Multiple Original Pieces purchase.</li>
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
    const form = document.querySelector("#checkout_page form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let params = {
        from_name: form.querySelector("#full_name").value,
        from_address: form.querySelector("#physical_address").value,
        from_number: `+251${form.querySelector("#number").value}`,
        from_email: form.querySelector("#email").value,
        from_item: JSON.stringify(checkOutNames),
        from_price: Number(obj.checkOutTotal) + deliveryCost,
        from_method: btn.innerText,
      };
      emailjs.send("service_b6cs0jg", "template_fj566gr", params).then(() => {
        const popUpContainer = document.querySelector(".popup_container");
        popUpContainer.classList.add("blur");
        const paymentPopup = popUpContainer.querySelector(".payment_popup");
        paymentPopup.classList.add("active");
        const okBtn = paymentPopup.querySelector("ul li");
        okBtn.onclick = () => {
          window.close();
        };
      });
    });
  };
};
for (let i = 0; i < checkOutArr.length; i++) {
  const obj = checkOutArr[i];
  const checkOutImageContainer = document.querySelector(".checkout_images");

  const checkOutNameContainer = document.querySelector(".name_collection");

  const checkOutTotalPrice = document.querySelector(
    ".checkout_item_details .main_details .prices li:first-child span"
  );

  const imgLi = document.createElement("li");

  imgLi.innerHTML = `
    <img oncontextmenu="return false;" draggable="false" alt="image of ${obj.checkOutImg}" src="${obj.checkOutImg}" />
  `;
  checkOutImageContainer.appendChild(imgLi);

  const nameLi = document.createElement("li");

  nameLi.innerHTML = `${obj.checkOutName}`;
  nameLi.className = "checkout_item_name";

  checkOutNameContainer.appendChild(nameLi);

  checkOutNames.push(obj.checkOutName);

  checkOutTotalPrice.innerText = Number(obj.checkOutTotal);

  const paymentChoices = checkOutPage.querySelectorAll("#payment_method li");

  // CHECK INPUT TO PROCEED

  const checkBox = document.querySelector("#enabler_check label article");
  const checkedIcon = document.querySelector("#enabler_check label img");

  checkBox.onclick = () => {
    checkedIcon.classList.toggle("checkedIcon");

    paymentChoices.forEach((btn) => {
      btn.addEventListener("click", paymentRendering(obj, btn));
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
