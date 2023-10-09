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
      itemSrc: `img/brothers.jpeg`,
      itemName: "Brothers",
      itemClass: "unclassed",
      itemLoading: "eager",
      id: 1,
    },
    {
      itemSrc: `img/end-time-original-gallery.jpeg`,
      itemName: "End Times",
      itemClass: "square",
      itemLoading: "eager",
      id: 2,
    },
    {
      itemSrc: `img/eye-buoquet-in-a-vase.jpeg`,
      itemName: "Eye Bouquet in a vase",
      itemClass: "unclassed",
      itemLoading: "eager",
      id: 3,
    },
    {
      itemSrc: `img/the-silenced-queen-original-piece.jpeg`,
      itemName: "The Silenced Queen",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 4,
    },
    {
      itemSrc: `img/forever-flower.jpeg`,
      itemName: "Forever Flower",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 5,
    },
    {
      itemSrc: `img/self-portrait_1.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 6,
    },

    {
      itemSrc: `img/self-portrait_9.jpg`,
      itemName: "Self Portrait",
      itemClass: "smaller",
      itemLoading: "lazy",
      id: 7,
    },
    {
      itemSrc: `img/self-portrait_2.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 8,
    },
    {
      itemSrc: `img/self-portrait_3.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 9,
    },
    {
      itemSrc: `img/under-the-red-moon.jpeg`,
      itemName: "Under The Red Moon",
      itemClass: "rectangle",
      itemLoading: "lazy",
      id: 10,
    },
    {
      itemSrc: `img/self_portrait_4.JPEG`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 11,
    },
    {
      itemSrc: `img/the-three-maidens-original-piece.jpeg`,
      itemName: "The Three Maidens",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 12,
    },
    {
      itemSrc: `img/self-portrait_10.jpeg`,
      itemName: "Self Portrait",
      itemClass: "smaller",
      itemLoading: "lazy",
      id: 13,
    },
    {
      itemSrc: `img/self-portrait_5.jpeg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 14,
    },
    {
      itemSrc: `img/self-portrait_6.JPEG`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 15,
    },
    {
      itemSrc: `img/kifu-ayin-original-piece.JPEG`,
      itemName: "<span>(ክፉ ዓይን)</span>",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 16,
    },
    {
      itemSrc: `img/damsel-in-distress-original-piece.JPEG`,
      itemName: "Damsel In Distress",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 17,
    },
    {
      itemSrc: `img/self-portrait_8.jpg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 18,
    },
    {
      itemSrc: `img/aynamawa-original-piece-gallery.jpeg`,
      itemName: "Aynamawa <span>(ኣይናማዋ)",
      itemClass: "square",
      itemLoading: "lazy",
      id: 19,
    },
    {
      itemSrc: `img/affinity.jpeg`,
      itemName: "Affinity",
      itemClass: "smaller",
      itemLoading: "lazy",
      id: 20,
    },
    {
      itemSrc: `img/self-portrait_7.jpg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 21,
    },
    {
      itemSrc: `img/gemboye-original.jpeg`,
      itemName: "Gemboye <span>(ገምቦዬ)</span>",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 22,
    },
    {
      itemSrc: `img/self-portrait_11.jpg`,
      itemName: "Self Portrait",
      itemClass: "unclassed",
      itemLoading: "lazy",
      id: 23,
    },
  ];

  galleryItemData.forEach((value) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <img id="${value.id}" oncontextmenu="return false;" draggable="false" src="${value.itemSrc}" loading="${value.itemLoading}" alt="image of ${value.itemName}" />
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
            <div class="pre_container">
              <button id="previous">Previous</button>
            </div>
            <div class="gallery_open_item ${value.itemClass}">
              <img id="${value.id}" oncontextmenu="return false;" draggable="false" loading="lazy" alt="image of ${value.itemSrc}" src="${value.itemSrc}" />
              <div class="gallery_open_item_name"><span>${value.itemName}</span></div>
            </div>
            <div class="next_container">
              <button id="next">Next</button>
            </div>
            `;
      body.classList.add("covered");

      galleryOpenBg.id = value.itemClass;
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
            const galleryOpenItem =
              galleryOpenBg.querySelector(".gallery_open_item");
            const img = galleryOpenBg.querySelector("img");
            const itemName = galleryOpenBg.querySelector(
              ".gallery_open_item_name span"
            );

            galleryOpenItem.className = `gallery_open_item ${obj.itemClass}`;
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
      if (id === 23) {
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
