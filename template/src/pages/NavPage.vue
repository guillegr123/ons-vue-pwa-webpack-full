<template>
  <v-ons-page>
    <v-ons-navigator swipeable swipe-target-width="200px"
          :page-stack="pageStack"
          :pop-page="goBack"
    ></v-ons-navigator>
  </v-ons-page>
</template>

<script lang="ts">
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapGetters } from 'vuex'

const Component = Vue.extend({
  name: 'nav',
  computed: {
    ...mapGetters('navigator', [
      'pageStack'
    ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    /* Override default pop behavior and delegate it to the router */
    goBack () {
      // Go to the parent route component
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name })

      // this.$router.go(-1); // Could work but might be misleading in some situations
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default Component{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>