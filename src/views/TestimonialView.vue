<template>

    <div id="gridCards" class="container">

        <div v-for="ix of $store.state.testimonialData" v-bind:key="ix.id">

            <div class="card my-3 mx-3" id="image">
    
                <div class="container border-bottom pb-2 border-black" id="containHeight">
                    <img :src="ix.image" class="card-img-top" :alt="ix.personname" id="containImg">
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
    grid-template-columns: repeat(3 ,1fr);
    margin-left: 150px;
}

#image{
  width: 20rem;
  filter: grayscale();
}

#containImg{
    height: 20rem;
}

#containImg:hover{
    transform: scale(95%);
    transition: all 0.5s ease-in-out;
}

#textOverflowScroll{
    max-height: 170px;
    overflow: scroll;
}

</style>