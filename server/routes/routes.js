import express from 'express'
const router = express.Router();

import { createRequest,  getAllRequests, getrequest, putRequest, deleteRequest} from './../controller/controller';


router.post('/users/requests', createRequest);

router.get('/users/requests', getAllRequests);

//router.get('/v1/users/requests/:id', getRequest);

router.put('/users/requests/:id', putRequest);

router.delete('/users/requests/:id', deleteRequest);

export default router;

