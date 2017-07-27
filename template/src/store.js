{{#if_eq lintConfig "airbnb"}}
/* eslint no-param-reassign: ["error", { "props": false }] */
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      mutations: {
        toggle{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          } else {
            state.open = !state.open{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
