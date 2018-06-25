<template>
    <section>
        <!--<div class="block">
            <button class="button" @click="activeTab = 1">Set Music</button>
        </div>
        <div class="block">
            <b-switch v-model="showBooks"> Show Books item </b-switch>
        </div>-->
        <br><br>
        <div class="container">
          <b-tabs type="is-boxed" v-model="activeTab">
              <b-tab-item label="Welcome">
                  <welcome-letter></welcome-letter>
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
    import OfferOverview from '~/components/OfferOverview';
    import KeyDates from '~/components/KeyDates';
    import InvestorToolkit from '~/components/InvestorToolkit';
    import ContactRegistry from '~/components/ContactRegistry';
    export default {
        components: {
          WelcomeLetter,
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
