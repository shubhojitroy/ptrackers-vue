import axios from 'axios';

const investor = {
  entitlementNo: '1234',
  nameAddress1: 'HARRY JAMES POTTER',
  nameAddress2: '225 GEORGE STREET',
  nameAddress3: 'SYDNEY',
  nameAddress4: 'NSW',
  nameAddress5: '2000',
  emailAddress: 'harry.potter@gmail.com',
  phoneNumber: '9290-1200',
  unitPrice: 1.4,
  entitlement: 12000,
};

export default {
  login (credentials, setInvestor) {
    const loginCredentials = {
      EntitlementNo: credentials.entitlementNo,
      IssuerId: 'IEYM' // PM Go2025 Limited
    };



    // axios.post('http://dev-21-api/api/EntitlementIpo/Login', loginCredentials)
    //   .then(response => {
    //       let investor = {
    //         sessionId: response.SessionId,
    //         entitlementNo: response.EntitlementNo,
    //         nameAddress1: response.Address1,
    //         nameAddress2: response.Address2,
    //         nameAddress3: response.Address3,
    //         nameAddress4: response.Address4,
    //         nameAddress5: response.Address5,
    //         nameAddress6: response.Address6,
    //         emailAddress: '',
    //         phoneNumber: '',
    //         unitPrice: response.UnitPrice,
    //         entitlement: response.EntitlementAmount,
    //         billerCode: response.BPayBillerCode,
    //         referenceNo: response.BPayReferenceNumber,
    //       };
    //       setInvestor(investor);
    //   })

  }

  // {
  //   "EntitlementNo": "string",
  //   "IssuerId": "string"
  // }
  // {
  //   "Content": {
  //     "SessionId": "string",
  //     "Ok": true,
  //     "Message": "string",
  //     "InvestorType": "string",
  //     "EntitlementNo": "string",
  //     "Address1": "string",
  //     "Address2": "string",
  //     "Address3": "string",
  //     "Address4": "string",
  //     "Address5": "string",
  //     "Address6": "string",
  //     "EntitlementAmount": 0,
  //     "UnitPrice": 0,
  //     "BPayBillerCode": "string",
  //     "BPayReferenceNumber": "string"
  //   },
  // axios.post('http://dev-21-api/api/EntitlementIpo/Apply', loginCredentials)
  // {
  //   "SessionId": "string",
  //   "EntitlementNo": "string",
  //   "IssuerId": "string",
  //   "ApplicationAmount": 0,
  //   "ContactNumber": "string",
  //   "Email": "string"
  // }
  // Return value
  // {
  // "Content": {
  //   "Ok": true,
  //   "Message": "string"
  // },

        // axios.post('https://api.boardroomlimited.com.au/api/DixonIpo/GetOffer', { PriorityCode: this.priorityCode.toUpperCase() })
        //   .then(response => {
        //     this.offer = response.data;
        //     this.error = '';
        //     this.goToOffer(this.offer.Offer);
        //   })
        //   .catch(err => { this.error = 'An error has occurred on the server.' })

}
