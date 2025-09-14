async function cargarPagina() {
    cargarElementos();
    let datos = await consultaCotizaciones();
    if (datos != null) {
        cargarCotizaciones(datos);
    }
}

async function consultaCotizaciones() {
    let datosCOP, datosEUR, datosUSD;
    // COP
    try {
        const respuestaCOP = await fetch('https://open.er-api.com/v6/latest/COP');
        datosCOP = await respuestaCOP.json();
    } catch (error) {
        console.error("Error en la api: " + error);
    }

    // USD
    try {
        const respuestaUSD = await fetch('https://open.er-api.com/v6/latest/USD');
        datosUSD = await respuestaUSD.json();
    } catch (error) {
        console.error("Error en la api: " + error);
    }

    // EUR
    try {
        const respuestaEUR = await fetch('https://open.er-api.com/v6/latest/EUR');
        datosEUR = await respuestaEUR.json();
    } catch (error) {
        console.error("Error en la api: " + error);
    }

    return {
        datosUSD,
        datosCOP,
        datosEUR,
    };
}

function cargarElementos() {
    document.getElementById('logo').src = "logo.webp";
    document.getElementById('titulo').textContent = "Cotizaciones Online BITMAIN";
}

function cargarCotizaciones(datos) {

    let datosUSD = datos.datosUSD;
    let datosCOP = datos.datosCOP;
    let datosEUR = datos.datosEUR;

    document.getElementById("cargando").style.display = "none";
    document.getElementById('USDaEUR').textContent = "USD a EUR: " + datosUSD.rates.EUR;
    document.getElementById('COPaUSD').textContent = "COP a USD: " + datosCOP.rates.USD;
    document.getElementById('COPaEUR').textContent = "COP a EUR: " + datosCOP.rates.EUR;
}