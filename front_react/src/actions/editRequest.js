import { APIPUT } from '../helpers/helper';

export default (title, description, requestType, requestId, history) => APIPUT(`/users/requests/${requestId}`, { title, description, requestType })
  .then(() => {
    history.push('/profile');
  })
  .catch(() => {
  });
