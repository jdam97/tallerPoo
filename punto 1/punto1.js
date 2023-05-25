let form = document.querySelector('#form')
let saludar = document.querySelector('.saludar')

class Persona {
    constructor({nombre, edad, sexo}) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }
    saludar() {
        return `<h2>Hola soy ${this.nombre}</h2>`
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
        return `<h2>Estoy estudiando ${this.carrera}</h2>`
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let persona1 = new Persona(data)
    let estudiante1 = new Estudiante(data)
    saludar.innerHTML = `${persona1.saludar()}
    ${estudiante1.saludar()} ${estudiante1.estudiar()}
    ${Persona.esMayorDeEdad(persona1.getEdad)}`
    
    form.reset()
})

