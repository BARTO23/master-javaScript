let categorias = ["lucha", "Deportes", "Accion", "Sandbox", "Carreras"];

let titulos = ["Tekken", "Fifa", "Max Payne 3", "GTA 6", "NFS"];

let videojuegos = [categorias, titulos];

console.log(videojuegos);

// Acceder a los datos

console.log(videojuegos[0][2]);
console.log(videojuegos[1][3]);

// Arrays Bidimencionales

let tabla = [
  ["Producto", "Cantidad", "Precio"],
  ["PC", 2, 350],
  ["Smarthphone", 4, 127],
  ["Impresora", 10, 57],
];

console.log(tabla[2][0], tabla[2][2]);

tabla.forEach((fila) => {
  console.log(fila);
});

tabla.forEach((fila) => {
  fila.forEach((elemento) => {
    console.log(elemento);
  });
});

console.table(tabla);

// Mostrar la tabla en el html

document.writeln("<table border=1 >");

tabla.forEach((fila, indexFila) => {
  document.writeln("<tr>");

  fila.forEach((elemento) => {
    if (indexFila === 0) {
      document.writeln("<th>" + elemento + "</th>");
    } else {
      document.writeln("<td>" + elemento + "</td>");
    }
  });
  document.writeln("</tr>");
});

document.writeln("</table>");
