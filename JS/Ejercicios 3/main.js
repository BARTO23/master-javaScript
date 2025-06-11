function eliminar(indice) {
  //Sacar el arraya de objetos del localStorage
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"))
  //Eliminar peli del indice
  pelisGuardadas.split(indice, 1)
  // Actualizar array del localStorage
  console.log(pelisGuardadas)
  // Mostrar listado
}

function mostrar() {
  // Seleccionar la estiqueta del estado
  let listado = document.querySelector("#listado");
  listado.innerHTML = "";
  // Sacar la pelis del localStorage
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));
  // Si no hay pelis, mostrar el mensaje
  if (pelisGuardadas.length === 0) {
    listado.innerHTML = "No ha peliculas para mostrar";
    return false;
  } else {
  }
  // Recorrer pelis y mostrar
  pelisGuardadas.forEach((pelicula, indice) => {
    const peliArticle = document.createElement("article");
    peliArticle.innerHTML = `
      <h3>${pelicula.titulo}</h3>
      <p>${pelicula.fecha}</p>
      <p>${pelicula.popularidad}</p>
    `;

    // Crear boton y bindearle evento
    const eliminarBtn = document.createElement("button")
    eliminarBtn.textContent = "Eliminar"
    eliminarBtn.addEventListener("click", () => eliminar(indice))
    peliArticle.appendChild(eliminarBtn)
    peliArticle.appendChild(document.createElement("hr"))

    listado.appendChild(peliArticle);
  });
}

function guardar() {
  // Seleccionar la caja de texto y sacar su valor
  let campoTitulo = document.querySelector("#titulo");
  let titulo = campoTitulo.value;
  //Validación
  if (titulo.trim() === "") {
    alert("Por favor mete el titulo de la pelicula");
    return false;
  }
  // Conseguir fecha actual
  const fecha = new Date();
  const fechaActual =
    fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();
  // Generar un numero aleatorio para la popularidad
  let popularidad = Math.floor(Math.random() * 100) + 1;
  // Crear objeto pelicula
  let pelicula = {
    titulo,
    fecha: fechaActual,
    popularidad,
  };
  // Sacar todas las peliculas
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

  if (!pelisGuardadas) {
    pelisGuardadas = [];
  }
  // Añadir al array la nueva peli
  pelisGuardadas.push(pelicula);
  // Guardar todo en localStorage
  localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));
  // Limpiar campo de texto
  campoTitulo.value = "";
  // Mostrar las peliculas
  mostrar();

  return true;
}

window.addEventListener("load", () => {
  // Cargar todas la pelicuals por defecto
  mostrar()

  // Aplicar evento a formulario para guardar
  let formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    guardar();
  });
});
