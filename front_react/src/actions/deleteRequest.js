import { APIDELETE } from '../helpers/helper';

export default (requestId, history) => APIDELETE(`/users/requests/${requestId}`)
  .then(() => {
    history.push('/profile');
  })
  .catch(() => {
  });
