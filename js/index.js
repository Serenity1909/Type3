const menu = document.querySelector(".wrapper");
const link = document.querySelector(".links");
const main = document.querySelector(".main");
console.log(window);

const bulle = document.querySelector(".bubble-text");
const popup = document.querySelector(".popUp");

// fixe menubar onscroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    menu.style.zIndex = "10";
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

// info popUp interview
popup.addEventListener("mouseenter", () => {
  popup.style.transform = "translateY(-20px)";
  bulle.style.opacity = "1";
});

popup.addEventListener("mouseout", () => {
  popup.style.transform = "translateY(125px)";
  bulle.style.opacity = "0";
});
