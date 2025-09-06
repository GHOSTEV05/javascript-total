function multiplicar(){
    textoTabla = +document.getElementById("textoTabla").value;

    tablaMultiplicar = document.getElementById("listaTabla");

     for(let i = 1; i<=10; i++){
        let resultado = textoTabla * i;

        let stringResultado = textoTabla + " x " + i + " = " + resultado;

        let itemLista = document.createElement("li");
        itemLista.innerText = stringResultado;

        tablaMultiplicar.appendChild(itemLista);
     }
}