'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _requestController = require('./../controller/requestController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbrouter = _express2.default.Router(); //imports from libraries and local files

// routers for the API endpoints

dbrouter.post('/users/requests', _requestController.createRequest);

dbrouter.get('/users/requests', _requestController.getRequests);

// router.put('/users/requests/:id', putRequest);

// router.get('/users/requests/:id', getRequestById)

// router.delete('/users/requests/:id', deleteRequest);

exports.default = dbrouter;
