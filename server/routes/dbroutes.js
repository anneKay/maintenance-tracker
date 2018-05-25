//imports from libraries and local files

import express from 'express'
const dbrouter = express.Router();

import {createRequest} from './../controller/requestController'
// routers for the API endpoints

dbrouter.post('/users/requests', createRequest);

// router.get('/users/requests', getAllRequests);

// router.put('/users/requests/:id', putRequest);

// router.get('/users/requests/:id', getRequestById)

// router.delete('/users/requests/:id', deleteRequest);

export default dbrouter;

