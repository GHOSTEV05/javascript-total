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
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return(miNumero);
}

function calcular() {
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for (let item of elementosVentas.children) {
            let valorVenta = extraerNumeroElemento(item.children[1]);
            ventas[posicionVentas] = valorVenta;
            posicionVentas++;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("textoSalida");

    elementoSalida.textContent=mensajeSalida;

    //Loop para cambiar de color a las ventas mas altas y mas bajas
    for(let item of elementosVentas.children){
        let elementoInput = item.children[1];
        let valor = +elementoInput.value;

        elementoInput.classList.remove("numeroMayorVerde", "numeroMenorRojo");

        if(valor==ventaMayor) {
            elementoInput.classList.add("numeroMayorVerde");
        }
        else if(valor==ventaMenor) {
            elementoInput.classList.add("numeroMenorRojo");
        }
    }
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