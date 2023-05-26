let form = document.querySelector('#form')
let div = document.querySelector('#mostrar')


class Figura {
    constructor({color,area}){
        this.color = color
        this.area = area
    }

    calcularArea(){
        return this.area
    }
}

class Circulo extends Figura{
    constructor({color,area,radio}){
        super(color,area)
        this.radio = radio
    }
    calcularArea(){
        return Math.trunc((this.radio*this.radio)*Math.PI)
    }
}

class Rectangulo extends Figura{
    constructor({color,area,largo,ancho}){
        super(color,area)
        this.largo = largo
        this.ancho = ancho
    }
    calcularArea(){
        return this.largo*this.ancho
    }

}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let figura1 = new Figura(data)
    let circulo1 = new Circulo(data)
    let rectangulo1 = new Rectangulo(data)
    div.textContent = `Área: ${figura1.calcularArea()} 
    Área circulo: ${circulo1.calcularArea()}
    Área rectangulo: ${rectangulo1.calcularArea()}`

})


