const images = document.querySelectorAll(".car-img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let index = 0;

function updateCarrusel(){
    images.forEach((image, i) => {
        image.classList.toggle('active',i === index);
    });

    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1; 
}

prevButton.addEventListener('click', function() {
    index--;
    updateCarrusel();
})
nextButton.addEventListener('click', function() {
    index++;
    updateCarrusel();
});
updateCarrusel();
