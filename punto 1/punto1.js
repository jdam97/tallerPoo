let form = document.querySelector('#form')
let saludar = document.querySelector('#saludar')

class Persona {
    constructor({nombre, edad, sexo}) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }
    saludar() {
        return `Hola soy ${this.nombre}`
    }
    static esMayorDeEdad(edad){ 
        if (edad>=18){
            return `mayor de edad: ${true}`
        }
        else return `mayor de edad: ${false}`
    }
    get getEdad(){
        return this.edad
    }
}

class Estudiante extends Persona{
    constructor({nombre,edad,sexo,carrera}){
        super({ nombre, edad, sexo })
        this.carrera = carrera
    }

    estudiar(){
        return `Estoy estudiando ${this.carrera}`
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let persona1 = new Persona(data)
    let estudiante1 = new Estudiante(data)
    saludar.innerHTML = `<div>${persona1.saludar()}</div>
    <div>${estudiante1.saludar()} </div>
    <div>${estudiante1.estudiar()}</div>
    <div>${Persona.esMayorDeEdad(persona1.getEdad)}</div>`
    saludar.classList.add('saludar')
    form.reset()
})

