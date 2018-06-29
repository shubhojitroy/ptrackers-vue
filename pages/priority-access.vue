<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Priority Code
      </h1>
      <h4>
        <em>Please enter your Unique Priority Code</em>
      </h4>
      <div class="box">
        <form novalidate @submit.prevent="submitForm">
          <b-field label="Priority Code" :type="inputType" :message="inputMessage">
            <b-input id="priority-code" v-model.trim="priorityCode">
            </b-input>
          </b-field>
          <p>
            If you believe you are an eligible Priority Applicant yet have not received a Unique Priority Code please contact Boardroom
            Pty Limited on 1300 767 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm
            (Sydney time) Monday to Friday.
          </p>
          <p>
            If you are uncertain as to whether an investment in the Company is suitable for you, please contact your stockbroker, financial
            adviser, accountant, lawyer or other professional adviser.
          </p>
          <div class="field is-grouped">
            <div class="control">
              <nuxt-link to="/" class="button is-primary is-outlined">
                Exit
              </nuxt-link>
            </div>
            <div class="control">
              <nuxt-link to="/registration-details" @click.native="login" class="button is-primary">
                Login
              </nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  components: {
  },
  data () {
    return {
      priorityCode: "",
      offer: { Offer: null },
      error: ""
    }
  },
  validations: {
    priorityCode: {
      required
    }
  },
  computed: {
    inputType() {
      return this.$v.priorityCode.$error || this.error ? "is-danger" : "is-primary"
    },
    inputMessage() {
      return this.$v.priorityCode.$error
        ? "Priority Code is required"
        : this.error;
    }
  },
  methods: {
    ...mapActions(['populateInvestor']),
    login () {
        // axios.post('https://api.boardroomlimited.com.au/api/DixonIpo/GetOffer', { PriorityCode: this.priorityCode.toUpperCase() })
        //   .then(response => {
                const investor = {
                  priorityCode: '1234',
                  nameAddress1: 'HARRY POTTER',
                  nameAddress2: '225 GEORGE STREET',
                  nameAddress3: 'SYDNEY',
                  nameAddress4: 'NSW',
                  nameAddress5: '2000',
                  emailAddress: 'harry.potter@gmail.com',
                  phoneNumber: '9290-1200',
                  unitPrice: 1.4,
                  entitlement: 12000,
                };
                this.populateInvestor(investor);
        //     this.offer = response.data;
        //     this.error = '';
        //     this.goToOffer(this.offer.Offer);
        //   })
        //   .catch(err => { this.error = 'An error has occurred on the server.' })

    },
    goToOffer (offerType) {
      console.log("offertype", offerType)
      this.error = '';
      switch (offerType) {
        case 'A':
          window.location = offerA;
          break;
        case 'B':
          window.location = offerB;
          break;
        default:
          this.error = "Sorry, your Priority Code was invalid. Please try again.";
      }
    },
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.login();
      }
    }
  }
}
</script>

<style scoped>
#priority-code {
  text-transform: uppercase;
}
</style>
