{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import 'font-awesome/css/font-awesome.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'onsenui/css/onsenui-core.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'onsenui/css/onsen-css-components.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import $ons from 'vue-onsenui/esm'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as VOns from './vue-onsen-components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
import App from './App.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Import Vue types
import { Vue as _Vue } from "vue/types/vue"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { PluginFunction } from "vue/types/plugin"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Augment Vue with $ons property
declare module 'vue/types/vue' {
  interface Vue {
    $ons: string
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Create wrapper plugin function for $ons
var onsPluginFun: PluginFunction<any> = (Vue: typeof _Vue, options?: any) => {
  $ons['install'](Vue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Use $ons
Vue.use(onsPluginFun){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Load Onsen UI components
Object.keys(VOns).map(key=>VOns[key]).forEach(comp => Vue.component(comp.name, comp)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
