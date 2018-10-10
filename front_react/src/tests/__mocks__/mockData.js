import actionTypes from '../../actions/index';

const {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST_FAILURE,
  GET_USER_REQUESTS_SUCCESS,
  GET_USER_REQUESTS_FAILURE,
  GET_SINGLE_REQUEST_SUCCESS,
  GET_SINGLE_REQUEST_FAILURE,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_FAILURE,
  ADMIN_ACTION_SUCCESS,
  ADMIN_ACTION_FAILURE,
} = actionTypes;

export const allrequests = {
  allRequests: [{
    created_at: '2018-09-23T21:52:20.560Z',
    description: 'fdsfjksdfkdslkf jdklsfldslfjsdlkjflkdsff',
    id: 26,
    requesttype: 'urgent',
    status: 'approved',
    title: 'fjkldsjfdf',
    user_id: 34,
  },
  {
    created_at: '2018-06-27T12:20:03.386Z',
    description: 'I want to fix my car',
    id: 7,
    requesttype: 'Repairs',
    status: 'approved',
    title: 'Car Repairs',
    user_id: 13,
  },
  {
    created_at: '2018-09-23T21:52:20.373Z',
    description: 'fdsfjksdfdslkf jdklsfldslfjsdlkjflkdsff',
    id: 25,
    requesttype: 'urgent',
    status: 'pending',
    title: 'fjkldsjfdf',
    user_id: 34,
  },
  ],
};

export const userDetail = {
  user: {
    id: 5,
    name: 'Nwanna',
    email: 'Nwanna@nwanna.com',
    admin: false,
  },
};
export const requests = {
  requests: [{
    created_at: '2018-09-23T21:52:20.560Z',
    description: 'fdsfjksdfkdslkf jdklsfldslfjsdlkjflkdsff',
    id: 26,
    requesttype: 'urgent',
    status: 'approved',
    title: 'fjkldsjfdf',
    user_id: 34,
  },
  {
    created_at: '2018-06-27T12:20:03.386Z',
    description: 'I want to fix my car',
    id: 7,
    requesttype: 'Repairs',
    status: 'approved',
    title: 'Car Repairs',
    user_id: 13,
  },
  {
    created_at: '2018-09-23T21:52:20.373Z',
    description: 'fdsfjksdfdslkf jdklsfldslfjsdlkjflkdsff',
    id: 25,
    requesttype: 'urgent',
    status: 'pending',
    title: 'fjkldsjfdf',
    user_id: 34,
  },
  ],
};

export const adminResponse = {
  message: 'Request status has been successfully reset',
};


export const adminInitialState = {
  message: {},
  error: {},
};

export const actualAdminSuccess = {
  type: ADMIN_ACTION_SUCCESS,
  payload: {
    message: 'This request has been successfully approved',
  },
};
export const expectedAdminSuccess = {
  message: {
    message: 'This request has been successfully approved',
  },
};

export const actualAdminFailure = {
  type: ADMIN_ACTION_FAILURE,
  payload: {
    errors: 'An error occured',
  },
};
export const expectedAdminFailure = {
  error: {
    errors: 'An error occured',
  },
};

export const signupInitialState = {
  user: {},
};

export const actualSignupSuccess = {
  type: SIGN_UP_SUCCESS,
  payload: {
    user: {},
  },
};
export const expectedSignupSuccess = {
  user: {
    user: {},
  },
};
export const actualSignupFailure = {
  type: SIGN_UP_FAILURE,
  payload: {
    error: '',
  },
};
export const expectedSignupFailure = {
  error: {
    error: '',
  },
};
export const actualLoginSuccess = {
  type: LOG_IN_SUCCESS,
  payload: {
    user: {},
  },
};
export const expectedLoginSuccess = {
  user: {
    user: {},
  },
};
export const actualLoginFailure = {
  type: LOG_IN_FAILURE,
  payload: {
    error: '',
  },
};
export const expectedLoginFailure = {
  error: {
    error: '',
  },
};
export const createReqInitialState = {
  request: {},
};
export const actualRequestSuccess = {
  type: CREATE_REQUEST_SUCCESS,
  payload: {
    request: {
      title: '',
      description: '',
      requesttype: '',
    },
  },
};
export const expectedRequestSuccess = {
  request: {
    request: {
      title: '',
      description: '',
      requesttype: '',
    },
  },
};

export const actualRequestFailure = {
  type: CREATE_REQUEST_FAILURE,
  payload: {
    error: {},
  },
};
export const expectedRequestFailure = {
  error: {
    error: {},
  },
};

export const getReqInitialState = {
  requests: [],
  allRequests: [],
  request: {},
  error: {},
};

export const actualUserReqSuccess = {
  type: GET_USER_REQUESTS_SUCCESS,
  payload: {
    requests: [
      {},
    ],
  },
};
export const expectedUserReqSuccess = {
  requests: {
    requests: [
      {},
    ],
  },
};
export const actualUserReqFailure = {
  type: GET_USER_REQUESTS_FAILURE,
  payload: {
    error: {},
  },
};
export const expectedUserReqFailure = {
  error: {
    error: {},
  },
};

export const actualSingleSuccess = {
  type: GET_SINGLE_REQUEST_SUCCESS,
  payload: {
    request: {},
  },
};
export const expectedSingleSuccess = {
  request: {
    request: {},
  },
};

export const actualSingleFailure = {
  type: GET_SINGLE_REQUEST_FAILURE,
  payload: {
    error: {},
  },
};
export const expectedSingleFailure = {
  error: {
    error: {},
  },
};

export const actualAllReqSuccess = {
  type: GET_REQUESTS_SUCCESS,
  payload: {
    allRequests: [
      {},
    ],
  },
};

export const expectedAllReqSuccess = {
  allRequests: {
    allRequests: [
      {},
    ],
  },
};

export const actualAllReqFailure = {
  type: GET_REQUESTS_FAILURE,
  payload: {
    error: {},
  },
};
export const expectedAllReqFailure = {
  error: {
    error: {},
  },
};
