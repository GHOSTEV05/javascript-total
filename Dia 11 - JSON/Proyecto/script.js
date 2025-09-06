function mostrarInformacion() {
    let datos;

    fetch('resumen.json')
        .then(resp => resp.json())
        .then((salida) => {
            datos = salida;

            let elementoNombreBanco = document.getElementById("nombreBanco");
            let elementoCiudad = document.getElementById("ubicacion");
            let elementoTitular = document.getElementById("nombreUsuario");
            let elementoNumCuenta = document.getElementById("numCuenta");
            let elementoDolares = document.getElementById("montoDolares");
            let elementoEuros = document.getElementById("montoEuros");
            let elementoCBU = document.getElementById("cbu");
            let elementoFechaApertura = document.getElementById("fechaApertura");

            elementoNombreBanco.textContent = datos.banco;
            elementoCiudad.textContent = datos.sucursal;
            elementoTitular.textContent = datos.titular;
            elementoNumCuenta.textContent = datos.nro_cuenta;
            elementoDolares.textContent = datos.saldo[0].monto;
            elementoEuros.textContent = datos.saldo[1].monto;
            elementoCBU.textContent = datos.cbu;
            elementoFechaApertura.textContent = datos.abierto;
        })
        .catch(function (error) {
            console.log("Error: " + error.message);
        });
}