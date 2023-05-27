let form = document.querySelector('#form')
let div = document.querySelector('#mostrar')

class Empleado{
    static id = 0
    constructor({nombre,edad,sueldo}){
        this.nombre = nombre
        this.edad = edad
        this.sueldo = sueldo
    }
    calcularSalarioAnual(){
        return Number(this.sueldo * 12)
    }

    static generarIdEmpleado(){
        return Empleado.id++
    }

}

class Gerente extends Empleado{
    constructor({nombre,edad,sueldo,departamento}){
        super({nombre,edad,sueldo})
        this.departamento = departamento
    }
    calcularSalarioAnual(){
       return Math.trunc(Number(this.sueldo*1.10)*12)
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let empleado1 = new Empleado(data)
    let gerente1 = new Gerente(data)    
    div.innerHTML = `
    Salario Anual = ${empleado1.calcularSalarioAnual()}
    Salario Gerente = ${gerente1.calcularSalarioAnual()} 
    ID = ${Empleado.generarIdEmpleado()} 
    `
    form.reset()
})
