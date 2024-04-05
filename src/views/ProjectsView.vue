<template>
    <div id="mainContainer">
        <div id="grid">
            <div v-for="ix of $store.state.projectsData" v-bind:key="ix.id">
                <div class="card my-3 mx-3" id="image">
            
                    <div class="container border-bottom pb-2 pt-2 px-2 border-black" id="containHeight">

                        <img :src="ix.image" class="card-img-top" :alt="ix.personname" id="containImg">

                        
                    </div>
                    
                    <div class="container mt-2 d-flex justify-content-evenly">

                        <a :href="ix.Github" class="btn shadow" target="_blank" id="btnGit"><i class="fa-brands fa-github fa-sm" style="color: #000000;"></i> {{ix.gittxt}}</a>

                        <a :href="ix.live" class="btn shadow" target="_blank" id="btnLive"><i class="fa-solid fa-server fa-sm" style="color: #000000;"></i> {{ix.livetxt}}</a>

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
<!--    {
            "id": 9,
            "image": "https://cdn-images.imagevenue.com/69/c7/41/ME17ZG7K_o.png",
            "personname": "Asithandile Tyulu",
            "jobtitle":"Intern",
            "text": "Brandon is a tireless worker fueled by caffeine and a relentless pursuit of excellence, his insatiable curiosity for programming languages makes him an invaluable asset. With a blend of emotional intelligence, humor, and expertise, he brings a vibrant energy to any team fortunate enough to have him."
        } -->
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
        box-shadow: inset 5px 5px 40px 5px rgba(221, 137, 2, 0.383);
    }
    
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

     #head{
        color: #000000;
        height: 20%;
        width: 100%;
    }
    #textOverflowScroll{
        max-height: 120px !important;
        overflow: scroll;
    }

    #btnLive, #btnGit{
        border: 1px solid rgba(0, 0, 0, 0);
        background: radial-gradient(circle, rgb(255, 234, 0), rgb(255, 96, 5));
    }

    /* #btnGit{
        border: 1px solid rgba(255, 254, 254, 0);
        background: radial-gradient(circle, rgb(255, 234, 0), rgb(255, 96, 5));
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
            padding-top: 100px;
        }
        #grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            scroll-behavior: smooth;
        }
        #containHeight{
            width: 23rem;
        }
        #image{
            width: 25rem;
        }
        #textOverflowScroll{
            margin-top: 20px;
            overflow-y: scroll;
            height: 70px;
        }
    }
    @media (max-width: 998px) {
        #grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            scroll-behavior: smooth;
        }

        #containHeight{
            width: 23rem;
        }
        #image{
            width: 25rem;
        }
    }
    @media (max-width: 855px) {
        #containHeight{
            width: 22rem;
        }
        #image{
            width: 23rem;
        }
    }

    @media (max-width: 790px) {
        #mainContainer{
            display: flex;
            justify-content: space-evenly;
            min-height: 100vh;
            padding-top: 60px;
        }
        
        #containHeight{
            width: 30rem;
        }

        #containHeight{
            width: 21rem;
        }
        #image{
            width: 22rem;
        }
        #textOverflowScroll{
            overflow-y: scroll;
            height: 60px;
        }
    }
    @media (max-width: 750px) {

        #grid{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            scroll-behavior: smooth;
        }

        #containHeight{
            width: 30rem;
        }

        #containHeight{
            width: 20rem;
        }
        #image{
            width: 23.6rem;
        }
        #textOverflowScroll{
            overflow-y: scroll;
            height: 60px;
        }
    }
    @media (max-width: 401px) {

        #containHeight{
            width: 17rem;
        } 
        #image{
            width: 18rem;
        }
        #textOverflowScroll{
            margin-top: 20px;
            overflow-y: scroll;
            height: 60px;
        }
    }
    
</style>