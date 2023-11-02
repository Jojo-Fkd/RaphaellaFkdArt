const body = document.querySelector("body");
const proceedShopUp = document.querySelector(".proceed_dialog");
const originalShop = document.querySelector("#original_shop");
const mainSection = document.querySelector("#main-content");

let clientX = 0;
let clientY = 0;
// ORIGINAL SHOP GENERATION AND DATA

const item = document.querySelectorAll(".item");

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

const soldOutStatus = originalShopData.every((item) => {
  return item.itemAvailability === "Sold";
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
              <a href="proceed.html">
                <li class="first_item">
                  <img oncontextmenu="return false;" draggable="false" src="${value.firstImage}" alt="image of ${value.itemName}"/>
                </li>
                <li class="second_item">
                  <img oncontextmenu="return false;" draggable="false" src="${value.secondImage}" />
                </li>
              </a>
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
    const proceedData = [
      {
        firstImg: value.firstImage,
        secondImg: value.secondImage,
        itemName: value.itemName,
        itemAvailability: value.itemAvailability,
        itemPrice: value.itemPrice,
        itemValue: value.itemValue,
        itemCompletionDate: value.completionDate,
      },
    ];
    localStorage.setItem("proceedData", JSON.stringify(proceedData));
  };
});
