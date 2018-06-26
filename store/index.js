export const state = () => ({
  animateFirstTime: true,
  investor: {
    pCode: '1234',
    nameAddress1: 'JOE BLOGGS',
    nameAddress2: '123 ANYWHERE ST',
    nameAddress3: 'SYDNEY',
    nameAddress4: 'NSW',
    nameAddress5: '2000',
    unitsApplied: '10,000',
    totalAmount:  'A$15,000',
    billerCode: 'XXXX',
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
