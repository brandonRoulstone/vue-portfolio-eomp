<template>
    
  <div v-for="ix of $store.state.aboutData" v-bind:key="ix.aboutData" id="abBody">
     <!-- <h1 class="display-5 fw-bold lh-1 mb-3 text-black">{{ ix.topText }}</h1> -->
    <div class="container col-xxl-12 px-3">

      <div class="row flex-lg-row align-items-center" id="topSec">

        <div class="col-10 col-sm-12 col-lg-6" id="imgContainer">

          <div id="imgOverlay">

          </div>
          
          <img :src="ix.myImage" class="d-block img-fluid" :alt="ix.imgAlt" id="imge" loading="lazy">

        </div>

        <div class="col-lg-6" id="boxx">

          <div id="circle">

          </div>

          <div class="d-flex justify-content-center">
            <div id="border"></div>
          </div>

          <p class="lead text-black text-start" id="txt">I am Brandon Roulstone, a 20-year-old driven by unwavering dedication to excellence and pushing boundaries. My exceptional work ethic spans academia, sports, and coding, where I relentlessly surpasses expectations. With an undying passion for sports, I have cultivated discipline and teamwork alongside honing coding skills. This fusion of athleticism and coding fuels my critical thinking and strategic approach, showcasing adaptability and resilience. My pursuit isn't just about mastering domains but a testament to my agility and thirst for growth.</p>

          <div class="mt-3 mb-3">
            <a href="https://drive.google.com/file/d/18FwAEbHXTVhntCq0BH4QrSTwDxAAquuI/view?usp=sharing">

              <ResumeBtnVue />
  
            </a> 
            
          </div>
          
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">


          <div class="d-flex container justify-content-evenly" data-shrink>
            <div class="text-black d-inline gap-3 small">
              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txt }}:</p>
              <p>{{ix.country}}</p>

              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtTwo }}:</p>
              <p>{{ix.city}}</p>
            </div>
            <div class="text-black d-inline gap-3 small">
              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtThree }}:</p>
              <p>{{ix.birth}}</p>

              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtFour }}:</p>
              <p>{{ix.criminalrecord}}</p>

            </div>
            <div class="text-black d-inline gap-3 small">
              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtFive }}:</p>
              <p>{{ix.homelang}}</p>

              <p class="text-decoration-underline fw-bold" data-opposeShrink>{{ ix.txtSix }}:</p>
              <p>{{ix.secondlang}}</p>
            </div>
          </div>

        </div>
        

      </div>
      <!-- <div id="card"></div> -->
      <div class="container-fluid row col-lg-12 flex-lg-row align-items-center mb-4 rounded-3 mx-0" data-scale-data-to-screen-size>

        <div class="d-flex justify-content-center">
          <div id="border"></div>
        </div>

        <h1 class="fw-bold border-bottom border-black text-uppercase text-decoration-underline text-black">{{ ix.skills }} <i class="fa-solid fa-code fa-sm" style="color: #000000;"></i></h1>

        <div class="container d-flex mb-2" id="expBox">

          
          <div class="text-center mb-2">
            <img :src="ix.JavaScript" alt="JavaScript_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-1 fw-bold">{{ix.Jstext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.NodeJs" alt="NodeJs_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.nodetext}}</span>
          </div>

          <div class="text-center mb-2">
            <img :src="ix.NextJS" alt="React_bootstrap_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.nextjsTxt}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.tailwind" alt="React_bootstrap_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.tailwindTxt}}</span>
          </div>

          <div class="text-center mb-2">
            <img :src="ix.ReactJS" alt="ReactJs_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.reacttext}}</span>
          </div>
          
          <!-- <div class="text-center mb-2">
            <img :src="ix.Redux" alt="Redux_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.reduxtext}}</span>
          </div> -->
          
          <div class="text-center mb-2">
            <img :src="ix.Python" alt="Python_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.pythontext}}</span>
          </div>
          
          <!-- <div class="text-center mb-2">
            <img :src="ix.ReactBootstrap" alt="React_bootstrap_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.reactBootstraptext}}</span>
          </div> -->

          <div class="text-center mb-2">
            <img :src="ix.Bootstrap" alt="Bootstrap_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-0 fw-bold">{{ix.Bootstraptext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.VueJs" alt="VueJs_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.vuetext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.VueX" alt="VueX_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.vuextext}}</span>
          </div>

          <div class="text-center mb-2">
            <img :src="ix.Cpp" alt="C_plus_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.cpptext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.mysql" alt="mysql_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.mysqltxt}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.mongoDb" alt="mysql_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.mongoTxt}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.html5" alt="html_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold text-center">{{ix.htmltext}}</span>
          </div>
          
          <div class="text-center mb-2">
            <img :src="ix.css" alt="css_logo" id="card" data-v-img loading="lazy"/>
            <span class="px-4 mx-2 fw-bold">{{ix.csstext}}</span>
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
import ResumeBtnVue from '../components/ResumeBtn.vue';

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
  background-image: url('https://cdn-images.imagevenue.com/02/2c/38/ME17YYZ8_o.png');
  /* border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175)); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

#circle{
  height: 40px;
  width: 40px;
  border: 8px solid darkorange;
  border-radius: 50%;
  position: absolute;
  right: -3.3%;
  top: -3.5%;
  animation-name: UpSideDown;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes UpSideDown {
  0%{
    transform: scale(70%);
    opacity: 0.5;
  }
  100% {
    transform: scale(100%);
  }
}

#boxx{
  background-color: rgba(245, 245, 245, 0.083);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.56);
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.354);
}

#button{
  background-image: linear-gradient(to right, #ff9100 100%, #ffaf25 100%);
  width: 50%;
  color: whitesmoke;
  font-weight: bold;
}

#button:hover{
  background-image: linear-gradient(to right, #ffa200 10%, #ff9100 100%);
  transition: 0.2s ease-in-out;
  transform: scale(105%);
}

#border{
  height: 15px;
  width: 30%;
  background: rgb(255, 157, 0);
}


#imge{
  height: 500px;
  width: 500px;
  object-fit: contain;
  transition: all 1s ease-in-out;
}

#imgOverlay{
  height: 400px;
  width: 400px;
  position: absolute;
  border: 10px solid rgb(255, 157, 0);
  transform: translateX(-30px) translateY(100px);
}

#txt{
  overflow: scroll;
  max-height: 298px;
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
  border: 2px solid black;
  background: #ffffff;
  box-shadow: 15px 15px 30px #b7b3b3fd inset,-5px -5px 30px #ffffff27;
  transition: all 0.2s ease-in-out;
}

#card:hover{
  transform: scale(110%);
  transition: all 0.4s ease-in-out;
  filter: none;
  border: 2px solid rgb(255, 94, 0);
  box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.452);
}

@media (max-width: 1445px) {
  #imge{
    height: 390px;
  }

  #imgOverlay{
    display: none;
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

  #imgOverlay{
    display: none;
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

[data-scale-data-to-screen-size]{
  background-color: rgba(245, 245, 245, 0.216);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

@media (max-width: 998px){
  #imge{
    height: auto;
    width: 100%;
    margin-bottom: 10px;
  }
  
  #txt{
    overflow: scroll;
    max-height: 170px;
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  #circle{
    height: 25px;
    width: 25px;
    border: 5px solid orange;
    right: 10%;
  }
  #imgContainer{
    display: flex;
    justify-content: center;
    width: 100%;
  }

  #imge{
    height: auto;
    width: 100%;
  }

  [data-scale-data-to-screen-size]{
    transform: scale(100%);
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
    width: 100%;
  }

  #imge{
    height: auto;
    width: 100%;
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