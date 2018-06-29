<template>
  <div>
    <div class="container">
      <section class="canvas">
        <br><br>
        <div class="container">
          <b-tabs type="is-boxed" position="is-centered" v-model="activeTab">
            <div class="content">
              <b-tab-item label="Welcome - Issuer">
                  <welcome-letter></welcome-letter>
              </b-tab-item>

              <!-- <b-tab-item label="Welcome - Investment Manager">
                  <general-welcome></general-welcome>
              </b-tab-item> -->

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

              <b-tab-item label="Contact">
                  <contact-registry></contact-registry>
              </b-tab-item>
              <div class="alert-bound">
                <div class="field is-grouped"><!---->
                    <div class="control">
                        <nuxt-link to="/" class="button is-primary is-outlined">
                            Exit
                        </nuxt-link>
                    </div>
                    <div class="control">
                        <nuxt-link to="/important-notification" class="button is-primary">
                            Continue
                        </nuxt-link>
                    </div>
                </div>
              </div>
            </div>
          </b-tabs>
        </div>

    </section>
    </div>
  </div>
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
        }
    }
</script>

<style scoped>
.canvas {
  z-index: 50;
  /* padding: 1rem; */
  background: #fff 50%;
  background-size: cover;
  border-radius: 1px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;
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
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  border-radius: 0.25rem;
  padding: 1.0rem;
}
.content {
  padding: 2rem 3rem;
}
</style>
