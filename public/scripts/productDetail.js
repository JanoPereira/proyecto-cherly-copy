window.addEventListener('load', () => {
    var carouselImages = document.querySelector('.images-carousel');
    var carouselBar = document.querySelector('.scrollbar-carousel');
    var images = document.querySelectorAll('.product-image');
    var imageWidth = images[0].offsetWidth;
    var imageShowed = 0
    
    carouselImages.addEventListener('scroll', function (e) {
        
        
        
    });
    // LOGICA PARA HACER APARECER EL COLOR PICKER
    const colorPickerToggler = document.querySelector('.product-color-container');
    const colorPickerView = document.querySelector('.color-picker-container');
    const colorPickerExitBtn = document.querySelector('.color-picker-exit-btn');
    const body = document.querySelector('body');
    const blackScreen = document.querySelector('.black-screen')
    colorPickerToggler.addEventListener('click',()=>{
        
        blackScreen.classList.add('black-screen-active');
        blackScreen.style.zIndex = '101';
        
        body.classList.add('noScroll');//Para que no me deje scrollear
        colorPickerView.classList.add('color-picker-container-active');
    });
    colorPickerExitBtn.addEventListener('click',()=>{
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';

        body.classList.remove('noScroll');//Para que no me deje scrollear
        colorPickerView.classList.remove('color-picker-container-active')
    });
    blackScreen.addEventListener('click',()=>{
        
        blackScreen.classList.remove('black-screen-active');
        blackScreen.style.zIndex = '-1';
        
        body.classList.remove('noScroll');//Para que no me deje scrollear
        colorPickerView.classList.remove('color-picker-container-active')
    });

    // ======================================================================


});