<template>
  <span id="element"></span>
</template>

<script setup>
import {onMounted} from "vue";
import Typed from "typed.js";

onMounted(() => {
  const options = {
    strings: ["Développeur Full-Stack.", "En recherche d'une alternance","Étudiant Bachelor Développeur d'Applications JAVA.", "J'ai 22 ans.", "J'étudie chez Studi."],
    typeSpeed: 100,
    loop: true,
  };

  let typed = new Typed("#element", options);
});
</script>