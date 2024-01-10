import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    apiData: [],
    aboutData: [],
    testimonialData: [],
    projectsData: [],
    contactData: [],
    resumeData: []
  },
  mutations: {
    accessApiData(state, info) {
      state.apiData = info
    },
    accessAboutData(state, info) {
      state.aboutData = info
    },
    accesstestimonialData(state, info) {
      state.testimonialData = info
    },
    accessprojectsData(state, info) {
      state.projectsData = info
    },
    accesscontactData(state, info) {
      state.contactData = info
    },
    accessresumeData(state, info) {
      state.resumeData = info
    }
  },
  actions: {
    async fetchApiData(context) {
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accessApiData', response.data.intro)
        console.log(response.data.intro);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
    async fetchAboutData(context) {
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accessAboutData', response.data.about)
        console.log(response.data.about);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    },
    async fetchProjectsData(context) {
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accessprojectsData', response.data.projects)
        console.log(response.data.projects)
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    },
    async fetchTestimonialsData(context) {
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accesstestimonialData', response.data.testimonials)
        console.log(response.data.testimonials)
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    },
    async fetchContactData(context){
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accesscontactData', response.data.contact)
        console.log(response.data.contact)
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    }, async fetchResumeData(context){
      try {
        const response = await axios.get("https://brandonroulstone.github.io/portfolioApi/")
        context.commit('accessresumeData', response.data.Resume)
        console.log(response.data.Resume);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    }
  },
  modules: {}
})