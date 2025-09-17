<template>
  <section id="contact" class="section-body">
    <div class="contacts-container">
      <div class="Box_Contacts">
        <h1>Contact</h1>
        <h4>Pour me contacter, envoyez-moi un mail ci-dessous.</h4>
        <form action="/send-email" method="post">
          <input class="text-input" type="text" name="name" aria-label="expediteur nom" placeholder="Jean DUPONT" required/>
          <input class="text-input" type="email" name="email" aria-label="expediteur mail" placeholder="jean.dupont@gmail.com" required/>
          <textarea name="text-input" class="contactText" placeholder="Détail de votre demande" required></textarea>
          <button class="submit" aria-label="expediteur message" type="submit">Envoyer le mail</button>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Contact",
};
</script>

<style src="../assets/CSS/contact.css"></style>
<style scoped>

</style>