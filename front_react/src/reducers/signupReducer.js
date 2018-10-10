import actionTypes from '../actions/index';

const {
  SIGN_UP_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
} = actionTypes;

const initialState = {
  // initial state of the item gotten back from get request
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
