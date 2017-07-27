<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <home-page{{#unless vuex}} @toggleMenu="menuIsOpen = !menuIsOpen"{{/unless}}></home-page>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import HomePage from './components/HomePage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import MenuPage from './components/MenuPage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
{{#if vuex}}
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
{{else}}
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      menuIsOpen: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
{{/if}}
  components: {
    HomePage,
    MenuPage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
