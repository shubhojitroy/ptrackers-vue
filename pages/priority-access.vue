<template>
  <div>
    <div class="container">
      <section class="canvas">
        <h1 class="title is-size-2 is-size-3-mobile">
          Unique Priority Code
        </h1> 
        <h4>
          <em>Please enter your Unique Priority Code</em>
        </h4>
        <div class="alert-bound">
          <form novalidate @submit.prevent="submitForm">
            <b-field label="Priority Code" :type="inputType" :message="inputMessage">
              <b-input id="priority-code" v-model.trim="priorityCode">
              </b-input>
            </b-field>
            <span class="space"></span>
            <p>
              If you believe you are an eligible Priority Applicant yet have not received a Unique Priority Code please contact Boardroom Pty Limited on 1300 767 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm (Sydney time) Monday to Friday.
            <p>
            <span class="space"></span>
            <p>
              If you are uncertain as to whether an investment in the Company is suitable for you, please contact your stockbroker, financial adviser, accountant, lawyer or other professional adviser.
            <p>
            <span class="space"></span>
            <div class="field is-grouped">
              <div class="control">
                <nuxt-link to="/" class="button is-primary is-outlined">
                  exit
                </nuxt-link>
              </div>             
              <div class="control">
                <nuxt-link to="/registration-details" @click="login" class="button is-primary">
                  login
                </nuxt-link>
              </div>
            </div>
            <!-- </div> -->
            <!-- <br> {{ priorityCode }}
            <br> {{ offer }} -->
          </form>         
        </div>
      </section>
    </div>
  </div>
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
        //     this.offer = response.data;
        //     this.error = '';
        //     this.goToOffer(this.offer.Offer);
        //   })
        //   .catch(err => { this.error = 'An error has occurred on the server.' })
        const investor =  {
          pCode: '1234',
          nameAddress1: 'JOE SMITH',
          nameAddress2: '123 ANYWHERE ST',
          nameAddress3: 'SYDNEY',
          nameAddress4: 'NSW',
          nameAddress5: '3000',
          unitsApplied: '25,000',
          totalAmount:  'A$15,000',
          billerCode: '9876',
          refNumber: 60001234,
        };
        this.populateInvestor(investor);
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
.alert-bound {
  width: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.0rem;

}
.footnote {
  font-size: 0.75rem;
  line-height: 1.2em;
}
</style>
