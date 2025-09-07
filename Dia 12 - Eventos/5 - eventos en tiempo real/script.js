let socket = new WebSocket('ws://localhost:8080');

let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function monstrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById('mensajesChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);
};

botonEnviar.onclick = function() {
    let mensaje = mensajeIngresado.value;
    monstrarMensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event)  {
    let mensaje = event.data;
    mostrarMensaje(mensaje);
}