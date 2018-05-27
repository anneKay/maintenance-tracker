//imports from libraries and local files

import express from 'express'

const router = express.Router();

import {createRequest,  getAllRequests, getrequest, putRequest, deleteRequest, getRequestById} from './../controller/controller';


// routers for the API endpoints

router.post('/users/requests', createRequest);

router.get('/users/requests', getAllRequests);

router.put('/users/requests/:id', putRequest);

router.get('/users/requests/:id', getRequestById)

router.delete('/users/requests/:id', deleteRequest);

export default router;

