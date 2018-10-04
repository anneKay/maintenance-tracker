import actionTypes from './index';
import { APIPOST, setToken } from '../helpers/helper';

const { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } = actionTypes;

export default (name, email, password, history) => dispatch => APIPOST({ name, email, password }, '/auth/signup')
  .then((user) => {
    setToken(user);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: user.data.user,
    });
    history.push('/profile');
  })

  .catch(error => dispatch({
    type: SIGN_UP_FAILURE,
    payload: error.response.data,
  }));
