window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const togglerOpenButton = document.querySelector('.search-container');
    const searchFormContainer = document.querySelector('.search-form-container');
    const togglerCloseButton = document.querySelector('.close-search-form-button');
    const blackScreen = document.querySelector('.black-screen');
    const mainSection = document.querySelector('.search-main-section'); //Es la seccion donde se encuentran ambas cosas
    const sideNavbar = document.querySelector('.side-navbar');
    const header = document.querySelector('.header-section');
    const input = document.querySelector('.search-input');

    // Para ver si esta en la home
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname)

    togglerOpenButton.addEventListener('click', () => { // Si abre el menu
        input.focus(); //Asi el input ya esta para escribir
        header.classList.add('header-section-active');
        sideNavbar.classList.remove('side-navbar-active');
        body.classList.add('noScroll');//Para que no me deje scrollear
        blackScreen.classList.add('black-screen-active');
        mainSection.classList.add('search-main-section-active');
        searchFormContainer.classList.add('search-form-container-active');
        searchFormContainer.classList.remove('search-form-container-inactive');
    })

    togglerCloseButton.addEventListener('click', () => { //Si toca la x
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear
        mainSection.classList.remove('search-main-section-active');
        blackScreen.classList.remove('black-screen-active');
        searchFormContainer.classList.add('search-form-container-inactive');
        searchFormContainer.classList.remove('search-form-container-active');
        if (!isNotInHome) {
            header.classList.remove('header-section-active');
        }
    });
    blackScreen.addEventListener('click', () => { //Si toca la pantalla negra
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear
        mainSection.classList.remove('search-main-section-active');
        blackScreen.classList.remove('black-screen-active');
        searchFormContainer.classList.add('search-form-container-inactive');
        searchFormContainer.classList.remove('search-form-container-active');
        if (!isNotInHome) {
            header.classList.remove('header-section-active');
        }
    })

})