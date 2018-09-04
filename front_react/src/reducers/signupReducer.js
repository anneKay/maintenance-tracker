import SIGN_UP from '../actions/index';

const initialState = {
  // initial state of the item gotten back from get request
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
