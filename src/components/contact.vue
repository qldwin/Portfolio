<script setup></script>

<template>
    <section id="contact" class="section-body" href="#contact">
        <div class="contacts-container">
            <div class="Box_Contacts">
                <h1>Contacts</h1>

                <h4>Pour me contacter, envoyez-moi un mail ci-dessous.</h4>
                <form action="/controller/mail.php" method="post">
                    <input class="nom" type="text" name="nom" aria-label="expediteur nom" placeholder="Jean DUPONT" />
                    <input class="email" type="mail" name="email" aria-label="expediteur mail" placeholder="jean.dupont@gmail.com" />
                    <textarea name="message" class="contactText" placeholder="Détail de votre demande"></textarea>
                    <input class="submit" aria-label="expediteur message" type="submit" value="Envoyez un message" />
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

<style src="../assets/css/contact.css"></style>
<style src="../assets/css/style.css"></style>
