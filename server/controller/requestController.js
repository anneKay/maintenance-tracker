import requestsModel from './../model/request';

import pool from '../database/config';
import {request} from 'http';


//method calls for route handlers

exports.createRequest = (req, res) => {
  const {error} = requestsModel(req.body);
  const user = req.decodedUser;
  
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const text = 'INSERT INTO requests(user_id, title, description, requestType) VALUES($1, $2, $3, $4) RETURNING *'
  const values = ([user.id, req.body.title, req.body.description, req.body.requestType]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      message: "Request created successfully",
      request: result.rows
    }))
    .catch(error => setImmediate(() => {throw error}));
}

exports.getAllRequests = (req, res) => {
  pool.query("SELECT * FROM requests", (err, result) => {
    console.log(err, result);
    res.status(200).send({
      result:result
    });
  })
}
exports.getUserRequests = (req,res) => {
  const user = req.decodedUser;
  const reqID = [user.id];
 
  pool.query("SELECT * FROM requests WHERE user_id = $1", reqID)
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
 
}

//export function to get a user's request
exports.getRequestById = (req, res) => {
 
    pool.query("SELECT * FROM requests WHERE id = $1", [req.params.requestId]) 
  .then(result => res.status(200).send(result.rows))
  .catch(error => setImmediate(() => { throw error }))
  //pool.end().then(() => console.log('pool has ended'));
}

exports.modifyRequest = (req, res) => {
    const reqID = parseInt(req.params.requestId);

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
    const reqID = parseInt(req.params.requestId);
    const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3), status=($4) WHERE id=($5)'
    const values = ([req.body.title, req.body.description, req.body.requestType, 'Approved', reqID]);

    pool.query(text, values) 
   .then(result => res.status(200).send({
      'result': result.rows,
      'message': "Approved"
    }))
  .catch(error => setImmediate(() => { throw error }))

}
exports.disapproveRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3), status=($4) WHERE id=($5)'
    const values = ([req.body.title, req.body.description, req.body.requestType, 'Disapproved', reqID]);

  pool.query(text, values) 
.then(result => res.status(200).send({
    'result': result.rows,
    'message': "Disapproved"
  }))
.catch(error => setImmediate(() => { throw error }))
}

exports.resolveRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3), status=($4) WHERE id=($5)'
  const values = ([req.body.title, req.body.description, req.body.requestType, 'Resolved', reqID]);

  pool.query(text, values) 
.then(result => res.status(200).send({
  'result': result.rows,
  'message': "Resolved"
}))
.catch(error => setImmediate(() => { throw error }))

}


