const _issuerId = 'IEYM'; // PM Go2025 Limited

const _apiResponses = [
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
//  investor: mapApiToInvestor(_apiResponse),
  login (credentials, setSession, setInvestor, setApplication, setError) {
    let response = _apiResponses.find(r => r.EntitlementNo === credentials.entitlementNo);
    if (response && response.Ok) {
      const investor = mapApiToInvestor(response);
      const application = mapApiToApplication(response);
      setSession(response.SessionId);
      setInvestor(investor);
      setApplication(application);
      setError('');
      return Promise.resolve(response);
    } else {
      setError('Invalid Entitlement Number');
      return Promise.reject('Invalid Entitlement Number');
    }
  },
  save (appDetails, setSession, setApplication, setError) {
    const app = mapApplyRequest(appDetails);
    setApplication(app);
    setSession('');
    setError('');
    return Promise.resolve(true);
  },
};
