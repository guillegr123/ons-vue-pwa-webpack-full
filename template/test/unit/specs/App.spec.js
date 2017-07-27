import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

describe('App.vue', () => {
  const Constructor = Vue.extend(App){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const vm = new Constructor({{#vuex}}{ store }{{/vuex}}).$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('provides a closed menu by default', () => {
    expect(vm.menuIsOpen)
      .to.equal(false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
