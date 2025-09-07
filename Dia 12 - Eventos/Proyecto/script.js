let itemsJson = document.getElementById('itemsJson');

itemsJson.addEventListener('change', cambiarItem);

function cambiarItem() {
    let itemElegido = itemsJson.value;
    
    let evento = new CustomEvent('cambioItem');

    itemsJson.dispatchEvent(evento);
}

itemsJson.addEventListener('cambioItem', function(){
    alert('Se modificó el archivo base a ' + itemsJson.value);
});


let campoBuscar = document.getElementById('inputBuscar');

function verificarTexto(event) {
    if((event.keyCode < 65 || event.keyCode > 90) && event.keyCode !== 8 && event.keyCode !== 32) {
        event.preventDefault();
    }
}

campoBuscar.addEventListener('keydown', verificarTexto);

let botonBuscar = document.getElementById('botonBuscar');

botonBuscar.addEventListener('click', function() {
    let listaResultados = document.getElementById('resultadoBusqueda');
    listaResultados.innerHTML = ''; 

    let datos;

    fetch(itemsJson.value)
    .then(resp => resp.json())
    .then((salida) => {
        datos = salida.data;

        for (let item of datos) {
            let nombre = item.nombre;
            let sinopsis = item.sinopsis;

            if (nombre.startsWith(campoBuscar.value.toUpperCase())) {
                let elementoParrafo = document.createElement("p");
                let elementoLista = document.createElement("li");

                elementoParrafo.textContent = sinopsis;
                elementoLista.textContent = nombre;

                elementoLista.appendChild(elementoParrafo);
                listaResultados.appendChild(elementoLista);
                
                elementoParrafo.style.display = 'none';

                elementoLista.addEventListener('mouseover', function(){
                    elementoParrafo.style.display = 'block';

                });
                elementoLista.addEventListener('mouseout', function(){
                    elementoParrafo.style.display = 'none';
                });
            }
        }
    });
});