<template>
  <section class="section">
    <div class="container box">
      <h1 class="title">WAM Global Limited (ACN 624 572 925)</h1>
      <div class="content">
        <h2 class="subtitle">
          Share offer to open on Wednesday 2 May 2018
        </h2>
        <!--<p>
         WAM Global Limited has lodged this Prospectus with the Australian Securities and Investments Commission (ASIC) on 1 May 2018 in relation to an initial public offering (Offer) of its ordinary shares (Shares).
        </p>
        <p>
          Offer is currently expected to open on Wednesday, 2 May 2018 and is expected to remain open until 5:00pm AEST on Friday, 8
          June 2018. The company reserves the right to vary the dates and time of the Offer, including to close the Offer
          early or to accept late applications (either generally or in particular cases) without notification.
        </p>-->
        <h2>
          Important Dates
        </h2>
        <b-table :data="events">
          <template slot-scope="props">
            <b-table-column field="date" label="Date" width="270">
              {{ props.row.date | formatLongDate }}
            </b-table-column>
            <b-table-column field="event" label="Event">
              {{ props.row.event }}
            </b-table-column>
          </template>
        </b-table>
        <h2>
          Key Offer Details
        </h2>
        <b-table :data="keyDetails">
          <template slot-scope="props">
            <b-table-column field="description" label="Description" width="450">
              {{ props.row.description }}
            </b-table-column>
            <b-table-column field="minSub" label="Minimum Subscription" numeric>
              {{ props.row.minSub | currency('', 0) }}
            </b-table-column>
            <b-table-column field="maxSub" label="Maximum Subscription (excluding Oversubscription)" numeric>
              {{ props.row.maxSub | currency('', 0) }}
            </b-table-column>
            <b-table-column field="overSub" label="Maximum Subscription (including Oversubscription)" numeric>
              {{ props.row.overSub | currency('', 0) }}
            </b-table-column>
          </template>
        </b-table>
      </div>
      <br>
      <div class="field is-grouped">
        <div class="control">
          <nuxt-link to="/" class="button is-primary is-outlined">
            Exit
          </nuxt-link>
        </div>
        <div class="control">
          <nuxt-link to="/offer-terms" class="button is-primary">
            Continue
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        events: [
          { date: '2018-05-01', event: 'Lodgement of the Prospectus with ASIC'},
          { date: '2018-05-02', event: 'Offer expected to open'},
          { date: '2018-06-01', event: 'Broker Firm Offer expected to close'},
          { date: '2018-06-08', event: 'Priority & General Offer expected to close'},
        ],
        keyDetails: [
          { minSub: 7500000, maxSub: 150000000, overSub: 250000000,
            description: 'Total number of new Shares to be issued after the Offer' },
        ],
      }
    }
  }
</script>

<style scoped>
  .content table tbody tr:last-child td,
  .content table tbody tr:last-child th {
    border-bottom-width: 1px;
  }
</style>
