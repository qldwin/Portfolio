<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";

const element = ref(null);

onMounted(() => {
    setTimeout(() => {
        const options = {
            strings: ["Développeur Full-Stack.", "Étudiant en BTS SIO.", "J'ai 20 ans.", "J'habite au Mans.", "J'étudie à Nîmes.", "Lycée CCI GARD."],
            typeSpeed: 100,
            loop: true,
        };

        const typed = new Typed(element.value, options);
    }, 100);
});
</script>

<template>
    <typed>
        <div ref="element"></div>
    </typed>
</template>

<script>
export default {
    name: "Typed",
};
</script>

<style src="../assets/CSS/style.css"></style>
