<template>
    <div v-for="ix of $store.state.projectsData" v-bind:key="ix.id">
        <div>{{ ix.id }}</div>
    </div>
</template>
<script>
export default {
    methods : {
        fetchProjectsData : function(){
            this.$store.dispatch('fetchProjectsData')
        }
    },
    mounted(){
        this.fetchProjectsData()
    }
}
</script>
<style>
    
</style>