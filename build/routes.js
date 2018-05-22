'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestRoute = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/v1/users/requests', _controller.createRequest);

router.get('/v1/users/requests', _controller.getAllRequests);

//


router.get('/v1/users/requests/:id', _controller.getRequest);

router.put('/v1/users/requests/:id', _controller.putRequest);

router.delete('/v1/users/requests/:id', _controller.deleteRequest);

exports.requestRoute = router;

// export const requestRoute = (app) => {

//   // requests Routes
//   app.route('/api/v1/users/requests')
//     //.get(requests.list_all_requests)
//     .post(addRequest);
//     app.get(, addRequest)


//   app.route('/api/v1/users/requests/id')
//     //.get(requests.read_a_request)
//     //.put(requests.update_a_request)
//     //.delete(requests.delete_a_request);
// };
