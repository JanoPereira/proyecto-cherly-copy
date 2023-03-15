window.addEventListener('load', () => {
    // FUNCIONES

    const header = document.querySelector('.header-section');
    let burgerIcon = document.querySelector('.fa-bars')
    let xIcon = document.querySelector('.fa-x')
    const sideNavbar = document.querySelector('.side-navbar')

    const isNotInHome = window.location.pathname != '/'

    if (isNotInHome) { // agregar estilo de header si no coincide con home
        header.style.position = 'static'
        header.style.backgroundColor = 'white'
    }



    burgerIcon.classList.add('icon-active')
    xIcon.classList.add('icon-inactive')
    const togglerButton = document.querySelectorAll('.burguer-menu-toggler');

    const listenTogglerButton = () => {

        if (isNotInHome) {
            header.style.backgroundColor = 'white'
        }

        togglerButton.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('fa-x')) { // CERRAR MENU
                   
                    sideNavbar.classList.remove('side-navbar-active')
                    burgerIcon.classList.add('icon-active')
                    burgerIcon.classList.remove('icon-inactive')
                    xIcon.classList.add('icon-inactive')
                    xIcon.classList.remove('icon-active')
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
                   

                }
            })
        })

    


    }

    listenTogglerButton();

})