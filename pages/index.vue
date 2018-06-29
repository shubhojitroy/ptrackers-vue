<template>
  <div>
    <div class="container content">
      <section class="canvas">
        <h1 class="title">
          PM Capital Global Opportunities Fund Limited<br>PM Capital <span style="color: red;">GO 2025</span> Limited
        </h1>
        <p>
          Portfolio Tracking Exchangeable Redeemable Securities (Converting Security) (known as ‘<span style="color: red;">PTrackERS</span>’)
        </p>
        <div class="box">
          <p>
            The PTrackERS ("Offer") is being made to any person who has a registered address in Australia or New Zealand.
          </p>
          <p>
            Due to legal restrictions, access to these webpages is only intended for access by persons within Australia and New Zealand.
            These webpages do not constitute an offer of securities in any place in which, or to any person to whom, it would not be lawful to make such an offer.
          </p>
          <div class="columns">
            <div class="column is-two-thirds-tablet is-half-desktop">
              <form novalidate @submit.prevent="submitForm">
                <b-field label="Country of Primary Residence" :type="countryType" :message="countryMessage">
                  <b-autocomplete v-model="country" field="name" :placeholder="placeholder" :data="filteredCountries" open-on-focus keep-first
                    icon="earth"
                    @select="onSelect"
                    @focus="focusSelect"
                    @blur="leaveSelect">
                    <!-- <template slot="header">
                      <a @click="clearSelect">
                          <span> Clear </span>
                      </a>
                    </template> -->
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
                <br>
                <div class="control">
                <button type="submit" class="button is-primary">
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
       </section>
    </div>
  </div>
</template>

<script>

import { countries } from "~/assets/js/countries.js"
import { required } from 'vuelidate/lib/validators'

const _placeholder = 'Select a Country';

export default {
  components: {
  },
  data () {
    return {
      name: "",
      country: "",
      country2: "",
      selected: null,
      placeholder: _placeholder,
      countries: countries.items
    }
  },
  validations: {
    country: {
      // required
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
    },

  },
  methods: {
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        const validCountry = this.selected.code === 'AUS' || this.selected.code === 'NZL' ? '/offer-details' : '/eligibility-notice';
        this.$router.push(validCountry);
      }
    },
    clearSelect () {
      this.placeholder = this.country;
      this.country = '';
    },
    focusSelect () {
      this.placeholder = this.country;
      this.country = '';
    },
    onSelect (option) {
      this.selected = option;
      console.log('selected!!', option && option.name)
    },
    leaveSelect () {
      console.log(`leaving!!!! country=${this.country}, placeholder=${this.placeholder}`, this.selected)
      if (this.country === '' && this.placeholder !== _placeholder) {
        this.country2 = this.placeholder;
      }
      let vm = this;
      setTimeout(function() {
        if (vm.country === '') { vm.country = vm.country2; }
      },200)
    //  this.$v.country.$touch()
    },
  }
}
</script>

<style scoped>
.canvas {
  z-index: 50;
  padding: 1rem;
  background: #fff 50%;
  background-size: cover;
  border-radius: 1px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;
}
h4 {
  font-size: 1.33rem;
  margin: 0.75em 0;
  font-weight: 500;
}
ul {
  list-style-type: disc;
}
li {
  line-height: 1.5;
  padding: 0.5rem 1rem;
  margin: 0 1.25em;
}
p {
  line-height: 1.75rem;
}
.space {
  display: block;
  width: 100%;
  height: 1.5em;
}
.footnote {
  font-size: 0.75rem;
  line-height: 1.2em;
}
</style>
