<template>
    <div ref="element"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js"; 

const element = ref(null);

onMounted(() => {
    const options = {
        strings: ["Développeur Full-Stack.", "Étudiant en BTS SIO.", "J'ai 20 ans.", "J'étudie à Nîmes.", "Lycée CCI GARD."],
        typeSpeed: 100,
        loop: true,
    };

    const typed = new Typed(element.value, options);
});
</script>

<style src="../assets/css/style.css"></style>
<style scoped>

</style>