import pool from '../database/config';

const isEmailUnique = (req, res, next) => {
  pool.query("SELECT * FROM users WHERE email = $1", [req.body.email])
  .then((result) => { 
    const user = result.rows[0];
    if (user) {
      return res.status(401).send({
        error: 'Email Already Exists'
      })
    } 
    next();
  })
  .catch(error => setImmediate(() => { throw error }));

}

export default isEmailUnique;