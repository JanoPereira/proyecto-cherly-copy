window.addEventListener('load', () => {
    const loginRegisterContainer = document.querySelector('.login-register-container');
    const loginBtn = document.querySelectorAll('.login-toggler');
    const body = document.querySelector('body');
    const blackScreen = document.querySelector('.black-screen');
    const exitBtn = document.querySelector('.login-exit-btn-container');

    const sideNavbar = document.querySelector('.side-navbar-container');

    const searchSection = document.querySelector('.search-section-container');

    // Para saber si esta en las vistas donde el header se camufla y tiene hover
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname);
    const header = document.querySelector('.header');

     // Botones del menu para abrir/cerrar
    const burguerMenuCloseButton = document.querySelector('.close-menu-button');
    const burguerMenuOpenButton = document.querySelector('.open-menu-button');

    loginBtn.forEach(btn => {
        btn.addEventListener('click', () => { //ABRIR LOGIN VIEW
            loginRegisterContainer.classList.add('login-register-container-active');
            body.classList.add('noScroll');

            blackScreen.classList.add('black-screen-active')
            blackScreen.style.zIndex = '101'; //Porque el header tiene que tapar la pantalla negra

            // Si estaba el menu, lo saco
            sideNavbar.classList.remove('side-navbar-container-active');

            // Si estaba en el menu, tiene el boton x, le tengo que dejar el bars
            burguerMenuCloseButton.classList.remove('icon-active');
            burguerMenuCloseButton.classList.add('icon-inactive'); //Saco el x button
            burguerMenuOpenButton.classList.add('icon-active');
            burguerMenuOpenButton.classList.remove('icon-inactive'); //Pongo el open btn

            // Si estaba el menu de busqueda, lo saco
            searchSection.classList.remove('search-section-container-active')
        });
    });


    exitBtn.addEventListener('click', () => {
        loginRegisterContainer.classList.remove('login-register-container-active');
        body.classList.remove('noScroll');

        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';

        if (!isNotInHome) {
            console.log('Tendria que sacarlo');
            header.classList.remove('header-active');
        }
    });
    blackScreen.addEventListener('click', () => {
        loginRegisterContainer.classList.remove('login-register-container-active');
        body.classList.remove('noScroll');

        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';

        if (!isNotInHome) {
            console.log('Tendria que sacarlo');
            header.classList.remove('header-active');
        }
    });


    // LOGICA PARA MOSTRAR CONTRASENA
    const showPassBtn = document.querySelector('.show-password-btn');
    const hidePassBtn = document.querySelector('.hide-password-btn')
    const passInput = document.getElementById('password');
    showPassBtn.addEventListener('click', () => {
        passInput.type = 'text';
        hidePassBtn.classList.remove('hidden');
        showPassBtn.classList.add('hidden');

    });
    hidePassBtn.addEventListener('click', () => {
        passInput.type = 'password';
        hidePassBtn.classList.add('hidden');
        showPassBtn.classList.remove('hidden');
    });
});