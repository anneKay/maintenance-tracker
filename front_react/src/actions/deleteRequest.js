import { APIDELETE } from '../helpers/helper';

export default (requestId, history) => APIDELETE(`/users/requests/${requestId}`)
  .then((response) => {
    console.log(response);
    history.push('/profile');
  })
  .catch((error) => {
    console.log('>>>>error', error);
  });
