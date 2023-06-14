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
        </div>
    </div>
</template>

<style lang="scss" scoped></style>