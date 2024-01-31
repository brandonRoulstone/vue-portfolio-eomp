<template>
  <!-- <div class="container" v-for="ix of $store.state.apiData" v-bind:key="ix.welcome" id="navbar">
    <header class="d-flex justify-content-center py-3 mb-4" id="navbar-bs">
      <a href="/about" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4 text-white" id="logo">{{ ix.ltxt }}</span>
      </a>

      <ul class="nav nav-pills"> 
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/">Home</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/about">About</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="nav-link text-decoration-none" to="/testimonials">Testimonial</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/projects">Projects</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/contact">Contact</router-link></li>
        <li class="nav-item nav-link" id="nav"><router-link class="text-decoration-none" to="/resume">Resume</router-link></li>
      </ul>

    </header>
  </div> -->
  
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white rounded-1"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/"></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/">Home</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link text-decoration-none" id="nav" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/resume">Resume</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>

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
  color: #006967;
  cursor: none;
  transition: all 1s ease-in-out;
}

#navbar a.router-link-exact-active {
  text-decoration: none;
  color: #0091ff;
}


#navbar{
  position: fixed;
  top: 0%;
  width: 100%;
  height: auto;
  z-index: 1;
  background-color: rgb(0, 0, 0);
}

    
</style>