const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentImageIndex = 0;

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
});

function updateSlider() {
    images.forEach((image, index) => {
        image.style.opacity = index === currentImageIndex ? 1 : 0;
    });
}

updateSlider();
