import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';;
import TestimonialView from '../views/TestimonialView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ResumeView from '../views/ResumeView.vue';
import EducationView from '../views/EducationView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/testimonials',
    name: 'tesimonials',
    component: TestimonialView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
