const body = document.querySelector("body");
const proceedShopUp = document.querySelector(".proceed_dialog");
const originalShop = document.querySelector("#original_shop");
const mainSection = document.querySelector("#main-content");
const proceedPage = document.querySelector("#proceed_page");
const popUpContainer = document.querySelector(".popup_container");
proceedPage.style.display = "none";

const purchasePage = document.querySelector("#purchase_page");
purchasePage.style.display = "none";
// ORIGINAL SHOP GENERATION AND DATA

const item = document.querySelectorAll(".item");
const backBtn = proceedPage.querySelector("button");

const originalShopData = [
  {
    firstImage: `img/aynamawa-original-piece.jpeg`,
    secondImage: `img/aynamawa-original-piece_2.jpeg`,
    itemName: "Aynamawa <span>(ኣይናማዋ)</span>",
    itemPrice: "ETB 4,000",
    itemValue: "20 x 20 cm oil painting on canvas.",
    completionDate: "2023",
    itemDescription: "Self portrait.",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/the-three-maidens-original-piece.jpeg`,
    secondImage: `img/the-three-maidens-original piece_2.jpeg`,
    itemName: "The Three Maidens",
    itemPrice: "ETB 9,000",
    itemValue: "30 x 60 cm oil painting on canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/gemboye-original.jpeg`,
    secondImage: `img/gemboye-original-piece_2.jpeg`,
    itemName: "Gemboye <span>(ገምቦዬ)</span>",
    itemPrice: "ETB 2,000",
    itemValue: "20 x 20 cm drawing with a wooden finish.",
    completionDate: "2023",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/kifu-ayin-original-piece.JPEG`,
    secondImage: `img/kifu-ayin-original-piece_2.JPEG`,
    itemName: "Kifu Ayin <span>(ክፉ ዓይን)</span",
    itemPrice: "ETB 5,500",
    itemValue: "30 x 30 cm acrylic painting on canvas",
    completionDate: "2022",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/end-time-original.jpeg`,
    secondImage: `img/end-time- original_2.jpeg`,
    itemName: "End Times",
    itemPrice: "ETB 4,500",
    itemValue: "20 x 20 cm oil painting on canvas.",
    completionDate: "2021",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/the-silenced-queen-original-piece.jpeg`,
    secondImage: `img/the-silenced-queen-original piece_2.jpeg`,
    itemName: "The Silenced Queen",
    itemPrice: "ETB 7,000",
    itemValue: "40 x 30 cm oil painting on canvas",
    completionDate: "2022",
    itemAvailability: "Available",
  },
  {
    firstImage: `img/damsel-in-distress-original-piece.JPEG`,
    secondImage: `img/damsel-in-distress-original-piece_2.JPEG`,
    itemName: "Damsel In Distress",
    itemPrice: "ETB 6,000",
    itemValue: "30 x 40 cm mixed media on canvas",
    completionDate: "2023",
    itemAvailability: "Available",
  },
];

const cartArr = JSON.parse(localStorage.getItem("CART")) || [];

originalShopData.forEach((value) => {
  // FIGURE GENERATION
  const figure = document.createElement("figure");
  figure.innerHTML = `
            <ul class="item">
              <li class="first_item">
                <img oncontextmenu="return false;" draggable="false" src="${value.firstImage}" alt="image of ${value.itemName}"/>
              </li>
              <li class="second_item">
                <img oncontextmenu="return false;" draggable="false" src="${value.secondImage}" />
              </li>
            </ul>
            <figcaption>
              <ul class="item_details">
                <li style="font-weight: bolder" class="english item-name">
                  ${value.itemName}
                </li>
                <li class="availability">${value.itemAvailability}</li> 
              </ul>
            </figcaption>
  `;

  const item = figure.querySelector(".item");
  const firstItem = figure.querySelector(".first_item img");
  item.addEventListener("mouseover", () => {
    firstItem.style.opacity = "0";
    item.addEventListener("mouseout", () => {
      firstItem.style.opacity = "1";
    });
  });

  originalShop.appendChild(figure);

  // ORIGINAL SHOP ITEMS LINKAGE TO SECOND STEP OF PURCHASE

  figure.onclick = () => {
    mainSection.style.display = "none";
    proceedPage.style.display = "block";
    const figure = document.createElement("figure");
    figure.innerHTML = `
        <ul class="item">
          <li class="first_item">
            <img oncontextmenu="return false;" draggable="false" src="${value.firstImage}" alt="image of ${value.itemName}"/>
          </li>
          <li class="second_item">
            <img oncontextmenu="return false;" draggable="false" src="${value.secondImage}" />
          </li>
        </ul>
        <figcaption>
          <ul class="item_details">
            <li class="item-name">${value.itemName}</li>
            <li class="price">${value.itemPrice}</li>
            <li class="value">${value.itemValue}</li>
            <li class="date">${value.completionDate}</li>
            <li class="availability">${value.itemAvailability}</li>
            <div>
              <button class="purchase">Purchase</button>
              <button class="add_to_cart_btn">Add To Cart</button>
            </div>
          </ul>
        </figcaption>
    `;
    proceedPage.appendChild(figure);
    window.scrollTo(0, 0);
    const backBtn = proceedPage.querySelector(".back_btn");
    backBtn.onclick = () => {
      proceedPage.removeChild(figure);
      mainSection.style.display = "block";
      proceedPage.style.display = "none";
      window.scrollTo(0, 0);
    };
    // IMAGE SWITCH
    const firstItem2 = figure.querySelector(".first_item img");

    firstItem2.style.transition = "all 0.5s";
    setInterval(() => {
      firstItem2.style.opacity === "1"
        ? (firstItem2.style.opacity = "0")
        : (firstItem2.style.opacity = "1");
    }, 3000);

    // PROCEEDING TO SHOPPING CART

    const addToCartBtn = figure.querySelector(".add_to_cart_btn");

    const purchaseBtn = figure.querySelector(".purchase");

    addToCartBtn.onclick = () => {
      let itemObj = {
        itemImg: value.firstImage,
        itemName: value.itemName,
        itemValue: value.itemValue,
        itemPrice: value.itemPrice,
      };

      const nameCondition = cartArr.some((item) => {
        return item.itemName === itemObj.itemName;
      });
      if (nameCondition === false) {
        cartArr.push(itemObj);
        localStorage.setItem("CART", JSON.stringify(cartArr));
        const confirmationPopup = document.querySelector(".confirmation_popup");
        confirmationPopup.classList.add("active");
        popUpContainer.classList.add("blur");
      } else {
        alert("Item has already been added to your cart.");
        location.reload();
        return;
      }
    };
    // PROCEEDING TO PURCHASE

    purchaseBtn.onclick = () => {
      // PURCHASE PAGE CREATION
      const form = document.createElement("form");
      form.innerHTML = `
        <!-- INFORMATION FOR PURCHASE -->
        <ol>
          <div class="form_header">
            <h2 class="purchase_header">Purchase</h2>
            <span class="disclaimer"
              >Do not reload page or your progress will be lost.
            </span>
          </div>
          <section id="contact_info">
            <li class="contact_header">Contact Information</li>
            <article>
              <label for="full_name">
                <section id="full_name_input">
                  <input
                    required
                    type="text"
                    name="full_name"
                    id="full_name"
                    autocomplete="off"
                    autofocus="on"
                    placeholder="Full Name"
                  />
                </section>
              </label>
              <label for="physical_address">
                <section class="physical_address_input">
                  <input
                    required
                    type="text"
                    name="physical_address"
                    id="physical_address"
                    autocomplete="off"
                    placeholder="Physical Address"
                  />
                </section>
              </label>
              <label for="number">
                <section id="phone_input">
                  <div>+251</div>
                  <input
                    required
                    type="tel"
                    name="number"
                    id="number"
                    autocomplete="off"
                    placeholder="Phone Number"
                  />
                </section>
              </label>
              <label for="email">
                <section id="email_input">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 0.8)"
                    >
                      <path
                        d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="off"
                    placeholder="Email"
                  />
                </section>
              </label>
            </article>
          </section>
          <section id="payment_method">
            <li class="payment_header">Payment Method</li>
            <ul>
              <li>Telebirr</li>
              <li>CBE birr</li>
              <li>BOA</li>
            </ul>
          </section>
        </ol>
        <figure>
          <img
            oncontextmenu="return false;" draggable="false"
            src="${value.firstImage}"
            class="purchase_item"
            alt="image of ${value.itemName}"
          />
          <figcaption class="purchase_item_details item_details">
            <p class="purchase_item_name">${value.itemName}</p>

            <div class="divider"></div>
            <ul class="main_details">
              <ul class="charges">
                <li>Sub total:</li>
                <li>Delivery:</li>
                <li>Total:</li>
              </ul>
              <ul class="prices">
                <li class="sub_total">${value.itemPrice}</li>
                <li class="delivery_cost">ETB <span>100</span></li>
                <li class="final_price">ETB <span></span</li>
              </ul>
            </ul>
            <div class="divider"></div>
            <div class="cancel_confirm_buttons">
              <button type="button" class="cancel_btn">Cancel</button>
            </div>
          </figcaption>
        </figure>
        `;

      proceedPage.style.display = "none";
      purchasePage.appendChild(form);
      purchasePage.style.display = "block";
      let deliveryPrice = form.querySelector(".delivery_cost span").innerText;

      const purchasePrice = form.querySelector(".final_price span");

      let addedPriceCommaPos = value.itemPrice.indexOf(",");
      let addedPrice = value.itemPrice.replace(
        value.itemPrice.charAt(addedPriceCommaPos),
        ""
      );
      const addedPriceFinal = Number(addedPrice.replace("ETB", ""));

      purchasePrice.innerText += addedPriceFinal + Number(deliveryPrice);

      // PAYMENT POPUP
      const paymentPage = document.querySelector(".payment_page");
      const paymentMethods = form.querySelectorAll("#payment_method ul li");
      paymentMethods.forEach((btn) => {
        btn.onclick = () => {
          const bank =
            btn.innerText === "CBE"
              ? "Commercial Bank Of Ethiopia"
              : btn.innerText === "Telebirr"
              ? "Ethio Telecom"
              : btn.innerText === "BOA"
              ? "Bank Of Abisynia"
              : "Commercial Bank Of Ethiopia";
          const section = document.createElement("section");
          section.innerHTML = `
            <article>
              <header>
                <h3>${btn.innerText}</h3>
                <span>${bank}</span>
              </header>
              <ol class="steps">
                <li>Open the CBE birr app and enter your pin</li>
                <li>Click the transfer button</li>
                <li>On the bank No field enter: 100010121318</li>
                <li>On the Amount field enter: br 5,000</li>
                <li>Click Confirm</li>
                <li>Take a Screenshot of the transaction.</li>
                <li>Click the "Add Image" button to your right</li>
                <li>Choose the Screenshot you just took</li>
              </ol>
            </article>
            <section class="screenshot_container">
              <div class="screenshot"></div>
              <button>Add Image</button>
            </section>
          `;
          paymentPage.appendChild(section);
          section.id = "payment_section";
          purchasePage.style.display = "none";
        };
      });

      const cancelBtn = form.querySelector(".cancel_btn");
      cancelBtn.onclick = () => {
        location.reload();
        window.scrollTo(0, 0);
      };
      window.scrollTo(0, 0);
    };
  };
});
