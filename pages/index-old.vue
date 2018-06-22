<template>
  <section class="section">
    <div class="container box">
      <h1 class="title">WAM Global Limited (ACN 624 572 925)</h1>
      <div class="content">
        <p>
          This offer for securities in WAM Global Limited is being made to applicants whose registered address is in Australia or New Zealand.
        </p>
        <p>
          To access this website, please verify your country of primary residence.
        </p>
        <div class="columns">
          <div class="column is-two-thirds-tablet is-half-desktop">
            <form novalidate @submit.prevent="submitForm">
              <b-field label="Country of Primary Residence" :type="countryType" :message="countryMessage">
                <b-autocomplete v-model="country" field="name" placeholder="Select a Country" :data="filteredCountries" open-on-focus keep-first
                  icon="earth" @select="option => selected = option" @blur="$v.country.$touch()">
                  <template slot="empty">No results found</template>
                </b-autocomplete>
              </b-field>
              <br>
              <div class="control">
              <button type="submit" class="button is-primary">
                Continue
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { countries } from "~/assets/js/countries.js"
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
  },
  data () {
    return {
      name: "",
      country: "",
      selected: null,
      countries: countries.items
    }
  },
  validations: {
    country: {
      required
    }
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .indexOf(this.country.toLowerCase()) >= 0
        })
    },
    countryType() {
      return this.$v.country.$error ? "is-danger" : ""
    },
    countryMessage() {
     return this.$v.country.$error ? "Country is required" : ""
    }
  },
  methods: {
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        const validCountry = this.selected.code === 'AUS' || this.selected.code === 'NZL' ? '/confirm-domicile' : '/eligibility-notice';
        this.$router.push(validCountry);
      }
    }
  }
}
</script>

<style>

</style>
