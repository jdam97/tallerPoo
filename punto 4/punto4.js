let form = document.querySelector('#form')
let div = document.querySelector('#mostrar')

class Vehiculo {
    constructor({marca,modelo,velocidad}){
        this.marca = marca
        this.modelo = modelo
        this.velocidad = velocidad
    }
    get getVelocidad(){
        return this.velocidad
    }
    acelerar(){
       return Number(this.velocidad)+10
    }
    static convertirKmHEnMph(velocidad){
        return Number(velocidad)/1.60934
    }
}

class Coche extends Vehiculo{
    constructor({velocidad,combustible}){
        super({velocidad})
        this.combustible = combustible
    }
    acelerar(){
        return Number(this.velocidad)+20
    }

}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let vehiculo1 = new Vehiculo(data)
    let coche1 = new Coche(data)
    div.innerHTML = `
        <div>Velocidad: ${vehiculo1.acelerar()}</div>
        <div>Velocidad actual: ${coche1.acelerar()}</div>
        <div>Velocidad en millas: ${Math.trunc(Vehiculo.convertirKmHEnMph(vehiculo1.getVelocidad))}</div>
    `
    form.reset()
})