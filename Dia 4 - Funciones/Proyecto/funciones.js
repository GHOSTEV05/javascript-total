function suma() {
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;
    let resultado = numero1 + numero2;
    mostrarResultado(resultado);
}

function resta() {
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;
    let resultado = numero1 - numero2;
    mostrarResultado(resultado);
}

function multiplicacion() {
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;
    let resultado = numero1 * numero2;
    mostrarResultado(resultado);
}

function division() {
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;
    let resultado = numero1 / numero2;
    mostrarResultado(resultado);
}

function potencia() {
    let base = +document.getElementById("primerNumero").value;
    let exponente = +document.getElementById("segundoNumero").value;
    let resultado = Math.pow(base, exponente);
    mostrarResultado(resultado);
}

function raiz() {
    let numero = +document.getElementById("primerNumero").value;
    let resultado = Math.sqrt(numero);
    mostrarResultado(resultado);
}

function valorAbsoluto() {
    let numero = +document.getElementById("primerNumero").value;
    let resultado = Math.abs(numero);
    mostrarResultado(resultado);
}

function randomLimites() {
    let minimo = +document.getElementById("primerNumero").value;
    let maximo = +document.getElementById("segundoNumero").value;
    let resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    mostrarResultado(resultado);
}

function redondear() {
    let valor = +document.getElementById("resultado").value;
    resultado = Math.round(valor);
    mostrarResultado(resultado)
}

function redondeoFloor() {
    let valor = +document.getElementById("resultado").value;
    resultado = Math.floor(valor);
    mostrarResultado(resultado);
}

function redondeoCeil() {
    let valor = +document.getElementById("resultado").value;
    resultado = Math.ceil(valor);
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}