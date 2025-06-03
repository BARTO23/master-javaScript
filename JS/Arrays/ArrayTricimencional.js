let menuRestaurante = [
  ["Plato", "Cantidad", "Precio", "Tamaño"],
  ["Menu Pizza", 2, [8, 10, 15], ["Pequeño", "Mediano", "Grande"]],
  ["Menu Burger", 5, [5, 12, 14], ["Pequeño", "Mediano", "Grande"]],
  ["Menu Pasta", 10, [14, 18, 25], ["Pequeño", "Mediano", "Grande"]],
]

for(let menu of menuRestaurante){
  for(let fila of menu){
    console.log(fila)
  }
}

console.table(menuRestaurante)