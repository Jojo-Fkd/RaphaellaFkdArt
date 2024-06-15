const body = document.querySelector("body");

// CLIENT CHOOSES PAYMENT METHOD

const options = document.querySelectorAll(".options label input");
const paymentMethods = document.querySelectorAll(".payment-information");

options.forEach((option) => {
  option.onclick = () => {
    const chosenMethod = option.nextElementSibling.innerText;
    if (chosenMethod === "CBE") {
      paymentMethods.forEach((method) => {
        if (method.id === "CBE-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    } else if (chosenMethod === "Telebirr") {
      paymentMethods.forEach((method) => {
        if (method.id === "Telebirr-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    } else if (chosenMethod === "BOA") {
      paymentMethods.forEach((method) => {
        if (method.id === "BOA-method") {
          paymentMethods.forEach((method) => {
            method.classList.value = "payment-information";
          });
          method.classList.value = "payment-information checked";
        }
      });
    }
  };
});

// CLIENT WANTS TO SEE THE PREVIEW OF THEIR CHECKOUT

const previewBtn = document.querySelector("#preview-btn");
const previewPopup = document.querySelector(".preview-popup");

previewBtn.onclick = () => {
  previewPopup.classList.add("preview");
  body.style.overflow = "hidden";
  //window.scrollTo(0, 0);
  previewPopup.querySelector(".preview-card button").onclick = () => {
    previewPopup.classList.remove("preview");
    body.style.overflow = "auto";
  };
};
