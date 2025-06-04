// Ordenar
let numeros = [5, 3, 8, 1, 9];

numeros.sort(); // Los ordena de menor a mayor
console.log(numeros); // [1, 3, 5, 8, 9]

let dispositivos = ["almanaque", "cocina", "nevera", "batidora", "Pera", "MP3"];
dispositivos.sort(); // Ordena alfabeticamente
console.log(dispositivos);

// Invertir el orden de un array
dispositivos.reverse();
console.log(dispositivos);

// Combinar arrays

let union = dispositivos.concat(numeros);
console.log(union);

//Convertir en cadena
let etiquetas = dispositivos.join(", ");
console.log(etiquetas);

// Copiar porcion de array
let misDispositivosFavs = dispositivos.slice(3, 5);
console.log(misDispositivosFavs);

// Hacer busqueda
let buscar = dispositivos.find((dispositivo) => dispositivo.length > 5); // Trae el primer resultado que cumple con la condición
console.log(buscar);

// Busca y devuelve el indice
let buscarIndice = dispositivos.findIndex(
  (dispositivo) => dispositivo.length > 5
); // Trae el primer resultado que cumple con la condición
console.log(buscarIndice);

// SOME
let letrasE = dispositivos.some((dispositivo) => dispositivo.includes("e"));
console.log(letrasE);

// EVERY
let letrasA = dispositivos.every((dispositivo) => dispositivo.includes("a"));
console.log(letrasA);

// Aplanar

let decadas = [
  [1990, 1995, 1998],
  [2001, 2005, 2009],
  [2020, 2025, 2030],
];

let plana = decadas.flat(); // Coloca los arrays en una sola dimension, un solo array
console.log(plana);

// copyWithin
let arr = [1, 2, 3, 4, 5];

arr.copyWithin(0, 3); // copia desde el índice 3 hasta el final, y lo pone desde el índice 0

console.log(arr); // [4, 5, 3, 4, 5]

// Convertir Array en string
let nombre = "Juan";
let arrayString = Array.from(nombre);
console.log(arrayString);

// Desestructuración de Arrays
let [uno, dos, tres] = [1, 2, 3];
console.log(uno);

let [actor, ...otrosActores] = ["Robert de niro", "Dicaprio", "Keanu Reaves"];
console.log(otrosActores);

// Expandir arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayCompleto = [...array1, ...array2]
console.log(arrayCompleto)

// De array a string
console.log(dispositivos.toString())

// De string -> array
let frase = "Bienvenidos a todos"
let palabras = frase.split(" ")
console.log(palabras)

// Pasar a SEO slug
let slug = palabras.join("-").toLowerCase()
console.log(slug)