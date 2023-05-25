let nombre = document.querySelector('#nombre')
let edad = document.querySelector('#edad')
let sexo = document.querySelector('#sexo')
let saludar = document.querySelector('.saludar')
let form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    class Persona {
        constructor(name, edad, sexo) {
            this.name = name
            this.edad = edad
            this.sexo = sexo
        }
        saludar() {
            return `<h2>Hola soy ${this.name}</h2>`
        }
    }

    let persona1 = new Persona(nombre.value, edad.value, sexo.value)
    saludar.innerHTML = persona1.saludar()
    form.reset()
})