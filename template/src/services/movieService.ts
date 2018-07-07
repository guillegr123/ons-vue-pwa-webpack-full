import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const API_URL = 'https://ghibliapi.herokuapp.com/films'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export class MoviesResult {
  hasError: boolean{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  error: string{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  data: Array<any>{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  constructor(data: Array<any>, error: string) {
    if (data === null && error !== null) {
      this.hasError = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.error = error{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      this.hasError = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.data = data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  getMovies ():  Promise<MoviesResult> {
    return axios.get(API_URL)
      .then((res) => {
        return new MoviesResult(res.data, null){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }).catch((error) => {
        return new MoviesResult(null, 'There was an error while getting the movie list.'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}