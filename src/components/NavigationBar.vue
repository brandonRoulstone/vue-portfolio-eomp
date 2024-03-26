<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white rounded-1"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">
          <img 
          src="https://cdn-images.imagevenue.com/2e/77/c7/ME17UWJX_o.png" 
          alt="" 
          id="imgLogo"
          loading="lazy"
          >
        </a>
        <ul class="navbar-nav me-auto mb-lg-0 gap-5">
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/" data-nav>Home</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link text-decoration-none" id="nav" to="/about" data-nav>About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/testimonials" data-nav>Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/projects" data-nav>Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/resume" data-nav>Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/contact" data-nav>Contact</router-link>
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

#nav, router-link {
  font-weight: bold;
  color: #ff8000;
  cursor: none;
  transition: all 1s ease-in-out;
}

#navbar a.router-link-exact-active {
  text-decoration: none;
  color: #ff8c00;
}

[data-nav] {
  color: #000000;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

[data-nav]:focus,
[data-nav]:hover {
  color: #ff8000;
}

[data-nav]:focus:after,
[data-nav]:hover:after {
  width: 100%;
  left: 0%;
}

[data-nav]:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #ff6f00;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}



#navbar{
  position: fixed;
  top: 0%;
  width: 100%;
  height: auto;
  z-index: 300;
  background-color: rgba(0, 0, 0, 0);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}

#imgLogo{
  height: 90px;
  width: 150px;
}

@media (max-width: 880px) {
  #navbar{
    position: fixed;
    top: 0%;
    width: 100%;
    height: auto;
    z-index: 300;
    background-color: rgb(255, 255, 255);
  }
}

    
</style>