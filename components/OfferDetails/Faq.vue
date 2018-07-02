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
      <faq-item v-model="openItem" key-value="3">
        <template slot="title">
          What is PM Capital <span class="gotext">GO 2025</span> Limited (‘<span class="gotext">GO 2025</span>’)?
        </template>
        <p>
          <span class="gotext">GO 2025</span> is a newly incorporated and wholly owned subsidiary of the PM Capital Global Opportunities Fund (PGF). PGF is a listed investment company (LIC).
        </p>
        <p>
          The investment manager of PGF and <span class="gotext">GO 2025</span>, PM Capital Limited, is an award winning investment manager known for having generated some of the industry’s leading long term returns. PM Capital has won numerous awards, most recently being awarded the prestigious Money Management/ Lonsec 2018 Fund Manager of the Year in the equities long/short category.
        </p>
        <p>
          PGF invests (and GO 2025 will invest) in a concentrated portfolio of global securities diversified across global equity markets  with the objective of providing long-term capital growth over a 7-year plus investment period.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="What am I subscribing for?">
        <p>
          You are subscribing for ‘PTrackERS’, to be offered by GO 2025 and PM Capital Global Opportunities Fund Limited.
        </p>
        <p>
          ‘PTrackERS’ stands for ‘<span class="abbreviation">P</span>ortfolio <span class="abbreviation">Track</span>ing <span class="abbreviation">E</span>xchangeable <span class="abbreviation">R</span>edeemable <span class="abbreviation">S</span>ecurities (Converting Security)’.
        </p>
      </faq-item>
    </div>
    <hr>
    <div class="box">
      <h1 class="title">
        About PTrackers
      </h1>
      <faq-item v-model="openItem" title="What are PTrackERS?">
        <p>
          PTrackERS are the next generation of Listed Investment Company (LIC) securities and have been developed by PM Capital to improve LIC investor outcomes and choice.  On a look-through basis, they represent your investment exposure to an underlying portfolio held by the Company –  like a LIC – but with the benefit of allowing you the option to exit your investment based on NTA as at 30 June 2025.
        </p>
        <p>
          This innovation is designed with the objective of providing investors the choice to:
        </p>
        <ol>
          <li>
            redeem in the future based on NTA;
          </li>
          <li>
            convert into fully paid ordinary PGF shares:
            <ul>
              <li>
                without incurring any dilution to NTA Before Tax plus Franking Credits per PTrackERS; and
              </li>
              <li>
                without triggering a CGT event (please obtain your own tax advise. An ATO Product Ruling has been obtained by GO 2025 and PGF); or
              </li>
            </ul>
          </li>
          <li>
            sell at any time on the ASX at prevailing market prices if you choose to.
          </li>
        </ol>
        <p>
          PM Capital has trademarked the term PTrackERS, given it represents significant evolution and innovation for traditional LIC investors.
        </p>
      </faq-item>
      <faq-item v-model="openItem" key-value="1">
        <template slot="title">
          How does <span class="gotext">GO 2025’s</span> improve the outcomes for securityholders compared to other LICs?
        </template>
        <ul>
          <li class="abbreviation">
            More choice, more control, more flexibility:
          </li>
          <p>
            Investors can sell at any time on market, or they may redeem or convert on 30 June 2025.
          </p>
          <p>
            LICs can and do trade on the ASX at discounts to their Net Tangible Assets, a negative for traditional LIC investor returns. Whilst PTrackERS may also trade at a discount or premium to NTA, the ability to redeem at a known date based on NTA provides investors access to the underlying portfolio performance and should help market prices trade closer to NTA than would otherwise be the case.
          </p>
          <p>
            If PTrackERS investors wish to realise their investment on 30 June 2025, they have the choice of redeeming based on NTA or selling on the ASX.
          </p>
          <p>
            If not redeemed, PTrackERS will be automatically exchanged for fully-paid Ordinary Shares of PGF in a manner which is non-dilutionary to NTA Before Tax Plus Franking Credits for both PGF shareholders and holders of PTrackERS.
          </p>
          <div class="space"></div>
          <li class="abbreviation">
            More equitable:
          </li>
          <p>
            In essence, PTrackERS allow the capital base to be grown without diluting NTA before Tax Plus Franking Credits of either investors in PGF or GO 2025 PTrackERS. This will provide for better scales of economy after exchange of PTrackERS for PGF Shares. Further, it is anticipated to provide more trading, liquidity and market awareness in the stock, both prior to and after 30 June 2025. This is a significant improvement to many LICs that have diluted shareholders by raising capital at a discount to NTA.
          </p>
          <div class="space"></div>
          <li class="abbreviation">
            A clear and simple distribution policy:
          </li>
          <p>
            The Company will target a distribution yield of between 3% and 4% per annum. This is comprised of semi-annual distributions equal to between 1.5% and 2% multiplied by the average of the previous 6 month-end NTA After Tax Liabilities.
          </p>
          <div class="space"></div>
          <li class="abbreviation">
            More alignment and accountability for the investment manager:
          </li>
          <p>
            Unlike other LICs which seek to permanently lock up your capital (regardless of your investment experience), with PTrackERS you have the option of remaining invested via an Exchange of PTrackERS into PGF Shares, or leaving by redeeming based on NTA at 30 June 2025 . This feature makes the investment manager highly accountable for investment performance and communication, as clients can redeem if unhappy, or exchange for PGF Shares if they wish to remain invested.
          </p>
          <div class="space"></div>
          <li class="abbreviation">
            More direct and transparent exposure to investment returns:
          </li>
          <p>
            Importantly, GO 2025 does not intend to issue any further securities over the life of the product (seven years). Changes in an LIC’s capital adds complexity for investors wishing to track and obtain the underlying performance of the Investment Manager. By participating in the offer, you enter at NTA, have the option of exiting based on NTA at maturity, and shouldn’t have your NTA diluted due to capital raisings. As such, tracking performance over the life of the PTrackERS should be more straight forward than with traditional LICs.
          </p>
          <div class="space"></div>
          <li class="abbreviation">
            Whilst retaining the benefits of a traditional LIC:
          </li>
          <ol start="a" class="content-left">
            <li class="no-abbreviation">
              PTrackERS can be traded daily on the ASX consistent with shares of LICs;
            </li>
            <li class="no-abbreviation">
              the Investment Manager can, due to the seven year time frame, genuinely invest for the long term without the distraction of daily capital flows; and
            </li>
            <li class="no-abbreviation">
              dividends can be franked where franking credits are available.
            </li>
          </ol>
        </ul>
      </faq-item>
      <faq-item v-model="openItem" title="Why is the PTrackERS redemption innovation is important for LIC investors?">
        <p>
          Even when LIC shareholders have invested for the Investment Manager’s recommended investment horizon (7 years, in the case of the Company), shareholders are subject to the vagaries of the market. This can have a significant effect on investor returns, depending on where a traditional LIC’s shares trade relative to its NTA in the future.
        </p>
        <p>
          LIC shares, including those issued by LICs with strong performance track-records, can trade on the ASX at substantial discounts to NTA. Whereas, while PTrackERS may also trade at levels different to their NTA over the seven year time frame, investors can require that the Company return proceeds based on NTA at the Maturity Date of 30 June 2025. This helps remove the uncertainty for investors as to whether they can obtain the underlying value of their securities upon the investment’s recommended 7-year time frame.
        </p>
        <p>
          History demonstrates that LICs as an industry can cycle between premium and discounts and as such it is very difficult for LIC investors to receive a return equal to that which the investment manager generates. This is demonstrated below using the following three well known LICs as examples:
        </p>
        <div class="graph">
          <p>Large-cap Australian Shares</p>
          <img src="~/assets/img/faq-large-cap.png" alt="Large-cap Australian Shares"/>
        </div>
        <div class="graph">
          <p>Small-Medium cap Australian Shares</p>
          <img src="~/assets/img/faq-small-medium-cap.png" alt="Small-Medium cap Australian Shares"/>
        </div>
        <div class="graph">
          <p>International Shares</p>
          <img src="~/assets/img/faq-international.png" alt="International Shares"/>
        </div>
      </faq-item>
      <faq-item v-model="openItem" key-value="2">
        <template slot="title">
          Will <span class="gotext">GO 2025’s</span> PTrackERS pay distributions?
        </template>
        <p>
          <span class="gotext">GO 2025’s</span> has a distribution policy that intends to target a distribution yield of between 3% and 4% per annum, plus franking where franking is available.
        </p>
        <p>
          It is the intention of the Board to frank all distributions to the maximum extent possible.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="When will the first distribution be paid?">
        <p>
          The Company will generally make distributions on PTrackERS semi-annually (expected to be in or around March and September of each year) but may do so less frequently at the discretion of the Board. No distributions will be made during the first 6 months after the PTrackERS have been issued. As such, it is expected that the first semi-annual distribution will be made in March 2019.
        </p>
      </faq-item>
    </div>
    <hr>
    <div class="box">
      <h1 class="title">
        About the Investment Manager
      </h1>
      <faq-item v-model="openItem" title="How does the Investment Manager for GO 2025 compare to its peers over the long term?">
        <p>
          PGF’s and GO 2025’s Investment Strategy will be managed consistent with PM Capital’s unlisted managed investment scheme, the PM Capital Global Companies Fund (ARSN 092 434 618), and other associated global mandates.
        </p>
        <p>
          For both Financial Year 2017 and Calendar Year 2017, PM Capital’s managed funds and mandates appeared as #1 ranked for fund performance over 5, 7 and 8 years compound returns in their Morningstar peer group of over 140 peers. The table below shows fund/mandate returns and peer ranking over the 5, 6, 7, 8, and 9 year compound returns to 31 December 20172.
        </p>
        <div>
          <img src="~assets/img/investmentreturnranking.png" alt="" border="0" display="block" width="100%" />
        </div>
        <p>
          <em>Source: Morningstar Direct</em>
        </p>
        <ol class="content-left diagonal">
          <li>
            to 31 December 2017. The annualised returns are the returns for each 5 to 9 year period to 31 December 2017.
          </li>
          <li>
            Peer group: Australia OE Equity World Large Blend.
          </li>
          <li>
            Differences in after fee investment return ranking between the above investment strategies managed by PM Capital relate to differences in fee structure and variations in portfolio composition.
          </li>
          <li>
            &#35;Offered within the unlisted ‘FirstChoice’ products issued by Colonial First State Investments Limited (ABN 98 002 348 352, AFS Licence 232468).
          </li>
        </ol>
        <p>
          Past performance is not a reliable indicator of future performance. These are not indications of actual, nor forecasts of future, performance of either PGF or PTrackERS.
        </p>       
        <p>
          The PM Capital Global Companies Fund is in its 20th year of operation, having an inception date of October 1998. As at 31 May 2018, the PM Capital Global Companies Fund had generated compound annual returns <strong>DOUBLE</strong> that of the MSCI World Net Total Return Index after all fees and expenses. Fund returns have been 9.0% pa vs the index of 4.5% per annum.
        </p>
        <p>
          Past performance is not a reliable indicator of future performance. These are not indications of actual, nor forecasts of future, performance of either PGF or PTrackERS.
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="Has the Investment Manager for GO 2025 received any third party recognition for its investment management of strategies consistent with that which will be used by GO 2025?">
        <p>
          Yes. PM Capital has won numerous industry awards in recognition of its investment management. Recent awards include:
        </p>
        <table class="awards table">
          <tbody>
            <tr>
              <td>
                <img src="~/assets/img/faq-award-1.png" alt="Fund Manager of the Year">
              </td>
              <td><strong><em>Fund Manager of the Year</em></strong> award in the 2018 <em>Money Management</em> / Lonsec long short equities category</td>
            </tr>
            <tr>
              <td>
                <img src="~/assets/img/faq-award-2.png" alt="Winner - Professional Planner">
              </td>
              <td>Winner - <em>Professional Planner</em> / Zenith International Equities (Alternative Strategies) Fund of the Year 2015</td>
            </tr>
            <tr>
              <td>
                <img src="~/assets/img/faq-award-3.png" alt="Australian Fund Manager Foundation">
              </td>
              <td>Winner - Australian Fund Manager Foundation Best Australian-Based Global Equity Manger of the Year 2015</td>
            </tr>
          </tbody>
        </table>
      </faq-item>
      <faq-item v-model="openItem" title="Beyond the redemption feature, how is PM Capital aligned with investors?">
        <p>
          The Investment Manager, PM Capital, and its staff are in aggregate the largest holders in <span class="gotext">GO 2025</span>’s parent, PGF, with a co-investment representing 8.9% of the company. PGF has the same investment strategy as <span class="gotext">GO 2025</span>.
        </p>
        <p>
          The investment manager, PM Capital, is paying for all costs associated with the offer. This means every dollar invested will be generating investment returns from day 1, and the NTA at the listing date will be equal to the Issue Price.
        </p>
      </faq-item>
    </div>
    <hr>
    <div class="box">
      <h1 class="title">
        General
      </h1>
      <faq-item v-model="openItem" title="Will there be a dividend/ security reinvestment plan?">
        <p>
          No
        </p>
      </faq-item>
      <faq-item v-model="openItem" title="What disclosure will be provided on GO 2025? ">
        <p>
          Disclosure frequency and quality will be the same as PGF, this will include:
        </p>
        <ul>
          <li>
            Estimated attributable NTA announced weekly and monthly,
          </li>
          <li>
            Monthly fund update and quarterly fund update; including:
            <ul>
              <li>
                Disclosure of portfolio positions, current stock examples, currency exposure, domicile of listing and domicile of business.
              </li>
            </ul>
          </li>
        </ul>
      </faq-item>
    </div>
    <hr>
    <div class="box">
      <h1 class="title">
        More information
      </h1>
      <faq-item v-model="openItem" title="Where can I find more information about the Offer or get a Prospectus?">
        <div class="more-info">
          <div class="contact">
            <p>For information on the Offer:</p>
            <table class="table">
              <tbody>
                <tr>
                  <td colspan="2">PM Capital Limited</td>
                </tr>
                <tr>
                  <td>Telephone</td>
                  <td>+61&nbsp;2&nbsp;8243&nbsp;0888</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:Go2025@pmcapital.com.au">Go2025@pmcapital.com.au</a></td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td><a href="https://www.pmcapital.com.au/"></a>www.pmcapital.com.au</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="contact">
            <p>For information on your PGF holding, and Entitlement:</p>
            <table class="table">
              <tbody>
                <tr>
                  <td colspan="2">Boardroom Pty Limited</td>
                </tr>
                <tr>
                  <td>Telephone</td>
                  <td>1300&nbsp;737&nbsp;760 (within Australia)<br>+61&nbsp;2&nbsp;9290&nbsp;9600 (outside Australia)</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:Go2025@boardroomlimited.com.au">Go2025@boardroomlimitedwww.com.au</a></td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td><a href="https://www.boardroomlimited.com.au/ca/ptrackers/"></a>www.boardroomlimited.com.au/ca/ptrackers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </faq-item>
    </div>
    <hr>
    <h1 class="title">
      Disclaimer
    </h1>
    <p>
      The Prospectus (dated 2 July 2018) is jointly issued by PM Capital Global Opportunities Fund Limited (ACN 166 064 875) (‘PGF’), and PM Capital <span class="gotext">Go 2025</span> Limited (ACN 623 887 285) and is an invitation to Australian and New Zealand resident investors to acquire up to 350,909,977 PTrackERS each having an Issue Price of $1.40 to raise up to $491,273,967.80 (Offer). The PTrackERS will be exchanged for fully-paid ordinary shares of PGF) at 30 June 2025, unless a redemption election at the option of the Securityholder has been made on terms described in the Prospectus. The information herein, and given in the Prospectus, does not constitute investment advice or financial product advice. This and Prospectus are of a general nature and have been prepared without taking into account your individual investment objectives, financial situation, tax position or particular investment needs. The Issuers (or any of its directors, staff, associates or external service providers), do not guarantee the repayment of capital or any rate of return. Investments in PTrackERS are not bank deposits.
    </p>

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
.abbreviation {
  font-weight:700;
  text-decoration:underline;
}
.space {
  display: block;
  width: 100%;
  height: 10px;
}
.no-abbreviation {
  font-weight: 100;
  text-decoration: none !important;
}
.left-side{
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
}
.right-side {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.diagonal {
  font-style: oblique;
  font-size: 0.87rem;
}
.graph {
  padding: 1rem 0 2rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 700;
    margin-right: 1rem;
    max-width: 150px;
  }
}
.awards.table {
  td {
    vertical-align: middle;
    text-align: center;
  }
  td:nth-child(1) {
    width: 35%;
  }
}
.more-info {
  display: flex;
  flex-wrap: wrap;
}
.contact {
  min-width: 50%;
  padding: 1rem;
  flex-grow: 1;
  p {
    font-weight: 700;
  }
  .table {
    border: 1px solid #eee;
    td:nth-child(1) {
      width: 120px;
    }
  }
}
@media screen and (max-width: 1215px) {
  .graph p { max-width: 100%;}

}
</style>
