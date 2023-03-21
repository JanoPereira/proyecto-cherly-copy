window.addEventListener('load',()=>{
    const loginForm = document.querySelector('.login-container');
    const loginBtn = document.querySelectorAll('.login-toggler');
    const body = document.querySelector('body');
    const blackScreen = document.querySelector('.black-screen');
    const exitBtn = document.querySelector('.login-exit-btn-container');

    loginBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            loginForm.classList.add('login-container-active');
            body.classList.add('noScroll');
            blackScreen.classList.add('black-screen-active')
        });
    });
    

    exitBtn.addEventListener('click',()=>{
        loginForm.classList.remove('login-container-active');
        body.classList.remove('noScroll');
        blackScreen.classList.remove('black-screen-active')
    });
    blackScreen.addEventListener('click',()=>{
        loginForm.classList.remove('login-container-active');
        body.classList.remove('noScroll');
        blackScreen.classList.remove('black-screen-active')
    })
});