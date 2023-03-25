window.addEventListener('load', () => {
    const header = document.querySelector('.header');
    
    const body = document.querySelector('body');

    let openMenuButton = document.querySelector('.open-menu-button');

    let closeMenuButton = document.querySelector('.close-button-container');

    const sideNavbar = document.querySelector('.side-navbar-container');

    const searchSection = document.querySelector('.search-section-container');

    const blackScreen = document.querySelector('.black-screen'); //Pantalla negra

    openMenuButton.addEventListener('click', () => { // ABRIR MENU

        body.classList.add('noScroll');
        // Si abre el menu y estaba activo el search-form, se lo desactivo
        searchSection.classList.remove('search-section-container-active');

        // Si abre el menu, pongo el black-screen
        blackScreen.classList.add('black-screen-active');

        sideNavbar.classList.add('side-navbar-container-active');
    });

    closeMenuButton.addEventListener('click', () => { // CERRAR MENU

        body.classList.remove('noScroll');

        sideNavbar.classList.remove('side-navbar-container-active');
        blackScreen.classList.remove('black-screen-active')
    });

    blackScreen.addEventListener('click', () => { // CERRAR MENU

        body.classList.remove('noScroll');
        sideNavbar.classList.remove('side-navbar-container-active');
        openMenuButton.classList.add('burguer-menu-btn-active');

        closeMenuButton.classList.remove('burguer-menu-btn-active');

        blackScreen.classList.remove('black-screen-active');
    })



    const headerShow = () => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                console.log("El usuario está haciendo scroll hacia arriba");
                header.classList.add('header-active')
            } else {
                header.classList.remove('header-active')
                console.log("El usuario está haciendo scroll hacia abajo");
            }
            prevScrollPos = currentScrollPos;
        }
    }

    headerShow()

})