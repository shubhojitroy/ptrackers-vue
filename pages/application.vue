<template>
  <div>
    <div class="container">
      <section class="canvas">
        <h1 class="title is-size-2 is-size-3-mobile">
          Application Amount
        </h1>
        <hr>
        <p>
          As an eligible Priority Applicant, you are invited to subscribe for an amount of PTrackERS equal to the number of PM Capital Global Opportunity Funds Limited Ordinary Shares held at the Recird Date, subject to a minimum of 1,500 securities.<br><br>
          If you are in doubt as to how to deal with this online Application, please contact your accountant, solicitor, stockbroker or other personal adviser without delay. The Prospectus contains information relevant to a decision to invest in Units and you should read the entire Prospectus carefully before applying. Defined terms in the Prospectus have the same meaning in this online Application.
        </p>
        <hr>
        <form novalidate @submit.prevent="submitForm">
          <b-field label="Priority Invitation (Number of PTrackERS):">
            <b-input v-model="message" placeholder="Units"></b-input>
          </b-field>

          <b-field label="Number applied for (PTrackERS):">
            <b-input v-model="message" placeholder="Units"></b-input>
          </b-field>

          <b-field label="Issue price per Unit:">
            <b-input v-model="message" placeholder="Units"></b-input>
          </b-field>

          <b-field label="Application Monies based on PTrackERS applied for:">
            <b-input v-model="message" placeholder="Units"></b-input>
          </b-field>
          <hr>

          <p>
            Please enter your contact details in case we need to contact you about this online Application.
          </p>
          <div class="space"></div>
          <b-field label="Contact Number: Please include area code e.g. '04XXXXXXXX' or '02XXXXXXXX'">
            <b-input v-model="message" placeholder="Units"></b-input>
          </b-field>

          <b-field label="Email"
              type="is-danger"
              message="This email is invalid">
              <b-input type="email"
                  value="john@"
                  maxlength="30">
              </b-input>
          </b-field>
          <hr>
          <p>
            By clicking 'Submit' you are confirming the application details as made above and declaring that I/We:
          </p>
          <div class="space"></div>
          <ol class="alert-bound">
            <li>
              <em>
                have received a copy and read the Prospectus in full;
              </em>
            </li>
            <li>
              <em>
                have completed this Application in accordance with the instructions on the form and in the Prospectus and the Application and all details and statements made by me/us are complete and accurate;
              </em>
            </li>
            <li>
              <em>
                acknowledge that the information contained in the Prospectus (or any supplementary or replacement Prospectus) is not investment advice or a recommendation that Units are suitable for me/us, given my/our investment objectives, financial situation or particular needs;
              </em>
            </li>
            <li>
              <em>
                declare that the Application and all details and statements made by me/us are complete and accurate;
              </em>
            </li>
            <li>
              <em>
                agree and consent to the Company collecting, holding, using and disclosing my/our personal information in accordance with the Prospectus;
              </em>
            </li>
            <li>
              <em>
                where I/we have been provided information about another individual, warrant that I/we have obtained that individual’s consent to the transfer of their information to the Company;
              </em>
            </li>
            <li>
              <em>
                acknowledge that once the Trust accepts my/our Application, I/we may not withdraw it;
              </em>
            </li>
            <li>
              <em>
                apply for the number of PTrackERS set out in this Application (or a lower number allocated in a manner allowed under the Prospectus);
              </em>
            </li>
            <li>
              <em>
                acknowledge that my/our Application may be rejected by the Company in its absolute discretion;
              </em>
            </li>
            <li>
              <em>
                am/are over 18 years of age;
              </em>
            </li>
            <li>
              <em>
                agree to be bound by the Constitution of the Company;
              </em>
            </li>
            <li>
              <em>
                authorise the Company and their respective officers and agents to do anything on my/our behalf necessary (including the completion and execution of documents) to enable the Units to be allocated to me/us;
              </em>
            </li>
            <li>
              <em>
                acknowledge that if I/we are not issued any PTrackERS or I/we are issued fewer PTrackERS than the number that I/we applied and paid for as a result of a scale back, all or some of my/our Application Monies (as applicable) will be refunded to me/us (without interest) in accordance with the Corporations Act as soon as practicable after the PTrackERS are issued;
              </em>
            </li>
            <li>
              <em>
                acknowledge that my/our application monies for my/our Priority Offer invitation are in respect of any units for which I/we am/are applying;
              </em>
            </li>
            <li>
              <em>
                acknowledge that neither the Company nor any person or entity guarantees any particular rate of return on the PTrackERS nor do they guarantee the repayment of capital;
              </em>
            </li>
            <li>
              <em>
                represent, warrant and agree that I/we have not received this Prospectus outside Australia/NZ and am/are not acting on behalf of a person resident outside Australia/NZ; and
              </em>
            </li>
          </ol>
          <hr>
          <p>
            If you would like more information or have any questions relating to the Offer, you can contact the share registry, Boardroom Pty Limited, on 1300 737 760 (within Australia) or +61 2 9290 9600 (outside Australia) between 8:30am and 5:30pm (Sydney time) Monday to Friday. If you are uncertain as to whether an investment in the Company is suitable for you, please contact your stockbroker, financial adviser, accountant, lawyer or other professional adviser.
          </p>
          <div class="space"></div>
          <p>
            <strong>
              In order to obtain payment instructions to complete your application, please click on the Submit button. This will take you to a confirmation page and provide BPAY payment details.
            </strong>
          </p>

          <div class="space"></div>
          <div class="field is-grouped">
            <div class="control">
                <nuxt-link to="/" class="button is-primary is-outlined">
                    Exit
                </nuxt-link>
            </div>
            <div class="control">
                <nuxt-link to="/confirmation-payment" class="button is-primary">
                    Submit
                </nuxt-link>
            </div>
          </div>

        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.0rem;

}
.footnote {
  font-size: 0.75rem;
  line-height: 1.2em;
}
</style>

