window.addEventListener('load',()=>{
    const togglerOpenButton = document.querySelector('.search-container');
    const searchFormContainer = document.querySelector('.search-form-container');
    togglerOpenButton.addEventListener('click',()=>{
        searchFormContainer.classList.add('search-form-container-active');
        searchFormContainer.classList.remove('search-form-container-inactive')
    })
    const togglerCloseButton = document.querySelector('.close-search-form-button');
    const blackScreen = document.querySelector('.search-container-bottom')
    togglerCloseButton.addEventListener('click',()=>{
        searchFormContainer.classList.add('search-form-container-inactive')
        searchFormContainer.classList.remove('search-form-container-active')
    });
    blackScreen.addEventListener('click',()=>{ //Si toca la pantalla negra
        searchFormContainer.classList.add('search-form-container-inactive')
        searchFormContainer.classList.remove('search-form-container-active')
    })

})