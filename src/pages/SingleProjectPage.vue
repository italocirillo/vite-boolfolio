<script>

import axios from 'axios';
import { store } from "../store";

export default {
    name: "SingleProjectPage",
    data() {
        return {
            store,
            project: null,
            errorMesage: ""
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.baseUrl}/api/projects/${slug}`).then(
            resp => {
                if (resp.data.success) {
                    this.project = resp.data.results;
                } else {
                    this.errorMesage = resp.data.error;
                }
            },
            error => {
                if (error.response.status === 404) {
                    this.$router.push({ name: "notFound" });
                } else {
                    this.errorMessage = "ERRORE GENERICO";
                }
            })
    },
    computed: {
        imageUrl() {
            if (this.project.image.startsWith(`https://via.placeholder.com/`)) {
                return this.project.image;
            } else {
                return `${this.store.baseUrl}/storage/${this.project.image}`;
            }
        }
    }
}
</script>

<template>
    <section class="container text-center py-3">
        <router-link :to="{ name: 'projects' }" class="btn btn-primary rounded-pill mb-3">Torna alla pagina
            progetti</router-link>
        <div v-if="project">
            <h2>{{ project.title }}</h2>
            <div>
                <img class="w-50" v-if="project.image" :src="imageUrl" alt="{{ project.title }}">
                <p v-else>Nessuna immagine</p>
            </div>
            <p class="py-3">
                <span class="border p-1 rounded-pill" v-if="project.type">{{ project.type.title }}</span>
                <span class="border p-1 rounded-pill" v-else>Nessun tipo</span>
            </p>
            <div class="technologies py-4">
                <span v-if="project.technologies.length > 0" v-for="(technology, index) in project.technologies">{{
                    technology.title }} {{ index === project.technologies.length - 1 ? '' : ',' }}</span>
                <p v-else class="text-center">Nessuna tecnologia utilizzata</p>
            </div>
            <p>
                {{ project.description }}
            </p>
        </div>
        <div v-else-if="errorMesage" class="my-4">
            {{ errorMesage }}
        </div>
    </section>
</template>

<style lang="scss" scoped></style>