const sections = document.querySelectorAll(".section-body");

document.querySelectorAll(".list-navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition - window.innerHeight + targetSection.offsetHeight,
            behavior: "smooth",
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section-body");

//     let lastScrollTop = 0;

//     window.addEventListener("scroll", () => {
//         const currentScroll = window.pageYOffset;
//         const direction = currentScroll > lastScrollTop ? "down" : "up";
//         lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

//         let nextSectionIndex = -1;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionBottom = sectionTop + section.offsetHeight;

//             if (direction === "down" && currentScroll >= sectionTop && currentScroll < sectionBottom) {
//                 nextSectionIndex = index + 1;
//             } else if (direction === "up" && currentScroll > sectionTop && currentScroll <= sectionBottom) {
//                 nextSectionIndex = index;
//             }
//         });

//         // Détermine si nous sommes au début ou à la fin de la page
//         const isAtTop = currentScroll === 0;
//         const isAtBottom = currentScroll + window.innerHeight >= document.documentElement.scrollHeight;

//         // Empêche le défilement lorsque nous sommes au début ou à la fin de la page
//         if ((isAtTop && direction === "up") || (isAtBottom && direction === "down")) {
//             return;
//         }

//         // Défilement vers la section suivante lors du défilement vers le bas
//         if (direction === "down" && nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
//             const targetSection = sections[nextSectionIndex];
//             targetSection.scrollIntoView({ behavior: "smooth" });
//         }

//         // Défilement vers la section précédente lors du défilement vers le haut
//         if (direction === "up" && nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
//             const targetSection = sections[nextSectionIndex];
//             targetSection.scrollIntoView({ behavior: "smooth", block: "end" });
//         }
//     });
// });
