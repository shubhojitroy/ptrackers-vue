export const state = () => ({
  animateFirstTime: true,
  investor: {
    priorityCode: '',
    nameAddress1: '',
    nameAddress2: '',
    nameAddress3: '',
    nameAddress4: '',
    nameAddress5: '',
    emailAddress: '',
    phoneNumber: '',
    unitPrice: 1.4,
    entitlement: 0,
  },
  payment: {
    unitsApplied: 0,
    billerCode: 123465,
    refNumber: 60001234,
  },
})

export const getters = {
  animate: state => state.animateFirstTime,
  investor: state => state.investor,
  payment: state => state.payment,
  applicationAmount: state => state.investor.unitPrice * state.payment.unitsApplied,
}

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  },
  populateInvestor ({ commit }, value) {
    commit('setInvestor', value);
  },
  assignPayment ({ commit }, value) {
    commit('setPayment', value);
  },
}

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  },
  setInvestor (state, value) {
    state.investor = value;
  },
  setPayment (state, value) {
    state.payment = value;
  },
}
