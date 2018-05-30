import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

import validateUser from './../model/user';
import pool from "./../database/config";
import { generateToken, validatePassword } from './../helpers/auth';
import validUser from "./../model/user";



exports.signupUser = (req, res) => {
  
  if(validUser(req.body)){

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
        user: result.rows[0]
      })
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        error: 'Server error. Failed to signup user'
      })
    });
    
  } else {
     {
       Error: 'invalid email or password'
     }
  }
}
   

exports.signinUser = (req, res) => {
  //validate username, password

  const {error} = validateUser(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

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
    }).send(result.rows[0])
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      error: 'Server error. Cannot sign in at the moment'
    })
  });
  
}
