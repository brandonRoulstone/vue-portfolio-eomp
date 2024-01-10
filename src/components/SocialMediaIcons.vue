<template lang="">
    <div v-for="ix of $store.state.apiData" v-bind:key="ix.apiData" class="d-flex justify-content-center gap-5 mt-1">

        <div class="border p-2 rounded-5" id="ic">
          <a :href="ix.github"><i class="fa-brands fa-github fa-xl" style="color: #ffffff;"></i></a>
        </div>
  
        <div class="border border-info p-2 rounded-5" id="ic">
          <a :href="ix.linkedIn"><i class="fa-brands fa-linkedin fa-xl" style="color: #0e49af;"></i></a>
        </div>
  
        <div class="border p-2 rounded-5" id="ic">
          <a :href="ix.gmail"><i class="fa-regular fa-envelope fa-xl" style="color: #ffffff;"></i></a>
        </div>
  
      </div>
</template>
<script>
export default {
    methods : {
    fetchApiData : function(){
      this.$store.dispatch('fetchApiData')
    }
  },

  mounted(){
    this.fetchApiData()
  },
}
</script>
<style scoped>
#ic{
    animation-name: fadeBeat;
    animation-duration: 1s;
  }
  
  #ic:hover{
    scale: 115%;
    transition: all 0.15s ease-in-out;
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
  
</style>