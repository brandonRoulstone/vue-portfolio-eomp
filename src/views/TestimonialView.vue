<template>
  <div id="carouselContainer">
      
    <CarouselCompVue />

  </div>
    

</template>

<script>
import CarouselCompVue from '@/components/CarouselComp.vue';
export default {
  methods : {
    fetchTestimonialsData : function(){
      this.$store.dispatch('fetchTestimonialsData')
    }
  },
  components : {
    CarouselCompVue
  },
  mounted(){
    this.fetchTestimonialsData()
  }
}
</script>

<style scoped>

#carouselContainer{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://cdn-images.imagevenue.com/e6/b0/46/ME17Z1CO_o.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.146), rgba(32, 32, 32, 0.264)); */
}

::-webkit-scrollbar {
  width: 5px;
  height: 4px;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 1px;
  scroll-behavior: smooth;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgb(0, 0, 0); 
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(56, 54, 54, 0.632); 
}

/* #testimonialCards{
  color: #ff8000;
  width: 30rem;
  height: 39em;
  background: linear-gradient(to left,#1d1d1d, #181717) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #ff8000;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.328);
}
#testimonialCards:hover{
  color: #fecb00;
  transition: all 0.3s ease-in-out;
  border: 1px solid #ffe600;
  background: linear-gradient(to top,#2e2e2d, #26221e) !important;
}

#ic{
  color: rgb(255, 170, 0); 
  z-index: 1234;
}

#containImg{
  height: 20rem;
}

#textOverflowScroll{
    max-height: 170px;
    overflow: scroll;
} */

/* @media (max-width: 1030px) {
  #gridCards{
    overflow: scroll !important;
    display: flex !important;
    margin-left: 0;
    scroll-behavior: smooth;
    max-width: 100%;
    min-height: 100vh;
  }

  #textOverflowScroll{
    max-height: 130px;
    overflow: scroll;
  }
  
}

@media (max-width: 496px) {
  #gridCards{
    overflow: scroll !important;
    display: flex !important;
    flex-direction: column;
    margin-left: 0;
  }

  #textOverflowScroll{
    max-height: 130px;
    overflow: scroll;
  }

  #containImg{
    height: 25rem;
  }

  #testimonialCards{
    width: 26.3rem;
    height: 43em;
  }
}

@media (max-width: 426px) {
  #gridCards{
    overflow: scroll !important;
    display: flex !important;
    flex-direction: column;
    margin-left: 0;
    scroll-behavior: smooth;
    max-width: 100%;
    min-height: 100vh;
    padding-top: 30px;
  }

  #textOverflowScroll{
    max-height: 130px;
    overflow: scroll;
  }

  #containImg{
    height: 25rem;
  }

  #testimonialCards{
    width: 40rem;
    height: 47em;
  }
}

@media (max-width: 400px) {
  #testimonialCards{
    width: 34.3rem;
    height: 45em;
  }
}

@media (max-width: 325px) {
  #testimonialCards{
    width: 30rem;
    height: 45em;
  }
}
@media (max-width: 300px) {
  #testimonialCards{
    width: 27.7rem;
    height: 45em;
  }
}
@media (max-width: 285px) {
  #testimonialCards{
    width: 25.8rem;
    height: 45em;
  }
} */

</style>