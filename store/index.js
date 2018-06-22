export const state = () => ({
  animateFirstTime: true
})

export const getters = {
  animate: state => state.animateFirstTime
}

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  }
}

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  }
}
