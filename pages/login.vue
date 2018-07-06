<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Login
      </h1>
      <h4>
        <em>Please enter your Unique Entitlement Number</em>
      </h4>
      <form class="box" novalidate @submit.prevent="submitForm">
        <b-field label="Entitlement Number" :type="inputType" :message="inputMessage">
          <b-input id="entitlement-number" v-model.trim="entitlementNo">
          </b-input>
        </b-field>
        <p>
          If you believe you are an eligible Priority Applicant yet have not received your Unique Entitlement Number please contact Boardroom
          Pty Limited on 1300 767 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm
          (Sydney time) Monday to Friday.
        </p>
        <p>
          If you are uncertain as to whether an investment in the Company is suitable for you, please contact your stockbroker, financial
          adviser, accountant, lawyer or other professional adviser.
        </p>
        <div class="field is-grouped">
          <div class="control">
            <nuxt-link class="button is-primary is-outlined" to="/">
              Exit
            </nuxt-link>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">
              Login
            </button>
          </div>
        </div>
      </form>
      <div class="box">
        <p>
          If you are not an eligible PM Capital Opportunity Fund holder, you can apply through the General Offer
        </p>
        <div class="control offer">
          <a href="https://www.investorserve.com.au/?offerid=8A3F5478453A4E6A8745F482A30DB98C" target="_blank" class="button is-light">
            General Offer
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      entitlementNo: '',
      error: ''
    };
  },
  validations: {
    entitlementNo: {
      required
    }
  },
  computed: {
    inputType() {
      return this.$v.entitlementNo.$error || this.error ? 'is-danger' : 'is-primary';
    },
    inputMessage() {
      return this.$v.entitlementNo.$error
        ? 'Entitlement Number is required'
        : this.error;
    }
  },
  methods: {
    ...mapActions(['login']),
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.login({ entitlementNo: this.entitlementNo })
          .then(() => {
            this.$router.push('/registration-details');
            })
          .catch(err => {
            this.error = 'The entitlement number was invalid. Please try again';
            const el = document.getElementById('entitlement-number');
            el.focus();
            el.select();
          });
      }
    },
  },
};
</script>

<style scoped>
#entitlement-number {
  text-transform: uppercase;
}
.offer .button {
  width: 180px;
}
</style>
