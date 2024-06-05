const proceedShopUp = document.querySelector(".proceed_dialog");
const originalShop = document.querySelector("#originals");
const mainSection = document.querySelector("#main-content");

let clientX = 0;
let clientY = 0;

// ORIGINAL SHOP GENERATION AND DATA

const item = document.querySelectorAll(".item");

const originalShopData = [
  {
    firstImage: `original-images/aynamawa-original-piece.jpeg`,
    secondImage: `original-images/aynamawa-original-piece_2.jpeg`,
    itemName: "Aynamawa <span>(ኣይናማዋ)</span>",
    itemPrice: "ETB 4,000",
    itemValue: "20 x 20 cm Oil Painting On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 0,
  },
  {
    firstImage: `original-images/the-three-maidens-original-piece.jpeg`,
    secondImage: `original-images/the-three-maidens-original piece_2.jpeg`,
    itemName: "The Three Maidens",
    itemPrice: "ETB 9,000",
    itemValue: "30 x 60 cm Oil Painting On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 1,
  },
  {
    firstImage: `original-images/gemboye-original.jpeg`,
    secondImage: `original-images/gemboye-original-piece_2.jpeg`,
    itemName: "Gemboye <span>(ገምቦዬ)</span>",
    itemPrice: "ETB 2,000",
    itemValue: "20 x 20 cm Drawing With A Wooden Finish.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 2,
  },
  {
    firstImage: `original-images/kifu-ayin-original-piece.JPEG`,
    secondImage: `original-images/kifu-ayin-original-piece_2.JPEG`,
    itemName: "Kifu Ayin <span>(ክፉ ዓይን)</span",
    itemPrice: "ETB 5,500",
    itemValue: "30 x 30 cm Acrylic Painting On Canvas.",
    completionDate: "2022",
    itemAvailability: "Available",
    id: 3,
  },
  {
    firstImage: `original-images/end-time-original.jpeg`,
    secondImage: `original-images/end-time- original_2.jpeg`,
    itemName: "End Times",
    itemPrice: "ETB 4,500",
    itemValue: "20 x 20 cm Oil Painting On Canvas.",
    completionDate: "2021",
    itemAvailability: "Available",
    id: 4,
  },
  {
    firstImage: `original-images/damsel-in-distress-original-piece.JPEG`,
    secondImage: `original-images/damsel-in-distress-original-piece_2.JPEG`,
    itemName: "Damsel In Distress",
    itemPrice: "ETB 6,000",
    itemValue: "30 x 40 cm Mixed Media On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 5,
  },
  {
    firstImage: `original-images/blossom.jpeg`,
    secondImage: `original-images/blossom-2.jpeg`,
    itemName: "Blossom",
    itemPrice: "ETB 3,000",
    itemValue: "20 x 20 cm Image Transfer On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 6,
  },
  {
    firstImage: `original-images/preety-eyes.jpeg`,
    secondImage: `original-images/preety-eyes-2.jpeg`,
    itemName: "Pretty Eyes",
    itemPrice: "ETB 2,000",
    itemValue: "20 x 20 cm Image Transfer On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 7,
  },
  {
    firstImage: `original-images/untitled-original-piece.jpeg`,
    secondImage: `original-images/untitled-original-piece-2.jpeg`,
    itemName: "Untitled",
    itemPrice: "ETB 2,500",
    itemValue: "30 x 30 cm Image Transfer On Canvas.",
    completionDate: "2023",
    itemAvailability: "Available",
    id: 8,
  },
];

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
                <li class="availability">${value.itemAvailability} ~ ${value.itemPrice}</li> 
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

  /* PROCEED */

  const proceedPage = document.querySelector("#proceed_page");
  const cartArr = JSON.parse(localStorage.getItem("CART")) || [];

  figure.onclick = () => {
    proceedPage.classList.add("active");
    body.classList.add("covered");
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

    figure.classList.add("active");

    proceedPage.querySelector(".close-btn").onclick = () => {
      proceedPage.classList.remove("active");
      figure.classList.remove("active");
      body.classList.remove("covered");
    };

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

    // PROCEEDING TO SHOPPING CART

    const addToCartBtn = figure.querySelector(".add_to_cart_btn");
    const popUpContainer = document.querySelector(".popup_container");

    addToCartBtn.onclick = () => {
      let itemObj = {
        itemImg: value.firstImage,
        itemName: value.itemName,
        itemValue: value.itemValue,
        itemPrice: value.itemPrice,
        id: value.id,
      };

      const nameCondition = cartArr.some((item) => {
        return item.id === itemObj.id;
      });

      if (nameCondition === false) {
        cartArr.push(itemObj);
        localStorage.setItem("CART", JSON.stringify(cartArr));
        const confirmationPopup = document.querySelector(".confirmation_popup");
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
        const confirmationPopup = document.querySelector(".confirmation_popup");
        confirmationPopup.classList.remove("active");
        popUpContainer.classList.remove("blur");
        proceedPage.classList.remove("active");
        figure.classList.remove("active");
      }
    };
  };
});
