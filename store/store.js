import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const INCREMENT = 'INCREMENT'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT] (state, { a }) {
      state.count = a
    }
  },
  actions: {
    increment ({ commit }, obj) {
      setTimeout(() => {
        commit('INCREMENT', obj)
      }, 2000)
    }
  }
})

export default store
