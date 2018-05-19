'use strict'

//import {addRequest} from './controller/controller';
import express from 'express';
const app = express();
import Joi from 'joi';

import bodyParser from 'body-parser';
app.use(bodyParser.json());
const requests = [];





app.get('/api/v1/users/requests/:id', (req, res) => {
    const request = requests.find(c => c.id === parseInt(req.params.id));
    if (!request) return res.status(404).send('the request with the given id does not exist');
    res.send(request);
})


app.get('/api/v1/users/requests', (req, res) => {
    res.send(requests);
})



app.post('/api/v1/users/requests', (req, res) => {
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
    console.log('post started');
   // addRequest;
})

app.put('/api/v1/users/requests/:id', (req, res) => {
    const request = requests.find(r => r.id === parseInt(req.params.id));
if(!request) return res.status(404).send('the course with the given id was not found');

const {error} = validateRequest(req.body);
if (error) {
    res.status(400).send(error.details[0].message);
    return;
}

request.title = req.body.title;
request.description = req.body.description;

res.send(request);
});









const port = process.env.PORT || 3000;
app.listen(port);





const validateRequest = (request) => {
    const schema = {
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        requestType: Joi.string().min(3),
    };
    return Joi.validate(request, schema);
}
