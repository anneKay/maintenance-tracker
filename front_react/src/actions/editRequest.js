import { APIPUT } from '../helpers/helper';

export default (title, description, requestType, requestId, history) => APIPUT({ title, description, requestType }, `/users/requests/${requestId}`)
  .then(() => {
    history.push('/profile');
  });
