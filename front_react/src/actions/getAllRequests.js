import actionTypes from './index';
import { APIGET } from '../helpers/helper';

const {
  GET_USER_REQUESTS_SUCCESS,
  GET_USER_REQUESTS_FAILURE,
  GET_SINGLE_REQUEST_FAILURE,
  GET_SINGLE_REQUEST_SUCCESS,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_FAILURE,

} = actionTypes;

export const getUserRequests = () => dispatch => APIGET('/users/requests')
  .then((requests) => {
    dispatch({
      type: GET_USER_REQUESTS_SUCCESS,
      payload: requests.data.requests,
    });
  })
  .catch(error => dispatch({
    type: GET_USER_REQUESTS_FAILURE,
    payload: error,
  }));

export const getSingleRequest = requestId => dispatch => APIGET(`/users/requests/${requestId}`)
  .then((request) => {
    dispatch({
      type: GET_SINGLE_REQUEST_SUCCESS,
      payload: request.data.request,
    });
  })
  .catch(error => dispatch({
    type: GET_SINGLE_REQUEST_FAILURE,
    payload: error,
  }));

export const getAllRequests = () => dispatch => APIGET('/requests')
  .then((requests) => {
    dispatch({
      type: GET_REQUESTS_SUCCESS,
      payload: requests.data.allRequests,
    });
    return requests;
  })
  .catch(error => dispatch({
    type: GET_REQUESTS_FAILURE,
    payload: error,
  }));
