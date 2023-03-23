window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const togglerOpenButton = document.querySelector('.search-container');
    const togglerCloseButton = document.querySelector('.close-search-form-button');
    const blackScreen = document.querySelector('.black-screen');
    const searchSection = document.querySelector('.search-main-section'); //Es la seccion donde se encuentran el buscador
    const sideNavbar = document.querySelector('.side-navbar');
    const header = document.querySelector('.header-section');
    const input = document.querySelector('.search-input');
    const burguerMenuCloseButton = document.querySelector('.close-menu-button');
    const burguerMenuOpenButton = document.querySelector('.open-menu-button');
    // Para ver si esta en la home
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname)

    togglerOpenButton.addEventListener('click', () => { // Si abre el searchForm
        burguerMenuCloseButton.classList.remove('icon-active');
        burguerMenuCloseButton.classList.add('icon-inactive'); //Saco el x button
        burguerMenuOpenButton.classList.add('icon-active');
        burguerMenuOpenButton.classList.remove('icon-inactive'); //Pongo el open btn
        input.focus(); //Asi el input ya esta para escribir
        header.classList.add('header-section-active');
        sideNavbar.classList.remove('side-navbar-active');
        body.classList.add('noScroll');//Para que no me deje scrollear
        
        blackScreen.classList.add('black-screen-active');
        blackScreen.style.zIndex = '99'; //Porque el header tiene que tapar la pantalla negra

        searchSection.classList.add('search-main-section-active');
    
    })

    togglerCloseButton.addEventListener('click', () => { //Si toca la x
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear
        searchSection.classList.remove('search-main-section-active');
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';

        if (!isNotInHome) {
            header.classList.remove('header-section-active');
        }
    });
    blackScreen.addEventListener('click', () => { //Si toca la pantalla negra
        input.value = ''; //Borro el contenido del input
        body.classList.remove('noScroll');//Para que no me deje scrollear
        searchSection.classList.remove('search-main-section-active');
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';
        
        searchFormContainer.classList.add('search-form-container-inactive');
        searchFormContainer.classList.remove('search-form-container-active');
        if (!isNotInHome) {
            header.classList.remove('header-section-active');
        }
    });

    // TODO: HACER FUNCIONES PARA ACTIVATE-DEACTIVATE
    
    // function activateClass(array){//['.header','.side-bar',...]
    //     array.forEach(elem=>{
    //         document.querySelector(elem).classList.add(`${elem}-active`);
    //     })
    // }

})