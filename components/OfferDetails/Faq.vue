<template>
  <div>
    <h1 class="title">
      Frequently asked Questions
    </h1>
    <div class="alert-bound">
        <faq-item v-model="openItem" title="How can I apply for securities offered by GO 2025?">
          <p>
            To invest in the Offer, you may do so by reading the Prospectus then:
          </p>
          <ul>
            <li>
              completing and returning the attached Application Form along with Applications Moneys; or
            </li>
            <li>
              completion online at either:
              <ul>
                <li>
                  <a href="http://www.pmcapital.com.au" target="_blank">http://www.pmcapital.com.au</a>
                </li>
                <li>
                  <a href="http://www.boardroomlimited.com.au/ca/ptrackers" target="_blank">http://www.boardroomlimited.com.au/ca/ptrackers</a>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            The Entitlement Offer is expected to close on 8 August 2018.<br><br>
            The General and Broker Firm Offer is expected to close on 10 August 2018.<br><br>
            Nevertheless, it may close at any time, so you are encouraged to submit your Application as soon as possible.<br><br>
            If you apply online and pay via BPAY, you do not need to complete and return a paper Application Form
          </p>
        </faq-item>
        <faq-item v-model="openItem" title="Who can invest?">
          <p>
            The Offer is available to applicants with a registered address in Australia and New Zealand.
          </p>          
        </faq-item>
        <faq-item v-model="openItem" title="What is the minimum number of securities I can apply for?">
          <p>
            Applications under the General Offer or Broker Firm Offer must be for a minimum of $2,100 which is equal to 1,500 <strong>PTrackERS</strong> (at the Issue Price of $1.40 per <strong>PTrackERS</strong>). A larger number of <strong>PTrackERS</strong> may be applied for in multiples of 100 shares.
          </p>          
          <p>
            The minimum subscription amount payable by an Applicant under the Entitlement Offer is the Issue Price (of $1.40 per PTrackERS) multiplied by the lower of:
          </p>
          <ul>
            <li>
              1,500 <strong><em>PTrackERS</em></strong>; or
            </li>
            <li>
              the number of <strong><em>PTrackERS</em></strong> being offered to the Applicant (being an Eligible Shareholder under the Entitlement Offer).
            </li>
          </ul>
        </faq-item>
        <faq-item v-model="openItem" title="How can I pay for my securities?">
          <p>
            <strong>BPAY</strong>: Applicants wishing to pay by BPAY should complete the online Application Form accompanying the electronic version of this Prospectus which is available at either:
          </p>
          <p>
            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </faq-item>
        <faq-item v-model="openItem" title="Item 5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </faq-item>
    </div>
  </div>
</template>

<script>
import FaqItem from '~/components/OfferDetails/FaqItem';

export default {
  components: {
    FaqItem,
  },
  data() {
    return {
      openItem: '',
      isOpen: true
    }
  }
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
</style>
