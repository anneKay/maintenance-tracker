import requestsModel from './../model/request';

import pool from '../database/config';
import {request} from 'http';


//method calls for route handlers

exports.createRequest = (req, res) => {
  const {error} = requestsModel(req.body);
  const user = req.decodedUser;
 
  if (error) {
    res.status(400).send({
      Error: error.details[0].message,
      status: '400 Bad Request'
     });
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
   
    res.status(200).send({
      result:result.rows
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
  
}

exports.modifyRequest = (req, res) => {
    const reqID = parseInt(req.params.requestId);

    const {error} = requestsModel(req.body);
    
    if(error) {
        res.status(400).send({
      Error: error.details[0].message,
      status: '400 Bad Request'
     });
        return;
    }

    const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3) WHERE id=($4) AND status=($5)'
    const values = ([req.body.title, req.body.description, req.body.requestType, reqID, 'pending']);
  
    pool.query(text, values) 
    .then(result => res.status(200).send(
      result
    ))
  .catch(error => setImmediate(() => { throw error }))

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

exports.undo = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3), status=($4) WHERE id=($5)'
    const values = ([req.body.title, req.body.description, req.body.requestType, 'pending', reqID]);

  pool.query(text, values) 
.then(result => res.status(200).send({
    'result': result.rows,
    'message': "Action has been successfully undone"
  }))
.catch(error => setImmediate(() => { throw error }))

}

exports.deleteRequest = (req, res) => {

  const user = req.decodedUser;
  const reqID = [user.id];
 
  pool.query("DELETE FROM requests WHERE user_id = $1", reqID)
  .then(result => res.status(200).send({message: 'successfully deleted'}))
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


const validateUserInput = (req, res) => {
  const validatedUser  = validUser(req.body);
    if (!validatedUser ){
      return res.status(400).send({
        Error: 'Invalid Email or Password'
      });
    }
  
  }