import actionTypes from './index';
import { APIPOST } from '../helpers/helper';

const { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAILURE } = actionTypes;


export default (title, description, requestType, history) => dispatch => APIPOST({ title, description, requestType }, '/users/requests')
  .then((request) => {
    dispatch({
      type: CREATE_REQUEST_SUCCESS,
      payload: request.data.request,
    });
    history.push('/profile');
  })
  .catch(error => dispatch({
    type: CREATE_REQUEST_FAILURE,
    payload: error.response.data,
  }));
