import { createStore } from 'vuex'

export default createStore({
  state: {
    activeState: 'StateA'
  },
  mutations: {
    SET_STATE(state, id) {
      state.activeState = id
    }
  },
  actions: {
    setScene({ commit }, id) {
      commit('SET_STATE', id)
    }
  }
})
