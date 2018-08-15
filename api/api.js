import axios from 'axios';

const _issuerId = 'IEYM'; // PM Go2025 Limited

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
 // investor: mapApiToInvestor(_apiResponse),
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
          setSession(response.SessionId);
          setInvestor(investor);
          setApplication(application);
          setError('');
          return response;
        } else {
          setError('Invalid Entitlement Number');
          return Promise.reject('Invalid Entitlment Number.');
        }
      })
      .catch(err => {
        setError('An error occurred: ' + err);
        return Promise.reject('An error occurred: ' + err);
      });
  },
  save (appDetails, setSession, setApplication, setError) {
    const app = mapApplyRequest(appDetails);
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
  },
};
