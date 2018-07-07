<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <nav-page></nav-page>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script lang="ts">
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import NavPage from './pages/NavPage{{#unless_eq lintConfig "airbnb"}}.vue{{/unless_eq}}'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import MenuPage from './pages/MenuPage{{#unless_eq lintConfig "airbnb"}}.vue{{/unless_eq}}'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const Component = Vue.extend({
  name: 'app',
  computed: {
    menuIsOpen: {
      get{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
        return this.$store.state.splitter.open{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      set{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(newValue) {
        this.$store.commit('splitter/toggle', newValue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  components: {
    NavPage,
    MenuPage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default Component{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
