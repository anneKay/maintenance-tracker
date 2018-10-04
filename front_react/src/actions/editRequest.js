import actionTypes from './index';
import { APIPUT } from '../helpers/helper';

const { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAILURE } = actionTypes;


export default (title, description, requestType, requestId) => APIPUT(`/users/requests/${requestId}`)
  .then((request) => {
    console.log('>>>>>request', request);
  })
  .catch((error) => {
    console.log('>>>>error', error);
  });
