import requestsModel from './../model/requests';

import pool from '../database/config';
import {request} from 'http';


//method calls for route handlers

exports.createRequest = (req, res) =>{
    const {error} = requestsModel(req.body);
    
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const text = 'INSERT INTO requests(user_id, title, description, requestType, requestdate) VALUES($1, $2, $3, $4, $5) RETURNING *'
  const values = ([1, req.body.title, req.body.description, req.body.requestType, req.body.requestdate]);

    pool.query(text, values)
  
  .then(result => res.status(200).send(result))
  .catch(error => setImmediate(() => { throw error }))
  pool.end().then(() => console.log('pool has ended'));
    

}    
exports.getRequests = (req,res) => {
    pool.query("SELECT * FROM requests", (err, result) => {
        console.log(err, result);
        pool.end();
        res.status(200).send(result.rows);

    })
    
}

exports.getRequestById = (req, res) => {
    const reqID = [parseInt(req.params.id)];

    pool.query("SELECT * FROM requests WHERE id = $1", reqID) 
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
  //pool.end().then(() => console.log('pool has ended'));

}