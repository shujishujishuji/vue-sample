import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: null
  },
  getters: {
    msg: state => state.msg,
  },
  mutations: {
    setMsg(state, newMsg) {
      state.msg = newMsg
    },
  },
  actions: {
    setMsg({ commit }, newMsg) {
      commit('setMsg', newMsg)
    }
  },
  modules: {}
})
