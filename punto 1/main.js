class Persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }
    saludar() {
        return `<h2>Hola soy ${this.nombre}</h2>`
    }
}


let persona1 = new Persona('Jeanfrak0',20,'machorro')

console.log(persona1.saludar())