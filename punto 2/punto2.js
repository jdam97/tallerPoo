let form = document.querySelector('#form')
let div = document.querySelector('#mostrar')

class Animal{
    constructor({nombre,edad,sonido}){
        this.nombre = nombre
        this.edad = edad
        this.sonido = sonido
    }

    hacerSonido(){
        return this.sonido
    }
    
}

class Perro extends Animal{
    constructor({nombre,edad,sonido,raza}){
        super(nombre,edad,sonido)
        this.raza = raza
    }
       
    moverCola(){
        return `el perro está moviendo la cola`
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let animal1 = new Animal(data)
    let perro1 = new Perro(data)
    div.innerHTML = `<div>${animal1.hacerSonido()}</div>
    <div>${perro1.moverCola()}</div>
    `
})