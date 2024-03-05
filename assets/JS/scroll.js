const sections = document.querySelectorAll('.section-body');

// Ajouter un gestionnaire d'événements à chaque lien de navigation
document.querySelectorAll('.list-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Empêcher le comportement de défaut de l'ancre

        const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la section cible
        const targetSection = document.getElementById(targetId); // Trouver la section cible
        const targetPosition = targetSection.offsetTop; // Récupérer la position de la section cible

        // Définir la position de défilement de la page
        window.scrollTo({
            top: targetPosition - window.innerHeight + targetSection.offsetHeight,
            behavior: 'smooth'
        });
    });
});