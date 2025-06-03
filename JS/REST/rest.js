// Parametros ...REST

function misPeliculas(pelicula1, pelicula2, ...resto_peliculas) {
  console.log(pelicula1)
  console.log(pelicula2)
  console.log(resto_peliculas)
}

misPeliculas("Matrix", "El padrino", "Scarface", "Terminator", "Jurassic Park")