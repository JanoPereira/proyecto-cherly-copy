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
    })

});