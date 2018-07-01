<template>
  <section class="section">
    <div class="container content">
      <h1 class="title is-size-2 is-size-3-mobile">
        Priority Code
      </h1>
      <h4>
        <em>Please enter your Unique Priority Code</em>
      </h4>
      <form class="box" novalidate @submit.prevent="submitForm">
        <b-field label="Priority Code" :type="inputType" :message="inputMessage">
          <b-input id="priority-code" v-model.trim="priorityCode">
          </b-input>
        </b-field>
        <p>
          If you believe you are an eligible Priority Applicant yet have not received a Unique Priority Code please contact Boardroom
          Pty Limited on 1300 767 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm
          (Sydney time) Monday to Friday.
        </p>
        <p>
          If you are uncertain as to whether an investment in the Company is suitable for you, please contact your stockbroker, financial
          adviser, accountant, lawyer or other professional adviser.
        </p>
        <div class="field is-grouped">
          <div class="control">
            <nuxt-link class="button is-primary is-outlined" to="/">
              Exit
            </nuxt-link>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  components: {
  },
  data () {
    return {
      priorityCode: "",
      error: ""
    }
  },
  validations: {
    priorityCode: {
      required
    }
  },
  computed: {
    inputType() {
      return this.$v.priorityCode.$error || this.error ? "is-danger" : "is-primary"
    },
    inputMessage() {
      return this.$v.priorityCode.$error
        ? "Priority Code is required"
        : this.error;
    }
  },
  methods: {
    ...mapActions(['login']),
    submitForm () {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.login({ priorityCode: this.priorityCode })
          .then(() => {
            this.$router.push('/registration-details')
          })
          .catch((err) => {
            this.$snackbar.open({
              message: 'The priority code was invalid. Please try again',
              type: 'is-danger',
              position: 'is-bottom',
              actionText: 'OK',
              indefinite: true,
              onAction: () => {
                const el = document.getElementById('priority-code');
                el.focus();
                el.select();
              }
            })
          })
      }
    }
  }
}
</script>

<style scoped>
#priority-code {
  text-transform: uppercase;
}
</style>
