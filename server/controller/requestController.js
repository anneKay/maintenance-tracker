import requestsModel from './../model/requests';

import pool from '../database/config';
import { request } from 'http';

//method calls for route handlers
exports.createRequest = (req, res) =>{
    const {error} = requestsModel(req.body);
    
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

pool.query("INSERT INTO requests(title, description, requestType, dateOfRequest) VALUES('fix dixwasher', 'found clog inside of machine', 'urgent', NOW())", (err, result) => {
    console.log(err);
    pool.end();

    res.status(200).send(result);
})

}    