export function initializeTyping() {
    setTimeout(() => {
        const options = {
            strings: ["Développeur Full-Stack.", "Étudiant en BTS SIO.", "J'ai 20 ans.", "J'habite au Mans.", "J'étudie à Nîmes.", "Lycée CCI GARD."],
            typeSpeed: 100,
            loop: true,
        };

        const typed = new Typed("#element", options);
    }, 100);
}
