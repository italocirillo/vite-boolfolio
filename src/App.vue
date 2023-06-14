<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import { store } from './store';

export default {
  data() {
    return {
      projects: [],
      store,
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.store.baseUrl}/api/projects`).then(resp => {
        this.projects = resp.data.results;
      })
    }
  },
  components: {
    ProjectCard,
  }
}
</script>

<template>
  <div class="container">
    <h1>PROJECT</h1>
    <div class="row row-cols-3 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";

body {
  background-color: rgb(0, 93, 93);
}

h1 {
  color: white;
  padding: 2em;
  text-align: center;
}
</style>