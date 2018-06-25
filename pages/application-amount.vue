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
        <!-- <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field label="Subject">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field> -->
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
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
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

