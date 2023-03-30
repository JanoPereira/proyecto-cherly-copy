import { activateClass, deactivateClass } from './utils.js';

window.addEventListener('load', () => {
    const carouselContainers = document.querySelectorAll('.product-card-container');
    const allImages = document.querySelectorAll('.product-image-test');
    const filterBtn = document.querySelector('.filter-btn-container')
    const filtersContainer = document.querySelector('.filters-container')
    const closeFilterMenuX = document.querySelector('.close-filter-menu')
    const allFilters = document.querySelectorAll('.filter')
    const filtersWithDropdown = document.querySelectorAll('.filter-with-dropdown')
    const filtersDropdown = document.querySelectorAll('.filter-dropdown-container')
    const filterAmountContainer = document.querySelectorAll('.filter-amount')
    const blackScreen = document.querySelector('.black-screen')
    const quickActionsContainer = 'product-quick-actions-container';
    const quickSizesBtns = document.querySelectorAll('.quick-size')
    const quickSizesCont = document.querySelectorAll('.quick-sizes-container')
    const quickAddCartContainer = document.querySelector('.add-to-cart-container')
    const closeCartBtn = document.querySelector('.close-cart-menu')
    const quickCarts =  document.querySelectorAll('.quick-cart-container')
    const quickFavs = document.querySelectorAll('.quick-fav-container')

    var intervalId;
    let currentImage = 0;
    const productImages = {};

    allImages.forEach(img => {
        const productId = img.dataset.productid
        if (productImages[productId]) {
            productImages[productId].push(img);
        } else {
            productImages[productId] = [img];
        };
    });




    carouselContainers.forEach(container => { //Va por cada carousel los productos

        let productSelectedId = container.dataset.productid;
        // dotsJump(productSelectedId);

        container.addEventListener('mouseenter', () => { //Cuando el mouse se para arriba    

            handleConditionForSlide(productSelectedId);
            intervalId = setInterval(() => { //Esto es para que vaya cambiando la foto cada 2 seg
                handleConditionForSlide(productSelectedId);

            }, 2000);

            // Voy por cada quickActionsContainer
            document.querySelectorAll(`.${quickActionsContainer}`).forEach(cont => { //Para mostar quickActions
                cont.dataset.productid == productSelectedId ? cont.classList.add(`${quickActionsContainer}-active`) : null;
            });

        });

        container.addEventListener('mouseleave', () => { //Esto es para que una vez que se va del producto, vuelva a la primer imagen
            currentImage = 0;
            handleCarouselAutoSlide(productImages[productSelectedId]);
            clearInterval(intervalId);
            document.querySelectorAll(`.${quickActionsContainer}`).forEach(cont => { //Para dejar de mostrar quickActions
                cont.dataset.productid == productSelectedId ? cont.classList.remove(`${quickActionsContainer}-active`) : null;
            });
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

        let images = productImages[productSelectedId]; // Imagenes del producto
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

    // const dotsNextSlide = () => { //Se invoca cuando una imagen cambia
    //     const imgDots = document.querySelectorAll('.product-carousel-dot');
    //     const activeDot = document.querySelector('.product-carousel-dot-active')
    //     activeDot.classList.remove('product-carousel-dot-active');
    //     if (activeDot.nextElementSibling) {
    //         const dotToActive = activeDot.nextElementSibling;
    //         dotToActive.classList.add('product-carousel-dot-active');
    //     } else {
    //         imgDots[0].classList.add('product-carousel-dot-active'); //imgDots es un selectorAll de todos
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
        });
        // dotsNextSlide();
    }

    // function dotsJump(productSelectedId) { //Cuando el usuario clickea un dot random
    //     dots.forEach((dot, i) => {
    //         dot.addEventListener('click', () => {
    //             if (!dot.classList.contains('product-carousel-dot-active')) {
    //                 const activeDot = document.querySelector('.product-carousel-dot-active');
    //                 activeDot.classList.remove('product-carousel-dot-active')
    //                 dot.classList.add('product-carousel-dot-active')
    //                 currentImage = i;
    //                 handleCarouselAutoSlide(productImages[productSelectedId]);
    //             }
    //         })
    //     })
    // }


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
                if (dropdown.dataset.label === dataLabel) {
                    dropdown.classList.toggle('filter-dropdown-container-active')
                }
            })
        })
    })

    blackScreen.addEventListener('click', () => {
        if (filtersContainer.classList.contains('filters-container-active')) {
            filtersContainer.classList.remove('filters-container-active')
        }
    })


    // LOGICA PARA QUICK-ACTIONS
    // TODO: Si eligen de esta manera pensarlo para hacerlo para cada producto

    const quickFavContainer = 'quick-fav-container';
    const quickCartContainer = 'quick-cart-container';
    const quickSizesContainer = 'quick-sizes-container'
    document.querySelectorAll(`.${quickCartContainer}`).forEach(btn=>{
        btn.addEventListener('click', () => {
            activateClass([quickCartContainer, quickSizesContainer, quickFavContainer])
        });
    })

    quickSizesBtns.forEach(size => {
        size.addEventListener('click', () => {
            quickAddCartContainer.classList.add('add-to-cart-container-active')
            blackScreen.classList.add('black-screen-active')
        })
    })

    closeCartBtn.addEventListener('click', () => {
        quickAddCartContainer.classList.remove('add-to-cart-container-active')
        blackScreen.classList.remove('black-screen-active')
        quickSizesCont.forEach(size => {
            if(size.classList.contains('quick-sizes-container-active')){
                size.classList.remove('quick-sizes-container-active')
            }
        })

        quickCarts.forEach(cart => {
            if(cart.classList.contains('quick-cart-container-active')){
                cart.classList.remove('quick-cart-container-active')
            }
        })

        quickFavs.forEach(fav => {
            if(fav.classList.contains('quick-fav-container-active')){
                fav.classList.remove('quick-fav-container-active')
            }
        })
        
    })

})