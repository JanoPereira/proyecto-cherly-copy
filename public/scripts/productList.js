window.addEventListener('load', () => {

    const backArrow = document.querySelector('.back-button')
    const nextArrow = document.querySelector('.foward-button')
    const productCardContainer = document.querySelector('.product-card-container');
    const carouselContainers = document.querySelectorAll('.image-carousel');
    const allImages = document.querySelectorAll('.product-image-test');
    const dotsContainers = document.querySelectorAll('.product-dots-container');
    const dots = document.querySelectorAll('.product-carousel-dot')
    const filterBtn = document.querySelector('.filter-btn-container')
    const filtersContainer = document.querySelector('.filters-container')
    const closeFilterMenuX = document.querySelector('.bx-x')
    const allFilters = document.querySelectorAll('.filter')
    const filtersWithDropdown = document.querySelectorAll('.filter-with-dropdown')
    const filtersDropdown = document.querySelectorAll('.filter-dropdown-container')
    const filterAmountContainer = document.querySelectorAll('.filter-amount')
    const blackScreen = document.querySelector('.black-screen')

    var intervalId;
    let currentImage = 0;
    const productImages = {};

    allImages.forEach(img => {
        const productId = img.dataset.productid
        if(productImages[productId]) {
            productImages[productId].push(img);
        } else {
            productImages[productId] = [img];
        };
    });

   


    carouselContainers.forEach(container => { //Va por cada carousel los productos
        
        let productSelectedId = container.dataset.productid;
        dotsJump(productSelectedId);
        
        container.addEventListener('mouseenter', () => { //Cuando el mouse se para arriba    
            
            handleConditionForSlide(productSelectedId);
            intervalId = setInterval(() => { //Esto es para que vaya cambiando la foto cada 2 seg
                handleConditionForSlide(productSelectedId);
    
            }, 2000);
        });
        
        container.addEventListener('mouseleave', () => { //Esto es para que una vez que se va del producto, vuelva a la primer imagen
            currentImage = 0;
            handleCarouselAutoSlide(productImages[productSelectedId]);
            clearInterval(intervalId);
        })


    });

    // const handleCarouselHover = (container, imagesSelected) => { //Retorna las imagenes pertenecientes al carousel
    //     const id = container.dataset.productid;
    //     allImages.forEach(img => {
    //         if (img.dataset.productid == id) {
    //             imagesSelected.push(img);
    //         }
    //     });

    //     return imagesSelected;
    // }

    const handleConditionForSlide = (productSelectedId) => { //Nos dice donde esta parada la foto para saber a cual pasar

        let images =  productImages[productSelectedId]; // Imagenes del producto
        if (currentImage < images.length - 1) {
            currentImage += 1;
        } else {
            currentImage = 0;
        };
        return handleCarouselAutoSlide(images);

    }

    // const handleDotsCount = (container, imagesSelected) => { //Pinta los puntos 
    //     let containers = []
    //     let slidesLength = imagesSelected.length
    //     const id = container.dataset.productid;
    //     dotsContainers.forEach(dotCont => containers.push(dotCont));

    //     const dotContToInject = containers.find(cont => cont.dataset.productid === id);
    //     for (i = 0; i < slidesLength; i++) {
    //         if (i == 0) {
    //             dotContToInject.innerHTML += "<div class='home-slider-dot dot-active'></div>";
    //         } else {
    //             dotContToInject.innerHTML += "<div class='home-slider-dot'></div>";
    //         }
    //     }

    // }

    const handleCarouselAutoSlide = (images) => { //[<prev>,<active>,<next>]
        let slidesLength = images.length;

        images.forEach((img, i) => { //Va por cada imagen de un producto particular
            if (i == currentImage) {
                img.classList.remove('product-image-test-prev-slide');
                img.classList.remove('product-image-test-next-slide');
                img.classList.add('product-image-test-active');
            } else if (i == currentImage - 1 || (currentImage == 0 && i == slidesLength - 1)) {
                img.classList.remove('product-image-test-active');
                img.classList.remove('product-image-test-next-slide');
                img.classList.add('product-image-test-prev-slide');
            }
            else {
                img.classList.remove('product-image-test-active');
                img.classList.remove('product-image-test-prev-slide');
                img.classList.add('product-image-test-next-slide');
            }
        })
    }

    function dotsJump(productSelectedId) { //Cuando el usuario clickea un dot random
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                if (!dot.classList.contains('product-carousel-dot-active')) {
                    const activeDot = document.querySelector('.product-carousel-dot-active');
                    activeDot.classList.remove('product-carousel-dot-active')
                    dot.classList.add('product-carousel-dot-active')
                    currentImage = i;
                    handleCarouselAutoSlide(productImages[productSelectedId]);
                }
            })
        })
    }


    //filters function

    filterBtn.addEventListener('click', () => {
        filtersContainer.classList.add('filters-container-active')
        blackScreen.classList.add('black-screen-active')
    })

    closeFilterMenuX.addEventListener('click', () => {
        filtersContainer.classList.remove('filters-container-active')
        blackScreen.classList.remove('black-screen-active')
    })

    filtersWithDropdown.forEach(filter => {
        filter.addEventListener('click', () => {
            const dataLabel = filter.dataset.label
            filtersDropdown.forEach(dropdown => {
                if(dropdown.dataset.label === dataLabel ) {
                    dropdown.classList.toggle('filter-dropdown-container-active')
                }
            })
        })
    })

    blackScreen.addEventListener('click', () => {
        if(filtersContainer.classList.contains('filters-container-active')){
            filtersContainer.classList.remove('filters-container-active')
        }
    })

    

})