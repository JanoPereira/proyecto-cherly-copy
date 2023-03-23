window.addEventListener('load',()=>{
    const loginForm = document.querySelector('.login-container');
    const loginBtn = document.querySelectorAll('.login-toggler');
    const body = document.querySelector('body');
    const blackScreen = document.querySelector('.black-screen');
    const exitBtn = document.querySelector('.login-exit-btn-container');

    const searchSection = document.querySelector('.search-main-section');

    loginBtn.forEach(btn => {
        btn.addEventListener('click',()=>{ //ABRIR LOGIN VIEW
            loginForm.classList.add('login-container-active');
            body.classList.add('noScroll');
            
            blackScreen.classList.add('black-screen-active')
            blackScreen.style.zIndex = '101'; //Porque el header tiene que tapar la pantalla negra

            // Si estaba el menu de busqueda, lo saco
            searchSection.classList.remove('search-main-section-active')
        });
    });
    

    exitBtn.addEventListener('click',()=>{
        loginForm.classList.remove('login-container-active');
        body.classList.remove('noScroll');
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1'
    });
    blackScreen.addEventListener('click',()=>{
        loginForm.classList.remove('login-container-active');
        body.classList.remove('noScroll');
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';
    });


    // LOGICA PARA MOSTRAR CONTRASENA
    const showPassBtn = document.querySelector('.show-password-btn');
    const hidePassBtn = document.querySelector('.hide-password-btn')
    const passInput = document.getElementById('password');
    showPassBtn.addEventListener('click',()=>{
        passInput.type = 'text';
        hidePassBtn.classList.remove('hidden');
        showPassBtn.classList.add('hidden');

    });
    hidePassBtn.addEventListener('click',()=>{
        passInput.type = 'password';
        hidePassBtn.classList.add('hidden');
        showPassBtn.classList.remove('hidden');
    });
});