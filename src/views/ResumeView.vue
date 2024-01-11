<template>
    <div v-for="ix of $store.state.resumeData" v-bind:key="ix.name" class="container" id="resumeSec">

        <div class="text-white container" id="sideSec">

            <div class="container">

                <img :src="ix.img" :alt="ix.name" class="img img-fluid">

            </div>

            <div class="row text-white mt-4">

                <div class="d-flex justify-content-start mx-4">

                    <i class="fa-solid fa-phone fa-sm mt-2" style="color: #ffffff;"></i>

                    <p class="mx-3 small">{{ix.num}}</p>

                </div>

                <div class="d-flex justify-content-start mx-4">

                    <i class="fa-solid fa-envelope fa-sm mt-2" style="color: #ffffff;"></i>

                    <p class="mx-3 small">{{ix.email}}</p>

                </div>

                <div class="d-flex justify-content-start mx-4">

                    <i class="fa-solid fa-location-dot fa-sm mt-2" style="color: #ffffff;"></i>

                    <p class="mx-3 small">{{ix.address}}</p>

                </div>

                <div class="d-flex justify-content-start mx-4">

                    <i class="fa-solid fa-globe fa-sm mt-2" style="color: #ffffff;"></i>

                    <p class="mx-3 small">{{ix.domain}}</p>

                </div>

            </div>

            <div class="row text-white mt-4">

                <div class="d-flex justify-content-center">

                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">{{ix.skill}}</p>

                </div>

                <div class="d-flex justify-content-start mx-2">

                    <ul class="text-start">

                        <li><p class="small">{{ix.skilltxtOne}}</p></li>

                        <li><p class="small">{{ix.skilltxtTwo}}</p></li>

                        <li><p class="small">{{ix.skilltxtThree}}</p></li>

                        <li><p class="small">{{ix.skilltxtFour}}</p></li>

                        <li><p class="small">{{ix.skilltxtFive}}</p></li>

                        <li><p class="small">{{ix.skilltxtSix}}</p></li>

                        <li><p class="small">{{ix.skilltxtSeven}}</p></li>

                        <li><p class="small">{{ix.skilltxtEight}}</p></li>

                    </ul>

                </div>
            </div>
            <div class="row text-white mt-4">

                <div class="d-flex justify-content-center">

                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">{{ix.education}}</p>

                </div>

                <div>
                    
                    <ul class="text-start">

                        <li>{{ix.school}}</li>

                        <li class="list-unstyled mx-5 px-3 mb-4">{{ix.dateOne}}</li>

                        <li>{{ix.college}}</li>

                        <li class="list-unstyled mx-5 px-3">{{ix.dateTwo}}</li>
                        
                    </ul>

                </div>

            </div>

            <div class="row text-white mt-4">

                <div class="d-flex justify-content-center">

                    <p class="fw-bold fs-3 text-decoration-underline text-uppercase">{{ix.langs}}</p>

                </div>

                <div>

                    <ul class="text-start">

                        <li>{{ix.eng}}</li>

                        <li>{{ix.afr}}</li>

                    </ul>
                    
                </div>

            </div>

        </div>

        <div class="text-black container" id="sideSec2">

            <div id="img">
                <div class="text-white fw-bold fs-2" id="pos">
                    {{ix.jobtitle}}
                </div>
            </div>

            <div id="scrollSec">

                <div id="sideBar" class="container-fluid d-flex">

                    <span class="one">......</span>

                    <!-- <span class="two">......</span> -->

                    <!-- <span class="three">......</span> -->

                    <span class="four">......</span>

                </div>

                <h3 class="fw-bold fs-2 text" id="expTxt">{{ix.exp}}</h3>

                <div class="text-black" id="absoluteTxt">

                    <h4 class="fw-bold">{{ix.freelance}}</h4>
                    <p class="small text-start mx-3 fw-normal text-decoration-underline">{{ix.time}} - {{ix.dateTwo}}</p>
                    <ul>

                        <li class="mb-4">{{ix.subtxtOne}}</li>

                        <li>{{ix.subtxtTwo}}</li>

                    </ul>

                </div>
                
                <div class="fw-bold" id="absTxt">
                    <h4 class="fw-bold text-start" id="txtc">{{ix.position}}</h4>
                    <p class="small text-start fw-normal text-decoration-underline">{{ix.time}} - {{ix.daTwo}}</p>
                    <ul class="">
                        <li id="cvtxt">{{ix.skillUp}}</li>
                    </ul>
                    
                </div>
                
            </div>
            
            <div class="mt-2 pt-4 border-bottom border-black">
                
                <h1 class="display-5 text-center">{{ ix.name }} <br> {{ix.lastname}}</h1>
                
                <p class="fw-bold">{{ix.jobtitle}}</p>
                
            </div>
            
            <div class="fw-bold" id="textGreet">
                <p class="small">{{ix.textpg}}</p>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    methods : {
    fetchResumeData : function(){
      this.$store.dispatch('fetchResumeData')
    }
  },
  mounted(){
    this.fetchResumeData()
  }
}
</script>
<style>
    #resumeSec{
        min-height: 135vh;
        display: flex;
        width: 80%;
        justify-content: center;
        margin-bottom: 20px;
    }

    #sideSec{
        background-color: rgb(10, 10, 10);
        min-height: 100vh;
        width: 35%;
    }

    #sideSec2{
        background-color: #ebe8e8;
        min-height: 100vh;
        width: 100%;
    }

    #sideBar{
        transform: rotateZ(90deg);
        position: absolute;
        top: 69%;
        left: 19%;
        width: 30%;
    }

    #line{
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        transform: rotateZ(90deg);
        color: white;
    }

    .one, .four{
        border: 1px solid black;
        border-radius: 50%;
        color: #ffffff00;
        margin: 30px;
        margin-left: 150px;
    }

    #absoluteTxt{
        position: absolute;
        top: 65.9%;
        left: 34.4%;
    }

    #expTxt{
        position: absolute;
        top: 59%;
        left: 55%;
    }

    #absTxt{
        position: absolute;
        top: 92.6%;
        left: 35.6%;
    }

    #cvtxt{
        position: absolute;
        left: 4.1%;
    }

    #img{
        position: absolute;
        height: 145px;
        width: 39%;
        top: 40%;
        background-repeat: no-repeat;
        left: 43%;
        background-image: url("https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg?auto=compress&cs=tinysrgb&w=600");
    }

    #img:hover{
        transform: scale(104%);
        transition: all 0.5s ease-in-out;
    }

    #pos{
        position: absolute;
        bottom: 0%;
        left: 11.5%;
    }

    #textGreet{
        position: absolute;
        width: 55%;
        top: 128%;
        font-size: 25px;
    }
    
</style>