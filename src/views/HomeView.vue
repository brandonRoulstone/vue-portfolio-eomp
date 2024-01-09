<template>

  <div v-for="ix of $store.state.apiData" v-bind:key="ix.apiData" id="body" class="container">
    
    <div class="container" id="landingBody">

      <div class="px-4 py-5 my-5 text-center">
        
        <!-- <div class="container">
          
          <div id="boxable">
            <div class="text-center" id="moveableTxt">{{ ix.textsm }}</div>
          </div>
          
        </div> -->

        <div class="display-5 fw-bold text-body-emphasis"> 

          <div class="container mt-5 mb-0" id="box">

            <span class="" id="introText">{{ ix.welcome }}</span>

          </div>

        </div>

        <p class="lead mb-1" id="text-L">{{ ix.textsm }}</p>

        <div class="col-lg-6 mx-auto">

          <p class="lead mb-4" id="text-S">{{ ix.subtxt }}</p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

            <router-link to="/projects">

              <button type="button" class="btn btn-lg px-4 gap-3 fs-6" data-btn>{{ ix.projectsBtn }}</button>

            </router-link>

            <router-link to="/contact">

              <button type="button" class="btn btn-lg px-4 fs-6" data-btn>{{ ix.hireMebtn }}</button>

            </router-link>

          </div> 

        </div>

        
      </div>
      
    </div>
    
    <div class="d-flex justify-content-center gap-5 mt-1">

      <div class="border p-2 rounded-5" id="ic">
        <i class="fa-brands fa-github fa-xl" style="color: #ffffff;"></i>
      </div>

      <div class="border border-info p-2 rounded-5" id="ic">
        <i class="fa-brands fa-linkedin fa-xl" style="color: #0e49af;"></i>
      </div>

      <div class="border p-2 rounded-5" id="ic">
        <i class="fa-regular fa-envelope fa-xl" style="color: #ffffff;"></i>
      </div>

    </div>

  </div>
  
</template>

<script>
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {

  components : {
    // FontAwesomeIcon
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
}

#ic{
  animation-name: fadeBeat;
  animation-duration: 1s;
}

#ic:hover{
  scale: 115%;
  transition: all 0.15s ease-in-out;
}

/* #ic{
  height: 20px;
  width: 20px;
} */

/* ::-webkit-scrollbar-track {
  -webkit-border-radius: 0px;
  display: none !important;
} */

/* #icons{
  position: fixed;
  bottom: 33%;
  display: flex;
  justify-content: space-evenly;
  gap: 25px;
} */
/* #body{
  min-height: 100vh;
  overflow-y: scroll;
} */

/* #body::-webkit-scrollbar-track {
  display: none;
} */

/* ::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  scroll-behavior: smooth;
  border-radius: 5px;
} */

/* ::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 0px;
  display: none;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  display: none;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.632); 
} */


#landingBody{
  border-right: 2px solid white;
  border-left: 2px solid white;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
  /* box-shadow:inset 10px 0px 40px 20px rgba(255, 255, 255, 0.134); */
  /* min-height: 100vh; */
}

#box {
  white-space: nowrap; 
  position: relative;
  overflow: hidden;
  width: 490px;
  animation: typewriter 4s steps(50) alternate;
}

#introText {
  font-size: 35px;
  font-weight: 700;
  background: linear-gradient(to right,#ffffff, #188bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden; /* Hides any content that overflows the container */
  text-overflow: ellipsis; /* Displays an ellipsis (...) to indicate truncated text */
  white-space: nowrap; 
}

#text-L, #text-S{
  color: #f4ebeb;
  font-weight: 800;
  transition: all 1s ease-in-out;
}

#text-L{
  font-size: 30px;
}

#boxable{
  height: 370px;
  width: 300px;
  position: fixed;
  background-image: url('https://cdn-thumbs.imagevenue.com/90/b9/33/ME17DB0Y_t.png');
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateZ(0deg);
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  left: 65%;
  transition: 0.4s ease-in-out;
  animation-name: fadeBeat;
  animation-duration: 6s;
}

#moveableTxt{
  transform: rotateZ(0deg);
  position: fixed;
  left: 47%;
  top: 0%;
  width: 10rem;
  background: linear-gradient(to top,rgba(0, 196, 222, 0.409), rgba(0, 89, 104, 0.85));
  color: black;
  font-weight: 600;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  padding-left: 5px;
  padding-right: 5px;
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
 color: white;
 font-weight: bold;
 border-radius: 30em;
 font-size: 15px;
 font-family: inherit;
 border: 1px solid white;
 position: relative;
 overflow: hidden;
 z-index: 1;
}

[data-btn]::before {
 content: '';
 width: 0;
 height: 3em;
 border-radius: 30em;
 position: absolute;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #0f4bd8 10%, #47cff9 100%);
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
    width: 420px;
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
    color: white;
    font-weight: bold;
    border-radius: 20em;
    font-size: 10px;
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
    background-image: linear-gradient(to right, #0f4bd8 10%, #47cff9 100%);
    transition: .5s ease;
    display: block;
    z-index: -1;
  }

}

</style>
