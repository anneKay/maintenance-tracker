import jwt from 'jsonwebtoken';
import pool from '../database/config';

import { verifyToken } from '../helpers/auth'


export default (req, res, next) => {
  const token = req.headers.authentication;

  if (!token) {
    return res.send({
      error: "Please signup or signin to continue"
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.send({
        error: 'Invalid authentication. Please signup or sign in'
      })
    }

    pool.query(`SELECT * FROM users WHERE id=$1`, ([decoded.id]))
      .then((result) => {
        const user = result.rows[0];
        if (!user) {
          return res.status(401).send({
            error: 'Cannot verify user. Try a signin or signup first'
          })
        }
        req.decodedUser = user;
        next();
      })
      .catch(() => {
        res.status(500).send({
          error: 'Server error. Cannot verify user'
        })
      });
  })
}