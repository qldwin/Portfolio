<template>
  <section id="projects" class="section-body">
    <div class="projects-card-visit">
      <!-- Génération des cartes via une boucle -->
      <div v-for="(project, index) in projects" :key="index" class="card">
        <div class="card-header">
          <h2>{{ project.title }}</h2>
          <div class="project_languages">
            <span v-for="(language, langIndex) in project.languages" :key="langIndex">
              {{ language }}
            </span>
          </div>
        </div>
        <div class="card-body">
          <span>{{ project.type }}</span>
          <p>{{ project.description }}</p>
          <div class="button-container">
            <button
                class="project-button"
                :disabled="!project.url"
                :class="{ disabled: !project.url }"
                @click="goToProject(project.url)">
              {{ project.url ? "GitHub" : "Non disponible" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style src="../assets/CSS/projects.css"></style>

<script>

import Manage_projects from "../assets/JS/manage_projects.js";

export default {
  name: "Projets",
  data() {
    return Manage_projects.data(); // Charge les données du fichier externe
  },
  methods: {
    goToProject(url) {
      // Redirection vers l'URL
      window.open(url, "_blank");
    },
  },
};
</script>


