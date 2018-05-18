'use strict'

//import {addRequest} from './controller/controller';
import express from 'express';
const app = express();
import Joi from 'joi';

import bodyParser from 'body-parser';
app.use(bodyParser.json());












app.post('/api/v1/users/requests', (req, res) => {
    const {error} = validateRequest(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const requests = [];
    const request = {
        id: requests.length + 1,
        title: req.body.title,
        description: req.body.description,
        requestType: req.body.description
    }
    requests.push(request);
    res.send(request);
    console.log('post started');
   // addRequest;
})
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
