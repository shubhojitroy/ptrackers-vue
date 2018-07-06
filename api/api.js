//import axios from 'axios';

const _issuerId = 'IEYM'; // PM Go2025 Limited

const _apiResponse = {
  SessionId: 'EI93KLFID3',
  Ok: true,
  Message: null,
  InvestorType: 'E',
  EntitlementNo: '12345',
  Address1: 'HARRY JAMES POTTER',
  Address2: '225 GEORGE STREET',
  Address3: 'HOGSWART',
  Address4: 'NSW',
  Address5: '',
  Address6: '2000',
  // emailAddress: 'harry.potter@gmail.com',
  // phoneNumber: '9290-1200',
  UnitPrice: 1.4,
  EntitlementAmount: 12000,
};

const mapInvestor = data => {
  return {
    entitlementNo: data.EntitlementNo,
    nameAddress1: data.Address1,
    nameAddress2: data.Address2,
    nameAddress3: data.Address3,
    nameAddress4: data.Address4,
    nameAddress5: data.Address5,
    nameAddress6: data.Address6,
    emailAddress: '',
    phoneNumber: '',
    unitPrice: data.UnitPrice,
    entitlement: data.EntitlementAmount,
  };
};

const mapApplication = data => {
  return {
    unitsApplied: 0,
    billerCode: data.BPayBillerCode,
    referenceNo: data.BPayReferenceNumber,
  };
};

const mapApiApplication = (sessionId, application) => {
  return {
    SessionId: sessionId,
    EntitlementNo: application.entitlementNo,
    IssuerId: _issuerId,
    ApplicationAmount: application.unitsApplied,
    ContactNumber: application.phoneNumber,
    Email: application.emailAddress,
  };
};

export default {
  investor: mapInvestor(_apiResponse),
  login (credentials, setSession, setInvestor, setApplication) {
    if (credentials.entitlementNo == _apiResponse.EntitlementNo) {
      const response = _apiResponse;
      if (response.Ok) {
        const investor = mapInvestor(response);
        const application = mapApplication(response);
        setSession(response.sessionId);
        setInvestor(investor);
        setApplication(application);
        return Promise.resolve();
      } else {
        return Promise.reject(('Invalid Entitlement Number'));
      }
    } else {
      console.log('failed login.');
     return Promise.reject('Inva!!lid Entitlement Number');
    }
  },
  save (sessionId, application, setSession) {
    // const app = mapApiApplication(sessionId, application);
    // post('http://dev-21-api/api/EntitlementIpo/Apply', app)
    //   .then(response => {
    //     if (response.Ok) {
    //       setSession('');
    //     }
    //   });
    //   .catch(err => Promise.reject('An error occurred: ' + err));
    setSession('');
  },
};
    // const loginCredentials = {
    //   EntitlementNo: credentials.entitlementNo,
    //   IssuerId: _issuerId,
    // };
    // axios.post('http://dev-21-api/api/EntitlementIpo/Login', loginCredentials)
    //  .then(response => {
    //    if (response.Ok) {
    //      const investor = mapInvestor(response);
    //      const payment = mapPayment(response);
    //      setInvestor(investor);
    //      setPayment(payment);
    //      return Promise.resolve();
    //    } else {
    //      return Promise.reject('Invalid Entitlement Number');
    //    }
    //  })
    //  .catch(err => Promise.reject('An error occurred: ' + err));


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

