<template>

    <div id="gridCards" class="container">

        <div v-for="ix of $store.state.testimonialData" v-bind:key="ix.id">

            <div class="card" id="image">
    
                <div class="container" id="containHeight">
                    <img :src="ix.image" class="card-img-top" alt="" id="containImg">
                </div>
    
                <div class="card-body">
    
                  <h5 class="card-title">{{ix.personname}}</h5>
    
                  <p class="card-text">{{ix.jobtitle}}</p>
    
                  <div class="card-text" id="textOverflowScroll">{{ix.text}}</div>
    
                  <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    
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
    background-color: aliceblue;
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
}

#image{
    width: 20rem;
}

#containImg{
    height: 25rem;
}

#textOverflowScroll{
    max-height: 140px;
    overflow: scroll;
}

#containHeight{
 
}

</style>