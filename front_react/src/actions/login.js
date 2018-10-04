import actionTypes from './index';
import { APIPOST, setToken } from '../helpers/helper';

const { LOG_IN_FAILURE, LOG_IN_SUCCESS } = actionTypes;

export const setUser = user => ({
  type: LOG_IN_SUCCESS,
  payload: user,
});

export default (email, password, history) => dispatch => APIPOST({ email, password }, '/auth/login')
  .then((user) => {
    setToken(user);
    dispatch(setUser(user.data.user));
    history.push('/profile');
  })
  .catch(error => dispatch({
    type: LOG_IN_FAILURE,
    payload: error.response,
  }));
