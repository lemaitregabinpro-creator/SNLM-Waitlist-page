import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FaqDetail from '@/views/FaqDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'SmartBookLM - Suppression automatique du filigrane NotebookLM',
      description: 'SmartBookLM : Supprimez automatiquement le filigrane NotebookLM sur toutes vos slides en quelques secondes. Mode Local First, confidentialité garantie.'
    }
  },
  {
    path: '/faq/:slug',
    name: 'FaqDetail',
    component: FaqDetail,
    props: true,
    meta: {
      title: 'FAQ - SmartBookLM',
      description: 'Questions fréquentes sur SmartBookLM : suppression automatique du filigrane NotebookLM, mode Local First, compatibilité et workflow.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title and meta description on route change
router.afterEach((to) => {
  // For FAQ detail pages, meta tags are handled in the component
  if (to.name === 'FaqDetail') {
    return
  }
  
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  let metaDescription = document.querySelector('meta[name="description"]')
  if (to.meta.description) {
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description)
  }
})

export default router
