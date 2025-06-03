let elemento = parseInt(prompt("¿Que usuario quiers del array?", 0))

let nombres = ["Juan", "David", "Carlos", "Andrea"]

if(elemento >= nombres.length){
  alert("Ese usuario no existe")
}else {
  alert("El usuario seleccionado es ".concat(nombres[elemento]))
}

