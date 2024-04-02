<template>
    <div id="resumeContainer">
        <div class="pt-5 mt-5">
            <ResumeCompVue />
        </div>
    </div>
</template>
<script>
import ResumeCompVue from '@/components/ResumeComp.vue';
export default {
    methods : {
    fetchResumeData : function(){
      this.$store.dispatch('fetchResumeData')
    }
  },
  components : {
    ResumeCompVue,
  },
  mounted(){
    this.fetchResumeData()
  }
}
</script>
<style scoped>
</style>