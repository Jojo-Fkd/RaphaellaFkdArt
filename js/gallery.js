document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp2();
  }
});

const initApp2 = () => {
  const body = document.querySelector("body");
  const galleryContainer = document.querySelector(".gallery ul");
  const galleryOpenBg = document.querySelector(".gallery_open");

  const galleryItemData = [
    {
      itemSrc: `original-images/end-time-original.jpeg`,
      itemName: "End Times",
      itemLoading: "eager",
    },
    {
      itemSrc: `gallery-images/eye-buoquet-in-a-vase.jpeg`,
      itemName: "Eye buoquet in a vase",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/forever-flower.jpeg`,
      itemName: "Forever flower",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/affinity.jpeg`,
      itemName: "Affinity",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/piece-pic.jpeg`,
      itemName: "Original Piece",
      itemLoading: "lazy",
    },

    {
      itemSrc: `gallery-images/character1.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character2.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_1.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character3.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `original-images/the-three-maidens-original-piece.jpeg`,
      itemName: "The Three Maidens",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_2.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character4.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character5.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_3.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character6.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_4.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_5.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },

    {
      itemSrc: `original-images/kifu-ayin-original-piece.jpeg`,
      itemName: "Kifu Ayin <span>(ክፉ ዓይን)</span>",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/self-portrait_6.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
    },
    {
      itemSrc: `original-images/damsel-in-distress-original-piece.jpeg`,
      itemName: "Damsel In Distress",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character7.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/sketchbook_character.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/under-the-red-moon.jpeg`,
      itemName: "Under the red moon",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/under-the-white-moon.jpeg`,
      itemName: "Under the white moon",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character8.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character9.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/under-the-white-moon (2).jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },

    {
      itemSrc: `original-images/aynamawa-original-piece.jpeg`,
      itemName: "Aynamawa <span>(ኣይናማዋ)",
      itemLoading: "lazy",
    },
    {
      itemSrc: `gallery-images/character10.jpeg`,
      itemName: "Character",
      itemLoading: "lazy",
    },
    {
      itemSrc: `original-images/gemboye-original.jpeg`,
      itemName: "Gemboye <span>(ገምቦዬ)</span>",
      itemLoading: "lazy",
    },
  ];

  galleryItemData.forEach((value) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <img id="${value.id}" oncontextmenu="return false;" draggable="false" src="${value.itemSrc}" loading="${value.itemLoading}" alt="image of ${value.itemName}" />
        <div class="img-loading"></div>
        `;
    const image = li.querySelector("img");
    image.onload = () => {
      li.querySelector(".img-loading").style.display = "none";
      li.className = "loaded";
    };
    galleryContainer.appendChild(li);
    li.onclick = () => {
      galleryOpenBg.innerHTML = `
            <section>
              <h3>Title: ${value.itemName}</h3>
              <div class="close-btn">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                >
                <path
                fill="var(--BTNCOLOR)"
                d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                />
                </svg>
              </div>
            </section>
            <img id="${value.id}" oncontextmenu="return false;" draggable="false" loading="lazy" alt="image of ${value.itemSrc}" src="${value.itemSrc}" />
            `;
      body.classList.add("covered");

      galleryOpenBg.classList.add("active");
      const closeBtn = galleryOpenBg.querySelector("section");

      closeBtn.onclick = () => {
        body.classList.remove("covered");
        galleryOpenBg.classList.remove("active");
      };
    };
  });
};
