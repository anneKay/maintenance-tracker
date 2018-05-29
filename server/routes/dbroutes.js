//imports from libraries and local files

import express from 'express'
const dbrouter = express.Router();

import {createRequest, getRequests, getRequestById, modifyRequest, approveRequest, resolveRequest, disapproveRequest, getUserRequests} from './../controller/requestController'
import { signupUser } from './../controller/userController'

// Auth routes
//dbrouter.post('/auth/signup', signupUser);
//dbrouter.post('/auth/login', loginUser)

// routers for the API endpoints

dbrouter.post('/users/requests', createRequest);

dbrouter.get('/requests', getRequests);

dbrouter.get('/users/requests/:id', getRequestById);

dbrouter.get('requests/:id', getUserRequests);

dbrouter.put('/users/requests/:id', modifyRequest);

dbrouter.put('/users/requests/:id/approve', approveRequest);

dbrouter.put('/users/requests/:id/resolve', resolveRequest);

dbrouter.put('/users/requests/:id/disapprove', disapproveRequest)

export default dbrouter;

