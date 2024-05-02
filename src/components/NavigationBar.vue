<!-- <template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white rounded-1"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">
          <img 
          src="https://cdn-images.imagevenue.com/a1/b3/d4/ME17XQIF_o.png" 
          alt="Brandon_official_logo" 
          id="imgLogo"
          loading="lazy"
          >
        </a>
        <ul class="navbar-nav ms-auto mb-lg-0 gap-4 mx-4">
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/" data-nav>Home</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link text-decoration-none" id="nav" to="/about" data-nav>About me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/testimonials" data-nav>References</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/education" data-nav>Education & Experience</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/projects" data-nav>My Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none" id="nav" to="/contact" data-nav>Contact me</router-link>
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
  color: #000000;
  cursor: none;
  transition: all 1s ease-in-out;
}

#navbar a.router-link-exact-active {
  text-decoration: none;
  color: #ff5500;
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
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 5px solid orange;
  box-shadow: 1px 1px 10px 1px black;
}

@media (max-width: 992px) {
  #navbar{
    position: fixed;
    top: 0%;
    width: 100%;
    height: auto;
    z-index: 300;
    background-color: rgb(255, 255, 255);
  }
}

    
</style> -->
<template>
 <div id="navbar" class="bg-white"> 
  <nav class="navbar bg-white">
   <div class="page">
    <header tabindex="0"></header>
     <div id="nav-container">
    <div class="bg"></div>
       <div class="button" tabindex="0">
        <span class="icon-bar"></span>
         <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div id="nav-content" tabindex="0">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/">education & Experience</router-link></li>
        <li><router-link to="/">Projects</router-link></li>
        <li><router-link to="/">Reviews</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
      </ul>
    </div>
  </div>
</div>
 </nav>
</div>
</template>
<style scoped>
#navbar{
  position: fixed;
  top: -1%;
  z-index: 2000;
}
 header{
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: none;
 }
 @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:400,600');
* {
  outline: none;
}
strong {
  font-weight: 600;
}
.page {
  width: 100%;
  font-family: 'Encode Sans Condensed', sans-serif;
  font-weight: 600;
  letter-spacing: .03em;
  color: #212121;
}
header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 23;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
main {
  padding: 70px 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}
main > div {
  margin: auto;
  max-width: 600px;
}
main h2 span {
  color: #BF7497;
}
main p {
  line-height: 1.5;
  font-weight: 200;
  margin: 20px 0;
}
main small {
  font-weight: 300;
  color: #888;
}
#nav-container {
  position: fixed;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  z-index: 3777;
}
#nav-container .bg {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100% - 70px);
  visibility: hidden;
  opacity: 0;
  transition: .3s;
  background: #000;
}
#nav-container:focus-within .bg {
  visibility: visible;
  opacity: .6;
}
#nav-container * {
  visibility: visible;
}
.button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 0;
  background: transparent;
  border-radius: 0;
  height: 70px;
  width: 30px;
  cursor: pointer;
  pointer-events: auto;
  margin-left: 25px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.icon-bar {
  display: block;
  width: 100%;
  height: 3px;
  background: #aaa;
  transition: .3s;
}
.icon-bar + .icon-bar {
  margin-top: 5px;
}
#nav-container:focus-within .button {
  pointer-events: none;
}
#nav-container:focus-within .icon-bar:nth-of-type(1) {
  transform: translate3d(0,8px,0) rotate(45deg);
}
#nav-container:focus-within .icon-bar:nth-of-type(2) {
  opacity: 0;
}
#nav-container:focus-within .icon-bar:nth-of-type(3) {
  transform: translate3d(0,-8px,0) rotate(-45deg);
}
#nav-content {
  margin-top: 70px;
  padding: 20px;
  width: 90%;
  max-width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 70px);
  background: #ececec;
  pointer-events: auto;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  transform: translateX(-100%);
  transition: transform .3s;
  will-change: transform;
  contain: paint;
}
#nav-content ul {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#nav-content li a {
  padding: 10px 5px;
  display: block;
  text-transform: uppercase;
  transition: color .1s;
}
#nav-content li a:hover {
  color: #ff6f00;
}
#nav-content li a:active {
  color: #ff6f00 !important;
}
#nav-content li:not(.small) + .small {
  margin-top: auto;
}
.small {
  display: flex;
  align-self: center;
}
.small a {
  font-size: 12px;
  font-weight: 400;
  color: #888;
}
.small a + a {
  margin-left: 15px;
}
#nav-container:focus-within #nav-content {
  transform: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
a,
a:visited,
a:focus,
a:active,
a:link {
  text-decoration: none;
  outline: 0;
}
a {
  color: currentColor;
  transition: .2s ease-in-out;
}
h1, h2, h3, h4 {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
img {
  vertical-align: middle;
  height: auto;
  width: 100%;
}
</style>