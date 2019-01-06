import Vue from 'vue/dist/vue.esm.js'
import hello from './components/hello.vue'
import store from './store/store.js'
// ------------------------------------------------------

new Vue({
  el: '#app',
  store,
  render: h => h(hello)
})
