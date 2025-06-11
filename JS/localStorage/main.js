// LocalStorage -> almacen de datos

// Comprobar la disponibilidad
if (typeof Storage !== "undefined") {
  console.log("LocalStorage disponible");
} else {
  console.log("LocalStorage no disponible");
}
// Guardar datos en L.S
localStorage.setItem("Curso", "100 dias de JS"); //Guardar un elemnto clave-valor
localStorage.setItem("Video", "Gatos y Perros");

// Sacar datos
document.querySelector("#curso").textContent = localStorage.getItem("Curso");
document.querySelector("#video").textContent = localStorage.getItem("Video");

let animal = {
  especie: "elefante",
  nombre: "Michi",
  color: "Gris",
};

localStorage.setItem("animal", JSON.stringify(animal));

// Recuperar objeto

let animalJS = JSON.parse(localStorage.getItem("animal"))

// Eliminar elementos
localStorage.removeItem("animal") // Eliminar 1 solo elemento

// Vaciar por completo localStorage
localStorage.clear()// Borra todo el storage por completo