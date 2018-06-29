<template>
  <section class="section">
    <div class="container">
      <section class="canvas">
          <b-tabs type="is-boxed" position="is-centered" v-model="activeTab">
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

              <b-tab-item id="apply-now" label="Apply Now">
                  <apply-now></apply-now>
              </b-tab-item>

              <b-tab-item label="Contact">
                  <contact-registry></contact-registry>
              </b-tab-item>
            </div>
          </b-tabs>
          <div class="box">
            <div class="field is-grouped"><!---->
                <div class="control">
                    <nuxt-link to="/" class="button is-primary is-outlined">
                        Exit
                    </nuxt-link>
                </div>
                <div class="control" v-if="activeTab != 6">
                    <nuxt-link to="" class="button is-link" @click.native="nextTab">
                        Next
                    </nuxt-link>
                </div>
                <div class="control" v-if="activeTab != 5">
                    <nuxt-link to="" class="button is-primary" @click.native="activeTab = 5">
                        Apply Now
                    </nuxt-link>
                </div>
                <div class="control" v-if="activeTab == 5">
                    <nuxt-link to="/important-notification" class="button is-primary">
                        Continue
                    </nuxt-link>
                </div>
            </div>
          </div>
    </section>
    </div>
  </section>
</template>

<script>
    import WelcomeLetter from '~/components/OfferDetails/WelcomeLetter';
    import CioLetter from '~/components/OfferDetails/CioLetter';
    import OfferOverview from '~/components/OfferDetails/OfferOverview';
    import KeyDates from '~/components/OfferDetails/KeyDates';
    import Faq from '~/components/OfferDetails/Faq';
    import ApplyNow from '~/components/OfferDetails/ApplyNow';
    import ContactRegistry from '~/components/OfferDetails/ContactRegistry';
    export default {
        components: {
          WelcomeLetter,
          CioLetter,
          OfferOverview,
          KeyDates,
          Faq,
          ApplyNow,
          ContactRegistry,
        },
        data() {
            return {
                activeTab: 0,
            }
        },
        methods: {
          nextTab () {
            this.activeTab = this.activeTab + 1;
            window.scrollTo(0, 0);
          }
        }
    }
</script>

<style lang="scss" scoped>
.canvas {
  z-index: 50;
  /* padding: 1rem; */
  background: #fff 50%;
  background-size: cover;
  border-radius: 1px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;
}
.content {
  padding: 2rem 3rem;
}

</style>
