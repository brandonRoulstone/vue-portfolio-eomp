<template>
  <div class="container" v-for="ix of $store.state.apiData" v-bind:key="ix.welcome" id="navbar">
    <header class="d-flex justify-content-center py-3 mb-4" id="navbar-bs">
      <a href="/about" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <!-- <img src="https://cdn-thumbs.imagevenue.com/56/9a/09/ME17DI4V_t.png" alt="" height="60" width="150"> -->
        <span class="fs-4 text-white" id="logo">{{ ix.ltxt }}</span>
      </a>

      <ul class="nav nav-pills"> 
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/">Home</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/about">About</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/testimonials">Testimonial</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/projects">Projects</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/contact">Contact</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/resume">Resume</router-link></li>
      </ul>

    </header>
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
#logo{
  font-family: Georgia, 'Times New Roman', Times, serif;
  border-bottom: 1px solid white;
}

#nav, router-link {
  font-weight: bold;
  color: #2c3e50;
  cursor: none;
  transition: all 1s ease-in-out;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: #ffffff;
}

@media (max-width: 780px) {
  #nav, router-link {
  font-weight: bold;
  color: #2c3e50;
  cursor: none;
  transition: all 1s ease-in-out;
  font-size: 13px;
  }
}

@media (max-width: 540px) {
  #nav, router-link {
  font-weight: bold;
  color: #2c3e50;
  cursor: none;
  transition: all 1s ease-in-out;
  font-size: 9px;
 }
 
 #navbar-bs{
    width: 100%;
    flex-wrap: wrap;
  }

  #logo{
    font-size: 20px !important;
  }

}

@media (max-width: 380px) {
  #nav, router-link {
    font-weight: bold;
    color: #2c3e50;
    cursor: none;
    transition: all 1s ease-in-out;
    font-size: 13px;
    }

    #navbar-bs{
      width: 100%;
      flex-wrap: wrap;
    }

    #logo{
      font-size: 15px !important;
    }
}
    
</style>