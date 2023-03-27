import {activateClass,deactivateClass} from './utils.js';

window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const togglerOpenButton = document.querySelector('.search-container');
    const togglerCloseButton = document.querySelector('.close-search-form-button');
    const input = document.querySelector('.search-input');
   
    const blackScreen = 'black-screen';
    const searchSection = 'search-section-container'; //Es la seccion donde se encuentran el buscador
    const sideNavbar = 'side-navbar-container';
    const header = 'header';
    
    

    togglerOpenButton.addEventListener('click', () => { // Si abre el searchForm
        let classesToActivate = [blackScreen,searchSection];
        activateClass(classesToActivate);
        
        let classesToDeactivate = [sideNavbar];
        deactivateClass(classesToDeactivate);

        input.focus(); //Asi el input ya esta para escribir
        body.classList.add('noScroll');//Para que no me deje scrollear    
    })

    togglerCloseButton.addEventListener('click', () => { //Si toca la x
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear
        
        let classesToDeactivate = [searchSection,blackScreen];
        deactivateClass(classesToDeactivate);
    });
    document.querySelector(`.${blackScreen}`).addEventListener('click', () => { //Si toca la pantalla negra
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear

        let classesToDeactivate = [searchSection,blackScreen];
        deactivateClass(classesToDeactivate);
  
    });

})