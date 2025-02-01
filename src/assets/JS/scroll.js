const sections = document.querySelectorAll(".section-body");

document.querySelectorAll(".list-navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Retire la classe active de toutes les sections
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        // Récupère l'ID de la section cible
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Active la classe 'active' sur la section cible
        targetSection.classList.add("active");

        // Fais défiler la page jusqu'à la section cible
        const targetPosition = targetSection.offsetTop;
        window.scrollTo({
            top: targetPosition - window.innerHeight + targetSection.offsetHeight,
            behavior: "smooth",
        });
    });
});
