import pool from '../database/config';
import { requestIdValid } from '../helpers/validateInput'

const requestExists = (req, res, next) => {
  const id = req.params.requestId;
  if (!requestIdValid(id)) {
    return res.status(400).send({
      error: "Request id in URL must be an integer"
    })
  }

  pool.query("SELECT * FROM requests WHERE id = $1", [id])
  .then((result) => { 
    const request = result.rows[0];
    if (!request) {
      return res.status(401).send({
        error: 'Specified request was not found'
      })
    }

    req.currentRequestStatus = request.status;
    req.currentRequest = request;
    next();
  })
  .catch(error => setImmediate(() => { throw error }));

}

export default requestExists;