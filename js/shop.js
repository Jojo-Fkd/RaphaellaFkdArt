const sectors = document.querySelectorAll("#main-content .sectors");
const sortNavs = document.querySelectorAll(".shop-head ul li");

sortNavs.forEach((navs) => {
  navs.onclick = () => {
    sortNavs.forEach((navs) => {
      navs.classList.remove("active");
    });
    navs.classList.add("active");
    const navType = navs.classList;
    sectors.forEach((sector) => {
      sector.style.display = "none";
      if (navType[0] === sector.id) {
        sector.style.display = "flex";
      }
    });
  };
  const navType = navs.classList;
  sectors.forEach((sector) => {
    if (navs.classList.value === `${navType[0]} active`) {
      if (navType[0] === sector.id) {
        sector.style.display = "flex";
      } else {
        sector.style.display = "none";
      }
    }
  });
});
