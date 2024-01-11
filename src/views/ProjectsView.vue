<template>
    <div id="mainContainer">
        <div id="grid">
            <div v-for="ix of $store.state.projectsData" v-bind:key="ix.id">
                <div class="card my-3 mx-3" id="image">
            
                    <div class="container border-bottom pb-2 pt-2 px-2 border-black" id="containHeight">
                        <img :src="ix.image" class="card-img-top" :alt="ix.personname" id="containImg">
                    </div>
        
                    <div class="card-body bg-body-tertiary">
        
                      <h4 class="card-title fw-bold">{{ix.name}}</h4>
        
                      <p class="card-text fw-bold" id="textOverflowScroll">{{ix.aboutProject}}</p>
        
                    </div>
        
                </div>
            </div>
        </div>
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

<style scoped>

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        scroll-behavior: smooth;
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-corner{
        background-color: rgba(0, 255, 255, 0);
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgb(0, 0, 0); 
    }

    #mainContainer{
        display: flex;
        justify-content: space-evenly;
        min-height: 100vh;
    }

    #grid{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        overflow: scroll;
        max-width: 100%;
    }

    #image{
        width: 30rem;
        height: 30rem;
        background: linear-gradient(blue, rgb(0, 213, 255));
    }

    #image:hover{
            background: linear-gradient(rgb(0, 213, 255), blue);
    }
    
    #containImg{
        height: 20rem;
    }
    
    #containImg:hover{
        transform: scale(103%);
        transition: all 0.3s ease-in-out;
    }

    #textOverflowScroll{
        max-height: 60px;
        overflow: scroll;
    }
</style>