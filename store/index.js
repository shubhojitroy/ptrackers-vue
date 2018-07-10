import api from '~/api/api';

export const state = () => ({
  animateFirstTime: true,
  activeTab: 0,
  acceptTerms: false,
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
    applicationUnits: 0,
    billerCode: '',
    referenceNo: '',
    emailAddress: '',
    phoneNumber: '',
  },
  errorLogin: '',
  errorApply: '',
});

export const getters = {
  animate: state => state.animateFirstTime,
  activeTab: state => state.activeTab,
  acceptTerms: state => state.acceptTerms,
  sessionId: state => state.sessionId,
  investor: state => state.investor,
  application: state => state.application,
  applicationValue: state => state.investor.unitPrice * state.application.applicationUnits,
  errorLogin: state => state.errorLogin,
  errorApply: state => state.errorApply,
};

export const mutations = {
  stopAnimation (state) {
    state.animateFirstTime = false;
  },
  setActiveTab (state, value) {
    state.activeTab = value;
  },
  setAcceptTerms (state, value) {
    state.acceptTerms = value;
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
  setErrorLogin (state, value) {
    state.errorLogin = value;
  },
  setErrorApply (state, value) {
    state.errorApply = value;
  },
};

export const actions = {
  stopAnimation ({ commit }) {
    commit('stopAnimation');
  },
  setActiveTab ({ commit }, value) {
    commit('setActiveTab', value);
  },
  setAcceptTerms ({ commit }, value) {
    commit('setAcceptTerms', value);
  },
  login ({ commit }, credentials) {
    return api.login(
      credentials,
      session => commit('setSession', session),
      investor => commit('setInvestor', investor),
      application => commit('setApplication', application),
      error => commit('setErrorLogin', error),
    );
  },
  save ({ commit }, appDetails) {
    return api.save(
      appDetails,
      session => commit('setSession', session),
      application => commit('setApplication', application),
      error => commit('setErrorApply', error),
    );
  },
  clearData ({ commit }) {
    const investor = {
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
    };
    const app = {
      applicationUnits: 0,
      billerCode: '',
      referenceNo: '',
      emailAddress: '',
      phoneNumber: '',
    };
    commit('setInvestor', investor);
    commit('setApplication', app);
    commit('setActiveTab', 0);
    commit('setAcceptTerms', false);
    commit('setSession', '');
    commit('setErrorLogin', '');
    commit('setErrorApply', '');
  }
};
