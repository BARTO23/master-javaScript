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