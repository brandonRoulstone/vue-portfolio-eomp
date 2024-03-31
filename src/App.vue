<template>
   <!-- https://vue-portfolio-eomp.web.app/ -->
  <NavigationBar/>

  <Loader /> 

  <CursorSm />

  <!-- <Content :loaded="loaded" />  -->

  <router-view/>
  
  <FooterComponent />

</template>

<script>
import Loader from "./components/LoaderComp.vue";
import CursorSm from './components/CursorSm.vue';
import NavigationBar from "./components/NavigationBar.vue";
import FooterComponent from "./components/FooterComponent.vue";


export default {
  components: {
    Loader,
    NavigationBar,
    CursorSm,
    FooterComponent
  },
  data() {
    return {
      loaded: false // Initial state: page not loaded
    };
  },
  mounted() {
    // Simulate a 5-second delay before displaying content
    setTimeout(() => {
      this.loaded = true; // Set loaded to true after 5 seconds
    }, 1000); 
  }
};

</script>

<style>
*{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(0, 0, 0);
  scroll-behavior: smooth;
  cursor: none;
}

::selection {
  background-color: #ddff0043; /* Change the background color */
  color: #000000 !important; /* Change the text color */
}
</style>

