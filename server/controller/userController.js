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
  //return error response if validation fails
  //query database for email
  //check if email exists, check for password,
  //if email does not exist, return error
  //check if password matches, if it does sign in user
  //else return erro
}
