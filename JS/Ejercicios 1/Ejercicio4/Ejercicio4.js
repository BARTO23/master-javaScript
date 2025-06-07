let small = document.querySelector("#small");
let medium = document.querySelector("#medium");
let big = document.querySelector("#big");

let ventana = (ancho, altura) => {
  window.open(
    "https://www.youtube.com/",
    "_blank",
    `width=${ancho},height=${altura}`);
  return true
};

small.addEventListener("click", () => {
  ventana(250, 250)
});

medium.addEventListener("click", () => {
  ventana(450, 450)
});

big.addEventListener("click", () => {
  ventana(650, 750)
});
