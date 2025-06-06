/* 
Ejercicio 1:
Crea un semaforo con sus 3 luces (Rojo, Amarillo, Verde)
Haz los circulos del semaforo con HTML Y CSS

Cuando un peaton quiere cruzar la calle debe pulsar el botón.
Crea un botón para cambiar el color de las luces del semaforo secuencialmete ( de rojo a verde pasando por amarillo)

Etonces, el semaforo en siempre empieza en rojo.
cuando haces click en el boton, pasara a amararillo.
Al hacer click otra vez, pase a verde y asi todo el rato
 */
 
let boton = document.querySelector("#btnSemaforo")
let luces = document.querySelectorAll(".luz")
let index = 0

boton.addEventListener("click", ()=>{
  // Retirar las luces activas
  luces.forEach(luz => luz.classList.remove("active"))
  // Encender luz
  luces[index].classList.add("active")
  // Cambiar la luz
  index ++

  if(index >= 3){
    index = 0
  }
})