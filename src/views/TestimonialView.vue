<template>

    <div id="gridCards" class="">

        <div v-for="ix of $store.state.testimonialData" v-bind:key="ix.id">

            <div class="card my-3 mx-3" id="image">
    
                <div class="container border-bottom pb-2 border-black" id="containHeight">
                    <img :src="ix.image" class="card-img-top img-fluid" :alt="ix.personname" id="containImg">
                </div>
    
                <div class="card-body">
    
                  <h4 class="card-title fw-bold fs-3">{{ix.personname}}</h4>
    
                  <p class="card-text fw-bold">{{ix.jobtitle}}</p>
    
                  <div class="card-text" id="textOverflowScroll">{{ix.text}}</div>
    
                </div>
    
            </div>
    
        </div>

    </div>

</template>

<script>
export default {
//   props : {
//     container: "container"
//   },
  components : {
    
  },
  methods : {
    fetchTestimonialsData : function(){
      this.$store.dispatch('fetchTestimonialsData')
    }
  },
  mounted(){
    this.fetchTestimonialsData()
  }
}
</script>

<style scoped>
#gridCards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background: rgb(227, 222, 222);
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

#image{
  width: 30rem;
  height: 39em;
  background: rgba(235, 232, 227, 0.417) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.328);
}
#image:hover{
  color: orangered;
  border: 1px solid orangered;
}

#containImg{
  height: 20rem;
}

#textOverflowScroll{
    max-height: 170px;
    overflow: scroll;
}

@media (max-width: 1030px) {
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
@media (max-width: 550px) {
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

  #image{
    width: 40rem;
    height: 45em;
  }
}

@media (max-width: 390px) {
  #image{
    width: 35.3rem;
    height: 45em;
  }
}

@media (max-width: 325px) {
  #image{
    width: 30rem;
    height: 45em;
  }
}
@media (max-width: 300px) {
  #image{
    width: 27.7rem;
    height: 45em;
  }
}
@media (max-width: 285px) {
  #image{
    width: 25.8rem;
    height: 45em;
  }
}

</style>