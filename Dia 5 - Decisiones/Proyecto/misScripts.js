function recomendarPelicula(genero) {
    let elementoTexto = document.getElementById("textoRecomendacion");
    let edad = document.getElementById("edadUsuario").value;

    switch (genero) {
        case 'comedia':
            if(edad<13){
                elementoTexto.textContent="Back to the future";
            }
            else{
                if(edad<16){
                    elementoTexto.textContent="The Truman Show";
                }
                else{
                    elementoTexto.textContent="The Wolf of Wall Street";
                }
            }

            break;
        case 'crimen':
            if(edad<13){
                elementoTexto.textContent="No hay peliculas aptas para la edad ingresada en esta categoría";
            }
            else{
                if(edad<16){
                    elementoTexto.textContent="El secreto de sus ojos";
                }
                else{
                    elementoTexto.textContent="The Godfather";
                }
            }

            break;
        case 'drama':
            if(edad<13){
                elementoTexto.textContent="Casablanca";
            }
            else{
                if(edad<16){
                    elementoTexto.textContent="The Shawshank Redemption";
                }
                else{
                    elementoTexto.textContent="Taxi Driver";
                }
            }
            
            break;
        case 'musical':
            if(edad<13){
                elementoTexto.textContent="La La Land";
            }
            else{
                if(edad<16){
                    elementoTexto.textContent="Los miserables";
                }
                else{
                    elementoTexto.textContent="The Rocky Horror Picture Show";
                }
            }
            
            break;
    }
}