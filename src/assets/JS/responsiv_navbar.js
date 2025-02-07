export default function ResponsivNavbar() {
    const hamburger = document.getElementById("navbarToggle");
    const navbar = document.querySelector(".list-navbar");

    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
            hamburger.classList.toggle("change");
        });
    }
}
