<template>
  <section class="section">
    <div class="container">
      <p>
        Please enter the Priority Code from your invitation below.
      </p>
      <br>
      <div class="columns">
        <div class="column is-half-tablet is-one-quarter-desktop">
          <form novalidate @submit.prevent="submitForm">

            <b-field label="Priority Code" :type="inputType" :message="inputMessage">
              <b-input id="priority-code" v-model.trim="priorityCode">
              </b-input>
            </b-field>
            <br>
            <div class="control">
            <button type="submit" class="button is-primary">
              Submit
            </button>
            </div>
            <!-- <br> {{ priorityCode }}
            <br> {{ offer }} -->
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import axios from 'axios'
import { required } from 'vuelidate/lib/validators'

const offerA = "https://www.investorserve.com.au?offerid=36C12FB1A0F344D886FFB0E663F05C54";
const offerB = "https://www.investorserve.com.au?offerid=A653D8CB98D14766820EF4D4334BA0E5";

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
    login () {
        axios.post('https://api.boardroomlimited.com.au/api/DixonIpo/GetOffer', { PriorityCode: this.priorityCode.toUpperCase() })
          .then(response => {
            this.offer = response.data;
            this.error = '';
            this.goToOffer(this.offer.Offer);
          })
          .catch(err => { this.error = 'An error has occurred on the server.' })
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
