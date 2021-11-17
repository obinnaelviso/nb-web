import Vue from 'vue'

export const state = () => ({
  visibility: true
})

export const mutations = {
  SET_VISIBILITY: (state, visibility) => {
    Vue.set(state, 'visibility', visibility)
  }
}

export const actions = {
  toggleVisibility ({ commit, state }, payload) {
    commit('SET_VISIBILITY', !state.visibility)
  }
}
