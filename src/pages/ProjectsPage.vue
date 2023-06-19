<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
import Pagination from '../components/Pagination.vue';

export default {
    data() {
        return {
            store,
            projects: [],
            types: [],
            selectedType: "all",
            technologies: [],
            selectedTechnology: "all",
            currentPage: 1,
            lastPage: null,
            total: 0,
            loading: false,
        }
    },
    mounted() {
        this.getProjects();
        this.getTypes();
        this.getTechnologies();
    },
    methods: {
        getProjects(page = 1) {
            this.loading = true;
            const params = {
                page: page,
            }

            if (this.selectedType !== "all") {
                params.type_id = this.selectedType;
            }
            if (this.selectedTechnology !== "all") {
                params.technology_id = this.selectedTechnology;
            }

            axios.get(`${this.store.baseUrl}/api/projects`, { params }).then(resp => {
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.total = resp.data.results.total;
            }).finally(() => {
                this.loading = false;
            })
        },
        getTypes() {
            axios.get(`${store.baseUrl}/api/types`).then((resp) => {
                this.types = resp.data.results;
            })
        },
        getTechnologies() {
            axios.get(`${store.baseUrl}/api/technologies`).then((resp) => {
                this.technologies = resp.data.results;
            })
        },
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

            <div class="row row-col-2">
                <p class="col">
                    <label class="form-label" for="type">Tipi</label>
                    <select v-model="selectedType" id="type" class="form-select w-100" @change="getProjects()">
                        <option value="all">TUTTI</option>
                        <option v-for="type_item in types" :key="type_item.id" :value="type_item.id">{{
                            type_item.title }}</option>
                    </select>
                </p>

                <p class="col">
                    <label class="form-label" for="technology">Tecnologie</label>
                    <select v-model="selectedTechnology" id="technology" class="form-select w-100" @change="getProjects()">
                        <option value="all">TUTTI</option>
                        <option v-for="technology_item in technologies" :key="technology_item.id"
                            :value="technology_item.id">{{
                                technology_item.title }}</option>
                    </select>
                </p>
            </div>

            <h2 class="p-3">Progetti trovati:{{ total }}</h2>
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" :selectedTechnology="Number(selectedTechnology)" />
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
@use "../styles/general.scss";

body {
    background-color: rgb(0, 93, 93);
}

h1 {
    color: white;
    padding: 2em;
    text-align: center;
}
</style>