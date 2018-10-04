import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import createReqReducer from '../reducers/createRequestReducer';
import getReqReducer from '../reducers/getRequestReducer';

const rootReducer = combineReducers({
  signupReducer,
  createReqReducer,
  getReqReducer,
});

export default rootReducer;
