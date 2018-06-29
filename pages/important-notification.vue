<template>
  <div>
    <div class="container">
      <section class="canvas">
        <h1 class="title is-size-2 is-size-3-mobile">
          Important Notices and Confirmation
        </h1>
        <div class="box">
            <b-message>
                <h4>
                    The documents on these webpages relate to an offer of PTrackERS (the "Offer"), and:
                </h4>
            </b-message>
            <ul>
                <li>
                    have been prepared to comply with the requirements of the laws of Australia;
                </li>
                <li>
                    are intended for access only by residents of Australia and New Zealand from within Australia or New Zealand; and
                </li>
                <li>
                    no action has been taken to register the Offer in any jurisdiction outside of Australia and New Zealand where distribution may be restricted by law.
                </li>
            </ul>
            <p>
                These webpages and any documents on these webpages do not constitute an offer of securities to any person to whom it would not be lawful outside Australia or New Zealand.
            </p>
            <div class="space"></div>
            <b-message>
                <h4>
                    By clicking the 'I CONFIRM' button below and accessing these webpages and the documents on these webpages, you represent, warrant and agree that:
                </h4>
            </b-message>
            <ol>
                <li>
                    you are a resident of Australia or New Zealand accessing these webpages from Australia or New Zealand;
                </li>
                <li>
                    you are not acting for the account or benefit of any person in any place in which, or to any other person to whom, it would be unlawful to do so ("Ineligible Person");
                </li>
                <li>
                    you will not make a copy of the documents on these webpages available to, or release or distribute a copy of such documents to, any Ineligible Person; and
                </li>
                <li>
                    you have read and understood, and you agree to, the terms contained in this notice.
                </li>
            </ol>
            <div class="space"></div>
            <b-message>
                <h4>
                    Otherwise, click the 'EXIT' button below.
                </h4>
            </b-message>
            <div class="field is-grouped">
                <div class="control">
                    <nuxt-link to="/" class="button is-primary is-outlined">
                        Exit
                    </nuxt-link>
                </div>
                <div class="control">
                    <nuxt-link to="/priority-access" class="button is-primary">
                        I Confirm
                    </nuxt-link>
                </div>
            </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.canvas {
  z-index: 50;
  padding: 1rem;
  background: #fff 50%;
  background-size: cover;
  border-radius: 1px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;
}
h4 {
  font-size: 1.33rem;
  margin: 0.75em 0;
  font-weight: 500;
}
ul {
  list-style-type: disc;
}
li {
  line-height: 1.5;
  padding: 0.5rem 1rem;
  margin: 0 1.25em;
}
p {
  line-height: 1.75rem;
}
.space {
  display: block;
  width: 100%;
  height: 1.5em;
}
.footnote {
  font-size: 0.75rem;
  line-height: 1.2em;
}
</style>
