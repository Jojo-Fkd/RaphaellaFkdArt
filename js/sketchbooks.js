const bookShop = document.querySelector("#sketchbooks");

const bookShopData = [
  {
    firstImage: `sketchbook-images/sketchbook-1.JPEG`,
    secondImage: `sketchbook-images/sketchbook-1-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 900",
    itemSize: "15 x 18cm",
    itemValue: "15 x 18 cm, brown paper, 43 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 9,
    itemLoading: "eager",
  },
  {
    firstImage: `sketchbook-images/sketchbook-2.JPEG`,
    secondImage: `sketchbook-images/sketchbook-2-open.JPG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 800",
    itemSize: "12 x 17cm",
    itemValue: "12 x 17 cm, white & yellow paper, 50 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 10,
    itemLoading: "eager",
  },
  {
    firstImage: `sketchbook-images/sketchbook-3.JPEG`,
    secondImage: `sketchbook-images/sketchbook-3-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 700",
    itemSize: "13 x 17cm",
    itemValue: "13 x 17 cm, brown paper, 32 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 11,
    itemLoading: "eager",
  },
  {
    firstImage: `sketchbook-images/sketchbook-4.JPEG`,
    secondImage: `sketchbook-images/sketchbook-4-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 650",
    itemSize: "13 x 17cm",
    itemValue: "13 x 17 cm, brown paper, 32 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 12,
    itemLoading: "lazy",
  },
  {
    firstImage: `sketchbook-images/sketchbook-5.JPEG`,
    secondImage: `sketchbook-images/sketchbook-5-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 550",
    itemSize: "10 x 15cm",
    itemValue: "10 x 15 cm, brown paper, 33 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 13,
    itemLoading: "lazy",
  },
  {
    firstImage: `sketchbook-images/sketchbook-6.JPEG`,
    secondImage: `sketchbook-images/sketchbook-6-open.JPG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 200",
    itemSize: "8 x 12cm",
    itemValue: "8 x 12 cm, white paper, 32 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 14,
    itemLoading: "lazy",
  },
  {
    firstImage: `sketchbook-images/sketchbook-7.JPEG`,
    secondImage: `sketchbook-images/sketchbook-7-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 250",
    itemSize: "8 x 12cm",
    itemValue: "8 x 12 cm, yellow paper, 32 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 15,
    itemLoading: "lazy",
  },
  {
    firstImage: `sketchbook-images/sketchbook-8.JPEG`,
    secondImage: `sketchbook-images/sketchbook-8-open.JPEG`,
    itemName: "Sketchbook",
    itemPrice: "ETB 260",
    itemSize: "8.5 x 12cm",
    itemValue: "8.5 x 12 cm, yellow paper, 32 pages",
    completionDate: "2024",
    itemAvailability: "Available",
    id: 16,
    itemLoading: "lazy",
  },
];

bookShopData.forEach((value) => {
  window.scrollTo(0, 0);
  // FIGURE GENERATION
  const figure = document.createElement("figure");
  figure.innerHTML = `
            <ul class="item">
                <li class="first_item">
                  <img oncontextmenu="return false;" draggable="false" src="${value.firstImage}" alt="image of ${value.itemName}" loading="${value.itemLoading}"/>
                </li>
                <li class="second_item">
                  <img oncontextmenu="return false;" draggable="false" src="${value.secondImage}" loading="${value.itemLoading}"/>
                </li>
            </ul>
            <figcaption>
              <ul class="item_details">
                <li style="font-weight: bolder" class="english item-name">
                  ${value.itemName} ~ ${value.itemSize}
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

  bookShop.appendChild(figure);

  /* PROCEED */

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
