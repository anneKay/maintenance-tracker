import express from 'express'
const router = express.Router();

import { createRequest,  getAllRequests, getrequest, putRequest, deleteRequest} from './../controller/controller';


router.post('/v1/users/requests', createRequest);

router.get('/v1/users/requests', getAllRequests);

router.get('/v1/users/requests/:id', getRequest);

router.put('/v1/users/requests/:id'. putRequest);

router.delete('/v1/users/requests/:id', deleteRequest);

export {router as requestRoute};


// export const requestRoute = (app) => {
    
//   // requests Routes
//   app.route('/api/v1/users/requests')
//     //.get(requests.list_all_requests)
//     .post(addRequest);
//     app.get(, addRequest)


//   app.route('/api/v1/users/requests/id')
//     //.get(requests.read_a_request)
//     //.put(requests.update_a_request)
//     //.delete(requests.delete_a_request);
// };

