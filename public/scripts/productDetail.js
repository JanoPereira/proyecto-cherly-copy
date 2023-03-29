import { activateClass, deactivateClass } from "./utils.js";
window.addEventListener('load', () => {
    var carouselImages = document.querySelector('.carousel-images-container');
    var carouselBar = document.querySelector('.scrollbar-carousel');
    var images = document.querySelectorAll('.product-image');
    var imageWidth = images[0].offsetWidth;
    var imageShowed = 0

    carouselImages.addEventListener('scroll', function (e) {



    });

    // LOGICA PARA TOCAR LA FOTO Y CAMBIARLA
    const carouselImagesContainer = document.querySelector('.carousel-images-container');
    const sideImages = document.querySelectorAll('.side-image');
    sideImages.forEach(img => {
        img.addEventListener('click', () => {

            // Para sacarle la clase active a la foto anterior
            document.querySelector('.product-image-active').classList.remove('product-image-active');

            // Tengo que crear una etiqueta para agregarsela al div
            const newImg = document.createElement('img');
            newImg.src = img.getAttribute('src');
            newImg.classList.add('product-image');
            img.classList.add('product-image-active');
            carouselImagesContainer.innerHTML = '';
            carouselImagesContainer.appendChild(newImg);

        })
    });

    // LOGICA PARA MOSTRAR SIZE GUIDE & PRODUCT SPECIFICATIONS
    const sizeGuideBtn = document.getElementById('size-guide-btn');
    const productSpecificationsBtn = document.getElementById('product-specifications-btn');
    const closeSizeGuideBtns = document.querySelectorAll('.close-size-guide-btn');
    const body = document.querySelector('body');

    const blackScreen = 'black-screen';
    const sizeGuideImgContainer = 'size-guide-img-container';
    const productSpecificationsContainer = 'product-specifications-container';

    sizeGuideBtn.addEventListener('click', () => {
        body.classList.add('noScroll');
        activateClass([blackScreen, sizeGuideImgContainer]);
    });
    productSpecificationsBtn.addEventListener('click', () => {
        body.classList.add('noScroll');
        activateClass([blackScreen, productSpecificationsContainer]);
    })
    document.querySelector(`.${blackScreen}`).addEventListener('click', () => {
        body.classList.remove('noScroll');
        deactivateClass([blackScreen, sizeGuideImgContainer, productSpecificationsContainer]);
    });
    closeSizeGuideBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.remove('noScroll');
            deactivateClass([blackScreen, sizeGuideImgContainer, productSpecificationsContainer]);
        })
    });


});