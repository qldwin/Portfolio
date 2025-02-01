<template>
  <section id="contact" class="section-body">
    <div class="contacts-container">
      <div class="Box_Contacts">
        <h1>Contact</h1>

        <h4>Pour me contacter, envoyez-moi un mail ci-dessous.</h4>
        <form action="" method="post">
          <input class="name" type="text" name="name" aria-label="expediteur nom" placeholder="Jean DUPONT"/>
          <input class="email" type="email" name="email" aria-label="expediteur mail"
                 placeholder="jean.dupont@gmail.com"/>
          <textarea name="message" class="contactText" placeholder="Détail de votre demande"></textarea>
          <input class="submit" aria-label="expediteur message" type="submit" value="Envoyez un message"/>
        </form>
      </div>

      <nav class="social-navbar">
        <ul>
          <li class="social-li-navbar"></li>
          <li class="social-li-navbar"></li>
        </ul>
      </nav>
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