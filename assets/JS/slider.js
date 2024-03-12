const slides = document.querySelectorAll(".projet_item#slide");
let currentSlideIndex = 0;

slides[currentSlideIndex].classList.add("active");

function ChangeSlide(sens) {
    slides[currentSlideIndex].classList.remove("active", "previous", "next");

    let nextSlideIndex = currentSlideIndex + sens;
    let previousSlideIndex = (currentSlideIndex - sens + slides.length) % slides.length;

    if (nextSlideIndex < 0) {
        nextSlideIndex = slides.length - 1;
    } else if (nextSlideIndex >= slides.length) {
        nextSlideIndex = 0;
    }

    slides[nextSlideIndex].classList.add("active");

    currentSlideIndex = nextSlideIndex;

    const previousSlideIndex2 = (currentSlideIndex - 1 + slides.length) % slides.length;
    const nextSlideIndex2 = (currentSlideIndex + 1) % slides.length;

    slides[previousSlideIndex2].classList.add("previous");
    slides[nextSlideIndex2].classList.add("next");
}

let timerId;

function startCountdown() {
    clearTimeout(timerId);

    document.getElementById("precedent").style.opacity = 1;
    document.getElementById("suivant").style.opacity = 1;

    timerId = setTimeout(function () {
        document.getElementById("precedent").style.opacity = 0;
        document.getElementById("suivant").style.opacity = 0;
    }, 5000);
}
