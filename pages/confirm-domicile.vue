<template>
  <section class="section">
    <div class="container box">
      <h1 class="title">Confirmation</h1>
      <div class="content">
        <p>
          By proceeding you confirm that you are a resident of Australia or New Zealand accessing this website from within Australia or New Zealand and you represent,
          warrant and agree that:
        </p>
        <ol>
          <li>
            you are not in the United States and you are not acting for the account or benefit of a person in the United States;
          </li>
          <li>
            you will not make a copy of the documents in this website available to, or release or distribute a copy of such documents to any person in the United States or in any other place in which, or to any other person to whom, it would be unlawful to do so ("Ineligible Persons");
          </li>
          <li>
            your primary residence in Australia or New Zealand is true and accurate; and
          </li>
          <li>
            you are not acting as a nominee for, or otherwise for the account or benefit of any Ineligible Persons.
          </li>
        </ol>
        <div>
          <br>
          <p>I agree to the above terms.</p>
          <div class="field is-grouped">
            <div class="control">
              <nuxt-link to="/" class="button is-primary is-outlined">
                No
              </nuxt-link>
            </div>
            <div class="control">
              <nuxt-link to="/letter" class="button is-primary">
                Yes
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
