const sectors = document.querySelectorAll("#main-content .sectors");
const sortNavs = document.querySelectorAll(".shop-head ul li");

localStorage.getItem("active");

sortNavs.forEach((navs) => {
  if (navs.className === "originals") {
    if (localStorage.getItem("active") === "originals-active") {
      sortNavs.forEach((navs) => {
        navs.classList.remove("active");
      });
      navs.classList.add("active");
    }
  } else if (navs.className === "stickers") {
    if (localStorage.getItem("active") === "stickers-active") {
      sortNavs.forEach((navs) => {
        navs.classList.remove("active");
      });
      navs.classList.add("active");
    }
  } else if (navs.className === "sketchbooks") {
    if (localStorage.getItem("active") === "sketchbooks-active") {
      sortNavs.forEach((navs) => {
        navs.classList.remove("active");
      });
      navs.classList.add("active");
    }
  }

  /* ON CLICK */

  navs.onclick = () => {
    let activeStorage = localStorage.getItem("active");
    if (navs.className === "stickers") {
      activeStorage = "stickers-active";
      localStorage.setItem("active", activeStorage);
      location.reload();
    } else if (navs.className === "originals") {
      activeStorage = "originals-active";
      localStorage.setItem("active", activeStorage);
      location.reload();
    } else if (navs.className === "sketchbooks") {
      activeStorage = "sketchbooks-active";
      localStorage.setItem("active", activeStorage);
      location.reload();
    }
    const navType = navs.classList;
    sectors.forEach((sector) => {
      sector.style.display = "none";
      if (navType[0] === sector.id) {
        sector.style.display = "grid";
      }
    });
  };
  const navType = navs.classList;
  sectors.forEach((sector) => {
    if (navs.classList.value === `${navType[0]} active`) {
      if (navType[0] === sector.id) {
        sector.style.display = "grid";
      } else {
        sector.style.display = "none";
      }
    }
  });
});
