<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
        }
    }
}
</script>

<template>
    <div class="card h-100">
        <img v-if="project.image"
            :src="project.image.startsWith(`https://via.placeholder.com/`) ? `${project.image}` : `${baseUrl}/storage/${project.image}`"
            class="card-img-top" :alt="project.title" />
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