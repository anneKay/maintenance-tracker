//imports from libraries and local files

import express from 'express'
const dbrouter = express.Router();

import {createRequest, getAllRequests,
  getRequestById, modifyRequest,
  approveRequest, resolveRequest,
  disapproveRequest, getUserRequests} from './../controller/requestController'
import { signupUser, signinUser } from './../controller/userController'
import authenticateUser from './../middleware/auth'
import isEmailUnique from './../middleware/checkEmail';
import checkForAdmin from '../middleware/userAdmin';
// routers for the API endpoints

// Auth routes
 dbrouter.post('/auth/signup', isEmailUnique, signupUser);

 dbrouter.post('/auth/signin', signinUser);

// user requests
dbrouter.post('/users/requests', authenticateUser, createRequest);

dbrouter.get('/users/requests', authenticateUser, getUserRequests);

dbrouter.get('/users/requests/:requestId', authenticateUser, getRequestById);

dbrouter.put('/users/requests/:requestId/modify', authenticateUser, modifyRequest);

//admin routes
dbrouter.get('/requests', authenticateUser, checkForAdmin, getAllRequests);

dbrouter.put('/requests/:requestId/approve', authenticateUser, checkForAdmin, approveRequest);

dbrouter.put('/requests/:requestId/resolve', authenticateUser, checkForAdmin, resolveRequest);

dbrouter.put('/requests/:requestId/disapprove', authenticateUser, checkForAdmin, disapproveRequest)

export default dbrouter;

