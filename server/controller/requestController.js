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

    const text = 'INSERT INTO requests(user_id, title, description, requestType) VALUES($1, $2, $3, $4) RETURNING *'
  const values = ([1, req.body.title, req.body.description, req.body.requestType]);

    pool.query(text, values)
  
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
  //pool.end().then(() => console.log('pool has ended'));
    

}    
exports.getRequests = (req,res) => {
    pool.query("SELECT * FROM requests", (err, result) => {
        console.log(err, result);
        pool.end();
        res.status(200).send(result.rows);

    })
    
}

exports.getRequests = (req,res) => {

  const reqID = [parseInt(req.params.id)];

  pool.query("SELECT * FROM requests WHERE user_id = $1", reqID)
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
 
}

//export function to get a user's request
exports.getRequestById = (req, res) => {
    const reqID = [parseInt(req.params.id)];

    pool.query("SELECT * FROM requests WHERE id = $1", reqID) 
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
  //pool.end().then(() => console.log('pool has ended'));

}

exports.modifyRequest = (req, res) => {
    const reqID = parseInt(req.params.id);

    const {error} = requestsModel(req.body);
    
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3) WHERE id=($4)'
    const values = ([req.body.title, req.body.description, req.body.requestType, reqID]);
  
    pool.query(text, values) 
   .then(result => res.status(200).send(
      result
    ))
  .catch(error => setImmediate(() => { throw error }))
  //pool.end().then(() => console.log('pool has ended'));

}
  exports.approveRequest = (req, res) => {
    const reqID = [parseInt(req.params.id)];

    pool.query("SELECT * FROM requests WHERE id = $1", reqID) 
  .then(result => res.status(200).send({
      'result': result.rows,
      'message': "Approved"
    }))
  .catch(error => setImmediate(() => { throw error }))

}
