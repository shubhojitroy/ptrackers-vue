<template>
  <div>
    <div class="container">
      <section class="canvas">
        <h1 class="title is-size-2 is-size-3-mobile">
          Registration Details
        </h1>      
        <hr>
        <div class="alert-bound">
          <strong>Unique Priority Code:</strong>
          {{ investor.pCode }}
          <div class="space"></div>
          <strong>Holder Details:</strong>          
          {{ investor.nameAddress1 }}<br>
          {{ investor.nameAddress2 }}<br>
          {{ investor.nameAddress3 }}<br>
          {{ investor.nameAddress4 }}<br>
          {{ investor.nameAddress5 }}
          <div class="space"></div>          
        </div>
        <hr>
        <b-message>
            <h4>
                By clicking 'Next' you are confirming your holding details are as above:
            </h4>
        </b-message>
        <hr>
        <p>
            If you have any questions about the Offer, you should consult your stockbroker, solicitor, accountant or other professional adviser. You can also contact the share registry, Boardroom Pty Limited, on 1300 737 760 (within Australia) or +61 2 9290 9600 (outside Australia) at any time from 8.30am to 5.30pm (Sydney time) Monday to Friday, during the period of the Offer.
        </p>
        <div class="space"></div>
        <div class="field is-grouped">
          <div class="control">            
              <nuxt-link to="/priority-access" class="button is-primary is-outlined">
                  previous
              </nuxt-link> 
          </div>
          <div class="control">                        
              <nuxt-link to="/application-amount" class="button is-primary">
                  next
              </nuxt-link>
          </div>
        </div>
        
       </section>
    </div>
  </div>
</template>



<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(['investor']);
    },
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