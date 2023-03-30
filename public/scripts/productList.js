import { activateClass, deactivateClass } from './utils.js';

window.addEventListener('load', () => {
    const carouselContainers = document.querySelectorAll('.product-card-container');
    const allImages = document.querySelectorAll('.product-image-test');
    const filterBtn = document.querySelector('.filter-btn-container');
    const filtersContainer = 'filters-container';
    const closeFilterMenuX = document.querySelector('.close-filter-menu');
    const filtersWithDropdown = document.querySelectorAll('.filter-with-dropdown');
    const filtersDropdown = document.querySelectorAll('.filter-dropdown-container');
    const blackScreen = 'black-screen';
    const quickAddCartContainer = 'add-to-cart-container'
    const closeCartBtn = document.querySelector('.close-cart-menu');

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

    closeCartBtn.addEventListener('click', () => { //Escucha la x del quickCart
        deactivateClass([quickAddCartContainer, blackScreen])
    });


    carouselContainers.forEach(container => { //Va por cada carousel los productos

        let productSelectedId = container.dataset.productid;
        // dotsJump(productSelectedId);
        // TODO: Aplicar logica de container.queryselector();
        container.addEventListener('mouseenter', () => { //Cuando el mouse se para arriba    
            handleConditionForSlide(productSelectedId);//Apenas se para arriba, cambia la foto
            intervalId = setInterval(() => { //Esto es para que vaya cambiando la foto cada 2 seg
                handleConditionForSlide(productSelectedId);

            }, 2000);
            applyQuickActions(container);

        });
 // TODO: Aplicar logica de container.queryselector();
        container.addEventListener('mouseleave', () => { //Esto es para que una vez que se va del producto, vuelva a la primer imagen
            currentImage = 0;
            handleCarouselAutoSlide(productImages[productSelectedId]);
            clearInterval(intervalId);
            clearQuickActions(container);
        })


    });

    const handleConditionForSlide = (productSelectedId) => { //Nos dice donde esta parada la foto para saber a cual pasar
        let images = productImages[productSelectedId]; // Imagenes del producto
        if (currentImage < images.length - 1) {
            currentImage += 1;
        } else {
            currentImage = 0;
        };
        return handleCarouselAutoSlide(images);
    }

    const applyQuickActions = (container) => {//Escucha aquel contenedor que se le hace hover para aplicar quickActions

        const quickSizesBtns = container.querySelectorAll('.quick-size'); //Agarra los quickSizes del producto
        container.querySelector('.product-quick-actions-container').classList.add(`product-quick-actions-container-active`);
        container.querySelector('.quick-cart-container').addEventListener('click', () => {
            container.querySelector('.quick-cart-container').classList.add('quick-cart-container-active');
            container.querySelector('.quick-fav-container').classList.add('quick-fav-container-active');
            container.querySelector('.quick-sizes-container').classList.add('quick-sizes-container-active');
        });
        quickSizesBtns.forEach(size => {
            size.addEventListener('click', () => {
                activateClass([quickAddCartContainer, blackScreen]);
                clearQuickActions(container);
            });
        });

    };

    const clearQuickActions = (container) => { //Vuelve las quickAction del container a predeterminadas
        container.querySelector('.product-quick-actions-container').classList.remove(`product-quick-actions-container-active`)
        container.querySelector('.quick-cart-container').classList.remove('quick-cart-container-active');
        container.querySelector('.quick-fav-container').classList.remove('quick-fav-container-active');
        container.querySelector('.quick-sizes-container').classList.remove('quick-sizes-container-active');
    }


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

    //filters function

    filterBtn.addEventListener('click', () => {
        activateClass([filtersContainer, blackScreen])
    });

    closeFilterMenuX.addEventListener('click', () => {
        deactivateClass([filtersContainer, blackScreen])
    });

    filtersWithDropdown.forEach(filter => {
        filter.addEventListener('click', () => {
            const dataLabel = filter.dataset.label
            filtersDropdown.forEach(dropdown => {
                if (dropdown.dataset.label === dataLabel) {
                    dropdown.classList.toggle('filter-dropdown-container-active')
                }
            })
        })
    });

    document.querySelector(`.${blackScreen}`).addEventListener('click', () => {
        const filtersContainerElement = document.querySelector(`.${filtersContainer}`)
        if (filtersContainerElement.classList.contains('filters-container-active')) {
            filtersContainerElement.classList.remove('filters-container-active')
        }
        deactivateClass([quickAddCartContainer])
    });


})