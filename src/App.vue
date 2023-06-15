<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import { store } from './store';
import Pagination from './components/Pagination.vue';

export default {
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: null,
      total: 0,
      loading: false,
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects(page = 1) {
      this.loading = true;
      axios.get(`${this.store.baseUrl}/api/projects`, {
        params: {
          page: page,
        }
      }).then(resp => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.total = resp.data.results.total;
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  components: {
    ProjectCard,
    Pagination
  }
}
</script>

<template>
  <section v-if="loading == false">
    <div class="container">
      <h1>PROJECT</h1>
      <h2 class="p-3">Progetti trovati:{{ total }}</h2>
      <div class="row row-cols-3 g-3">
        <div class="col" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
      <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePageNumber="getProjects" />
    </div>
  </section>
  <section v-else>
    <p>CARICAMENTO IN CORSO</p>
  </section>
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