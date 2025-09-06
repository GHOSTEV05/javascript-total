function crearTiendas(idContenedor, min, cantidadTiendas) {
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(idContenedor);

    //loop para crear la cantidad de tiendas pedida
    for(let i=1; i<=cantidadTiendas; i++) {

        //crear eltexto de label para poder llamar la funcion
        let textoLabel = "Tienda " + i;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoLabel, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin) {
    //crear etiquetas de <p>

    let elementoParrafo = document.createElement("p");

    //crear etiqueta label
    let elementoLabel = document.createElement("label");
    elementoLabel.innerText = textoLabel + ": ";

    //conectar con input
    elementoLabel.setAttribute("for", textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer  atributos de input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id","textoLabel");
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo

    return elementoParrafo;
}

function extraerNumeroElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return(miNumero);
}

function calcular() {
    let ventas = [];

    ventas[0] = extraerNumeroElemento("ventasTienda1");
    ventas[1] = extraerNumeroElemento("ventasTienda2");
    ventas[2] = extraerNumeroElemento("ventasTienda3");
    ventas[3] = extraerNumeroElemento("ventasTienda4");
    ventas[4] = extraerNumeroElemento("ventasTienda5");
    ventas[5] = extraerNumeroElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas +
                        "/ Venta mayor: " + ventaMayor +
                        "/ Venta menor: " + ventaMenor;
    let elementoSalida = document.getElementById("textoSalida");

    elementoSalida.textContent=mensajeSalida;
}

function sumarTotal(array){
    let total=0;

    for(let ventas of array){
        total=total + ventas;
    }

    return total;
}

function calcularMayor(array) { 
    let maximo = array[0];

    for(let venta of array) {
        if(venta>maximo) {
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array) { 
    let minimo = array[0];

    for(let venta of array) {
        if(venta<minimo) {
            minimo = venta;
        }
    }

    return minimo;
}