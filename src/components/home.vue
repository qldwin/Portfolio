<template>
  <section id="home" class="section-body">
    <div class="div-infos">
      <h4 class="me-infos">Je suis</h4>
      <h1 class="title-center">WEBER ALDWIN</h1>
      <h4 class="dev-infos"><Typed></Typed></h4>
    </div>
  </section>
</template>

<script>
import Typed from './typed.vue';

export default {
  name: "Home",
  components: {
    Typed,
  },
};
</script>
