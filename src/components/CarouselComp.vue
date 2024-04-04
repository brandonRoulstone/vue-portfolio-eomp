<template>
    <div id="mainContainer">
      <carousel :items-to-show="1.5">
          <slide v-for="slide in $store.state.testimonialData" :key="slide">
              <div class="d-flex mx-4 border mt-3 py-3 px-3 rounded-3 shadow container" id="testimonialCard">
                  <div id="quotation">
                      <i class="fa-solid fa-quote-right fa-sm fa-beat" style="color: #fff;"></i>
                  </div>
                  <div class="d-flex container justify-content-center">
                  <img :src="slide.image" :alt="slide.personname" class="img img-fluid" id="img">
              </div>
              <div>
                  <span class="fs-3 text-start" id="meadiaTxtSm">{{ slide.personname }}</span>
                  <br>
                  <p>{{ slide.jobtitle }}</p>
                  <div class="text-start my-3" id="mediaQtxt">{{ slide.text }}</div>
              </div>
              </div>
          </slide>
          <template #addons>            
              <navigation />
              <pagination />
          </template>
      </carousel>
    </div>
  </template>
  
<script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  }
</script>

<style scoped>
  #img{
    border-radius: 50%;
    border: 1px solid rgb(255, 85, 0);
    height: 150px;
    width: 150px;
  }

  #mainContainer{
    overflow: hidden;
  }

  #testimonialCard{
    background: rgba(255, 255, 255, 0.298);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    
  }

    #mediaQtxt{
      max-height: 105px;
      overflow-y: scroll;
      text-align: center !important;
    }

  #quotation{
    position: absolute;
    right: 5%;
    background: linear-gradient(to right, rgb(255, 85, 0) 40%, rgb(235, 227, 172));
    padding: 0.2em;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  @media (max-width: 1110px) {
    #img{
      border-radius: 50%;
      height: 110px;
      width: 110px;
    }

    #mediaQtxt{
      max-height: 120px;
      overflow-y: scroll;
      text-align: center !important;
    }
  }

  @media (max-width: 780px) {
    #mainContainer{
      overflow: scroll;
    }

    #testimonialCard{
      background: rgba(255, 255, 255, 0.298);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      font-size: 10px !important;
    }

    #img{
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }

    #mediaQtxt{
      max-height: 80px;
      overflow-y: scroll;
      text-align: center !important;
    }
  }

  @media (max-width: 690px) {
    #mainContainer{
      overflow: scroll;
    }

    #mediaQtxt{
      max-height: 40px;
      overflow-y: scroll;
      text-align: center !important;
    }

    #meadiaTxtSm{
      font-size: 15px !important;
    }

    #testimonialCard{
      background: rgba(255, 255, 255, 0.298);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      font-size: 10px !important;
      flex-wrap: wrap;
      height: 20rem;
    }

    #img{
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
  }

</style>
  