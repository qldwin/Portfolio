<template>
    <span id="element"></span>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
    const options = {
        strings: ["Développeur Full-Stack.", "Étudiant en BTS SIO.", "J'ai 20 ans.", "J'étudie à Nîmes.", "Lycée CCI GARD."],
        typeSpeed: 100,
        loop: true,
    };

    const typed = new Typed("#element", options);
});
</script>