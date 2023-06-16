<script>
export default {
    name: "NotFound",
    methods: {
        goBack() {
            console.log(this.$route);
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5">404 NOT FOUND</h2>
        <div>
            <router-link :to="{ name: 'home' }" class="btn btn-success">Go home</router-link>
            <a @click.prevent="goBack" class="btn btn-warning" href="">Go back</a>
        </div>
    </div>
</template>

<script scoped></script>