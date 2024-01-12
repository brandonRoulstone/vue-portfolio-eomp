<template>
    <div id="mainContainer">
        <div id="grid">
            <div v-for="ix of $store.state.projectsData" v-bind:key="ix.id">
                <div class="card my-3 mx-3" id="image">
            
                    <div class="container border-bottom pb-2 pt-2 px-2 border-black" id="containHeight">

                        <img :src="ix.image" class="card-img-top" :alt="ix.personname" id="containImg">

                        <div class="container mt-2 d-flex justify-content-evenly">

                            <a :href="ix.Github" class="btn" id="btnGit"><i class="fa-brands fa-github fa-sm" style="color: #000000;"></i> {{ix.gittxt}}</a>

                            <a :href="ix.live" class="btn" id="btnLive"><i class="fa-solid fa-server fa-sm" style="color: #000000;"></i> {{ix.livetxt}}</a>

                        </div>

                    </div>
        
                    <div class="card-body" id="cBody">
        
                      <h4 class="card-title fw-bold" id="head">{{ix.name}}</h4>
        
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
        grid-template-columns: repeat(9, 1fr);
        overflow: scroll;
        scroll-behavior: smooth;
        max-width: 100%;
    }

    #image{
        width: 30rem;
        height: 35rem;
        background: linear-gradient(rgb(54, 54, 58), rgb(2, 97, 114));
    }
    
    #containImg{
        height: 20rem;
    }
    
    #containImg:hover{
        transform: scale(103%);
        transition: all 0.4s ease-in-out;
        image-rendering: crisp-edges;
    }

    #textOverflowScroll, #head{
        color: #cecece;
        height: 20%;
        width: 100%;
    }

    #btnLive{
        border: 1px solid rgba(0, 0, 0, 0);
        background: radial-gradient(circle, rgb(0, 191, 255), rgb(52, 60, 109));
        width: 30%;
    }

    #btnGit{
        border: 1px solid rgba(255, 254, 254, 0);
        background: radial-gradient(circle, rgb(0, 191, 255), rgb(52, 60, 109));
        width: 30%;
    }

    
    
    #btnGit:hover{
        border: 1px solid rgb(30, 29, 29);
        transform: scale(110%);
        transition: all 0.2s ease-in-out;
        color: #ffffff;
        background: radial-gradient(circle, rgb(0, 191, 255), rgb(52, 60, 109));
    }
    #btnLive:hover{
        border: 1px solid rgb(30, 29, 29);
        transform: scale(110%);
        transition: all 0.2s ease-in-out;
        color: #ffffff;
        background: radial-gradient(circle, rgb(0, 191, 255), rgb(52, 60, 109));
    }
    
</style>