<template>
    <div id="containerThree" v-for="ix of $store.state.contactData" v-bind:key="ix">
      <div class="container mt-5 pt-3">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <div class="display-3 fw-bold lh-1 text-body-emphasis mb-3">Questions?<br> 
                <p id="text">Let's Get In Touch</p>
            </div>
            <br>
            <h2 class="col-lg-10 fs-2 mb-3">Contact me</h2>
            <br>
            <div class="container d-flex justify-content-evenly" id="mediaQQ">
              <p class="d-flex justify-content-evenly fs-6"><i class="fa-solid fa-location-dot fa-xl mx-2" style="color: #1e1e1f;"></i>1 Mile-end Road, Diep River<br> Cape Town, South Africa</p>
              <br>
              <p class="d-flex justify-content-evenly fs-6"><i class="fa-solid fa-phone-volume fa-xl mx-2" style="color: #1e1e1f;"></i>Contact No. <br> +27 69 219 6897</p>
              <br>
              <p class="d-flex justify-content-evenly fs-6"><i class="fa-solid fa-envelope fa-xl mx-2" style="color: #1e1e1f;"></i>Email address : <br> brandonroulstone465@gmail.com</p>
            </div>
            <br>
            <div class="d-flex justify-content-evenly">   
              <a href="https://github.com/brandonRoulstone" class="icon-icon"><i class="fa-brands fa-github fa-xl" style="color: orange;"></i></a>
              
              <a href="https://www.linkedin.com/in/brandon-roulstone-4b69a9290/" class="icon-icon"><i class="fa-brands fa-linkedin-in fa-xl" style="color: orange;"></i></a>
            </div>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5" 
              action="https://formspree.io/f/mpzvjbgb"
              method="POST"
            >
              <div class="form-floating mb-3">
                <input v-model="formData.name" type="text" class="form-control border-1 border-dark-subtle border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">{{ix.name}}</label>
                <div v-if="formErrors.name" class="text-danger">{{ formErrors.name }}</div>
              </div>
              <div class="form-floating mb-3">
                <input v-model="formData.email" type="email" class="form-control border-1 border-dark-subtle border-top-0 border-start-0 border-end-0 rounded-0" id="floatingEmailAdd" placeholder="Password" name="floatingEmail">
                <label for="floatingEmail">{{ ix.email }}</label>
                <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
              </div>
              <div class="form-floating mb-3">
                <input v-model="formData.textarea" type="text" class="form-control border-1 border-top-0 border-start-0 border-end-0 border-dark-subtle rounded-0" id="floatingYourMessage" placeholder="Password" name="floatingMessage">
                <label for="floatingMessage">Your message</label>
                <div v-if="formErrors.textarea" class="text-danger">{{ formErrors.textarea }}</div>
              </div>
              <button class="w-100 btn btn-lg border-1" type="submit" @click.prevent="submitForm()">Contact me</button>
              <br>
              <p class="d-flex justify-content-end mt-5 fs-5">BrandonRoulstone 2023 &copy; | All rights reserved</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  import SocialMediaIcons from '../components/SocialMediaIcons.vue';
  
  export default {
    components: {
      SocialMediaIcons
    },
    data() {
      return {
        formData: {
          email: '',
          name: '',
          textarea: ''
        },
        formErrors: {
          email: '',
          name: '',
          textarea: ''
        }
      };
    },
    methods: {
      fetchContactData: function () {
        this.$store.dispatch('fetchContactData');
      },
      submitForm: function () {
        this.formErrors = {
          email: this.formData.email ? '' : 'Email is required',
          name: this.formData.name ? '' : 'Name is required',
          textarea: this.formData.textarea ? '' : 'Textarea is required'
        };
  
        if (!Object.values(this.formErrors).some(error => error !== '')) {
          console.log('Form submitted successfully!');
        }
      }
    },
    mounted() {
      this.fetchContactData();
    }
  };
</script>
  
<style scoped>
  #containerThree{
    background-image: url('https://megaone.acrothemes.com/product-hotspot/images/contact_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.8em;
    background: orange;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    /* box-shadow: 6px 6px 12px #161616, -6px -6px 12px #000000; */
  }

  button:active{
    transform: scale(95%);
    transition: 0.4s ease-in-out;
    color: orangered;
    background-color: yellow;
  }

  button:hover {
    color: orangered;
    background-color: black;
    /* box-shadow: inset 4px 4px 12px #1d1d1d, inset -4px -4px 12px #100f0f; */
  }

  #text{
    color: orange;
  }
  #bgContainer{
    min-height: 100vh;
  }

  @media (max-width: 770px) {
    iframe{
      width: 250px;
      height: 250px;
    }
    #containerThree{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
    }
    #mediaQQ{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      /* font-size: 10px !important; */
    }
  }
</style>
  