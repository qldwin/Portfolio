<template>
  <section id="education" class="section-body">
    <div class="education-container">
      <div class="formation-column">
        <h2 class="column-title">Formation scolaire</h2>
        <div class="formation-list">
          <div
              class="formation-item"
              v-for="(item, index) in schoolEducation"
              :key="'school-' + index"
          >
            <div class="formation-header">
              <h3>{{ item.title }}</h3>
              <span class="status-label" :class="statusClass(item.status)">
                {{ item.status }}
              </span>
            </div>
            <p class="formation-place">{{ item.school }}</p>
            <p class="formation-dates">{{ item.dates }}</p>
          </div>
        </div>
      </div>

      <div class="formation-column">
        <h2 class="column-title">Formation autodidacte</h2>
        <div class="formation-list">
          <div
              class="formation-item"
              v-for="(item, index) in ocrEducation"
              :key="'ocr-' + index"
          >
            <div class="formation-header">
              <h3 v-if="!item.link">{{ item.title }}</h3>

              <a
              v-else
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="formation-title-link"
              >
              {{ item.title }}
              <span class="link-arrow">↗</span>
              </a>
              <span class="status-label" :class="statusClass(item.status)">
                {{ item.status }}
              </span>
            </div>
            <p class="formation-place">OpenClassrooms</p>
            <p class="formation-dates">{{ item.dates }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Manage_education from "../assets/JS/manage_education.js";

export default {
  name: "Education",
  data() {
    return Manage_education.data();
  },
  methods: {
    statusClass(status) {
      if (status === "Obtenu") return "status-done";
      if (status === "En cours") return "status-progress";
      return "status-upcoming";
    },
  },
};
</script>
<style src="../assets/CSS/education.css"></style>