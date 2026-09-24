<template>
  <span id="element"></span>
</template>

<script setup>
import {onMounted} from "vue";
import Typed from "typed.js";

onMounted(() => {
  const options = {
    strings: ["Développeur Full-Stack.","Freelance.","BUT3 Informatique.", "IUT Nantes.","J'ai 22 ans."],
    typeSpeed: 100,
    loop: true,
  };

  let typed = new Typed("#element", options);
});
</script>