//imports from libraries and local files

import express from 'express';

const dbrouter = express.Router();

import {createRequest, getAllRequests, getRequestById, modifyRequest, approveRequest, resolveRequest, disapproveRequest, getUserRequests, resetRequest, deleteRequest} from './../controller/requestController'
import { signupUser, signinUser } from './../controller/userController'
import authenticateUser from './../middleware/auth'
import isEmailUnique from './../middleware/checkEmail';
import requestExists from './../middleware/requestExists';
import { validateLogin, validateSignup } from './../middleware/validators';
import checkForAdmin from '../middleware/userAdmin';
// routers for the API endpoints

// Auth routes
dbrouter.post('/auth/signup', validateSignup, isEmailUnique, signupUser);

dbrouter.post('/auth/login', signinUser);

// user requests
dbrouter.post('/users/requests', authenticateUser, createRequest);

dbrouter.get('/users/requests', authenticateUser, getUserRequests);

dbrouter.get('/users/requests/:requestId', authenticateUser, requestExists, getRequestById);

dbrouter.put('/users/requests/:requestId', authenticateUser, requestExists, modifyRequest);
dbrouter.delete('/users/requests/:requestId', authenticateUser, requestExists, deleteRequest);

// admin routes
dbrouter.get('/requests', authenticateUser, checkForAdmin, getAllRequests);

dbrouter.put('/requests/:requestId/approve', authenticateUser, checkForAdmin, requestExists, approveRequest);

dbrouter.put('/requests/:requestId/resolve', authenticateUser, checkForAdmin, requestExists, resolveRequest);

dbrouter.put('/requests/:requestId/disapprove', authenticateUser, checkForAdmin, requestExists, disapproveRequest);

dbrouter.put('/requests/:requestId/reset', authenticateUser, checkForAdmin, requestExists, resetRequest);

dbrouter.delete('/requests/:requestId/delete', authenticateUser, checkForAdmin, requestExists, deleteRequest);

export default dbrouter;
