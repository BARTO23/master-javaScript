// Tamaño de la pantalla
const anchoPantalla = window.screen.width
const alturaPantalla = window.screen.height

const arribaIzq = document.querySelector('arribaIzq')
const arribaDer = document.querySelector('arribaDer')
const abajoIzq = document.querySelector('abajoIzq')
const abajoDer = document.querySelector('abajoDer')
const btnVentana = document.querySelector('ventana')
let miVentana = null
btnVentana.addEventListener("click", () => {
  miVentana = window.open("", "Nueva Ventana", "width=400,height=400" )
})

arribaIzq.addEventListener("click", () =>{
  miVentana.moveTo(0,0)
})