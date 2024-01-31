<template>
    
  <div v-for="ix of $store.state.aboutData" v-bind:key="ix.aboutData" id="abBody">

    <!-- <h1 class="display-3">{{ix.about}}</h1> -->
    <!-- <div class="container col-xxl-8 px-4 py-5"> -->
    <div class="container col-xxl-12 px-3">

      <div class="row flex-lg-row align-items-center" id="topSec">

        <div class="col-10 col-sm-12 col-lg-6" id="imgContainer">
          <!-- <span id="tag">{{ix.imgtxt}}</span> -->
          <img :src="ix.myImage" class="d-block mx-lg-auto img-fluid" :alt="ix.imgAlt" id="imge" loading="lazy">

        </div>

        <div class="col-lg-6">

          <h1 class="display-5 fw-bold lh-1 mb-3 text-white">{{ ix.topText }}</h1>

          <p class="lead text-white-50 text-center" id="txt">{{ ix.pText }}</p>

          <div class="d-grid gap-2 d-md-flex justify-content-md-start">


            <div class="d-flex container justify-content-evenly border-bottom" data-shrink>
              <div class="text-white d-inline gap-3 small">
                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txt }}:</p>
                <p>{{ix.country}}</p>
  
                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtTwo }}:</p>
                <p>{{ix.city}}</p>
              </div>
              <div class="text-white d-inline gap-3 small">
                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtThree }}:</p>
                <p>{{ix.birth}}</p>
  
                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtFour }}:</p>
                <p>{{ix.criminalrecord}}</p>
  
              </div>
              <div class="text-white d-inline gap-3 small">
                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtFive }}:</p>
                <p>{{ix.homelang}}</p>

                <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtSix }}:</p>
                <p>{{ix.secondlang}}</p>
              </div>
            </div>

          </div>

          <div class="mt-3 mb-3">
            <router-link to="/resume">

              <ResumeBtnVue />
  
            </router-link> 
          </div>
          
              
        </div>

      </div>
      <!-- <div id="card"></div> -->
      <div class="container-fluid row bg-white col-lg-12 flex-lg-row align-items-center mb-4 rounded-2 mx-0" data-scale-data-to-screen-size>

        <h1 class="fw-bold border-bottom border-black text-uppercase text-decoration-underline text-black">{{ ix.skills }} <i class="fa-solid fa-code fa-sm" style="color: #000000;"></i></h1>

        <div class="container d-flex mb-2" id="expBox">

          <div class="text-center mb-2">
            <img :src="ix.html5" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold text-center">{{ix.htmltext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.css" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.csstext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.Bootstrap" alt="" id="card" data-v-img/>
            <span class="px-4 mx-0 fw-bold">{{ix.Bootstraptext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.JavaScript" alt="" id="card" data-v-img/>
            <span class="px-4 mx-1 fw-bold">{{ix.Jstext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.NodeJs" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.nodetext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.ReactJS" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.reacttext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.Redux" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.reduxtext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.Python" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.pythontext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.ReactBootstrap" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.reactBootstraptext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.Cpp" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.cpptext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.VueJs" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.vuetext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.VueX" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.vuextext}}</span>
          </div>

          <div class="text-center mb-2">
            <img :src="ix.mysql" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.mysqltxt}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.Wordpress" alt="" id="card" data-v-img/>
            <span class="px-4 mx-2 fw-bold">{{ix.wordpresstxt}}</span>
          </div>

        </div>
        <div class="d-flex justify-content-center border-top border-black pt-2 pb-2" v-for="btn of $store.state.aboutData" v-bind:key="btn.aboutData">

          <router-link to="/projects" id="button" class="btn">{{btn.viewProjects}}</router-link>
          
        </div>
      </div>
    </div>


  </div>

</template>
<script>
import ResumeBtnVue from '../components/ResumeBtn.vue'
// import ResumeBtnVue
export default {
  components : {
    ResumeBtnVue
  },
  methods : {
    fetchAboutData : function(){
      this.$store.dispatch('fetchAboutData')
    }
  },
  mounted(){
    this.fetchAboutData()
  }
}
</script>
<style>

#abBody{
  padding-top: 90px;
}

#button{
  background: linear-gradient(to left,rgba(0, 30, 255, 0.897), rgb(0, 200, 255));
  width: 50%;
}
#button:hover{
  background: linear-gradient(to left,rgb(0, 200, 255), rgba(0, 30, 255, 0.897));
  transition: 1.5s ease-in-out;
}

#topSec{
  min-height: 100vh;
}

#imge{
  height: auto;
  transition: all 1s ease-in-out;
}

#txt{
  overflow: scroll;
  max-height: 270px;
}

::-webkit-scrollbar {
  width: 0px;
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
  background: rgba(255, 255, 255, 0); 
}

/* triggers when page is inactive */
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(95, 95, 95, 0); 
}


#expBox{
  background-color: rgba(245, 245, 245, 0.216);
  min-height: 20vh;
  display: grid;
  overflow-x: scroll;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 20px;
  padding: 30px;
}

#card {
  width: 110px;
  height: 110px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 5px;
  margin: 30px;
  border-radius: 50%;
  filter: grayscale();
  border: 1px solid black;
  background: #ffffff;
  box-shadow: 15px 15px 30px #b7b3b3fd inset,-5px -5px 30px #ffffff27;
  transition: all 0.2s ease-in-out;
}

#card:hover{
  transform: scale(110%);
  transition: all 0.4s ease-in-out;
  filter: none;
  border: 1px solid rgba(7, 229, 241, 0.523);
  box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.452);
}

@media (max-width: 1445px) {
  #imge{
    height: 390px;
  }
  
  #txt{
    overflow: scroll;
    max-height: 170px;
    font-size: 15px;
  }

  #tag{
    width: 20%;
    position: absolute;
    left: 10.5%;
  }
}

@media (max-width: 1025px) {
  #imge{
    height: auto;
  }
  
  #txt{
    overflow: scroll;
    max-height: 170px;
    font-size: 15px;
  }

  #tag{
    width: 30%;
    position: absolute;
    left: 4.8%;
  }
}

@media (max-width: 780px){
  #imge{
    height: auto;
  }
  
  #txt{
    overflow: scroll;
    max-height: 170px;
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  #imgContainer{
    display: flex;
    justify-content: center;
    margin-bottom: 17px;
  }

  [data-scale-data-to-screen-size]{
    transform: scale(90%);
  }

  [data-shrink]{
    font-size: 13px;
  }

  [data-opposeShrink]{
    font-size: 14px;
  }

  ::-webkit-scrollbar {
   width: 0px;
  }
}
  
@media (max-width: 400px) {
  #imgContainer{
    display: flex;
    justify-content: center;
  }
  ::-webkit-scrollbar {
   width: 0px;
  }
  #imge{
    height: auto;
  }
}
@media (max-width: 380px) {
  #imgContainer{
    display: flex;
    justify-content: center;
  }
  ::-webkit-scrollbar {
   width: 0px;
  }
  #imge{
    height: auto;
  }
}
  
</style>