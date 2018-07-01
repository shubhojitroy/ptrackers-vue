<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Application Amount
      </h1>
      <p>
        As an eligible Priority Applicant, you are invited to subscribe for an amount of PTrackERS equal to the number of PM Capital
        Global Opportunity Funds Limited Ordinary Shares held at the Recird Date, subject to a minimum of 1,500 securities.
      </p>
      <p>
        If you are in doubt as to how to deal with this online Application, please contact your accountant, solicitor, stockbroker
        or other personal adviser without delay. The Prospectus contains information relevant to a decision to invest in
        Units and you should read the entire Prospectus carefully before applying. Defined terms in the Prospectus have the
        same meaning in this online Application.
      </p>
      <form novalidate @submit.prevent="submitForm">

        <b-field label="Priority Invitation (Number of PTrackERS):">
          {{ investor.entitlement }}
        </b-field>

        <b-field label="Number applied for (PTrackERS):">
          <b-input type="number" v-model.number="unitsApplied" placeholder="Units"></b-input>
        </b-field>

        <b-field label="Issue price per Unit:">
          {{ investor.unitPrice | currency('$', 2) }}
        </b-field>

        <b-field label="Application Monies based on PTrackERS applied for:">
          {{ applicationAmount | currency('$', 2) }}
        </b-field>
        <hr>

        <p>
          Please enter your contact details in case we need to contact you about this online Application.
        </p>
        <b-field label="Contact Number: Please include area code e.g. '04XXXXXXXX' or '02XXXXXXXX'">
          <b-input type="tel" v-model.trim="phoneNo" placeholder="Contact number"></b-input>
        </b-field>

        <b-field label="Email" :type="is-danger" message="">
          <b-input type="email" v-model="emailAdrs">
          </b-input>
        </b-field>
        <div class="box terms">
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
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary is-outlined" @click="cancel()">
              Cancel
            </button>
          </div>
          <div class="control">
            <nuxt-link to="/confirmation-payment" class="button is-primary" @click.native="submitPayment()">
              Submit
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  asyncData ({ store }) {
    console.log(store);
    return {
      phoneNo: store.getters.investor.phoneNumber,
      emailAdrs: store.getters.investor.emailAddress,
    };
  },
  data () {
    return {
      unitsApplied: 0,
    };
  },
  computed: {
    ...mapGetters(['investor']),
    applicationAmount () {
      return this.investor.unitPrice * this.unitsApplied;
    }
  },
  methods: {
    ...mapActions(['assignPayment']),
    submitPayment () {
      const payment = {
        unitsApplied: this.unitsApplied,
        billerCode: 98723,
        refNumber: 809276394,
      };
      this.assignPayment(payment);
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
};
</script>

<style lang="scss" scoped>
.terms li {
  font-style: italic;
  padding-bottom: 1rem;
}
</style>

