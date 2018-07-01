<template>
  <section id="payment" class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Confirmation and Payment Instruction
      </h1>
      <p>
        Your Application Monies must be received by the Share Registry by BPAY® or Cheque by 5.00pm (Sydney time) on XXXX, XX XXXX
        2018. If you do not make a BPAY® payment, your online Application will be incomplete and will not be accepted. By
        paying by BPAY®, you will be deemed to have accepted the terms of the Offer.
      </p>
      <p>
        You should submit your BPAY® payment immediately using the Biller Code and Reference provided below. The time of
        your Application will be the time at which the Unit Registry has received both your valid online Application and
        your BPAY® payment. If you submit an online Application in the 24 hours before 5.00pm (Sydney time) on XXXX, XX XXXX
        2018 you must ensure that your BPAY® payment is processed by your bank so that your Application Monies are received
        before 5.00pm (Sydney time) on XXXX, XX XXXX 2018. If your BPAY® payment is not received by this time, it will be
        treated as a late Application and may not be processed.
      </p>
      <h4>
        Payment by Cheque
      </h4>
      <div class="box">
        <p>
          To submit your Application Monies by cheque, bank draft or money order, follow the instructions below:
        </p>
        <ul>
          <li>
            Print out this page and attach your cheque, bank draft or money order to it.
          </li>
          <li>
            Your cheque, bank draft or money order must be drawn on an Australian financial institution and in Australian dollars for
            the amount of A, crossed "Not Negotiable" and made payable to PM Capital GO 2025 Limited – Offer A/C" Cheques
            returned unpaid may not be re-presented and are likely to result in your Application being rejected.
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
      <hr>
      <div class="box">
        <b-field label="Priority Code:">
          {{ investor.priorityCode }}
        </b-field>
        <b-field label="Holder Details:" :addons="false">
          {{ investor.nameAddress1 }}
          <br> {{ investor.nameAddress2 }}
          <br> {{ investor.nameAddress3 }}
          <br> {{ investor.nameAddress4 }}
          <br> {{ investor.nameAddress5 }}
        </b-field>
        <b-field label="Number of PTrackERS applied for:">
          {{ payment.unitsApplied | currency('', 0) }}
        </b-field>
        <b-field label="Application Monies Payable:">
          {{ applicationAmount | currency('$', 2) }}
        </b-field>
      </div>
      <hr>
      <div class="box">
        <div class="bpay-box">
          <img src="~/assets/img/bpay.svg"/>
          <div class="bpay-details">
            <span>Biller Code: {{ payment.billerCode }}</span>
            <span>Ref: {{ payment.refNumber }}</span>
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
          <strong>Application Monies must be received by the Share Registry by BPAY® by 5.00pm (Sydney time) on XXXX, XX XXXX 2018</strong>.
        </p>
        <p>
          You should check the processing cut-off time for BPAY® transactions with your bank, credit union or building society to ensure
          your payment will be received by the Registry in time.
        </p>
      </div>
      <div class="field is-grouped">
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
    ...mapGetters(['investor', 'payment', 'applicationAmount']),
  },
  methods: {
    print() {
      this.$htmlToPaper('payment');
    },
  },
}
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
</style>


