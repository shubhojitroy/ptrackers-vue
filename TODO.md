### All Pages
< done >

### Offer Details Page
< done >

### Priority Code page
* Rename title to "Entitlement Offer"
* Below Priority Code section, add General Offer section.
    "If you are not an eligible PM Capital Opportunity Fund holder, you can apply through the General Offer"
    "General Offer" button that will take user to new page of the Online Application.

### Application page
5.2. Add business rules and validations to page.
5.3. Submit button call API to save details
* Rename title from "Application Amount" to "Application"
* Fix typo in first paragraph. "Recird Date" to "Record Date"
* Entitlement amount should have 1000 separator (comma)
* "Please enter the number of PTrackERS for which you are subscribing"
* Remove <hr> element
* Make data entry section into a form. See example at http://www.pmcapital.com.au/general-enquiry
* Logic: If apply > entitlement then display split details.
    "You have applied for your full amount of your entitlement of 12,000 PTrackERS"
    "You have also applied for an additional 28,000 PTRackERS in the General Offer"

### Confirmation page
* Date applied in the BPAY section is 8 August
* Print - From "Payment by Cheque"
    hint: apply "no-print class" to sections that do not need to be printed.

---

## COMPLETED TASKS

### All Pages
DONE: 1.1 Add second logo to the nav header. (copied new logo images into assets/img folder.)
NOT REQUIRED: 2.1 Update HERO image to the new banner image

### Offer Details Page
DONE: 3.1. Add Next button to go to the next tabbed page
DONE: 3.2. Add Apply Now button to go to the Apply Now tab (all tabs except Apply Now tab)
DONE: 3.3. Add Continue button to Apply Now tab ONLY
DONE: 3.4. Change Apply Now tab to blue background etc
DONE: 3.5. CIO Letter tab - Add youtube video (added placeholder video until real one is available)
DONE: 3.6. Offer Overview tab - remove all text from "The Prospectus contains..." (it's a repeat of the Apply Now tab)
DONE: 3.7. Important Dates tab - Align column width the same for both tables. Change table header formatting.
DONE: 3.8. FAQ tab - Add the remaining FAQ items.

### Priority Code page
DONE: 4.1 API call to retrieve Investor details.
DONE: 4.2 Give appropriate message (when validating priority code).

### Application page
DONE: 5.1. Fix inputs and labels.
DONE: 5.4. Exit button changes to Cancel ==>opens dialog box to confirm before cancelling ==> goes to cancel page

### Confirmation page
DONE: 6.1. Change all inputs into labels.
DONE: 6.2. Close button renames to Finish
DONE: 6.3. Add BPay Logo (SVG) and reformat payment section
DONE: 6.4. Add code to print button.



Notes:

Need to apply colour them as used in https://www.pmcapital.com.au website.

See these pages for examples:
http://www.pmcapital.com.au/global-companies-fund
http://www.pmcapital.com.au/general-enquiry


* Form background is duck blue
* Page background is white
* Panels are various shades of blue (see http://www.pmcapital.com.au/global-companies-fund for examples)
* Action buttons are RED (call to actions) (#EE464C)
* Header font is Playfair Display
* Header font color is #2B3E50
* Body font is Raleway
* Body font color is #383838. Some cases it uses #2E2E2E (Bold #323232)

Colours used for panels:

background: #E8EFF2 / border: #A8C1CC / text color: #2B3E50 (pale blue)
background: #A8C1CC / border: #A8C1CC / text color: #FFFFFF (light grey)
background: #6CBCDC / border: #A8C1CC / text color: #FFFFFF (blue)
background: #404042 / border: #A8C1CC / text color: #FFFFFF (black)
background: #2B3E50 / border: none    / text color: #FFFFFF (dark)
background: #EE464C / border: none    / text color: #FFFFFF (red)


primary color is the dark color (#2B3E50)
link color is (possibly) the red color (#EE464C) - red in hover mode for anchor links in the main menu

red button:
normal #EE464C
hover  #BE383C

red gradient button:
linear-gradient(-180deg,#EE464C 0%,#D3363B 100%);



