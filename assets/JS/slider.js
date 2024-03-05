const slides = document.querySelectorAll(".projet_item#slide");
let currentSlideIndex = 0;

// Affiche la première diapositive
slides[currentSlideIndex].classList.add('active');

function ChangeSlide(sens) {
    // Cacher la diapositive actuelle
    slides[currentSlideIndex].classList.remove('active');

    // Calculer l'index de la prochaine diapositive
    let nextSlideIndex = currentSlideIndex + sens;

    // Gérer les limites
    if (nextSlideIndex < 0) {
        nextSlideIndex = slides.length - 1;
    } else if (nextSlideIndex >= slides.length) {
        nextSlideIndex = 0;
    }

    // Afficher la nouvelle diapositive
    slides[nextSlideIndex].classList.add('active');

    // Mettre à jour l'index de la diapositive actuelle
    currentSlideIndex = nextSlideIndex;

    // Flouter les diapositives précédente et suivante
    const previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    const nextSlideIndex2 = (currentSlideIndex + 1) % slides.length;

    slides[previousSlideIndex].classList.add('previous');
    slides[nextSlideIndex2].classList.add('next');
}