import pool from '../database/config';

const checkForAdmin = (req, res, next) => {
  pool.query("SELECT * FROM users WHERE admin = $1", [true])
  .then((result) => { 
    const user = result.rows[0];
    if (!user) {
      return res.status(401).send({
        error: 'Not Authorized'
      })
    } 
    next();
  })
  .catch(error => setImmediate(() => { throw error }));

}

export default checkForAdmin;