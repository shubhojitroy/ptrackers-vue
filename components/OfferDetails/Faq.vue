<template>
  <div>
    <h1 class="title">
      Frequently Asked Questions
    </h1>
    <div class="box">
      <h2 class="title">
        Application
      </h2>
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
          By BPAY or Cheque.
        </p>
        <p>
          <strong>BPAY</strong>: Applicants wishing to pay by BPAY should complete the online Application Form accompanying the electronic version of this Prospectus which is available at either:
        </p>
        <ul>
          <li>
            <a href="http://www.pmcapital.com.au">http://www.pmcapital.com.au</a>
          </li>
          <li>
            <a href="http://www.boardroomlimited.com.au/ca/ptrackers">http://www.boardroomlimited.com.au/ca/ptrackers</a>
          </li>
        </ul>
        <p>
          and follow the instructions on the online Application Form (which includes the Biller Code and your unique Customer Reference Number (CRN)). At the completion of the online application process, you will be given a Biller Code and a unique Customer Reference Number (CRN). When completing your BPAY payment, please make sure that you use the specific Biller Code and your unique CRN provided on the online Application Form.
        </p>
        <p>
          <strong>Cheque</strong>: Completed Application Forms and accompanying cheques, made payable to “PM Capital <span class="gotext">GO 2025</span> Limited – Offer A/C”, and crossed “Not Negotiable”, in Australian currency and drawn at an Australian branch of a financial institution, are to be lodged:
        </p>
        <p>
          By mail:
        </p>
        <p class="content-left">
          PM Capital <span class="gotext">GO 2025</span> Limited<br>
          c/- Boardroom Pty Limited<br>
          GPO Box 3993<br>
          Sydney NSW 2001<br>
        </p>
        <p>
          Hand delivered:
        </p>
        <p class="content-left">
          PM Capital <span class="gotext">GO 2025</span> Limited<br>
          c/- Boardroom Pty Limited<br>
          Level 12, 225 George Street<br>
          Sydney NSW 2000<br>
        </p>

      </faq-item>
      <faq-item v-model="openItem" title="What is the maximum size of the capital raising?">
        <p>
          The offer will be strictly limited to $491,273,967.80, consisting of 350,909,977 securities issued.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="Who is entitled to participate in the Entitlement Offer?">
        <p>
          Shareholders of PGF as at 5.00pm (AEST) on 9 July 2018 are eligible to subscribe for 1 PTrackERS for every 1 PGF share held.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="What is the size of the Entitlement allocation?">
        <p>
          All securities offered by <span class="gotext">GO 2025</span> will be first offered to shareholders* in PGF on a 1 for 1 basis. This is up to 350,909,977 million securities to be issued at an Issue Price of $1.40 per PTrackERS to raise up to $491,273,967.80.
        </p>
        <p>
          Any remaining securities which are not taken up under the Entitlement Offer will be made available under the General Public Offer and the Broker Firm Offer.
        </p>
        <p>
          * with registered addresses in Australia or New Zealand.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="If I participate in the Entitlement priority allocation, will I get all the securities I apply for?">
        <p>
          Yes. Applications under the Entitlement Offer received before the closing date will be allocated their full entitlement (subject to minimum subscription requirements).
        </p>
        <p>
          If the Offer is oversubscribed, applications in the General Offer and Broker Firm Offer will be scaled back.
        </p>
        <p>
          Early lodgement of your application is recommended as the Offer may be closed early at the Directors’ discretion.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="Can PGF shareholders take up more securities than available under the Entitlement offer?">
        <p>
          PGF shareholders may subscribe for more PTrackERS than their entitlement. However, the excess will form part of the General Public Offer. Excess applications may also be made under the Broker Firm Offer.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="How can I participate in the Entitlement Offer?">
        <p>
          Shareholders who are invested in PGF as at the Record Date will be contacted by email or post once the Offer opens. They will be issued a Unique Entitlement Code which will enable them to participate in the Entitlement offer.
        </p>
        <p>
          You can also apply online at either:
        </p>
        <ul>
          <li>
            <a href="http://www.pmcapital.com.au">http://www.pmcapital.com.au</a>
          </li>
          <li>
            <a href="http://www.boardroomlimited.com.au/ca/ptrackers">http://www.boardroomlimited.com.au/ca/ptrackers</a>
          </li>
        </ul>
      </faq-item>
      <faq-item v-model="openItem" title="How can I participate in the General Public Offer?">
        <p>
          The General Public Offer is open to all Applicants with a registered address in Australia and New Zealand. To participate in the General Public Offer, your Application Form and Application Monies must be received by the Registry by 5:00pm (AEST) on the General Public Offer Closing Date (expected to be 10 August 2018).
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="How can I participate in the Broker Firm Offer?">
        <p>
          The Broker Firm Offer is open to those who have received a firm allocation from their stockbroker or financial adviser and have a registered address in Australia or New Zealand.
        </p>
        <p>
          To participate in the Broker Firm Offer, your Application Form must be received by your stockbroker or financial adviser by 5:00pm (AEST) on the Broker Firm Offer Closing Date (expected to be 10 August 2018).
        </p>
        <p>
          Contact your stockbroker or financial adviser to determine if they will allocate you PTrackERS under the Broker Firm Offer.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="Can I apply for shares for my children or grandchildren?">
        <p>
          Most brokers do not allow you to trade on behalf of a minor. You may be able to open an account in your name as a trustee. Once the minor has turned 18, the shares can be transferred into their account under their name.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="Are there any brokerage fees payable if I apply for shares in the IPO?">
        <p>
          No brokerage, commission or stamp duty is payable by Applicants for PTrackERS.
        </p>
      </faq-item>
    </div>
    <hr>
    <div class="box">    
      <h1 class="title">
        About the offer
      </h1>      
      <faq-item v-model="openItem" title="Why is it called GO 2025?">
        <p>
          ‘GO’ stands for Global Opportunities. ‘2025’ is the year of the maturity date for the PTrackERS.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="What is PM Capital GO 2025 Limited (‘GO 2025’)?">
        <p>
          <span class="gotext">GO 2025</span> is a newly incorporated and wholly owned subsidiary of the PM Capital Global Opportunities Fund (PGF). PGF is a listed investment company (LIC).  is a newly incorporated and wholly owned subsidiary of the PM Capital Global Opportunities Fund (PGF). PGF is a listed investment company (LIC). 
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
    };
  }
};
</script>

<style lang="scss" scoped>
.content-left {
  padding-left: 2rem;
}
.gotext{
  color: #ea6363;
}
</style>
