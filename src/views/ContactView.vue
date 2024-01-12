<template>
    <div id="bgContainer" v-for="ix of $store.state.contactData" v-bind:key="ix">
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <div class="fw-bold lh-1 mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26446.194498144025!2d18.443461004984407!3d-34.0496599320757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42487d210221%3A0x356e4d40be6f15d2!2sDiep%20River%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1705065474356!5m2!1sen!2sza"
                width="450"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
  
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-5 p-5 border rounded-3"
              method="post"
              action="https://formspree.io/f/mrgwrvoq"
            >
              <div class="form-floating mb-3">
                <input v-model="formData.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">{{ ix.email }}</label>
                <div v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</div>
              </div>
              <div class="form-floating mb-3">
                <input v-model="formData.name" type="text" class="form-control" id="floatingTxt" placeholder="Name" />
                <label for="floatingTxt">{{ ix.name }} & {{ix.lastname}}</label>
                <div v-if="formErrors.password" class="text-danger">{{ formErrors.password }}</div>
              </div>
              <div class="form-floating mb-3">
                <textarea v-model="formData.textarea" class="form-control" id="floatingPwd" :placeholder="ix.ytxt"></textarea>
                <label for="floatingPwd">{{ ix.ytxt }}</label>
                <div v-if="formErrors.textarea" class="text-danger">{{ formErrors.textarea }}</div>
              </div>
              <button class="w-100 btn btn-lg" type="submit">{{ ix.find }}</button>
              <hr class="my-4">
              <SocialMediaIcons />
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
          password: this.formData.name ? '' : 'Password is required',
          textarea: this.formData.textarea ? '' : 'Textarea is required'
        };
  
        if (!Object.values(this.formErrors).some(error => error !== '')) {
          // Proceed with form submission
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
    button {
      color: #090909;
      padding: 0.7em 1.7em;
      font-size: 18px;
      border-radius: 0.5em;
      background: #e8e8e8;
      cursor: pointer;
      border: 1px solid #e8e8e8;
      transition: all 0.3s;
      box-shadow: 6px 6px 12px #161616, -6px -6px 12px #000000;
    }
  
    button:active {
      color: #ffffff;
      box-shadow: inset 4px 4px 12px #1d1d1d, inset -4px -4px 12px #100f0f;
    }

    #floatingInput, #floatingPwd, #floatingTxt{
        background: linear-gradient(rgb(171, 207, 208), rgba(50, 162, 190, 0.784));
    }

    #bgContainer{
        min-height: 100vh;
    }

    @media (max-width: 480px) {
        iframe{
            width: 250px;
            height: 250px;
        }
    }
  </style>
  