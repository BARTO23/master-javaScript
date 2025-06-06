let nuevoProducto = document.querySelector("#nuevoProducto");
let agregar = document.querySelector("#agregarProducto");
let listaCompra = document.querySelector("#listaCompra");

agregar.addEventListener("click", () => {
  let productoAgregar = nuevoProducto.value.trim();

  if (productoAgregar) {
    // Crea un elemento li
    const productoFinal = document.createElement("li");
    productoFinal.textContent = productoAgregar;

    // Crear boton de eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Borrar";
    btnEliminar.addEventListener("click", () => {
      productoFinal.remove();
    });
    productoFinal.appendChild(btnEliminar);
    productoFinal.classList.add("producto")

    // Añade el li al ul
    listaCompra.appendChild(productoFinal);
    nuevoProducto.value = "";
  }
});
