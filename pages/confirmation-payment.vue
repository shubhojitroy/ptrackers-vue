<template>
  <div>
    <div class="container">
      <section class="content">
        <h1 class="title is-size-2 is-size-3-mobile">
          Confirmation and Payment Instruction
        </h1>
        <p>
          Your Application Monies must be received by the Share Registry by BPAY® or Cheque by 5.00pm (Sydney time) on XXXX, XX XXXX 2018.  If you do not make a BPAY® payment, your online Application will be incomplete and will not be accepted. By paying by BPAY®, you will be deemed to have accepted the terms of the Offer.<br><br>
          You should submit your BPAY® payment immediately using the Biller Code and Reference provided below. The time of your Application will be the time at which the Unit Registry has received both your valid online Application and your BPAY® payment. If you submit an online Application in the 24 hours before 5.00pm (Sydney time) on XXXX, XX XXXX 2018 you must ensure that your BPAY® payment is processed by your bank so that your Application Monies are received before 5.00pm (Sydney time) on XXXX, XX XXXX 2018. If your BPAY® payment is not received by this time, it will be treated as a late Application and may not be processed.
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
              Your cheque, bank draft or money order must be drawn on an Australian financial institution and in Australian dollars for the amount of A, crossed "Not Negotiable" and made payable to PM Capital GO 2025 Limited – Offer A/C" Cheques returned unpaid may not be re-presented and are likely to result in your Application being rejected.
            </li>
            <li>
              If you are not able to print out this page, then write the reference number and the name of the Offer as set out above on the back of your cheque, bank draft or money order.
            </li>
            <li>
              Post your payment to: Boardroom Pty Limited, GPO Box 3993, Sydney NSW 2001. If you are returning your payment by post, you should allow sufficient time for collection and delivery by postal services.
            </li>
          </ul>
        </div>
        <hr>
        <div class="box">
          <div class="box">
          <strong>Unique Priority Code:</strong>
          {{ investor.pCode }}
          <div class="space"></div>
          <strong>Holder Details:</strong>
          {{ investor.nameAddress1 }}<br>
          {{ investor.nameAddress2 }}<br>
          {{ investor.nameAddress3 }}<br>
          {{ investor.nameAddress4 }}<br>
          {{ investor.nameAddress5 }}
          <div class="space"></div>
        </div>
          <div class="space"></div>
          <strong>Number of PTrackERS applied for:</strong>
          <b-field>
            <b-input v-model="unitsApplied"></b-input>
          </b-field>
          <div class="space"></div>
          <strong>Application Monies Payable:</strong>
          <b-field>
            <b-input v-model="totalAmount"></b-input>
          </b-field>
        </div>
        <hr>
        <div class="box">
          <p>
            <strong>
              Biller Code:
            </strong>
            {{ investor.billerCode }}<br>
            <span class="space"></span>
            <strong>
              Ref:
            </strong>
            {{ investor.refNumber }}<br>
            <span class="space"></span>
            Telephone & Internet Banking - BPAY®
            <span class="space"></span>
            Contact your bank or financial institution to make this payment from your cheque, savings, debit or transaction account. More info: <a href="http://www.bpay.com.au/" target="_blank">www.bpay.com.au</a>
            <span class="space"></span>
            <strong>Application Monies must be received by the Share Registry by BPAY® by 5.00pm (Sydney time) on XXXX, XX XXXX 2018</strong>.
            <span class="space"></span>
            You should check the processing cut-off time for BPAY® transactions with your bank, credit union or building society to ensure your payment will be received by the Registry in time.
          </p>
        </div>
        <div class="space"></div>
        <div class="field is-grouped">
          <div class="control">
              <nuxt-link to="" class="button is-primary is-outlined" @click="Print()">
                  Print
              </nuxt-link>
          </div>
          <div class="control">
              <nuxt-link to="/application-completed" class="button is-primary" @click="Close()">
                  Close
              </nuxt-link>
          </div>
        </div>
       </section>
    </div>
  </div>
</template>



<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(['investor']),
    },
    methods: {
      print() {

      },
      close() {

      },
    },
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



