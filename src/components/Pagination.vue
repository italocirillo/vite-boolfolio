<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: Number,
        lastPage: Number,
    },
    emits: ['changePageNumber']
}
</script>

<template>
    <nav v-if="lastPage" class="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }"><a
                    @click.prevent="$emit('changePageNumber', currentPage - 1)" class="page-link" href="#">Pagina
                    Precedente</a></li>
            <li class="page-item" :class="{ 'active': pageNumber === currentPage }" v-for="pageNumber in lastPage">
                <a @click.prevent="$emit('changePageNumber', pageNumber)" class="page-link" href="#">{{ pageNumber }}</a>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === lastPage }"><a
                    @click.prevent="$emit('changePageNumber', currentPage + 1)" class="page-link" href="#">Pagina
                    Successiva</a></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss"></style>