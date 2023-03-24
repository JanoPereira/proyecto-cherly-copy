window.addEventListener('load', () => {
    // FUNCIONES
    const header = document.querySelector('.header');
    let burgerIcon = document.querySelector('.open-menu-button');
    let xIcon = document.querySelector('.close-menu-button');
    
    const sideNavbar = document.querySelector('.side-navbar-container');
        
    const searchSection = document.querySelector('.search-section-container');
    
    const blackScreen = document.querySelector('.black-screen'); //Pantalla negra
    
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname);

    if (isNotInHome) { // agregar estilo de header si no coincide con home
        // header.style.position = 'static';
        header.classList.add('header-active');
    }

    console.log(sideNavbar.dataset.id)

    const menuBtn = document.querySelectorAll('.burguer-menu-btn');

    const listenTogglerButton = () => {

        menuBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('fa-x')) { // CERRAR MENU

                    sideNavbar.classList.remove('side-navbar-container-active');
                    burgerIcon.classList.add('burguer-menu-btn-active');
                    // burgerIcon.classList.remove('icon-inactive');
                    // xIcon.classList.add('icon-inactive');
                    xIcon.classList.remove('burguer-menu-btn-active');
                    
                    if (!isNotInHome) {
                        header.classList.remove('header-active');
                        header.style.backgroundColor = 'transparent';
                        header.style.position = 'absolute';
                    }


                } else {    // ABRIR MENU
                    
                    // Si abre el menu y estaba activo el search-form, se lo desactivo
                    searchSection.classList.remove('search-section-container-active');
                    
                    // Si abre el menu, seteo el backscreen z-index a -1 por las dudas que se haya abierto desde buscador
                    blackScreen.classList.remove('black-screen-active')
                    blackScreen.style.zIndex = '-1';

                    header.classList.add('header-active')
                    sideNavbar.classList.add('side-navbar-container-active')
                    // burgerIcon.classList.add('icon-inactive')
                    burgerIcon.classList.remove('burguer-menu-btn-active')
                    xIcon.classList.add('burguer-menu-btn-active')
                    // xIcon.classList.remove('icon-inactive')
                    // header.style.backgroundColor = 'white'


                }
            })
        })




    }
    listenTogglerButton();



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