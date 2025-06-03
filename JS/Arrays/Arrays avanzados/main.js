let frameworks = ["Angular", "React", "Vue", "Astro", "Svelte", "SolidJS", "NextJS"]

// Acceso manual
/*
console.log(frameworks[0])
console.log(frameworks[1])
console.log(frameworks[2])
console.log(frameworks[3])
*/

// Acceso con bucles
for(let i = 0; i < frameworks.length; i++) {
  console.log(frameworks[i])
}

// Mostrar por pantalla
document.writeln('<h1>Listado de frameworks</h1>')
document.writeln('<u>') // Crear la lista

for(let i = 0; i < frameworks.length; i++) {
  document.writeln('<li>' + frameworks[i] + '</li>' ) // Crear cada elemento de la lista
}  

document.writeln('</u>') // Cerrar la lista