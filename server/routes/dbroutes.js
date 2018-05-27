//imports from libraries and local files

import express from 'express'
const dbrouter = express.Router();

import {createRequest, getRequests} from './../controller/requestController'
import { signupUser } from './../controller/userController'
// routers for the API endpoints

// Auth routes
dbrouter.post('/auth/signup', signupUser);

dbrouter.post('/users/requests', createRequest);

dbrouter.get('/users/requests', getRequests);

// router.put('/users/requests/:id', putRequest);

// router.get('/users/requests/:id', getRequestById)

// router.delete('/users/requests/:id', deleteRequest);

export default dbrouter;

