const menu = document.querySelector(".wrapper");
const bubble = document.querySelector(".bubble-text");
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
});
