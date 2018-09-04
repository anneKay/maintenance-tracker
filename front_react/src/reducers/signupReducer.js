//import actionTypes from '../actions/index';
import * as actionTypes from '../actions/index';

//const { SIGN_UP_SUCCESS,  } = actionTypes;

const initialState = {
  // initial state of the item gotten back from get request
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
