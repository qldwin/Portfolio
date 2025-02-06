<template>
    <header>
      <div id="navbarToggle" class="hamburger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <nav class="navbar">
            <ul class="pic-navbar-list">
                <li class="pic-navbar-div"><img class="pic-navbar" src="/portrait.jpg" alt="portrait de Aldwin WEBER" /></li>
            </ul>
            <ul class="list-navbar">
                <li class="content-navbar"><a aria-current="page" href="#">Accueil</a></li>
                <li class="content-navbar"><a aria-current="page" href="#about">À propos</a></li>
              <li class="content-navbar"><a aria-current="page" href="#skills">Compétences</a></li>
                <li class="content-navbar"><a aria-current="page" href="#projects">Projets</a></li>
                <li class="content-navbar"><a aria-current="page" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import Responsiv_navbar from "../assets/JS/responsiv_navbar.js";

export default {
  name: "MyHeader",
  mounted() {
    Responsiv_navbar();
  }
};
</script>