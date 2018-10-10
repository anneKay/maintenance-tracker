import actionTypes from '../actions/index';

const { ADMIN_ACTION_FAILURE, ADMIN_ACTION_SUCCESS } = actionTypes;

const initialState = {
  message: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ACTION_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case ADMIN_ACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
