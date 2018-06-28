<template>
    <section>
        <h1 class="title">
          Important Dates
        </h1>
        <b-table
          :data="isEmpty ? [] : offerEvents"
          :bordered="isBordered"
          :striped="isStriped"
          :narrowed="isNarrowed"
          :hoverable="isHoverable"
          :loading="isLoading"
          :focusable="isFocusable"
          :mobile-cards="hasMobileCards">

          <template slot-scope="props">
              <b-table-column field="description" label="Key Dates for the Offer" width="50%">
                  <strong>{{ props.row.description }}</strong>
              </b-table-column>
              <b-table-column field="date" label="Date">
                  {{ props.row.date }}
              </b-table-column>
          </template>
        </b-table>
        <br>
        <div>
            <section>
                <b-table
                    :data="isEmpty ? [] : ptrackerEvents"
                    :bordered="isBordered"
                    :striped="isStriped"
                    :narrowed="isNarrowed"
                    :hoverable="isHoverable"
                    :loading="isLoading"
                    :focusable="isFocusable"
                    :mobile-cards="hasMobileCards">

                    <template slot-scope="props">
                        <b-table-column field="description" label="Key Dates for the PTrackERS" width="30%">
                            <strong>{{ props.row.description }}</strong>
                        </b-table-column>

                        <b-table-column field="date" label="Dates" width="70%">
                            {{ props.row.date }}
                        </b-table-column>
                    </template>
                </b-table>
            </section>
        </div>
        <br>
        <p>
            <em>
                Dates are indicative only and may be subject to change.
            </em>
        </p>
    </section>
</template>

<script>
export default{
    data() {
            const offerEvents = [
                { description: 'Announcement of the Offer', date: 'Monday 2 July 2018' },
                { description: 'Lodgement of Prospectus with ASIC ', date: 'Monday 2 July 2018' },
                { description: 'Expected expiry of Exposure Period', date: 'Monday 9 July 2018' },
                { description: 'Record Date (for determining Eligible Shareholders)', date: 'Monday 9 July 2018' },
                { description: 'Entitlement Offer Opens', date: 'Tuesday 10 July 2018' },
                { description: 'Entitlement Offer Closes', date: 'Wednesday 8 August 2018' },
                { description: 'General Public Offer Opens', date: 'Monday 10 July 2018' },
                { description: 'General Public Offer Closes', date: 'Friday 10 August 2018' },
                { description: 'Broker Firm Offer Opens ', date: 'Monday 10 July 2018' },
                { description: 'Broker Firm Offer Closes', date: 'Friday 10 August 2018' },
                { description: 'Issue of PTrackERS', date: 'Friday 17 August 2018' },
                { description: 'Expected despatch of Holding Statements', date: 'Friday 17 August 2018' },
                { description: 'Commencement of trading on the ASX', date: 'Wednesday 22 August 2018' },
            ]
            const ptrackerEvents = [
                { description: 'Intended payment of first Distribution', date: 'March 2019' },
                { description: 'Redemption Election Period', date: '1 April 2025 to 9 June 2025' },
                { description: 'Last Date to elect to redeem', date: '9 June 2025' },
                { description: 'Maturity Date', date: '30 June 2025 (or such earlier date where 30 June 2025 is not a Business Day)' }
            ]

            return {
                offerEvents,
                ptrackerEvents,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
            }
        }

}
</script>

<style lang="scss" scoped>

</style>
