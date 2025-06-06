let contador = 0;
let numero = document.querySelector(".numeroClicks");
let boton = document.querySelector("#buttonClicks");

boton.addEventListener("click", () => {
  contador++;
  if (contador === 17) {
    numero.textContent = "LIMITE ALCANZADO";
    contador = 0;
  } else {
    numero.textContent = contador + " Clicks";
  }
});
