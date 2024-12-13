<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js"; // Assurez-vous que Typed est importé

const element = ref(null);

onMounted(() => {
    const options = {
        strings: ["Développeur Full-Stack.", "Étudiant en BTS SIO.", "J'ai 20 ans.", "J'habite au Mans.", "J'étudie à Nîmes.", "Lycée CCI GARD."],
        typeSpeed: 100,
        loop: true,
    };

    const typed = new Typed(element.value, options);
});
</script>

<template>
    <div ref="element"></div>
</template>

<<<<<<< HEAD
<script>
export default {
    name: "Typed",
};
</script>

<style src="../assets/CSS/style.css"></style>
=======
<style src="../assets/css/style.css"></style>
>>>>>>> 1c7e931400bb37e66f6e71bc6d9d4716cb42198f
