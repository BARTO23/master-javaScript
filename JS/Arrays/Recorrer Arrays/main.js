let actores = ["Arnold", "Estalone", "Al Pacino", "Dicaprio"]

console.log("Listado de actores")

// Bucle for

for(let contador = 0; contador < actores.length; contador++){
  //console.log(actores[contador])
}

// Bucle for OF

for(let actor of actores){
  //console.log(actor)
}

// For IN

for(let indices in actores){
  //console.log(actores[indices])
}

// ForEach
actores.forEach((actor) => {
  //console.log(actor)
})

// map
let nuevosActores = actores.map((actor =>{
  console.log(actor)

  return actor + " Hollywood"
}))

console.log(nuevosActores)