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

let timerId;

function startCountdown() {
    clearTimeout(timerId); // Réinitialisez le timer si l'utilisateur survole à nouveau la div

    // Affichez les boutons
    document.getElementById('precedent').style.opacity = 1;
    document.getElementById('suivant').style.opacity = 1;

    // Démarrez le compte à rebours de 3 secondes (3000 ms)
    timerId = setTimeout(function() {
        document.getElementById('precedent').style.opacity = 0;
        document.getElementById('suivant').style.opacity = 0;
    }, 3000); // 3000 ms = 3 secondes
}