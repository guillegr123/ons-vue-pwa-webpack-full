import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HomePage from './pages/HomePage.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import MoviesPage from './pages/MoviesPage.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store.ts'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    name: 'movies',
    path: '/movies',
    component: MoviesPage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]

const router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}} // short for `routes: routes`
})
  
router.beforeEach((to, from, next) => {
  // Reset pageStack to the new route in main navigator
  store.commit('navigator/reset', to.matched[0].components.default){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  // Closing menu
  store.commit('splitter/toggle', false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}