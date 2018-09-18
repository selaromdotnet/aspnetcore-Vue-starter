import './css/site.css'
import 'core-js/es6/promise'
import 'core-js/es6/array'

import { app } from './app'

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}


app.$mount('#app')
