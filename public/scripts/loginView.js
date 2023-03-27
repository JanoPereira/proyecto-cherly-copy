import { activateClass, deactivateClass } from './utils.js';
window.addEventListener('load', () => {
    const loginBtn = document.querySelector('.login-toggler');
    const body = document.querySelector('body');
    const exitBtn = document.querySelector('.login-exit-btn-container');
    const openRegistrationForm = document.getElementById('open-registration-form');
    const closeRegistrationForm = document.getElementById('close-registration-form-btn');

    const blackScreen = 'black-screen';
    const loginRegisterContainer = 'login-register-container';
    const sideNavbar = 'side-navbar-container';
    const searchSection = 'search-section-container';
    const registrationFormContainer = 'registration-form-container'

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
        let classesToDeactivate = [loginRegisterContainer,blackScreen,registrationFormContainer];
        deactivateClass(classesToDeactivate);
        
        body.classList.remove('noScroll');
    });


    openRegistrationForm.addEventListener('click',()=>{
        body.classList.add('noScroll');

        let classesToActivate = [registrationFormContainer,blackScreen];
        activateClass(classesToActivate);
    });
    closeRegistrationForm.addEventListener('click',()=>{
        body.classList.remove('noScroll');

        let classesToDeactivate = [registrationFormContainer];
        deactivateClass(classesToDeactivate);
    })
    // LOGICA PARA MOSTRAR CONTRASENA
    const showPassBtn = document.querySelectorAll('.show-password-btn');
    const hidePassBtn = document.querySelectorAll('.hide-password-btn')
    const passInput = document.querySelectorAll('.input-password');
    
    showPassBtn.forEach(btn=>{ //Para mostrar
        btn.addEventListener('click', () => {
            let place = btn.dataset.place;
            passInput.forEach(tag=>{
                if (tag.dataset.place == place){
                    tag.type = 'text';
                }
            });
            hidePassBtn.forEach(tag=>{
                if (tag.dataset.place == place){
                    tag.classList.remove('hidden');
                }
            });
            btn.classList.add('hidden'); 
        });
    });
    hidePassBtn.forEach(btn=>{ //Para ocultar
        btn.addEventListener('click', () => {
            let place = btn.dataset.place;
            passInput.forEach(tag=>{
                if (tag.dataset.place == place){
                    tag.type = 'password';
                }
            });
            showPassBtn.forEach(tag=>{
                if (tag.dataset.place == place){
                    tag.classList.remove('hidden');
                }
            });
            btn.classList.add('hidden'); 
        });
    });

});