import axios from 'axios';

const _issuerId = 'IEYM'; // PM Go2025 Limited

const _apiResponse = [
  {
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
    UnitPrice: 1.4,
    EntitlementAmount: 12000,
    BPayBillerCode: 248625,
    BPayReferenceNumber: 689001234,
  },
  {
    SessionId: '387VJ82J0',
    Ok: true,
    Message: null,
    InvestorType: 'E',
    EntitlementNo: '54321',
    Address1: 'HERMIONE GRANGER',
    Address2: '123 PITT STREET',
    Address3: 'SYDNEY',
    Address4: 'NSW',
    Address5: '',
    Address6: '2000',
    UnitPrice: 1.4,
    EntitlementAmount: 700,
    BPayBillerCode: 248625,
    BPayReferenceNumber: 486736253,
  },
];

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
    return axios.post('https://api.boardroomlimited.com.au/api/EntitlementIpo/Login', loginCredentials)
      .then(resp => {
        const response = resp.data;
        if (response.Ok) {
          const investor = mapApiToInvestor(response);
          const application = mapApiToApplication(response);
          console.log('api!!!', response.SessionId);
          setSession(response.SessionId);
          setInvestor(investor);
          setApplication(application);
          setError('');
          return response;
        } else {
          console.log('invalid loging!!!', response.SessionId);
          setError('Invalid Entitlement Number');
          return Promise.reject('Invalid Entitlment Number.');
        }
      })
      .catch(err => {
        // console.log('error!!');
        setError('An error occurred: ' + err);
        return Promise.reject('An error occurred: ' + err);
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
    return axios.post('https://api.boardroomlimited.com.au/api/EntitlementIpo/Apply', app)
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
          return response;
        }
      })
      .catch(err => {
        setError('An error occurred: ' + err);
        return Promise.reject('An error occurred: ' + err);
      });
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
