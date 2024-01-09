import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // introduction
    apiData: [],
    aboutData: [],
    testimonialData: [],
    projectsData: [],
    contactData: [],
    resumeData: []
  },
  getters: {
  },
  mutations: {
    // state accessing intrduction
    accessApiData(state, info){
      state.apiData = info
    },
    // state accessing about
    accessAboutData(state, info){
      state.aboutData = info
    },
    // state accessing testimonials
    accesstestimonialData(state, info){
      state.testimonialData = info
    },
    // state accessing projects
    accessprojectsData(state, info){
      state.projectsData = info
    },
    // state accessing contact
    accesscontactData(state, info){
      state.contactData = info
    },
    // state accessing resume
    accessresumeData(state, info){
      state.resumeData = info
    }
  },
  actions: {
    fetchApiData(context){
      axios.get("https://brandonroulstone.github.io/portfolioApi/")
      .then(i => { 
        context.commit('accessApiData', i.data.intro)
        console.log(i.data.intro);
      }).catch(error => {
        // Handle any errors that occur during the API request
        console.error('Error fetching intro data:', error);
      });
    },
    fetchAboutData(context){
      axios.get("https://brandonroulstone.github.io/portfolioApi/")
      .then(i => {
        context.commit('accessAboutData', i.data.about)
        console.log(i.data.about);
      }).catch(error => {
        // Handle any errors that occur during the API request
        console.error('Error fetching intro data:', error);
      });
    },
    fetchProjectsData(context){
      axios.get("https://brandonroulstone.github.io/portfolioApi/")
      .then(i => {
        context.commit('accessprojectsData', i.data.projects);
        console.log(i.data.projects)
      }).catch(error => {
        console.error('Error fetching intro data:', error);
      })
    }
  },
  modules: {
  }
})
