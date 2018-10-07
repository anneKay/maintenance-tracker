import { APIPUT } from '../helpers/helper';


export const approveReq = (requestId, action) => APIPUT(`/requests/${requestId}/${action}`)
  .then(() => {
  })
  .catch(error => error);
