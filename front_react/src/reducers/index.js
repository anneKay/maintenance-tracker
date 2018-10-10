import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import createReqReducer from '../reducers/createRequestReducer';
import getReqReducer from '../reducers/getRequestReducer';
import adminReducer from '../reducers/admin';

const rootReducer = combineReducers({
  signupReducer,
  createReqReducer,
  getReqReducer,
  adminReducer,
});

export default rootReducer;
