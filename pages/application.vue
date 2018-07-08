<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Application
      </h1>
      <p>
        As an eligible Priority Applicant, you are invited to subscribe for an amount of PTrackERS equal to the number of PM Capital
        Global Opportunity Funds Limited Ordinary Shares held at the Record Date, subject to a minimum of 1,500 securities.
      </p>
      <p>
        If you are in doubt as to how to deal with this online Application, please contact your accountant, solicitor, stockbroker
        or other personal adviser without delay. The Prospectus contains information relevant to a decision to invest in
        Units and you should read the entire Prospectus carefully before applying. Defined terms in the Prospectus have the
        same meaning in this online Application.
      </p>
      <form class="app-form" novalidate @submit.prevent="submitForm">
        <div class="columns">
          <div class="column">
            <b-field label="Please enter the number of PTrackERS for which you are subscribing"
                     :type="unitsColor"
                     :message="unitsMessage">
              <b-input type="number" v-model.number="appUnitsEntered" placeholder="Units" autofocus @blur="onBlur">
              </b-input>
            </b-field>
            <p>
              Please enter your contact details in case we need to contact you about this online Application.
            </p>
            <b-field label="Email Address"
                     :type="emailColor"
                     :message="emailMessage">
              <b-input type="email" v-model.trim="emailAddress">
              </b-input>
            </b-field>
            <b-field label="Contact Number">
              <b-input type="tel" v-model.trim="phoneNumber" placeholder="e.g. 04XX XXX XXX  or  02 XXXX XXXX"></b-input>
            </b-field>
          </div>
          <div class="column">
            <div class="wrapper">
              <b-field label="Priority Invitation (Number of PTrackERS)">
                {{ investor.entitlement | currency('', 0) }}
              </b-field>
              <b-field label="Total number of PTrackERS subscribed">
                <span :class="{ highlight: 'switch' }">{{ applicationUnits || 0 | currency('', 0) }}</span>
              </b-field>
              <b-message v-if="rule == 1" type="is-info">
                <p>
                  You have applied for more PTrackERS than your entitlement. PTrackERS over your entitlement will be
                  considered as a general application.
                </p>
                <p>Your application is comprised of:
                  <ul>
                    <li>{{ investor.entitlement || 0 | currency('', 0) }} from your entitlement, and</li>
                    <li>{{ additionalUnits || 0 | currency('', 0) }} from the General Offer</li>
                  </ul>
                </p>
              </b-message>
              <b-message v-if="rule == 2" type="is-danger">
                <p>
                  As a holder of an entitlement to fewer than 1,500 PTrackERS you must apply for your full entitlement.
                  You may also apply for a number of PTrackERS greater than your entitlement, subject to the amount
                  being equal to or more than 1,500.
                </p>
              </b-message>
              <b-message v-if="rule == 3" type="is-danger">
                <p>
                  As a holder of an entitlement to fewer than 1,500 PTrackERS, if you wish to apply for additional
                  PTrackER the aggregate number must be equal to or greater than 1,500.
                </p>
              </b-message>
              <b-message v-if="rule == 4" type="is-danger">
                <p>
                  As a holder of an entitlement to 1,500 or more PTrackERS, you must apply for a minimum of 1,500.
                  Please enter a number equal to or greater than 1,500.
                </p>
              </b-message>
              <b-field label="Issue price per Unit">
                {{ investor.unitPrice | currency('$', 2) }}
              </b-field>
              <b-field label="Application Monies based on PTrackERS applied for">
                {{ applicationValue | currency('$', 2) }}
              </b-field>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>
              If you would like more information or have any questions relating to the Offer, you can contact the share registry, Boardroom
              Pty Limited, on 1300 737 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm
              (Sydney time) Monday to Friday. If you are uncertain as to whether an investment in the Company is suitable for
              you, please contact your stockbroker, financial adviser, accountant, lawyer or other professional adviser.
            </p>
            <p>
              <strong>
                In order to obtain payment instructions to complete your application, please click on the Submit button. This will take you
                to a confirmation page and provide BPAY payment details.
              </strong>
            </p>
            <p><strong><em>Please read the declaration before proceeding.</em></strong></p>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary is-outlined" @click="cancel()">
                  Cancel
                </button>
              </div>
              <div class="control">
                <button type="submit" class="button is-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box terms">
              <h4>Declaration</h4>
              <p>
                By clicking 'Submit' you are confirming the application details as made above and declaring that I/We:
              </p>
              <ol>
                <li>
                  have received a copy and read the Prospectus in full;
                </li>
                <li>
                  have completed this Application in accordance with the instructions on the form and in the Prospectus and the Application
                  and all details and statements made by me/us are complete and accurate;
                </li>
                <li>
                  acknowledge that the information contained in the Prospectus (or any supplementary or replacement Prospectus) is not investment
                  advice or a recommendation that Units are suitable for me/us, given my/our investment objectives, financial
                  situation or particular needs;
                </li>
                <li>
                  declare that the Application and all details and statements made by me/us are complete and accurate;
                </li>
                <li>
                  agree and consent to the Company collecting, holding, using and disclosing my/our personal information in accordance with
                  the Prospectus;
                </li>
                <li>
                  where I/we have been provided information about another individual, warrant that I/we have obtained that individual’s consent
                  to the transfer of their information to the Company;
                </li>
                <li>
                  acknowledge that once the Trust accepts my/our Application, I/we may not withdraw it;
                </li>
                <li>
                  apply for the number of PTrackERS set out in this Application (or a lower number allocated in a manner allowed under the
                  Prospectus);
                </li>
                <li>
                  acknowledge that my/our Application may be rejected by the Company in its absolute discretion;
                </li>
                <li>
                  am/are over 18 years of age;
                </li>
                <li>
                  agree to be bound by the Constitution of the Company;
                </li>
                <li>
                  authorise the Company and their respective officers and agents to do anything on my/our behalf necessary (including the completion
                  and execution of documents) to enable the Units to be allocated to me/us;
                </li>
                <li>
                  acknowledge that if I/we are not issued any PTrackERS or I/we are issued fewer PTrackERS than the number that I/we applied
                  and paid for as a result of a scale back, all or some of my/our Application Monies (as applicable) will be
                  refunded to me/us (without interest) in accordance with the Corporations Act as soon as practicable after the
                  PTrackERS are issued;
                </li>
                <li>
                  acknowledge that my/our application monies for my/our Priority Offer invitation are in respect of any units for which I/we
                  am/are applying;
                </li>
                <li>
                  acknowledge that neither the Company nor any person or entity guarantees any particular rate of return on the PTrackERS nor
                  do they guarantee the repayment of capital;
                </li>
                <li>
                  represent, warrant and agree that I/we have not received this Prospectus outside Australia/NZ and am/are not acting on behalf
                  of a person resident outside Australia/NZ; and
                </li>
              </ol>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';

const _businessRule = (entitlement, applicationUnits) => {
  if (applicationUnits == null) {
    return 0;
  } else if (applicationUnits > entitlement && applicationUnits >= 1500) {
    return 1;
  } else if (entitlement <= 1500 && applicationUnits < entitlement) {
    return 2;
  } else if (entitlement < 1500 && applicationUnits > entitlement && applicationUnits < 1500) {
    return 3;
  } else if (entitlement >= 1500 && applicationUnits < 1500) {
    return 4;
  } else {
    return 0;
  }
};

export default {
  middleware: 'auth',
  asyncData ({ store }) {
    return {
      phoneNumber: store.getters.investor.phoneNumber,
      emailAddress: store.getters.investor.emailAddress,
    };
  },
  data () {
    return {
      appUnitsEntered: null,
      applicationUnits: null,
      unitsError: '',
      switch: false,
    };
  },
  validations: {
    appUnitsEntered: {
      required,
    },
    emailAddress: {
      required
    },
    phoneNumber: {},
  },
  computed: {
    ...mapGetters(['sessionId', 'investor', 'application']),
    applicationValue () {
      return this.investor.unitPrice * this.applicationUnits;
    },
    additionalUnits () {
      return this.applicationUnits - this.investor.entitlement;
    },
    rule () {
      return _businessRule(this.investor.entitlement, this.applicationUnits);
    },
    unitsColor () {
     return this.rule > 1 ? 'is-danger' : this.errorColor(this.$v.appUnitsEntered.$error);
    },
    unitsMessage () {
     return this.rule > 1 ? 'Please enter a valid amount of PTrackERS' : this.errorMessage(this.$v.appUnitsEntered.$error, 'Number of PTrackERS');
    },
    emailColor () {
      return this.errorColor(this.$v.emailAddress.$error);
    },
    emailMessage () {
      return this.errorMessage(this.$v.emailAddress.$error, 'Email Address');
    },
  },
  methods: {
    ...mapActions(['save']),
    errorColor (isError) {
      return isError ? 'is-danger' : '';
    },
    errorMessage (isError, label) {
      return isError ? `${ label } is required.` : '';
    },
    onBlur () {
      const vm = this;
      // window.requestAnimationFrame(() => vm.switch = false);
      vm.switch = false;
      window.requestAnimationFrame(() => this.applicationUnits = this.appUnitsEntered);
      window.setTimeout(() => vm.switch = true, 200);
      // vm.switch = true;
      // window.requestAnimationFrame(() => vm.switch = true);
    },
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.submitApplication();
      }
    },
    submitApplication () {
      const app = {
        sessionId: this.sessionId,
        entitlement: this.investor.entitlement,
        applicationUnits: this.applicationUnits,
        billerCode: this.application.billerCode,
        referenceNo: this.application.referenceNo,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
      };
      const vm = this;
      this.save(app)
        .then(() => {
          vm.$router.push('/confirmation-payment');
        })
        .catch(err => console.log(err));
    },
    cancel () {
      this.$dialog.confirm({
        title: 'Cancel application',
        message: 'Are you sure you want to <b>cancel</b> your application?',
        cancelText: 'No',
        confirmText: 'Yes',
        type: 'is-warning',
        hasIcon: true,
        onConfirm: () => this.$router.push('/')
      });
    },
  },
//  beforeRouteLeave (to, from, next) {
    // const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    // if (answer) {
    //   next();
    // } else {
    //   next(false);
    // }
 // }
};
</script>

<style lang="scss" scoped>
@import '~assets/css/styles.scss';

.app-form {
  background-color: $brand-color-g;
  padding: 2rem;
}
.wrapper {
  padding: 1rem;
  background-color: ivory;
}
.terms {
  font-size: 13px;
}
.terms li {
  font-style: italic;
  padding-bottom: 0.5rem;
}
@keyframes highlight {
  from {
    background-color: orange;
  }
  to {
    background-color: ivory;
  }
}
.highlight {
  animation: highlight .8s ease-in-out;
}
@media screen and (max-width: 640px) {
  .app-form {
    margin: 0 -1.5rem -3rem;
    padding: 2rem 1.5rem;
  }
}
</style>

