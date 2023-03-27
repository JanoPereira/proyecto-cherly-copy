import { activateClass, deactivateClass } from './utils.js';
window.addEventListener('load', () => {
    const loginBtn = document.querySelector('.login-toggler');
    const body = document.querySelector('body');
    const exitBtn = document.querySelector('.login-exit-btn-container');
    
    const blackScreen = 'black-screen';
    const loginRegisterContainer = 'login-register-container';
    const sideNavbar = 'side-navbar-container';
    const searchSection = 'search-section-container';


    loginBtn.addEventListener('click', () => { //ABRIR LOGIN VIEW
        let classesToActivate = [loginRegisterContainer,blackScreen];
        activateClass(classesToActivate);

        let classesToDeactivate = [sideNavbar,searchSection];
        deactivateClass(classesToDeactivate);
        
        body.classList.add('noScroll');

    });

    exitBtn.addEventListener('click', () => {
        let classesToDeactivate = [loginRegisterContainer,blackScreen];
        deactivateClass(classesToDeactivate);

        body.classList.remove('noScroll');

    });
    document.querySelector(`.${blackScreen}`).addEventListener('click', () => {
        let classesToDeactivate = [loginRegisterContainer,blackScreen];
        deactivateClass(classesToDeactivate);
        
        body.classList.remove('noScroll');
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