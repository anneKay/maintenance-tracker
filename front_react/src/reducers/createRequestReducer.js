import actionTypes from '../actions/index';

const { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAILURE } = actionTypes;

const initialState = {
  request: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload,
      };
    case CREATE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
