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
      itemSrc: `img/end-time-original.jpeg`,
      itemName: "End Times",
      itemClass: "unclassed",
      itemLoading: "eager",
    },
    {
      itemSrc: `img/brothers.jpeg`,
      itemName: "Brothers",
      itemClass: "unclassed",
      itemLoading: "eager",
    },
    {
      itemSrc: `img/eye-buoquet-in-a-vase.jpeg`,
      itemName: "Eye Bouquet in a vase",
      itemClass: "unclassed",
      itemLoading: "eager",
    },
    {
      itemSrc: `img/the-silenced-queen-original-piece.jpeg`,
      itemName: "The Silenced Queen",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/forever-flower.jpeg`,
      itemName: "Forever Flower",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_1.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/under-the-red-moon.jpeg`,
      itemName: "Under The Red Moon",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_9.jpg`,
      itemName: "Self Portrait",
      itemClass: "smaller",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_2.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_3.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self_portrait_4.JPEG`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/the-three-maidens-original-piece.jpeg`,
      itemName: "The Three Maidens",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/under-the-white-moon.jpeg`,
      itemName: "Under The White Moon",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_10.jpeg`,
      itemName: "Self Portrait",
      itemClass: "smaller",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_5.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_6.JPEG`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/kifu-ayin-original-piece.JPEG`,
      itemName: "<span>(ክፉ ዓይን)</span>",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/damsel-in-distress-original-piece.JPEG`,
      itemName: "Damsel In Distress",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/aynamawa-original-piece.jpeg`,
      itemName: "Aynamawa <span>(ኣይናማዋ)",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/affinity.jpeg`,
      itemName: "Affinity",
      itemClass: "smaller",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_7.jpg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/self-portrait_8.jpg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
    {
      itemSrc: `img/gemboye-original.jpeg`,
      itemName: "Gemboye <span>(ገምቦዬ)</span>",
      itemClass: "unclassed",
      itemLoading: "lazy",
    },
  ];
  galleryItemData.forEach((value) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <img oncontextmenu="return false;" draggable="false" src="${value.itemSrc}" loading="${value.itemLoading}" alt="image of ${value.itemName}" />
        <div class="image_blur"></div>
        <div class="image_name">${value.itemName}</div>
    `;
    li.className = value.itemClass;
    galleryContainer.appendChild(li);
    li.addEventListener("mouseover", () => {
      li.classList.add("active");
      setTimeout(() => {
        li.classList.remove("active");
      }, 3000);
    });
    li.addEventListener("mouseout", () => {
      li.classList.remove("active");
    });
    li.onclick = () => {
      galleryOpenBg.innerHTML = `
            <section>
                <div class="gallery_close_btn"></div>
            </section>
            <div class="gallery_open_item ${value.itemClass}">
              <img oncontextmenu="return false;" draggable="false" loading="lazy" alt="image of ${value.itemSrc}" src="${value.itemSrc}" />
              <div class="gallery_open_item_name"><span>${value.itemName}</span></div>
            </div>
            `;
      body.classList.add("covered");
      galleryOpenBg.classList.add("active");
      const closeBtn = galleryOpenBg.querySelector("section");

      closeBtn.onclick = () => {
        body.classList.remove("covered");
        galleryOpenBg.classList.remove("active");
      };
      galleryOpenBg.onclick = () => {
        body.classList.remove("covered");
        galleryOpenBg.classList.remove("active");
      };
    };
  });
};
