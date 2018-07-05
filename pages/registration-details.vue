<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Registration Details
      </h1>
      <div class="box">
        <b-field label="Unique Priority Code:">
          {{ investor.priorityCode }}
        </b-field>
        <b-field label="Holder Details:" :addons="false">
          {{ investor.nameAddress1 }}
          <br v-if="investor.nameAddress2">
          {{ investor.nameAddress2 }}
          <br v-if="investor.nameAddress3">
          {{ investor.nameAddress3 }}
          <br v-if="investor.nameAddress4">
          {{ investor.nameAddress4 }}
          <br v-if="investor.nameAddress5">
          {{ investor.nameAddress5 }}
        </b-field>
      </div>
      <b-message>
        <h4>
          By clicking 'Next' you are confirming your holding details are as above:
        </h4>
      </b-message>
      <hr>
      <p>
        If you have any questions about the Offer, you should consult your stockbroker, solicitor, accountant or other professional
        adviser. You can also contact the share registry, Boardroom Pty Limited, on 1300 737 760 (within Australia) or +61
        2 9290 9600 (outside Australia) at any time from 8.30am to 5.30pm (Sydney time) Monday to Friday, during the period
        of the Offer.
      </p>
      <div class="field is-grouped">
        <div class="control">
          <nuxt-link to="/login" class="button is-primary is-outlined">
            Previous
          </nuxt-link>
        </div>
        <div class="control">
          <nuxt-link to="/application" class="button is-primary">
            Next
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
    ...mapGetters(['investor']),
  },
};
</script>
