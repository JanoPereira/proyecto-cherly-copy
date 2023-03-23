window.addEventListener('load', () => {
    // FUNCIONES
    const header = document.querySelector('.header-section');
    let burgerIcon = document.querySelector('.open-menu-button');
    let xIcon = document.querySelector('.close-menu-button');
    
    const sideNavbar = document.querySelector('.side-navbar');
    
    const sideSubmenuNavbar = document.querySelector('.side-navbar-submenu');
    const giftId = document.getElementById('gifts');
    const burgerSubmenuBack = document.querySelector('.burger-submenu-back');
    
    const searchSection = document.querySelector('.search-main-section');
    
    const blackScreen = document.querySelector('.black-screen'); //Pantalla negra
    
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname);

    if (isNotInHome) { // agregar estilo de header si no coincide con home
        // header.style.position = 'static';
        header.classList.add('header-section-active');
    }

    console.log(sideNavbar.dataset.id)


    burgerIcon.classList.add('icon-active');
    xIcon.classList.add('icon-inactive');
    const togglerButton = document.querySelectorAll('.burguer-menu-toggler');

    const listenTogglerButton = () => {

        togglerButton.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('fa-x')) { // CERRAR MENU

                    sideNavbar.classList.remove('side-navbar-active');
                    burgerIcon.classList.add('icon-active');
                    burgerIcon.classList.remove('icon-inactive');
                    xIcon.classList.add('icon-inactive');
                    xIcon.classList.remove('icon-active');
                    sideSubmenuNavbar.classList.remove('side-navbar-submenu-active');
                    
                    if (!isNotInHome) {
                        header.classList.remove('header-section-active');
                        header.style.backgroundColor = 'transparent';
                        header.style.position = 'absolute';
                    }


                } else {    // ABRIR MENU
                    
                    // Si abre el menu y estaba activo el search-form, se lo desactivo
                    searchSection.classList.remove('search-main-section-active');
                    
                    // Si abre el menu, seteo el backscreen z-index a -1 por las dudas que se haya abierto desde buscador
                    blackScreen.classList.remove('black-screen-active')
                    blackScreen.style.zIndex = '-1';

                    header.classList.add('header-section-active')
                    sideNavbar.classList.add('side-navbar-active')
                    burgerIcon.classList.add('icon-inactive')
                    burgerIcon.classList.remove('icon-active')
                    xIcon.classList.add('icon-active')
                    xIcon.classList.remove('icon-inactive')
                    // header.style.backgroundColor = 'white'


                }
            })
        })




    }

    listenTogglerButton();

    const navbarMenusInteraction = () => {
        giftId.addEventListener('click', () => {
            sideNavbar.classList.remove('side-navbar-active')
            sideSubmenuNavbar.classList.toggle('side-navbar-submenu-active')
        })

        burgerSubmenuBack.addEventListener('click', () => {
            sideNavbar.classList.add('side-navbar-active')
            sideSubmenuNavbar.classList.remove('side-navbar-submenu-active')
        })
    }

    navbarMenusInteraction()

    const headerShow = () => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                console.log("El usuario está haciendo scroll hacia arriba");
                header.classList.add('header-section-active')
            } else {
                header.classList.remove('header-section-active')
                console.log("El usuario está haciendo scroll hacia abajo");
            }
            prevScrollPos = currentScrollPos;
        }
    }

    headerShow()





})