import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  // initial state of the item gotten back from get request
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
