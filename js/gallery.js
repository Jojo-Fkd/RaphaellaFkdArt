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
      itemSrc: `original-images/end-time-original-gallery.jpeg`,
      itemName: "End Times",
      itemLoading: "eager",
      id: 1,
    },
    {
      itemSrc: `original-images/eye-buoquet-in-a-vase.jpeg`,
      itemName: "Eye Bouquet in a vase",
      itemLoading: "eager",
      id: 2,
    },
    {
      itemSrc: `original-images/the-silenced-queen-original-piece.jpeg`,
      itemName: "The Silenced Queen",
      itemLoading: "lazy",
      id: 3,
    },
    {
      itemSrc: `original-images/forever-flower.jpeg`,
      itemName: "Forever Flower",
      itemLoading: "lazy",
      id: 4,
    },
    {
      itemSrc: `original-images/self-portrait_1.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
      id: 5,
    },
    {
      itemSrc: `original-images/self-portrait_2.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
      id: 6,
    },
    {
      itemSrc: `original-images/self-portrait_3.jpeg`,
      itemName: "Self Portrait",
      itemLoading: "lazy",
      id: 7,
    },
    {
      itemSrc: `original-images/the-three-maidens-original-piece.jpeg`,
      itemName: "The Three Maidens",
      itemLoading: "lazy",
      id: 8,
    },
    {
      itemSrc: `original-images/kifu-ayin-original-piece.JPEG`,
      itemName: "Kifu Ayin <span>(ክፉ ዓይን)</span>",
      itemLoading: "lazy",
      id: 9,
    },
    {
      itemSrc: `original-images/damsel-in-distress-original-piece.JPEG`,
      itemName: "Damsel In Distress",
      itemLoading: "lazy",
      id: 10,
    },
    {
      itemSrc: `original-images/aynamawa-original-piece-gallery.jpeg`,
      itemName: "Aynamawa <span>(ኣይናማዋ)",
      itemLoading: "lazy",
      id: 11,
    },
    {
      itemSrc: `original-images/affinity.jpeg`,
      itemName: "Affinity",
      itemLoading: "lazy",
      id: 12,
    },
    {
      itemSrc: `original-images/gemboye-original.jpeg`,
      itemName: "Gemboye <span>(ገምቦዬ)</span>",
      itemLoading: "lazy",
      id: 13,
    },
  ];

  galleryItemData.forEach((value) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <img id="${value.id}" oncontextmenu="return false;" draggable="false" src="${value.itemSrc}" loading="${value.itemLoading}" alt="image of ${value.itemName}" />
    `;
    galleryContainer.appendChild(li);
    li.onclick = () => {
      galleryOpenBg.innerHTML = `
            <section>
                <div class="gallery_close_btn"></div>
            </section>
              <button id="previous">Previous</button>
            <div class="gallery_open_item">
              <img id="${value.id}" oncontextmenu="return false;" draggable="false" loading="lazy" alt="image of ${value.itemSrc}" src="${value.itemSrc}" />
              <div class="gallery_open_item_name">${value.itemName}</div>
            </div>
              <button id="next">Next</button>
            `;
      body.classList.add("covered");

      galleryOpenBg.classList.add("active");
      const closeBtn = galleryOpenBg.querySelector("section");

      closeBtn.onclick = () => {
        body.classList.remove("covered");
        galleryOpenBg.classList.remove("active");
      };

      const preBtn = galleryOpenBg.querySelector("#previous");
      const nextBtn = galleryOpenBg.querySelector("#next");

      const anotherImageRendering = (id) => {
        let idCheck = galleryItemData.filter((value) => {
          return value.id === id;
        });
        if (idCheck) {
          idCheck.forEach((obj) => {
            const img = galleryOpenBg.querySelector("img");
            const itemName = galleryOpenBg.querySelector(
              ".gallery_open_item .gallery_open_item_name"
            );

            img.id = id;
            img.src = obj.itemSrc;
            itemName.innerHTML = obj.itemName;
          });
        }
      };
      let id = value.id;
      if (id === 1) {
        preBtn.style.opacity = "0.4";
      }
      if (id === 20) {
        nextBtn.style.opacity = "0.4";
      }
      preBtn.onclick = () => {
        nextBtn.style.opacity = "1";
        id--;
        if (id === 1) {
          preBtn.style.opacity = "0.4";
        }
        anotherImageRendering(id);
      };
      let lastItem = galleryItemData.slice(-1);
      nextBtn.onclick = () => {
        preBtn.style.opacity = "1";
        id++;
        anotherImageRendering(id);
        lastItem.forEach((value) => {
          if (id === value.id) {
            nextBtn.style.opacity = "0.4";
          }
        });
      };
    };
  });
};
