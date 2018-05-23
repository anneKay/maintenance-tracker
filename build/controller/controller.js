'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of requests
var requests = [];

//method calls for route handlers
//import 'joi' for request validation
exports.createRequest = function (req, res) {
    var _validateRequest = validateRequest(req.body),
        error = _validateRequest.error;

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    var request = {
        id: requests.length + 1,
        title: req.body.title,
        description: req.body.description,
        requestType: req.body.requestType
    };
    requests.push(request);
    res.send(request);
};

exports.getAllRequests = function (req, res) {
    res.send(requests);
};

exports.putRequest = function (req, res) {
    var request = requests.find(function (r) {
        return r.id === parseInt(req.params.id);
    });
    if (!request) return res.status(404).send('the request with the given id was not found');

    var _validateRequest2 = validateRequest(req.body),
        error = _validateRequest2.error;

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    request.title = req.body.title;
    request.description = req.body.description;

    res.send(request);
};

exports.getRequestById = function (req, res) {
    var request = requests.find(function (r) {
        return r.id === parseInt(req.params.id);
    });
    if (!request) return res.status(404).send('the request with the given id does not exist');
    res.send(request);
};

exports.deleteRequest = function (req, res) {
    var request = requests.find(function (c) {
        return c.id === parseInt(req.params.id);
    });
    if (!request) return res.status(404).send('the request with the given id does not exist');

    var index = requests.indexOf(request);
    requests.splice(index, 1);
    res.send(request);
};

// function using the 'joi lib' for request validation
var validateRequest = function validateRequest(request) {
    var schema = {
        name: _joi2.default.string().min(3).required()
    };
    return _joi2.default.validate(request, schema);
};
