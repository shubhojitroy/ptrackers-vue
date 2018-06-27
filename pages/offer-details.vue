<template>
  <div>
    <div class="container">
      <section class="canvas">
        <br><br>
        <div class="container">
          <b-tabs type="is-boxed" position="is-centered" v-model="activeTab">
              <b-tab-item label="Welcome">
                  <welcome-letter></welcome-letter>
              </b-tab-item>

              <b-tab-item label="General">
                  <general-welcome></general-welcome>
              </b-tab-item>

              <b-tab-item label="Offer">
                  <offer-overview></offer-overview>
              </b-tab-item>

              <b-tab-item label="Dates">
                  <key-dates></key-dates>
              </b-tab-item>

              <b-tab-item label="ToolKit">
                  <investor-toolkit></investor-toolkit>
              </b-tab-item>

              <b-tab-item label="Contact">
                  <contact-registry></contact-registry>
              </b-tab-item>
              <div class="alert-bound">
                <div class="field is-grouped"><!---->
                    <div class="control">
                        <nuxt-link to="/" class="button is-primary is-outlined">
                            exit
                        </nuxt-link>
                    </div>
                    <div class="control">
                        <nuxt-link to="/important-notification" class="button is-primary">
                            continue&nbsp;&nbsp;<span class="icon"><i class="mdi mdi-skip-next-circle-outline"></i></span>
                        </nuxt-link>
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
    import WelcomeLetter from '~/components/WelcomeLetter';
    import GeneralWelcome from '~/components/GeneralWelcome';
    import OfferOverview from '~/components/OfferOverview';
    import KeyDates from '~/components/KeyDates';
    import InvestorToolkit from '~/components/InvestorToolkit';
    import ContactRegistry from '~/components/ContactRegistry';
    export default {
        components: {
          WelcomeLetter,
          GeneralWelcome,
          OfferOverview,
          KeyDates,
          InvestorToolkit,
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
</style>
