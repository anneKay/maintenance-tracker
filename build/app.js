'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes/routes');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());


app.use('/', _routes.requestRoute);
var port = process.env.PORT || 3000;
app.listen(port);

// const va


// // list of requests
// const requests = [];

// app.get('/api/v1/users/requests/:id', (req, res) => {
//     const request = requests.find(c => c.id === parseInt(req.params.id));
//     if (!request) return res.status(404).send('the request with the given id does not exist');
//     res.send(request);
// })


// app.get('/api/v1/users/requests', (req, res) => {
//     res.send(requests);
// })


// app.post('/api/v1/users/requests', (req, res) => {
//     const {error} = validateRequest(req.body);
//     if(error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const request = {
//         id: requests.length + 1,
//         title: req.body.title,
//         description: req.body.description,
//         requestType: req.body.requestType
//     }
//     requests.push(request);
//     res.send(request);
//     console.log('post started');
//    // addRequest;
// })

// app.put('/api/v1/users/requests/:id', (req, res) => {
//     const request = requests.find(r => r.id === parseInt(req.params.id));
// if(!request) return res.status(404).send('the request with the given id was not found');

// const {error} = validateRequest(req.body);
// if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
// }

// request.title = req.body.title;
// request.description = req.body.description;

// res.send(request);
// });

// //API endpoint to delete a request
// app.delete('/api/v1/users/requests/:id', (req, res) => {
//     const request = requests.find(c => c.id === parseInt(req.params.id));
//     if (!request) return res.status(404).send('the request with the given id does not exist');

//     const index = requests.indexOf(request);
//     requests.splice(index, 1);
//     res.send(request);
// })


// const validateRequest = (request) => {
//     const schema = {
//         title: Joi.string().min(3).required(),
//         description: Joi.string().min(10).required(),
//         requestType: Joi.string().min(3),
//     };
//     return Joi.validate(request, schema);
// }
