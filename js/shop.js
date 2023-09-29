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
    itemAvailability: "Sold",
  },
  {
    firstImage: `img/the-three-maidens-original-piece.jpeg`,
    secondImage: `img/the-three-maidens-original piece_2.jpeg`,
    itemName: "The Three Maidens",
    itemPrice: "ETB 9,000",
    itemValue: "30 x 60 cm oil painting on canvas.",
    completionDate: "2023",
    itemAvailability: "Sold",
  },
  {
    firstImage: `img/gemboye-original.jpeg`,
    secondImage: `img/gemboye-original-piece_2.jpeg`,
    itemName: "Gemboye <span>(ገምቦዬ)</span>",
    itemPrice: "ETB 2,000",
    itemValue: "20 x 20 cm drawing with a wooden finish.",
    completionDate: "2023",
    itemAvailability: "Sold",
  },
  {
    firstImage: `img/kifu-ayin-original-piece.JPEG`,
    secondImage: `img/kifu-ayin-original-piece_2.JPEG`,
    itemName: "Kifu Ayin <span>(ክፉ ዓይን)</span",
    itemPrice: "ETB 5,500",
    itemValue: "30 x 30 cm acrylic painting on canvas",
    completionDate: "2022",
    itemAvailability: "Sold",
  },
  {
    firstImage: `img/end-time-original.jpeg`,
    secondImage: `img/end-time- original_2.jpeg`,
    itemName: "End Times",
    itemPrice: "ETB 4,500",
    itemValue: "20 x 20 cm oil painting on canvas.",
    completionDate: "2021",
    itemAvailability: "Sold",
  },
  {
    firstImage: `img/the-silenced-queen-original-piece.jpeg`,
    secondImage: `img/the-silenced-queen-original piece_2.jpeg`,
    itemName: "The Silenced Queen",
    itemPrice: "ETB 7,000",
    itemValue: "40 x 30 cm oil painting on canvas",
    completionDate: "2022",
    itemAvailability: "Sold",
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

const soldOutStatus = originalShopData.every((item) => {
  return (
    item.itemAvailability === "Sold" || item.itemAvailability === "Unavailable"
  );
});

if (soldOutStatus === true) {
  const soldOutH4 = document.querySelector("#main-content header h4");
  soldOutH4.style.display = "grid";
}

originalShopData.forEach((value) => {
  window.scrollTo(0, 0);
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
    if (value.itemAvailability === "Sold") {
      const figcaptionDiv = figure.querySelector("figcaption ul div");
      figcaptionDiv.style.display = "none";
    }
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
    const purchaseImg = purchasePage.querySelector("figure img");
    purchaseImg.src = value.firstImage;
    const purchaseName = purchasePage.querySelector(
      "figure figcaption .purchase_item_name"
    );
    purchaseName.innerHTML = value.itemName;
    const subTotal = purchasePage.querySelector(".sub_total");
    subTotal.innerText = value.itemPrice;
    let deliveryPrice = purchasePage.querySelector(
      ".delivery_cost span"
    ).innerText;

    const purchasePrice = purchasePage.querySelector(".total span");

    let addedPriceCommaPos = value.itemPrice.indexOf(",");
    let addedPrice = value.itemPrice.replace(
      value.itemPrice.charAt(addedPriceCommaPos),
      ""
    );
    const addedPriceFinal = Number(addedPrice.replace("ETB", ""));

    purchasePrice.innerText = addedPriceFinal + Number(deliveryPrice);
    // PROCEEDING TO PURCHASE

    purchaseBtn.onclick = () => {
      proceedPage.style.display = "none";
      purchasePage.style.display = "block";

      // PAYMENT PAGE
      const paymentChoices =
        purchasePage.querySelectorAll("#payment_method li");
      const section = document.querySelector(".payment_page #payment_section");
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
                <li>Reason: Original Piece (${value.itemName}) purchase.</li>
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
          const form = document.querySelector("#purchase_page form");
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            let params = {
              from_name: form.querySelector("#full_name").value,
              from_address: form.querySelector("#physical_address").value,
              from_number: `+251${form.querySelector("#number").value}`,
              from_email: form.querySelector("#email").value,
              from_item: value.itemName,
              from_price: value.itemPrice,
              from_method: btn.innerText,
            };
            emailjs
              .send("service_b6cs0jg", "template_fj566gr", params)
              .then(() => {
                popUpContainer.classList.add("blur");
                const paymentPopup =
                  popUpContainer.querySelector(".payment_popup");
                paymentPopup.classList.add("active");
                const okBtn = paymentPopup.querySelector("ul li");
                okBtn.onclick = () => {
                  location.reload();
                };
              });
          });
        };
      });

      const cancelBtn = purchasePage.querySelector(".cancel_btn");
      cancelBtn.onclick = () => {
        location.reload();
        window.scrollTo(0, 0);
      };
      window.scrollTo(0, 0);
    };
  };
});
