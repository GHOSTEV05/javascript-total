function extraerNumeroElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return(miNumero);
}

function calcular() {
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extraerNumeroElemento("ventasTienda1");
    ventas2 = extraerNumeroElemento("ventasTienda2");
    ventas3 = extraerNumeroElemento("ventasTienda3");
    ventas4 = extraerNumeroElemento("ventasTienda4");
    ventas5 = extraerNumeroElemento("ventasTienda5");
    ventas6 = extraerNumeroElemento("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("textoSalida");

    elementoSalida.textContent=mensajeSalida;
}