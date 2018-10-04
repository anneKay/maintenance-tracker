import actionTypes from '../actions/index';

const {
  GET_USER_REQUESTS_SUCCESS,
  GET_USER_REQUESTS_FAILURE,
  GET_SINGLE_REQUEST_FAILURE,
  GET_SINGLE_REQUEST_SUCCESS,
} = actionTypes;

const initialState = {
  requests: [],
  request: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
      };
    case GET_USER_REQUESTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SINGLE_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload,
      };
    case GET_SINGLE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
