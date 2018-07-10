import axios from 'axios';

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
  Address6: '2099',
  // emailAddress: 'harry.potter@gmail.com',
  // phoneNumber: '9290-1200',
  UnitPrice: 1.4,
  EntitlementAmount: 12000,
  BPayBillerCode: 248625,
  BPayReferenceNumber: 689001234,
};

const mapApiToInvestor = data => {
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

const mapApiToApplication = data => {
  return {
    applicationUnits: 0,
    billerCode: data.BPayBillerCode,
    referenceNo: data.BPayReferenceNumber,
    emailAddress: '',
    phoneNumber: '',
  };
};

const mapApplyRequest = (application) => {
  return {
    SessionId: application.sessionId,
    EntitlementNo: application.entitlementNo,
    IssuerId: _issuerId,
    ApplicationAmount: application.applicationUnits,
    ContactNumber: application.phoneNumber,
    Email: application.emailAddress,
  };
};

export default {
  investor: mapApiToInvestor(_apiResponse),
  login (credentials, setSession, setInvestor, setApplication, setError) {
    const loginCredentials = {
      EntitlementNo: credentials.entitlementNo,
      IssuerId: _issuerId,
    };
    axios.post('https://api.boardroomlimited.com.au/api/EntitlementIpo/Login', loginCredentials)
      .then(resp => {
        const response = resp.data;
        // console.log('api', response);
        if (response.Ok) {
          const investor = mapApiToInvestor(response);
          const application = mapApiToApplication(response);
          console.log('api!!!', response.SessionId);
          // window.requestAnimationFrame(() => {
          setSession(response.SessionId);
          setInvestor(investor);
          setApplication(application);
          setError('');
          // });
        } else {
          console.log('invalid loging!!!', response.SessionId);
          setError('Invalid Entitlement Number');
          return new Error('Invalid Entitlment Number.');
        }
      })
      .catch(err => {
        // console.log('error!!');
        setError('An error occurred: ' + err);
      });
    // if (credentials.entitlementNo == _apiResponse.EntitlementNo) {
    //   const response = _apiResponse;
    //   if (response.Ok) {
    //     const investor = mapApiToInvestor(response);
    //     const application = mapApiToApplication(response);
    //     setSession(response.SessionId);
    //     setInvestor(investor);
    //     setApplication(application);
    //     setError('');
    //   } else {
    //     setError('Invalid Entitlement Number');
    //   }
    // } else {
    //  return setError('Invalid Entitlement Number');
    // }
  },
  save (appDetails, setSession, setApplication, setError) {
    const app = mapApplyRequest(appDetails);
    console.log('apply', app);
    axios.post('https://api.boardroomlimited.com.au/api/EntitlementIpo/Apply', app)
      .then(resp => {
        const response = resp.data;
        if (response.Ok) {
          const application = {
            entitlement: appDetails.entitlement,
            applicationUnits: appDetails.applicationUnits,
            billerCode: appDetails.billerCode,
            referenceNo: appDetails.referenceNo,
            emailAddress: appDetails.emailAddress,
            phoneNumber: appDetails.phoneNumber,
          };
          setApplication(application);
          setSession('');
          setError('');
        }
      })
      .catch(err => setError('An error occurred: ' + err));
    // const application = {
    //   entitlement: appDetails.entitlement,
    //   applicationUnits: appDetails.applicationUnits,
    //   billerCode: appDetails.billerCode,
    //   referenceNo: appDetails.referenceNo,
    //   emailAddress: appDetails.emailAddress,
    //   phoneNumber: appDetails.phoneNumber,
    // };
    // setApplication(application);
    // setSession('');
    // setError('');
  },
};
    // const loginCredentials = {
    //   EntitlementNo: credentials.entitlementNo,
    //   IssuerId: _issuerId,
    // };
    // axios.post('http://dev-21-api/api/EntitlementIpo/Login', loginCredentials)
    //  .then(response => {
    //    if (response.Ok) {
    //      const investor = mapApiToInvestor(response);
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

