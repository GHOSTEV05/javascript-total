let arrayCalificaciones = [4.5, 2.7, 3.3, 2.9, 4.3];

let listaCalificaciones = document.getElementById("listaCalificaciones");

function listarCalificaciones(){
    for (let i in arrayCalificaciones){
        itemLista = document.createElement("li");
        itemLista.innerText = arrayCalificaciones[i];
        listaCalificaciones.appendChild(itemLista)
    }
}

function promedio(){
    let sumaPromedio = 0;
    let promedioResultado = 0;
    for(let i=0; i<arrayCalificaciones.length; i++){
        sumaPromedio=sumaPromedio + arrayCalificaciones[i];

        promedioResultado = sumaPromedio/5;
    }

    document.getElementById("resultadoPromedio").textContent = promedioResultado;
}

function notaMasAlta(){
    let masAlta = 0;
    let i=0;
    while(i<arrayCalificaciones.length){
        if(arrayCalificaciones[i]>masAlta){
            masAlta=arrayCalificaciones[i];
        }
        i++;
    }

    document.getElementById("resultadoAlta").textContent = masAlta;
}

function aplazos(){
    let hayAplazos = false;
    let i = 0;
    do{
        if(arrayCalificaciones[i]<4){
            hayAplazos = true;
            break;
        }
        i++;
    }while(i<arrayCalificaciones.length);

    if(hayAplazos){
        document.getElementById("resultadoAplazos").textContent = "Hay al menos un aplazo";
    }
    else{
        document.getElementById("resultadoAplazos").textContent = "No hay ningún aplazo";
    }
}