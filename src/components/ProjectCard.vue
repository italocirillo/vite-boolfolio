<script>
import { store } from '../store';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
        }
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
    <div class="card h-100">
        <img v-if="project.image" :src="imageUrl" class="card-img-top" :alt="project.title" />
        <div v-else>
            Image not found
        </div>
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p>{{ project.description }}</p>
            <p class="py-1">
                <span class="border p-1 rounded-pill" v-if="project.type">{{ project.type.title }}</span>
                <span class="border p-1 rounded-pill" v-else>Nessun tipo</span>
            </p>
            <div v-if="project.technologies.length > 0" class="card">
                <div class=" card-header">
                    Tecnologie
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="tecnologia in project.technologies" class="list-group-item">{{ tecnologia.title }}</li>
                </ul>
            </div>
            <div v-else>
                <p class="text-center">Nessuna tecnologia utilizzata</p>
            </div>
            <div>
                <router-link :to='{ name: "singleProject", params: { slug: project.slug } }' class="btn btn-primary">Mostra
                    info progetto</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>