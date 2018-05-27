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
    pool.query("INSERT INTO requests(user_id, title, description, requestType, requestdate) VALUES(1, req.body.title, req.body.description, req.body.requestType, 'NOW()')", (err, result) => {
        console.log(err, result);
        pool.end();
        res.status(200).send({result});

    })
}    
exports.getRequests = (req,res) => {
    pool.query("SELECT * FROM requests", (err, result) => {
        console.log(err, result);
        pool.end();
        res.status(200).send(result.row);

    })
    
}

exports.getRequestById = (req, res) => {
    let id = parseint(req.params.id);
    pool.query('SELECT * FROM requests WHERE id = $1', id, (err, result) => {
        if (err) {
          throw err
        }
      
        res.send(result.rows[0])
      })

}

// exports.putRequest = (req,res) => {
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
// }

// exports.getRequestById = (req,res) => {
    
//     const request = requests.find(c => c.id === parseInt(req.params.id));
//     if (!request) return res.status(404).send('the request with the given id does not exist');
//     res.send(request);
// }


// exports.deleteRequest = (req,res) => {
//     const request = requests.find(c => c.id === parseInt(req.params.id));
//     if (!request) return res.status(404).send('the request with the given id does not exist');

//     const index = requests.indexOf(request);
//     requests.splice(index, 1);
//     res.send(request);
// }