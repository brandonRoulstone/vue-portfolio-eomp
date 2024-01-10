<template>
    <div v-if="!loaded" class="loader">
      <div class="loader-spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loaded: false // Initial state: page not loaded
      };
    },
    mounted() {
      // Simulate a 5-second delay before displaying content
      setTimeout(() => {
        // Set loaded to true after 5 seconds
        this.loaded = true; 
      }, 2000);
    }
  };
  </script>
  
  <style scoped>
  /* CSS styles for the loader */
  .loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3333;
  }
  
  /* Loader spinner animation */
  .loader-spinner {
    border: 4px dashed #f3f3f3;
    /* border-style: ridge; */
    border-top: 4px solid #0040ff;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 0.9s linear infinite; /* Loader spins for 5 seconds */
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  