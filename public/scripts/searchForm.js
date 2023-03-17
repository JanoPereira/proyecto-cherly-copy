window.addEventListener('load',()=>{
    const togglerOpenButton = document.querySelector('.search-container');
    const searchFormContainer = document.querySelector('.search-form-container');
    const togglerCloseButton = document.querySelector('.close-search-form-button');
    const blackScreen = document.querySelector('.search-container-bottom');
    const mainSection = document.querySelector('.search-main-section'); //Es la seccion donde se encuentran ambas cosas
    togglerOpenButton.addEventListener('click',()=>{ // Si abre el menu

        blackScreen.classList.add('search-container-bottom-active');
        mainSection.classList.add('search-main-section-active');
        searchFormContainer.classList.add('search-form-container-active');
        searchFormContainer.classList.remove('search-form-container-inactive');
    })
    
    togglerCloseButton.addEventListener('click',()=>{ //Si toca la x
        mainSection.classList.remove('search-main-section-active');
        blackScreen.classList.remove('search-container-bottom-active');
        searchFormContainer.classList.add('search-form-container-inactive');
        searchFormContainer.classList.remove('search-form-container-active');
    });
    blackScreen.addEventListener('click',()=>{ //Si toca la pantalla negra
        mainSection.classList.remove('search-main-section-active');
        blackScreen.classList.remove('search-container-bottom-active');
        searchFormContainer.classList.add('search-form-container-inactive');
        searchFormContainer.classList.remove('search-form-container-active');
    })

})