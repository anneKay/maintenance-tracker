'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./../controller/controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); //imports from libraries and local files

// routers for the API endpoints

router.post('/users/requests', _controller.createRequest);

router.get('/users/requests', _controller.getAllRequests);

router.put('/users/requests/:id', _controller.putRequest);

router.get('/users/requests/:id', _controller.getRequestById);

router.delete('/users/requests/:id', _controller.deleteRequest);

exports.default = router;
