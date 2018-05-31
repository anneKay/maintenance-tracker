import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

import {validUser} from './../model/user';
import pool from "./../database/config";
import { generateToken, validatePassword } from './../helpers/auth';


exports.signupUser = (req, res) => {
  //const emailFormat = validateEmail(req.body);
  validateUserInput(req, res);

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(req.body.password, salt);

 // create user record
    const text = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *'
    const values = ([req.body.name, req.body.email, passwordHash]);
    pool.query(text, values)
    .then((result) => {
      // generate authentication token and send in response header
      const token = generateToken(result.rows[0]);
      return res.status(201).header({
        authentication: token
      }).send({
        message: `Welcome to maintenance tracker, ${result.rows[0].name}`,
        name: result.rows[0].name,
        email: result.rows[0].email

      })
    })

  
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        error: 'Server error. Failed to signup user'
      })
    });
    
  
}
   

exports.signinUser = (req, res) => {
  
  validateUserInput(req, res);
  //query database for email
  const text = `SELECT * FROM users WHERE email=$1`
  const values = ([req.body.email]);

  pool.query(text, values)
  .then((result) => {
    const user = result.rows[0];
    if (!user || !validatePassword(user, req.body.password)) {
      return res.status(401).send({
        error: 'email or password is incorrect'
      })
    }

    const token = generateToken(result.rows[0]);
    res.status(200).header({
      authentication: token
  }).send({ message: `Welcome to maintenance tracker, ${result.rows[0].name}`,
    name: result.rows[0].name,
    email: result.rows[0].email
  
  }
  )

  })
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      error: 'Server error. Cannot sign in at the moment'
    })
  });
  
}
const validateUserInput = (req, res) => {
const validatedUser  = validUser(req.body);
  if (!validatedUser ){
    return res.status(400).send({
      Error: 'Invalid Email or Password'
    });
  }

}