window.addEventListener('load', () => {

    const backArrow = document.querySelector('.back-button')
    const nextArrow = document.querySelector('.foward-button')
    const productCardContainer = document.querySelector('.product-card-container')
    const images = document.querySelectorAll('.product-image-test')

    let currentImage = 0;
    let slidesLength = images.length


    handleCarouselImages()


    backArrow.addEventListener('click', (e) => {
        if (currentImage != 0) {
            currentImage -= 1
            handleCarouselImages()
        } else {
            currentImage = slidesLength - 1;
            handleCarouselImages()
        }
    })

    nextArrow.addEventListener('click', (e) => {
        if (currentImage < slidesLength - 1) {
            currentImage += 1
            handleCarouselImages()
        } else {
            currentImage = 0
            handleCarouselImages()
        }
    })

    function handleCarouselImages () {
      
        images.forEach((img, i) => {
        
            if (i == currentImage) {
                img.classList.remove('product-image-test-prev-slide')
                img.classList.remove('product-image-test-next-slide')
                img.classList.add('product-image-test-active')
            }
            else if (i == currentImage - 1 || (currentImage == 0 && i == slidesLength - 1)) {
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