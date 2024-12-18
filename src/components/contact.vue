<template>
  <section id="contact" class="section-body">
    <div class="contacts-container">
      <div class="Box_Contacts">
        <h1>Contacts</h1>

        <h4>Pour me contacter, envoyez-moi un mail ci-dessous.</h4>
        <form action="" method="post">
          <input class="nom" type="text" name="nom" aria-label="expediteur nom" placeholder="Jean DUPONT"/>
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

<style scoped>
.contacts-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.Box_Contacts {
  pointer-events: auto;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding-top: 128px;
}

.Box_Contacts h1 {
  border: 1px solid #000;
  background: transparent;
  box-shadow: -4px 4px 0px 0px #000000 inset;
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  border-style: none;
}

.Box_Contacts form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.Box_Contacts input {
  height: 48px;
}

.Box_Contacts input,
textarea {
  margin-top: 32px;
  border-radius: 8px;
  color: #000;
  border: 1px solid #858c94;
  background: rgba(255, 255, 255, 0.7);
}

.Box_Contacts textarea {
  height: 128px;
  resize: none;
}

.social-navbar {
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 2vh;
  bottom: 50vh;
}

.social-li-navbar {
  list-style-type: none;
}


@media screen and (max-width: 1024px) {
  .Box_Contacts {
    width: 85vw;
  }
}

@media screen and (max-width: 375px) {
  .Box_Contacts {
    width: 85vw;
  }
}
</style>