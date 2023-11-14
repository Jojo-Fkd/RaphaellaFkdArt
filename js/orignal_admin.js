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

const shopItems = document.querySelector("#shop_items");

originalShopData.forEach((item) => {
  const article = document.createElement("article");
  article.innerHTML = `
      <figure>
          <img src="${item.firstImage}" alt="" />
          <figcaption>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              class="remove_icon"
              style="fill: var(--BTNCOLOR)"
            >
              <path
                d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
              ></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
            <p>${item.itemName}</p>
            <a href="originals_administration2.html" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    class="edit_icon"
                    style="fill: black"
                    >
                    <path
                        d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"
                    ></path>
                </svg>
            </a>
          </figcaption>
        </figure>
    `;
  article.className = "shop_item";
  shopItems.appendChild(article);

  // OWNER WANTS TO REMOVE ITEM FROM SHOP

  const adminContainerPopUp = document.querySelector(".admin_popup_container");
  const deleteEnsuring = adminContainerPopUp.querySelector(".delete_ensuring");

  const removeBtn = article.querySelector(".remove_icon");
  removeBtn.onclick = () => {
    adminContainerPopUp.classList.add("active");
    deleteEnsuring.classList.add("active");
    deleteEnsuring.querySelector("header h3").innerHTML = item.itemName;
    deleteEnsuring.querySelector(
      "header .disclaimer .remove_item_name"
    ).innerHTML = item.itemName;
    const noBtn = deleteEnsuring.querySelector("ul li:first-child");
    noBtn.onclick = () => {
      adminContainerPopUp.classList.remove("active");
      deleteEnsuring.classList.remove("active");
    };
  };

  // OWNER WANTS TO EDIT ITEM

  const editIcon = article.querySelector(".edit_icon");
  editIcon.onclick = () => {
    let editItem = {
      firstImage: item.firstImage,
      secondImage: item.secondImage,
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      itemValue: item.itemValue,
      completionDate: item.completionDate,
      itemAvailability: item.itemAvailability,
    };
    localStorage.setItem("editItem", JSON.stringify(editItem));
  };
});
