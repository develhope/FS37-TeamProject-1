document.addEventListener('DOMContentLoaded', function() {

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const slides = document.querySelectorAll('.slide');
    const carouselTextWrapper = document.querySelector('.carousel-text-wrapper');
    const totalSlides = slides.length;

    let currentIndex = 0;

    function updateCarousel() {
        
        const slideWidth = slides[0].offsetWidth;
        const offset = -currentIndex * slideWidth;
        carouselTextWrapper.style.transform = `translateX(${offset}px)`;
    }

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000); 

});
