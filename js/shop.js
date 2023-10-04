const body = document.querySelector("body");
const proceedShopUp = document.querySelector(".proceed_dialog");
const originalShop = document.querySelector("#original_shop");
const mainSection = document.querySelector("#main-content");
const proceedPage = document.querySelector("#proceed_page");
const popUpContainer = document.querySelector(".popup_container");
proceedPage.style.display = "none";

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

const soldOutStatus = originalShopData.every((item) => {
  return (
    item.itemAvailability === "Sold" || item.itemAvailability === "Unavailable"
  );
});

if (soldOutStatus === true) {
  const soldOutHeader = document.querySelector("#main-content header");
  soldOutHeader.classList.add("achieved");
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
  };
});
