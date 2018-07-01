<template>
  <div>
    <h1 class="title">
      Application
    </h1>
    <p>
      The Prospectus contains important information about the Offer and you should read it carefully before deciding whether or
      not to participate in the Offer.
      <strong>Download the Prospectus</strong>.
    </p>
    <div class="field box">
      <b-checkbox class="confirm" v-model="checkbox">
        I have been provided the Prospectus and have read it. I also accept the terms and conditions of the Offer outlined in the
        Prospectus.
      </b-checkbox>
    </div>
    <p>
      If you would like more information or have any questions relating to the Share Registry and Application Enquiries, you can
      contact Boardroom Pty Limited on 1300 737 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 9.00am
      and 5:00pm (AEST) Monday to Friday.
    </p>
    <p>
      If you would like more product information or have any questions relating to
      <span class="hl">PTrackERS</span>, you can contact PM Capital on + 61 2 8243 0888 between 9.00am and 5:00pm (AEST) Monday to Friday,
      or by email on
      <a href="mailto:Go2025@pmcapital.com.au">Go2025@pmcapital.com.au</a>.
    </p>
    <p>
      <em>
        If you are uncertain as to whether an investment in the PTrackERS is suitable for you, please contact your stockbroker, financial
        adviser, accountant, lawyer or other professional adviser.
      </em>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.hl {
  font-weight: 700;
  font-style: oblique;
}
.confirm {
  align-items: flex-start;
}
</style>
