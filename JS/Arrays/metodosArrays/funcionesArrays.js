console.log("Funciones de Array")

// Crear un Array
let dispositivos = ["PC", "Laptop", "Tablet", "Celular"]
console.log(dispositivos)

// Longitud de un Array
console.log(dispositivos.length)

// Añadir elementos
dispositivos.push("PS5")
dispositivos.push("Tostadora")

console.log(dispositivos)

// Eliminar el unitimo elemento
dispositivos.pop()
console.log(dispositivos)

// Agregar elementos al principio
dispositivos.unshift("PS4")
dispositivos.unshift("PSP")
console.log(dispositivos)

// Eliminar el primer elemento del Array
dispositivos.shift()
console.log(dispositivos)

// Busqueda devuelve indice
let index = dispositivos.indexOf("PSP") // PSP no existe
let index2 = dispositivos.indexOf("Laptop")
console.log(index) // -1 = No encontrado
console.log(index2) // Regresa el numero del indice del objeto

// Busqueda para ver si existe un elemento
let existe = dispositivos.includes("PS4")
console.log(existe) // True = existe | False = No existe

// Filtrar Arrays

dispositivos.push("PSP")
dispositivos.push("Nevera")
dispositivos.push("Robot")
dispositivos.push("MP3")

let dispositivosConA = dispositivos.filter(dispositivo => dispositivo.includes("a") )

console.log(dispositivosConA)

// Reduce
let reducir = dispositivos.reduce((total, actual, indice) => {
  // Corregimos la capitalización del primer elemento solo en la segunda vuelta
  let mayusculaTotal = total;
  if (indice === 1) {
    mayusculaTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
  }

  // Capitalizamos la palabra actual
  let mayusculaActual = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

  return mayusculaTotal + ", " + mayusculaActual;
});


console.log(reducir)

let numeros = [1, 2, 3, 4]

let suma = numeros.reduce((acumulador, numeroActual, iteraciones) => acumulador + numeroActual)

console.log(suma)

// Ordenar un Arr