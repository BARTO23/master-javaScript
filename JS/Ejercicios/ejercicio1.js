/* Ejercicio 1:

Crea un array con 10 numeros aleatorios del 1 al 10.
Luego, pide al usuario que adivine un nuemero.

Si acerto, muestra un mensaje de celebración
Si no, muestra el número correcto
*/

let numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1 )

let elije = prompt("Adivina el numero del 1 al 100")
 
if(numeros.includes(Number(elije))){
  console.log("Has adivinado el nuemero")
}else{
  console.log("No has acertado")
}