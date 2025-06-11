console.log(Math.PI)
console.log(Math.E)

// Redondear
console.log(Math.round(7.2)) // Redondear al entero mas cercano
console.log(Math.round(8.9))
// Redondear a la baja
console.log(Math.floor(7.9)) // -> 7
// Redondear a la alza
console.log(Math.ceil(7.00000001)) // 8

// Numeros aleatorios
console.log(Math.random()) // Numero aleatorio entre 0 y 1
console.log(Math.random() * 10 ) // Numero random hasta el 10
console.log(Math.round(Math.random() * 10 )) // Numero aleatorio entero entre el 0 y el 10

// Valor absoluto
console.log(Math.abs(-27.9))

// Potencias
console.log(Math.pow(7, 2))

// Raiz
console.log(Math.sqrt(12).toFixed(2))

// Minimo y Maximo
console.log(Math.max(1,4,5,6,34)) // 34
console.log(Math.min(1,4,5,6,34)) // 1