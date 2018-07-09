<template>
  <section class="section">
    <div class="container">
      <b-tabs type="is-boxed" position="is-centered" :value="activeTab" @change="setTab">
        <div class="content">
          <b-tab-item label="Welcome - Issuer">
            <welcome-letter></welcome-letter>
          </b-tab-item>

          <b-tab-item label="CIO Letter">
            <cio-letter></cio-letter>
          </b-tab-item>

          <b-tab-item label="Offer Overview">
            <offer-overview></offer-overview>
          </b-tab-item>

          <b-tab-item label="Important Dates">
            <key-dates></key-dates>
          </b-tab-item>

          <b-tab-item label="FAQ">
            <faq></faq>
          </b-tab-item>

          <b-tab-item label="Apply Now">
            <apply-now></apply-now>
          </b-tab-item>

          <!-- <b-tab-item label="Prospectus">
            <prospectus></prospectus>
          </b-tab-item> -->

          <b-tab-item label="Contact">
            <contact-registry></contact-registry>
          </b-tab-item>
        </div>
      </b-tabs>
      <div class="box">
        <div class="field is-grouped">
          <div class="control">
            <nuxt-link to="/" class="button is-primary is-outlined">
              Exit
            </nuxt-link>
          </div>
          <div class="control" v-if="activeTab != 6">
            <button class="button is-link" @click="nextTab()">
              Next
            </button>
          </div>
          <div class="control" v-if="activeTab == 6">
            <button class="button is-link" @click="prevTab()">
              Previous
            </button>
          </div>
          <div class="control right-side" v-if="activeTab != 5">
            <button class="button is-primary" @click="setActiveTab(5)">
              Apply Now
              <!-- Prospectus -->
            </button>
          </div>
          <div class="control right-side" v-if="activeTab == 5">
            <nuxt-link to="/important-notification" class="button is-primary">
              Continue
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeLetter from '~/components/OfferDetails/WelcomeLetter';
import CioLetter from '~/components/OfferDetails/CioLetter';
import OfferOverview from '~/components/OfferDetails/OfferOverview';
import KeyDates from '~/components/OfferDetails/KeyDates';
import Faq from '~/components/OfferDetails/Faq';
// import Prospectus from '~/components/OfferDetails/Prospectus';
import ApplyNow from '~/components/OfferDetails/ApplyNow';
import ContactRegistry from '~/components/OfferDetails/ContactRegistry';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    WelcomeLetter,
    CioLetter,
    OfferOverview,
    KeyDates,
    Faq,
    ApplyNow,
    // Prospectus,
    ContactRegistry,
  },
  computed: {
    ...mapGetters(['activeTab']),
  },
  methods: {
    ...mapActions(['setActiveTab']),
    nextTab() {
      this.setActiveTab(this.activeTab + 1);
      window.scrollTo(0, 0);
    },
    prevTab() {
      this.setActiveTab(this.activeTab - 1);
      window.scrollTo(0, 0);
    },
    setTab (index) {
      this.setActiveTab(index);
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.right-side {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
