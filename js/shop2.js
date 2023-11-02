const cartArr = JSON.parse(localStorage.getItem("CART")) || [];

let proceedData = JSON.parse(localStorage.getItem("proceedData"));
const popUpContainer = document.querySelector(".popup_container");

const proceedPage = document.querySelector("#proceed_page");

proceedData.forEach((proceedData) => {
  const figure = proceedPage.querySelector("figure");
  figure.innerHTML = `
        <ul class="item">
          <li class="first_item">
            <img oncontextmenu="return false;" draggable="false" src="${proceedData.firstImg}" alt="image of ${proceedData.itemName}"/>
          </li>
          <li class="second_item">
            <img oncontextmenu="return false;" draggable="false" src="${proceedData.secondImg}" />
          </li>
        </ul>
        <figcaption>
          <ul class="item_details">
            <li class="item-name">${proceedData.itemName}</li>
            <li class="price">${proceedData.itemPrice}</li>
            <li class="value">${proceedData.itemValue}</li>
            <li class="date">${proceedData.itemCompletionDate}</li>
            <li class="availability">${proceedData.itemAvailability}</li>
            <div>
              <button class="add_to_cart_btn">Add To Cart</button>
            </div>
          </ul>
        </figcaption>
    `;

  if (proceedData.itemAvailability === "Sold") {
    const figcaptionDiv = figure.querySelector("figcaption ul div");
    figcaptionDiv.style.display = "none";
  }

  const backBtn = proceedPage.querySelector(".back_btn");
  backBtn.onclick = () => {
    window.close();
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
      itemImg: proceedData.firstImg,
      itemName: proceedData.itemName,
      itemValue: proceedData.itemValue,
      itemPrice: proceedData.itemPrice,
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
      const backBtn = confirmationPopup.querySelector("ul li:first-child");
      backBtn.onclick = () => {
        window.close();
      };
    } else {
      alert("Item has already been added to your cart.");
      window.close();
      return;
    }
  };
});
