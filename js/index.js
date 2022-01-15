const menu = document.querySelector(".wrapper");
const link = document.querySelector(".links");
const main = document.querySelector(".main");
console.log(window);

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    menu.style.top = "0";
    menu.style.position = "fixed";
    main.style.paddingTop = "90px";
  } else if (window.scrollY < 30) {
    menu.style.transform = "translateY(0px)";
    menu.style.position = "static";
    main.style.paddingTop = "0px";
  }

  if (window.innerWidth < 1200) {
    if (window.scrollY > 1) {
      link.style.minHeight = "650px";
      link.style.marginTop = "-105px";
      link.style.transition = "0.3s";
    }
  }
});
