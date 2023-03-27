export function activateClass(array) {
    //El array que llegan son los nombres de las clases de las funciones
    // a las cuales quiero agregar el '#nombreClase-active'
    array.forEach(element => {
        document.querySelector(`.${element}`).classList.add(`${element}-active`);
    });
}
export function deactivateClass(array) {
    //El array que llegan son los nombres de las clases de las funciones
    // a las cuales quiero agregar el '#nombreClase-active'
    array.forEach(element => {
        document.querySelector(`.${element}`).classList.remove(`${element}-active`);
    });
}
