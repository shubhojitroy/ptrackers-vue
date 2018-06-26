<template>
    <section>
        <br><br>
        <div class="container">
          <b-tabs type="is-boxed" v-model="activeTab">
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
          </b-tabs>
        </div>
    </section>
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

</style>
