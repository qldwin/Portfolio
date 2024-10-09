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