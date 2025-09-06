function consultarPrecio(){
    let respuesta = document.getElementById("textoPrecio");
    let fruta = +document.getElementById("fruta").value;

    switch(fruta){
        case 1:
            respuesta.textContent= "$8.45";
            break;
        case 2:
            respuesta.textContent= "$6.32";
            break;
        case 3:
            respuesta.textContent= "$1.17";
            break;
        case 4:
            respuesta.textContent= "$2.36";
            break;
        case 5:
            respuesta.textContent= "$7.86";
            break;
    }
}