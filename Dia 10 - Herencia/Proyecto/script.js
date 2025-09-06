class Animal {
    constructor(nombre, peso, edad) {
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    informacion() {
        return `${this._nombre} - ${this._peso} kg - ${this._edad} años`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this._raza = raza;
    }

    informacion() {
        return `${this._nombre} - ${this._peso} kg - ${this._edad} años - ${this._raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this._sexo = sexo;
    }

    informacion() {
        return `${this._nombre} - ${this._peso} kg - ${this._edad} años - ${this._sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this._color = color;
    }

    informacion() {
        return `${this._nombre} - ${this._peso} kg - ${this._edad} años - ${this._color}`;
    }
}

// Instancias de Perro
let perro1 = new Perro("Max", 25, 4, "Labrador");
let perro2 = new Perro("Rocky", 30, 6, "Pastor Alemán");
let perro3 = new Perro("Toby", 10, 2, "Beagle");

let arrayPerros = [perro1, perro2, perro3];

// Instancias de Gato
let gato1 = new Gato("Misu", 5, 3, "Hembra");
let gato2 = new Gato("Tom", 6, 4, "Macho");
let gato3 = new Gato("Luna", 4, 1, "Hembra");

let arrayGatos = [gato1, gato2, gato3];

// Instancias de Conejo
let conejo1 = new Conejo("Bunny", 2, 1, "Blanco");
let conejo2 = new Conejo("Copo", 3, 2, "Gris");
let conejo3 = new Conejo("Nieve", 2.5, 1.5, "Negro");

let arrayConejos = [conejo1, conejo2, conejo3];

function mostrarInformacion() {
    let listaPerros = document.getElementById("listaPerros");
    let listaGatos = document.getElementById("listaGatos");
    let listaConejos = document.getElementById("listaConejos");

    listaPerros.textContent = "";
    listaGatos.textContent = "";
    listaConejos.textContent = "";

    let tituloPerros = document.createElement("h3");
    tituloPerros.textContent = "Perros"
    listaPerros.appendChild(tituloPerros);
    for (let perro of arrayPerros) {
        let lista = document.createElement("li");
        lista.textContent = perro.informacion();
        listaPerros.appendChild(lista);
    }

    let tituloGatos = document.createElement("h3");
    tituloGatos.textContent = "Gatos"
    listaGatos.appendChild(tituloGatos);
    for (let gato of arrayGatos) {
        let lista = document.createElement("li");
        lista.textContent = gato.informacion();
        listaGatos.appendChild(lista);
    }

    let tituloConejos = document.createElement("h3");
    tituloConejos.textContent = "Conejos"
    listaConejos.appendChild(tituloConejos);
    for (let conejo of arrayConejos) {
        let lista = document.createElement("li");
        lista.textContent = conejo.informacion();
        listaConejos.appendChild(lista);
    }
}