window.addEventListener('unload',()=>{
    window.scrollTo(0,0);
})
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    let video = document.querySelector('.video');
    const rect = video.getBoundingClientRect(); 
    const elementPosition = rect.y //posicion que esta con respecto al total
   
    // Función que se ejecutará cuando se haga scroll
    function detectarElementoEnPantalla() {
        // Obtener la posición del elemento
        
        // console.log(`rect: ${elementPosition}`);
        // console.log(`pagey: ${window.pageYOffset }`);

        if(window.pageYOffset >= elementPosition){
            console.log('Se llego al video');
        }

        // Obtener la posición actual de la ventana gráfica
        const windowHeight = window.innerHeight;
        const totalViewportHeight = document.documentElement.scrollHeight;
        // console.log(totalViewportHeight);
        const windowTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowBottom = windowTop + windowHeight;

        // Verificar si el elemento está visible en la pantalla
        if (rect.top < windowBottom && rect.bottom > windowTop) {
            // El elemento está visible en la pantalla
            video.play(); //Arranca la reproduccion
        } else {
            // El elemento no está visible en la pantalla
            video.pause(); //Pausa la reproduccion
        }
    }

    // Detectar el elemento en la posición inicial
    detectarElementoEnPantalla();

    // Asignar la función al evento scroll
    window.addEventListener('scroll', detectarElementoEnPantalla);
})