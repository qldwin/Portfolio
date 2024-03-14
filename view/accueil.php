<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio ━━ Aldwin WEBER</title>
    <link rel="icon" type="image/x-icon"
        href="https://images.vexels.com/media/users/3/205472/isolated/preview/62c3ddcae4b835271eb633cb80c8c797-planet-mars-illustration.png" />
    <link rel="stylesheet" href="./assets/CSS/styles.css" />
    <link href="https://db.onlinewebfonts.com/c/a1ab9bebae84d82fbcfe930c4643de7a?family=Cera+CY+Regular"
        rel="stylesheet">

</head>

<body>
    <header>
        <?php require_once 'view/components/navbar.html'; ?>
        <?php require_once 'view/components/social-nav.html'; ?>
    </header>
    <div class="blur-container"></div>
    <section id="accueil" class="section-body" href="#accueil">
        <?php require_once 'view/components/bubbles.html'; ?>
    </section>

    <section id="projets" class="section-body" href="#projets">
        <?php require_once 'view/components/projects.html'; ?>
    </section>
    <section id="veille" class="section-body" href="#veille">
        VEILLE
    </section>
    <section id="contact" class="section-body" href="#contact">
        CONTACT
    </section>

    <footer>

    </footer>

</body>
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
<script src="./assets/JS/typing.js"></script>
<script src="./assets/JS/slider.js"></script>
<script src="./assets/JS/scroll.js"></script>
<script src="./assets/JS/main.js"></script>


</html>