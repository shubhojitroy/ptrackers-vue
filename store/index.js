import api from '~/api/api';

export const state = () => ({
  animateFirstTime: true,
  activeTab: 0,
  sessionId: '',
  investor: {
    entitlementNo: '',
    nameAddress1: '',
    nameAddress2: '',
    nameAddress3: '',
    nameAddress4: '',
    nameAddress5: '',
    nameAddress6: '',
    emailAddress: '',
    phoneNumber: '',
    unitPrice: 0,
    entitlement: 0,
  },
  application: {
    applicationAmount: 0,
    billerCode: 123465,
    referenceNo: 60001234,
    emailAddress: '',
    phoneNumber: '',
  },
});

export const getters = {
  animate: state => state.animateFirstTime,
  activeTab: state => state.activeTab,
  sessionId: state => state.sessionId,
  investor: state => state.investor,
  application: state => state.application,
  applicationValue: state => state.investor.unitPrice * state.application.applicationAmount,
};

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  },
  setActiveTab (state, value) {
    state.activeTab = value;
  },
  setSession (state, value) {
    state.sessionId = value;
  },
  setInvestor (state, value) {
    state.investor = value;
  },
  setApplication (state, value) {
    state.application = value;
  },
};

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  },
  setActiveTab ({ commit }, value) {
    commit('setActiveTab', value);
  },
  // assignPayment ({ commit }, value) {
  //   commit('setPayment', value);
  // },
  login ({ commit }, credentials) {
    return api.login(
      credentials,
      session => commit('setSession', session),
      investor => commit('setInvestor', investor),
      application => commit('setApplication', application)
    );
    // .then(() => {
    //   console.log('all fine!');
    //   return Promise.resolve();
    // })
    // .catch(err => {
    //   console.log('caught!');
    //   // throw new Error('My Error:' + err);
    //   return Promise.reject(('MY BIG ERROR: ' + err));
    // });
    //   commit('setProducts', products)
    // })
    // if (credentials.entitlementNo === '12345') {
    //   commit('setInvestor', api.investor);
    //   return Promise.resolve();
    // } else {
    //   return Promise.reject('Invalid Priority Code');
    // }
  },
  save ({ commit }, sessionId, application) {
    api.save(
      sessionId,
      application,
      session => commit('setSession', session)
    );
  },
};
