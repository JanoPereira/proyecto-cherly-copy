window.addEventListener('load', () => {
    // FUNCIONES
    const URLPattern = /^\/product\/\d+$/; //Para capturar la URL '/product/:id'
    const header = document.querySelector('.header-section');
<<<<<<< HEAD
    let burgerIcon = document.querySelector('.fa-bars')
    let xIcon = document.querySelector('.fa-x')
    const sideNavbar = document.querySelector('.side-navbar')
    const sideSubmenuNavbar = document.querySelector('.side-navbar-submenu')
    const giftId = document.getElementById('gifts')
    const burgerSubmenuBack = document.querySelector('.burger-submenu-back')
    const isNotInHome = window.location.pathname != '/'
=======
    let burgerIcon = document.querySelector('.fa-bars');
    let xIcon = document.querySelector('.burguer-menu-close-button');
    const sideNavbar = document.querySelector('.side-navbar');
    const inputSearchForm = document.querySelector('.search-main-section')

    const isNotInHome = window.location.pathname != '/' && !URLPattern.test(window.location.pathname)
>>>>>>> dev

    if (isNotInHome) { // agregar estilo de header si no coincide con home
        header.style.position = 'static';
        header.classList.add('header-section-active');
    }
    
    console.log(sideNavbar.dataset.id)


    burgerIcon.classList.add('icon-active');
    xIcon.classList.add('icon-inactive');
    const togglerButton = document.querySelectorAll('.burguer-menu-toggler');

    const listenTogglerButton = () => {

        togglerButton.forEach(btn => {
            btn.addEventListener('click', () => {
<<<<<<< HEAD
                if (btn.classList.contains('fa-x')) { // CERRAR MENU

                    sideNavbar.classList.remove('side-navbar-active')
                    burgerIcon.classList.add('icon-active')
                    burgerIcon.classList.remove('icon-inactive')
                    xIcon.classList.add('icon-inactive')
                    xIcon.classList.remove('icon-active')
                    sideSubmenuNavbar.classList.remove('side-navbar-submenu-active')
                    if (!isNotInHome) {
                        header.classList.remove('header-section-active')
                        header.style.backgroundColor = 'transparent'
                        header.style.position = 'absolute'
                    }


                } else {    // ABRIR MENU
                    header.classList.add('header-section-active')
                    sideNavbar.classList.add('side-navbar-active')
                    burgerIcon.classList.add('icon-inactive')
                    burgerIcon.classList.remove('icon-active')
                    xIcon.classList.add('icon-active')
                    xIcon.classList.remove('icon-inactive')
                    header.style.backgroundColor = 'white'


=======
                if (btn.classList.contains('burguer-menu-close-button')) { // CERRAR MENU
                   
                    sideNavbar.classList.remove('side-navbar-active');
                    burgerIcon.classList.add('icon-active');
                    burgerIcon.classList.remove('icon-inactive');
                    xIcon.classList.add('icon-inactive');
                    xIcon.classList.remove('icon-active');
                    if (!isNotInHome) {
                        header.classList.remove('header-section-active');
                    } 


                } else {    // ABRIR MENU
                    inputSearchForm.classList.remove('search-main-section-active')
                    header.classList.add('header-section-active');
                    sideNavbar.classList.add('side-navbar-active');
                    burgerIcon.classList.add('icon-inactive');
                    burgerIcon.classList.remove('icon-active');
                    xIcon.classList.add('icon-active');
                    xIcon.classList.remove('icon-inactive');
>>>>>>> dev
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