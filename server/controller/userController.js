import jwt from "jsonwebtoken";
import validateUser from './../model/users';
import pool from "./../database/config";

exports.signupUser = (req, res) => {
  // validate name, email, password

  const {error} = validateUser(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }
  
  // create user record
 const user = {
   email: ''
 }

  const text = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *'
  const values = ([req.body.name, req.body.email, req.body.password]);

    pool.query(text, values)
  
  .then(result => res.status(200).send(result))
  .catch(error => setImmediate(() => { throw error }))
  pool.end().then(() => console.log('pool has ended'));
    

  pool.query("INSERT INTO users(name, email, password) VALUES(req.body.name, req.body.email, req.body.password)", (err, result) => {
    if (err) {
        console.log("there was an error", err);
        pool.end();
        return;
    }
    res.send(result);
    
})
}    
  
  // sign jwt token
  // return response with token in headers


exports.signinUser = (req, res) => {
  //validate username, password

  const {error} = validateUser(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  //query database for email

  pool.query(text, values)
  
  .then(result => res.status(200).send(result))
  .catch(error => setImmediate(() => { throw error }))
  pool.end().then(() => console.log('pool has ended'));
    

  //check if email exists, check for password,
  //if email does not exist, return error
  //check if password matches, if it does sign in user
  //else return erro
}
