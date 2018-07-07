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
    },
    navigator: {
      namespaced: true,
      state: {
        stack: []{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      getters: {
        pageStack: state => state.stack{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      mutations: {
        push (state, page) {
          state.stack.push(page){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        },
        pop (state) {
          if (state.stack.length > 1) {
            state.stack.pop(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        },
        replace (state, page) {
          state.stack.pop(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          state.stack.push(page){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        },
        reset (state, page) {
          state.stack = Array.isArray(page) ? page : [page || state.stack[0]]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
