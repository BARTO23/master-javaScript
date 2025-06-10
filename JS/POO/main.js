class Gato {
  constructor(nombre, raza, color){
    // Propiedades (caracteristicas)
    this.nombre = nombre
    this.raza = raza
    this.color = color
  }
  // Metodos (acciones)
  maullar(){
    console.log(`${this.nombre} dice: Miau`)
  }
  saltar(){
    console.log(`${this.nombre} ha saltado`)
  }

  getRaza(){
    return this.raza
  }
  setRaza(raza){
    this.raza = raza
  }
  set guardarColor(color){
    this.color = color
  }
  get sacarColor(){
    return this.color
  }
  static saludar(){
    alert("Hola")
  }
}

let miGato = new Gato()
console.log(miGato)

miGato.guardarColor = "Negro"
console.log(miGato.sacarColor)

class GatoEspecial extends Gato {
  constructor(nombre, raza, color, habilidad){
    super(nombre, raza, color)
    this.habilidad = habilidad
  }
  setHabilidad(habilidad){
    this.habilidad = habilidad
  }
  getHabilidad(){
    return this.habilidad
  }
  ejecutar(){
    console.log(`${this.nombre} esta usando la habilidad de ${this.habilidad} para ayudar a su dueño`)
  }
}

let superGato = new GatoEspecial("Max", "Japonesa", "Blanco", "Super Escabación")

console.log(superGato)