function evaluarCompra() {
    let respuesta = document.getElementById("decision");

    let precio = document.getElementById("textoPrecio").value;

    if(precio<5){
        respuesta.textContent="Comprar dos cartones de leche";
    }
    else{

    }
}