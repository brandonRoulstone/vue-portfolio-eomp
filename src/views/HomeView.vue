<template>

  <div v-for="ix of $store.state.apiData" v-bind:key="ix.apiData" id="body">
    
    <div class="container" id="landingBody">

      <div id="ci"></div>

      <div class="px-4 py-5 my-5 text-center">

        <div class="display-5 fw-bold text-body-emphasis"> 

          <div class="container mt-5 mb-0" id="box">

            <span id="introText">{{ ix.welcome }}</span>
            
          </div>

        </div>

        <p class="lead mb-1" id="text-L">{{ ix.textsm }} & Software engineer</p>

        <div class="col-lg-6 mx-auto">

          <!-- <p class="lead mb-4" id="text-S">{{ ix.subtxt }}</p> -->

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

            <router-link to="/projects">

              <button type="button" class="btn btn-lg px-4" data-btn>{{ ix.projectsBtn }}</button>

            </router-link>
            
            <a href="https://doc-14-8c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/d8o47872heut741vltjfpf022o808co9/m3pnfb249bmq3p3jen4oiulb7lpc1vvh/1712228175000/3/112216125655560560638/APznzaaJy_EzCrkzWP9rOCYums6P2UASwqP5P0uvLKjndNs1oKpCuh4Wd7OtPGeLR7U5DIvEK8E2gUIur5DYFtXR872YHEItG0qPJSK87leTxfoP-_BiWr_mFVCfL50RFu4fdidFMYpMIdKWow2ueNbnFubKTTUt1xhCvIa0kal_J16p1FnBnzYggMlvWJbYj07eqVJPdzPkLBL7McnTjCFBCM3TlgRBhKyp99ET95saBwbPhaOUN_EGhzosp1q21UGUuEGDBBjIVKGPPNJsM2O-yTofZZJhRo_d3XzJ9ZcSORBUIWZXC8l5rEECxizh_l-gCn2xv9khIz_C730Iza_vj2ReNBVzaGrUpTlejp4ynxCS3Scz37kRvsW_R3l2efbWkyxZSLY2jgzPrpqa76yl-jhcDNL4g9Cj5_On0HIF5gS_qMp6CNU=?authuser=0&nonce=g4vueu58qsubm&user=112216125655560560638&hash=imidargbfv0emaqq950p4d4nu2v5hi09" target="_blank" class="btn btn-lg px-4" data-btn-middle download>view resume</a>
            <router-link to="/contact">

              <button type="button" class="btn btn-lg px-4" data-btn>{{ ix.hireMebtn }}</button>

            </router-link>


          </div> 

        </div>

        
      </div>
      <SocialMediaIcons />
      
    </div>

  </div>
  
</template>

<script>
import SocialMediaIcons from '@/components/SocialMediaIcons.vue';
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {

  components : {
    SocialMediaIcons
  },

  methods : {
    fetchApiData : function(){
      this.$store.dispatch('fetchApiData')
    }
  },

  mounted(){
    this.fetchApiData()
  },
  
  props: {
    loaded: Boolean // Prop to receive loaded state from parent
  }
}

</script>

<style scoped>
#body{
  font-family: Kaisei HarunoUmi;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 90px;
}

#ic{
  animation-name: fadeBeat;
  animation-duration: 1s;
}

#ic:hover{
  scale: 115%;
  transition: all 0.15s ease-in-out;
}

#ci{
  height: 40px;
  width: 40px;
  border: 10px solid darkorange;
  border-radius: 50%;
  position: absolute;
  right: 20%;
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

#cursor{
  width: 10px;
  height: 5px;
  background-color: #000000;
}

#body{
  transition: all 0.5s ease-in-out;
  background-image: url('https://cdn-images.imagevenue.com/ef/98/5c/ME17UWKM_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
}

#box {
  white-space: nowrap; 
  position: relative;
  overflow: hidden;
  width: 540px;
  animation: typewriter 4s steps(50) alternate;
}

#introText {
  /* font-size: 35px; */
  font-weight: 700;
  background: linear-gradient(to right,#ff8000, #d1811a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden; /* Hides any content that overflows the container */
  text-overflow: ellipsis; /* Displays an ellipsis (...) to indicate truncated text */
  white-space: nowrap; 
}

#text-L, #text-S{
  color: #000000;
  font-weight: 800;
  transition: all 1s ease-in-out;
}

#text-L{
  font-size: 30px;
}

@keyframes fadeBeat {
  0%{
    filter: blur(90px);
  }
  25%{
    filter: blur(50px);
  }
  50%{
    filter: blur(20%);
  }
  75%{
    filter: blur(10%);
  }
  100%{
    filter: blur(0%);
  }
}

[data-btn] {
 width: 9em;
 height: 3em;
 color: rgb(255, 119, 0);
 font-weight: bold;
 border-radius: 30em;
 font-size: 15px;
 font-family: inherit;
 position: relative;
 overflow: hidden;
 z-index: 1;
 border: 1px solid orangered;
}
[data-btn-middle] {
 width: 9em;
 height: 3em;
 color: rgb(255, 255, 255);
 font-weight: bold;
 border-radius: 30em;
 font-size: 15px;
 font-family: inherit;
 position: relative;
 overflow: hidden;
 z-index: 1;
 border: 1px solid orangered;
}

[data-btn-middle]::before {
 content: '';
 width: 100%;
 height: 3em;
 border-radius: 30em;
 position: absolute;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #ff9100 10%, #f9b847 100%);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

[data-btn-middle]:hover::before {
 width: 0%;
}

[data-btn]::before {
 content: '';
 width: 0;
 height: 3em;
 border-radius: 30em;
 position: absolute;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #ff9100 10%, #f9b847 100%);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

[data-btn]:hover::before {
 width: 9em;
}

@keyframes typewriter {
  0% {
    width: 0px;
  }

  100% {
    width: 540px;
  }
}

@media (max-width: 998px) {
  #boxable{
    height: 250px;
    position: fixed;
    width: 170px;
    margin: 30px;
    left: 75%;
    top: 20%;
  }
  #moveableTxt{
    position: fixed;
    left: 0%;
    width: 150px;
    top: 0%;
    font-size: 10px;
  }
}

@media (max-width: 780px) {
  #boxable{
    height: 250px;
    position: fixed;
    width: 150px;
    margin: 30px;
    left: 75%;
    top: 10%;
  }

  #moveableTxt{
    position: fixed;
    left: 0%;
    width: 150px;
    top: 0%;
    font-size: 10px;
  }

  #box {
    width: 400px;
  }

  #introText {
    font-size: 30px;
    font-weight: 700;
  }

}

@media (max-width: 598px) {
  #boxable{
    height: 250px;
    position: fixed;
    width: 150px;
    margin: 30px;
    left: 63.5%;
    top: 10%;
  }

  #moveableTxt{
    position: fixed;
    left: 0%;
    width: 150px;
    top: 0%;
    font-size: 10px;
  }

  #box {
   width: 400px;
  }

  #introText {
    font-size: 25px;
    font-weight: 700;
  }

  #text-L{
    font-size: 20px;
  }

  #text-S{
    font-size: 15px;
  }

  [data-btn] {
    width: 9em;
    height: 2em;
    color: rgb(255, 119, 0);
    font-weight: bold;
    border-radius: 20em;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  [data-btn]::before {
    content: '';
    width: 0;
    height: 2em;
    border-radius: 20em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #d80f0f 10%, #ff8000 100%);
    transition: .5s ease;
    display: block;
    z-index: -1;
  }

}

@media (max-width: 540px) {
  #introText{
    font-size: 20px;
  }
  
  #box {
    white-space: nowrap; 
    position: relative;
    overflow: hidden;
    width: 250px;
    animation: typewriter 4s steps(50) alternate;
  }

  #text-L{
    font-size: 15px;
  }

  #text-S{
    font-size: 11px;
  }

  @keyframes typewriter {
    0% {
      width: 0px;
    }
  
    100% {
      width: 300px;
    }
  }
}

@media (max-width: 380px) {
  #introText{
    font-size: 20px;
  }

  #box {
    white-space: nowrap; 
    position: relative;
    overflow: hidden;
    width: 250px;
    animation: typewriter 4s steps(50) alternate;
  }

  #text-L{
    font-size: 15px;
  }

  #text-S{
    font-size: 11px;
  }

  [data-btn]{
    font-size: 13px;
  }

  @keyframes typewriter {
    0% {
      width: 0px;
    }
  
    100% {
      width: 300px;
    }
  }
}

</style>
