//imports from libraries and local files

import express from 'express'
const dbrouter = express.Router();

import {createRequest, getRequests, getRequestById} from './../controller/requestController'
import { signupUser } from './../controller/userController'
// routers for the API endpoints

// Auth routes
dbrouter.post('/auth/signup', signupUser);

dbrouter.post('/users/requests', createRequest);

dbrouter.get('/users/requests', getRequests);

dbrouter.get('/users/requests/:id', getRequestById);


export default dbrouter;

