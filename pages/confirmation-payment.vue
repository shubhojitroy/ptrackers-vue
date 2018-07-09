<template>
  <section id="confirmation" class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Confirmation and Payment Instruction
      </h1>
      <p class="no-print">
        Your Application Monies must be received by the Share Registry by BPAY® or Cheque by 5.00pm (Sydney time) on Wednesday, 8 August
        2018. If you do not make a BPAY® payment, your online Application will be incomplete and will not be accepted. By
        paying by BPAY®, you will be deemed to have accepted the terms of the Offer.
      </p>
      <p class="no-print">
        You should submit your BPAY® payment immediately using the Biller Code and Reference provided below. The time of your Application
        will be the time at which the Unit Registry has received both your valid online Application and your BPAY® payment.
        If you submit an online Application in the 24 hours before 5.00pm (Sydney time) on Wednesday, 8 August 2018 you must ensure
        that your BPAY® payment is processed by your bank so that your Application Monies are received before 5.00pm (Sydney
        time) on Wednesday, 8 August 2018. If your BPAY® payment is not received by this time, it will be treated as a late Application
        and may not be processed.
      </p>
      <div class="cheque-payment">
        <h4>
          Payment by Cheque
        </h4>
        <p>
          To submit your Application Monies by cheque, bank draft or money order, follow the instructions below:
        </p>
        <ul>
          <li>
            Print out this page and attach your cheque, bank draft or money order to it.
          </li>
          <li>
            Your cheque, bank draft or money order must be drawn on an Australian financial institution and in Australian dollars for
            the amount of A, crossed "Not Negotiable" and made payable to PM Capital GO 2025 Limited – Offer A/C" Cheques returned
            unpaid may not be re-presented and are likely to result in your Application being rejected.
          </li>
          <li>
            If you are not able to print out this page, then write the reference number and the name of the Offer as set out above on
            the back of your cheque, bank draft or money order.
          </li>
          <li>
            Post your payment to: Boardroom Pty Limited, GPO Box 3993, Sydney NSW 2001. If you are returning your payment by post, you
            should allow sufficient time for collection and delivery by postal services.
          </li>
        </ul>
      </div>
      <br>
      <div class="box">
        <div class="columns">
          <div class="column">
            <b-field label="Entitlement Number">
              {{ investor.entitlementNo }}
            </b-field>
            <b-field label="Holder Details" :addons="false">
              {{ investor.nameAddress1 }}
              <br v-if="investor.nameAddress2">
              {{ investor.nameAddress2 }}
              <br v-if="investor.nameAddress3">
              {{ investor.nameAddress3 }}
              <br v-if="investor.nameAddress4">
              {{ investor.nameAddress4 }}
              <br v-if="investor.nameAddress5">
              {{ investor.nameAddress5 }}
              <br v-if="investor.nameAddress6">
              {{ investor.nameAddress6 }}
            </b-field>
          </div>
          <div class="column">
            <b-field label="Number of PTrackERS applied for:">
              {{ application.applicationUnits | currency('', 0) }}
            </b-field>
            <p v-if="application.applicationUnits > application.entitlement">
              <label class="label">Your application is comprised of:</label>
              <ul style="margin-top: -0.25rem;">
                <li>{{ application.entitlement || 0 | currency('', 0) }} from your entitlement, and</li>
                <li>{{ (application.applicationUnits - application.entitlement) | currency('', 0) }} from the General Offer</li>
              </ul>
            </p>
            <b-field label="Application Monies Payable:">
              {{ applicationValue | currency('$', 2) }}
            </b-field>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="bpay-box">
          <img src="~/assets/img/bpay.svg" />
          <div class="bpay-details">
            <span>Biller Code: {{ application.billerCode }}</span>
            <!-- <span>Ref: {{ application.referenceNo }}</span> -->
            <span>Ref: {{ displayRefNo }}</span>
          </div>
        </div>
        <p>
          Telephone &amp; Internet Banking - BPAY®
        </p>
        <p>
          Contact your bank or financial institution to make this payment from your cheque, savings, debit or transaction account.
          More info:
          <a href="http://www.bpay.com.au/" target="_blank">www.bpay.com.au</a>
        </p>
        <p>
          <strong>Application Monies must be received by the Share Registry by BPAY® by 5.00pm (Sydney time) on Wednesday, 8 August 2018</strong>.
        </p>
        <p>
          You should check the processing cut-off time for BPAY® transactions with your bank, credit union or building society to ensure
          your payment will be received by the Registry in time.
        </p>
      </div>
      <div class="field is-grouped no-print">
        <div class="control">
          <button class="button is-primary is-outlined" @click="print()">
            Print
          </button>
        </div>
        <div class="control">
          <nuxt-link to="/application-completed" class="button is-primary">
            Finish
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['investor', 'application', 'applicationValue']),
    displayRefNo () {
      const s = this.application.referenceNo + '';
      return s.replace(/(?!^)(?=(?:\d{4})+(?:\.|$))/gm, ' ');
    }
  },
  methods: {
    print() {
      this.$htmlToPaper('confirmation');
    },
  },
};
</script>

<style lang="scss" scoped>
$bpay-color: #142c61;

.bpay-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  img {
    width: 80px;
    border: 4px solid $bpay-color;
    margin-right: 4px;
  }
}
.bpay-details {
  border: 4px solid $bpay-color;
  padding-left: 1rem;
  padding-right: 3rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1rem;
    color: $bpay-color;
    font-weight: 700;
    }
}
@media print {
  .no-print, .no-print * {
    display: none !important;
  }
}
</style>


