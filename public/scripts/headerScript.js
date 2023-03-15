window.addEventListener('load',()=>{
    // FUNCIONES
    const listenTogglerButton = () =>{
        let togglerButton = document.querySelector('.burguer-menu-toggler');
        let burguerMenu = document.querySelector('.burguer-menu-container')
        togglerButton.addEventListener('click',()=>{
            if (togglerButton.classList.contains('close-button')){ //Quiere decir que toco la x
                togglerButtonContainer.innerHTML = `<i class="fa-solid fa-bars burguer-menu-toggler" ></i>`
                burguerMenu.classList.add('hidden');
            } else { //Toco el menu
                togglerButtonContainer.innerHTML = `<i class="fa-solid fa-x burguer-menu-toggler close-button"></i>`
                burguerMenu.classList.remove('hidden');
            }
            listenTogglerButton();
            
        });
        
    }
    const togglerButtonContainer = document.querySelector('.burguer-menu-toggler-container');
    listenTogglerButton();
    
})