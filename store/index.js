export const state = () => ({
  animateFirstTime: true,
  activeTab: 0,
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
});

export const getters = {
  animate: state => state.animateFirstTime,
  activeTab: state => state.activeTab,
  investor: state => state.investor,
  payment: state => state.payment,
  applicationAmount: state => state.investor.unitPrice * state.payment.unitsApplied,
};

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  },
  setActiveTab (state, value) {
    state.activeTab = value;
  },
  setInvestor (state, value) {
    state.investor = value;
  },
  setPayment (state, value) {
    state.payment = value;
  },
};

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  },
  setActiveTab ({ commit }, value) {
    commit('setActiveTab', value);
  },
  assignPayment ({ commit }, value) {
    commit('setPayment', value);
  },
  login ({ commit }, credentials) {
    const investor = {
      priorityCode: '1234',
      nameAddress1: 'HARRY JAMES POTTER',
      nameAddress2: '225 GEORGE STREET',
      nameAddress3: 'SYDNEY',
      nameAddress4: 'NSW',
      nameAddress5: '2000',
      emailAddress: 'harry.potter@gmail.com',
      phoneNumber: '9290-1200',
      unitPrice: 1.4,
      entitlement: 12000,
    };
    if (credentials.priorityCode === '12345') {
      commit('setInvestor', investor);
      return Promise.resolve();
    } else {
      return Promise.reject('Invalid Priority Code');
    }
  },
};
