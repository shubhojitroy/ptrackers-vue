export const state = () => ({
  animateFirstTime: true,
  investor: {
    pCode: '',
    nameAddress1: '',
    nameAddress2: '',
    nameAddress3: '',
    nameAddress4: '',
    nameAddress5: '',
    unitsApplied: '',
    totalAmount:  '',
    billerCode: 'AZ89',
    refNumber: 60001234,
  }
})

export const getters = {
  animate: state => state.animateFirstTime,
  investor: state => state.investor,

}

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  },
  populateInvestor ({ commit }, value) {
    commit('setInvestor', value);
  }

}

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  },
  setInvestor (state, value) {
    state.investor = value;
  }
}
