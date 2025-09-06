function Automovil(marca, modelo, color, anio, titular) {
    this._marca = marca;
    this._modelo = modelo;
    this._color = color;
    this._anio = anio;
    this._titular = titular;
}

let automovil1 = new Automovil("Toyota", "Corolla", "Rojo", 2020, "Santiago Escobar");
let automovil2 = new Automovil("Honda", "Civic", "Negro", 2018, "María López");
let automovil3 = new Automovil("Ford", "Mustang", "Azul", 2023, "Carlos Ramírez");

let arrayAutomoviles = [automovil1,automovil2,automovil3];

Automovil.prototype.venderAutomovil = function(nuevoDuenio) {
    this._titular = nuevoDueño;
}

Automovil.prototype.verAuto = function() {
    let mensajeSalida = `${this._marca} ${this._modelo} ${this._color} - ${this._anio} - ${this._titular}`;
    return mensajeSalida;
}

Automovil.prototype.encender = function() {
    alert("El automovil está en marcha");
}

function mostrarRegistros() {
    let elementoContenedor = document.getElementById("listaRegistros");
    for(let automovil of arrayAutomoviles) {
        let elementoLista = document.createElement("li");
        elementoLista.innerText = automovil.verAuto();
        elementoContenedor.appendChild(elementoLista);
    }
}