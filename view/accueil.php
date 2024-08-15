<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio ━━ Aldwin WEBER</title>
    <link rel="icon" type="image/x-icon"
        href="./assets/img/favicon.ico" />
    <link rel="stylesheet" href="./assets/CSS/styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">

    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js" integrity="sha384-cMrTlShXEGSdSFA359p+3aVUxK/R+0TAfbRZMcTlAn8yqzxEDj05QsS65nTFMMj4" crossorigin="anonymous"></script>
    <script defer src="./assets/JS/typing.js"></script>
    <script defer src="./assets/JS/scroll.js"></script>
    <script defer src="./assets/JS/main.js"></script>

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
        <?php require_once 'view/components/bottom.html'; ?>
    </section>
</body>
</html>