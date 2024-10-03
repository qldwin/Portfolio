import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
document.addEventListener("DOMContentLoaded", function () {
    // Défilez jusqu'à la section #accueil
    document.getElementById("accueil").scrollIntoView({ behavior: "smooth" });
});
