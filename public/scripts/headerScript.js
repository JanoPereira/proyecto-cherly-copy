import { activateClass, deactivateClass } from './utils.js';

window.addEventListener('load', () => {
    const body = document.querySelector('body');

    let openMenuButton = document.querySelector('.open-menu-button');

    let closeMenuButton = document.querySelector('.close-button-container');

    const sideNavbar = 'side-navbar-container';

    const searchSection = 'search-section-container';

    const blackScreen = 'black-screen'; //Pantalla negra

    let classesToActivate = [];
    let classesToDeactivate
    openMenuButton.addEventListener('click', () => { // ABRIR MENU
        classesToActivate = [blackScreen, sideNavbar];
        activateClass(classesToActivate);

        classesToDeactivate = [searchSection];
        deactivateClass(classesToDeactivate);

        body.classList.add('noScroll');
    });

    closeMenuButton.addEventListener('click', () => { // CERRAR MENU

        classesToDeactivate = [sideNavbar, blackScreen];
        deactivateClass(classesToDeactivate);

        body.classList.remove('noScroll');
    });

    document.querySelector(`.${blackScreen}`).addEventListener('click', () => { // CERRAR MENU

        classesToDeactivate = [sideNavbar, blackScreen];
        deactivateClass(classesToDeactivate);

        body.classList.remove('noScroll');
    })


    // LOGICA DEL HEADER AL SCROLLEAR
    const header = document.querySelector('.header');

    const isAtTop = function () { //Para saber si esta arriba de todo
        return (document.documentElement.scrollTop || document.body.scrollTop) === 0;
    };
    const headerShow = () => { //Para hacer el header aparezca/desaparezca
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {

            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) { //Scroll Up
                header.classList.add('header-active');
                header.classList.remove('header-hidden');

            } else { //Scroll Down
                header.classList.remove('header-active');
                header.classList.add('header-hidden');
            }
            if (isAtTop()) {
                header.classList.remove('header-hidden');
                header.classList.remove('header-active');
            }
            prevScrollPos = currentScrollPos;
        }
    }

    headerShow()

})