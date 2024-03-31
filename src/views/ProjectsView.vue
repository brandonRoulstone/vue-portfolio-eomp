<template>
    <div id="mainContainer">
        <div id="grid">
            <div v-for="ix of $store.state.projectsData" v-bind:key="ix.id">
                <div class="card my-3 mx-3" id="image">
            
                    <div class="container border-bottom pb-2 pt-2 px-2 border-black" id="containHeight">

                        <img :src="ix.image" class="card-img-top" :alt="ix.personname" id="containImg">

                        <div class="container mt-2 d-flex justify-content-evenly">

                            <a :href="ix.Github" class="btn shadow" target="_blank" id="btnGit"><i class="fa-brands fa-github fa-sm" style="color: #000000;"></i> {{ix.gittxt}}</a>

                            <a :href="ix.live" class="btn shadow" target="_blank" id="btnLive"><i class="fa-solid fa-server fa-sm" style="color: #000000;"></i> {{ix.livetxt}}</a>

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
        padding-top: 110px;
        transition: all 0.5s ease-in-out;
        background-color: #cecece;
    }

    #grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        scroll-behavior: smooth;
    }

    #image{
        width: 30rem;
        height: 35rem;
        background: linear-gradient(to bottom,#b5b5b5, #dfdfdf);
        border: 5px solid orange;
        /* animation-name: flicker;
        animation-duration: 5s;
        animation-iteration-count: infinite; */
        box-shadow: inset 5px 5px 40px 5px rgba(221, 137, 2, 0.383);
    }

    /* @keyframes flicker {
        0%{
            border: 5px solid orange;
        }
        25%{
            border: 5px solid rgba(255, 174, 0, 0.984);
        }
        50%{
            border: 5px solid rgb(255, 123, 0);
        }
        75%{
            border: 5px solid rgb(255, 196, 0);
        }
        100%{
            border: 5px solid orange;
        }
    } */
    
    #containImg{
        height: 20rem;
        box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.204);
        border-radius: 10px;
    }
    
    #containImg:hover{
        transform: translateY(0px);
        transition: all 0.4s ease-in-out;
        image-rendering: crisp-edges;
    }

    #textOverflowScroll, #head{
        color: #000000;
        height: 20%;
        width: 100%;
    }

    #btnLive{
        border: 1px solid rgba(0, 0, 0, 0);
        background: radial-gradient(circle, rgb(255, 234, 0), rgb(255, 96, 5));
        width: 30%;
    }

    #btnGit{
        border: 1px solid rgba(255, 254, 254, 0);
        background: radial-gradient(circle, rgb(255, 234, 0), rgb(255, 96, 5));
        width: 30%;
    }

    /* .card:active {
        transition: all 0.3s ease-in-out;
        transform: scale(0.95) rotateZ(1.7deg);
    } */

    
    
    #btnGit:active{
        border: 1px solid rgb(30, 29, 29);
        transform: scale(110%);
        transition: all 0.2s ease-in-out;
        color: #ffffff;
        background: radial-gradient(circle, rgb(255, 96, 5), rgb(255, 234, 0));
    }
    #btnLive:active{
        border: 1px solid rgb(30, 29, 29);
        transform: scale(110%);
        transition: all 0.2s ease-in-out;
        color: #ffffff;
        background: radial-gradient(circle, rgb(255, 96, 5), rgb(255, 234, 0));
    }

    @media (max-width: 1080px) {
        #mainContainer{
            display: flex;
            justify-content: space-evenly;
            min-height: 100vh;
            padding-top: 90px;
        }
        #grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            scroll-behavior: smooth;
        }
    }
    @media (max-width: 780px) {
        #mainContainer{
            display: flex;
            justify-content: space-evenly;
            min-height: 100vh;
            padding-top: 60px;
        }
        #grid{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            /* overflow: scroll; */
            scroll-behavior: smooth;
            /* max-width: 100%; */
        }
    }
    
</style>