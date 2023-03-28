window.addEventListener('load', () => {

    const backArrow = document.querySelector('.back-button')
    const nextArrow = document.querySelector('.foward-button')
    const productCardContainer = document.querySelector('.product-card-container');
    const carouselContainers = document.querySelectorAll('.image-carousel');
    const allImages = document.querySelectorAll('.product-image-test');
    const dotsContainers = document.querySelectorAll('.product-dots-container');
    let currentImage = 0;


    carouselContainers.forEach(container => {
        let imagesSelected;
        container.addEventListener('mouseover', () => {     
            imagesSelected = []
           containersGlobalMouseEnter(imagesSelected, container)
        });
    });

    const containersGlobalMouseEnter = (imagesSelected, container) => {
        handleDotsCount(container, imagesSelected)
        handleCarouselHover(container, imagesSelected)
        handleConditionForSlide(imagesSelected)
    }

    const handleCarouselHover = (container, imagesSelected) => {
        const id = container.dataset.productid;
        allImages.forEach(img => {
            if (img.dataset.productid == id) {
                imagesSelected.push(img);
            }
        });
        return imagesSelected
    }

    const handleConditionForSlide = (images) => {
        let slidesLength = images.length
        if (currentImage < slidesLength - 1) {
            currentImage += 1
            handleCarouselAutoSlide(images)

        } else {
            currentImage = 0
            handleCarouselAutoSlide(images)
        }
    }

    const handleDotsCount = (container, imagesSelected) => {
        let containers = []
        let slidesLength = imagesSelected.length
        const id = container.dataset.productid;
        dotsContainers.forEach(dotCont => containers.push(dotCont))

        const dotContToInject = containers.find(cont => cont.dataset.productid === id) 
        for(i = 0; i < slidesLength; i++) {
            if(i == 0) {
              dotContToInject.innerHTML += "<div class='home-slider-dot dot-active'></div>";
            } else {
              dotContToInject.innerHTML += "<div class='home-slider-dot'></div>";
            }
          }
        
    }

    const handleCarouselAutoSlide = (images) => {
        let slidesLength = images.length
        console.log(currentImage)
        images.forEach((img, i) => {
            if (i == currentImage) {
                img.classList.remove('product-image-test-prev-slide')
                img.classList.remove('product-image-test-next-slide')
                img.classList.add('product-image-test-active')
            } else if (i == currentImage - 1 || (currentImage == 0 && i == slidesLength - 1)) {
                img.classList.remove('product-image-test-active')
                img.classList.remove('product-image-test-next-slide')
                img.classList.add('product-image-test-prev-slide')
            }
            else {
                img.classList.remove('product-image-test-active')
                img.classList.remove('product-image-test-prev-slide')
                img.classList.add('product-image-test-next-slide');
            }
        })
    }
})