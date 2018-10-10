import { APIPUT } from '../helpers/helper';
import actionTypes from './index';

const { ADMIN_ACTION_FAILURE, ADMIN_ACTION_SUCCESS } = actionTypes;

export default (requestId, action) => dispatch => APIPUT('', `/requests/${requestId}/${action}`)
  .then((response) => {
    dispatch({
      type: ADMIN_ACTION_SUCCESS,
      payload: response.data.message,
    });
  })
  .catch(error => dispatch({
    type: ADMIN_ACTION_FAILURE,
    payload: error.response.data,
  }));
