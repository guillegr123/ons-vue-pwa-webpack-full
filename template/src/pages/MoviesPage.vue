<template>
  <v-ons-page>
    <v-ons-toolbar class="movies-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="{{#if vuex}}$store.commit('splitter/toggle'){{else}}$emit('toggleMenu'){{/if}}">
          <v-ons-icon icon="fa-bars"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">Ghibli films</div>
    </v-ons-toolbar>
    
    <v-ons-progress-bar indeterminate v-show="loading"></v-ons-progress-bar>

    <div>
      <v-ons-row v-for="movie in movies" :key="movie.id">
        <v-ons-col>
          <v-ons-card>
            <div class="title">
              \{{ movie.title }}
            </div>
            <div class="content">
              \{{ movie.description }}
            </div>
          </v-ons-card>
        </v-ons-col>
      </v-ons-row>
    </div>

  </v-ons-page>
</template>

<script lang="ts">
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import MovieService, { MoviesResult } from './../services/movieService.ts'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const Component = Vue.extend({
  name: 'home',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      movies: [],
      loading: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    MovieService.getMovies()
      .then((res: MoviesResult) => {
        if (res.hasError) {
          window.alert(res.error){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        } else {
          this.movies = res.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
        this.loading = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default Component{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>