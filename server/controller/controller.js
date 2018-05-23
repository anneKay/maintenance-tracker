//import 'joi' for request validation
import Joi from 'joi';

// list of requests
const requests = [];

//method calls for route handlers
exports.createRequest = (req, res) =>{
    const {error} = validateRequest(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const request = {
        id: requests.length + 1,
        title: req.body.title,
        description: req.body.description,
        requestType: req.body.requestType
    }
    requests.push(request);
    res.send(request);
   
}

exports.getAllRequests = (req,res) => {
    res.send(requests);
}


exports.putRequest = (req,res) => {
    const request = requests.find(r => r.id === parseInt(req.params.id));
if(!request) return res.status(404).send('the request with the given id was not found');

const {error} = validateRequest(req.body);
if (error) {
    res.status(400).send(error.details[0].message);
    return;
}

request.title = req.body.title;
request.description = req.body.description;

res.send(request);
}

exports.getRequestById = (req,res) => {
    const request = requests.find(r => r.id === parseInt(req.params.id));
    if (!request) return res.status(404).send('the request with the given id does not exist');
    res.send(request);
}


exports.deleteRequest = (req,res) => {
    const request = requests.find(c => c.id === parseInt(req.params.id));
    if (!request) return res.status(404).send('the request with the given id does not exist');

    const index = requests.indexOf(request);
    requests.splice(index, 1);
    res.send(request);
}

// function using the 'joi lib' for request validation
const validateRequest = (request) => {
    const schema = {
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        requestType: Joi.string().min(3),
    };
    return Joi.validate(request, schema);
}
