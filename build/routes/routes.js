'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./../controller/controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('api/v1/users/requests', _controller.createRequest);

router.get('api/v1/users/requests', _controller.getAllRequests);

router.get('api/v1/users/requests/:id', _controller.getRequest);

router.put('api/v1/users/requests/:id', _controller.putRequest);

router.delete('api/v1/users/requests/:id', _controller.deleteRequest);

exports.requestRoute = router;
