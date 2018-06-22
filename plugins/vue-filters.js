import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import moment from 'moment'

Vue.use(Vue2Filters)

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY h:mma')
  }
})

Vue.filter('formatLongDate', function (value) {
  if (value) {
    return moment(String(value)).format('dddd, D MMMM YYYY')
  }
})


