import { createStore } from 'vuex'

export default createStore({
  state: {
    activeScene: 'kap01'
  },
  mutations: {
    SET_SCENE(state, id) {
      state.activeScene = id
    }
  },
  actions: {
    setScene({ commit }, id) {
      commit('SET_SCENE', id)
    }
  }
})
