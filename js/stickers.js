const stickersShop = document.querySelector("#stickers");

const stickerShopData = [
  {
    firstImage: `sticker-images/sticker-1-display.JPEG`,
    secondImage: `sticker-images/sticker-1.JPG`,
    itemName: "Untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 17,
  },
  {
    firstImage: `sticker-images/sticker-2-display.JPEG`,
    secondImage: `sticker-images/sticker-2.JPG`,
    itemName: "Untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 18,
  },
  {
    firstImage: `sticker-images/sticker-3-display.JPEG`,
    secondImage: `sticker-images/sticker-3.JPG`,
    itemName: "Untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 19,
  },
  {
    firstImage: `sticker-images/sticker-4-display.JPEG`,
    secondImage: `sticker-images/sticker-4.JPG`,
    itemName: "Eye bouquet in a vase",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 20,
  },
  {
    firstImage: `sticker-images/sticker-5-display.JPEG`,
    secondImage: `sticker-images/sticker-5.JPG`,
    itemName: "Preety eyes",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 21,
  },
  {
    firstImage: `sticker-images/sticker-7-display.JPEG`,
    secondImage: `sticker-images/sticker-7.JPG`,
    itemName: "yin",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 22,
  },
  {
    firstImage: `sticker-images/sticker-6-display.JPEG`,
    secondImage: `sticker-images/sticker-6.JPG`,
    itemName: "yang",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 23,
  },
  {
    firstImage: `sticker-images/sticker-8-display.JPEG`,
    secondImage: `sticker-images/sticker-8.JPG`,
    itemName: "untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 24,
  },
  {
    firstImage: `sticker-images/sticker-9-display.JPEG`,
    secondImage: `sticker-images/sticker-9.JPG`,
    itemName: "untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 25,
  },
  {
    firstImage: `sticker-images/sticker-10-display.JPEG`,
    secondImage: `sticker-images/sticker-10.JPG`,
    itemName: "untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 26,
  },
  {
    firstImage: `sticker-images/sticker-11-display.JPEG`,
    secondImage: `sticker-images/sticker-11.JPG`,
    itemName: "Blossom",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 27,
  },
  {
    firstImage: `sticker-images/sticker-12-display.JPEG`,
    secondImage: `sticker-images/sticker-12.JPG`,
    itemName: "Untitled",
    itemPrice: ["ETB 75", "ETB 90"],
    itemSize: "small / large",
    itemValue: "",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 28,
  },
];

stickerShopData.forEach((value) => {
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

  stickersShop.appendChild(figure);

  // PROCEED

  const proceedPage = document.querySelector("#proceed_page");
  const cartArr = JSON.parse(localStorage.getItem("CART")) || [];

  figure.onclick = () => {
    proceedPage.classList.add("active");
    const figure = proceedPage.querySelector("figure");
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
            <li class="price">${value.itemPrice[0]}</li>
            <label class="size" for="small">
              <input type="radio" id="small" name="size" checked></input>
              <span class="input-label">Small</span>
            </label>
            <label class="size" for="large">
              <input type="radio" id="large" name="size"></input>
              <span class="input-label">Large</span>
            </label>
            <label for="amount">
              <input type="number" min="1" placeholder="1" id="amount" name="amount" />
            </label>
            <li class="date">${value.completionDate}</li>
            <li class="availability">${value.itemAvailability}</li>
            <div>
              <button class="add_to_cart_btn">Add To Cart</button>
            </div>
          </ul>
        </figcaption>
    `;

    figure.classList.add("active");

    proceedPage.querySelector(".close-btn").onclick = () => {
      proceedPage.classList.remove("active");
      figure.classList.remove("active");
    };

    const itemRadios = figure.querySelectorAll(
      ".item_details label.size input"
    );
    const numInput = figure.querySelector(
      "figcaption .item_details label input[type='number']"
    );

    numInput.addEventListener("input", (event) => {
      const amount = event.target.value;
      const priceDisplay = figure.querySelector(
        "figcaption .item_details .price"
      );
      itemRadios.forEach((radio) => {
        let price;
        if (radio.checked) {
          if (radio.id === "small") {
            price = 75;
          } else if (radio.id === "large") {
            price = 90;
          }
        } else {
          return;
        }
        priceDisplay.innerText = `ETB ${price * amount}`;
      });
    });

    itemRadios.forEach((radio) => {
      radio.onclick = () => {
        if (radio.id === "small") {
          figure.querySelector("figcaption .item_details .price").innerText =
            value.itemPrice[0];
        } else if (radio.id === "large") {
          figure.querySelector("figcaption .item_details .price").innerText =
            value.itemPrice[1];
        }
      };

      // PROCEEDING TO SHOPPING CART

      const popUpContainer = document.querySelector(".popup_container");
      const addToCartBtn = figure.querySelector(".add_to_cart_btn");

      addToCartBtn.onclick = () => {
        const finalPrice = figure.querySelector(
          "figcaption .item_details .price"
        );
        let itemSizeValue;

        itemRadios.forEach((radio) => {
          if (radio.checked) {
            itemSizeValue = radio.id;
          }
        });

        let itemObj = {
          itemImg: value.firstImage,
          itemName: value.itemName,
          itemValue: itemSizeValue,
          itemPrice: finalPrice.innerText,
          itemAmount: numInput.value === "" ? 1 : numInput.value,
          id: value.id,
        };

        const nameCondition = cartArr.some((item) => {
          return item.id === itemObj.id;
        });

        const sizeCondition = cartArr.some((item) => {
          return item.itemValue === itemObj.itemValue && item.id === itemObj.id;
        });

        if (nameCondition === false) {
          cartArr.push(itemObj);
          localStorage.setItem("CART", JSON.stringify(cartArr));
          const confirmationPopup = document.querySelector(
            ".confirmation_popup"
          );
          confirmationPopup.classList.add("active");
          popUpContainer.classList.add("blur");
          const okBtn = confirmationPopup.querySelector("li.ok-btn");
          okBtn.onclick = () => {
            confirmationPopup.classList.remove("active");
            popUpContainer.classList.remove("blur");
            proceedPage.classList.remove("active");
            figure.classList.remove("active");
          };
        } else if (nameCondition === true) {
          if (sizeCondition === false) {
            cartArr.push(itemObj);
            localStorage.setItem("CART", JSON.stringify(cartArr));
            const confirmationPopup = document.querySelector(
              ".confirmation_popup"
            );
            confirmationPopup.classList.add("active");
            popUpContainer.classList.add("blur");
            const okBtn = confirmationPopup.querySelector("li.ok-btn");
            okBtn.onclick = () => {
              confirmationPopup.classList.remove("active");
              popUpContainer.classList.remove("blur");
              proceedPage.classList.remove("active");
              figure.classList.remove("active");
            };
          } else {
            alert("Item has already been added to your cart.");
            location.origin;
            const confirmationPopup = document.querySelector(
              ".confirmation_popup"
            );
            confirmationPopup.classList.remove("active");
            popUpContainer.classList.remove("blur");
            proceedPage.classList.remove("active");
            figure.classList.remove("active");
          }
        }
      };
    });

    if (value.itemAvailability === "Sold") {
      const figcaptionDiv = figure.querySelector("figcaption ul div");
      figcaptionDiv.style.display = "none";
    }

    // IMAGE SWITCH
    const firstItem2 = figure.querySelector(".first_item img");

    firstItem2.style.transition = "all 0.5s";
    setInterval(() => {
      firstItem2.style.opacity === "1"
        ? (firstItem2.style.opacity = "0")
        : (firstItem2.style.opacity = "1");
    }, 3000);
  };
});
