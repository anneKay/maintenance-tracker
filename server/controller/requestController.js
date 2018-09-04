import requestsModel from '../model/request';

import pool from '../database/config';


// method calls for route handlers

export const createRequest = (req, res) => {
  const { error } = requestsModel(req.body);
  const user = req.decodedUser;

  if (error) {
    res.status(400).send({
      Error: error.details[0].message,
      status: '400 Bad Request',
    });
    return;
  }

  const text = 'INSERT INTO requests(user_id, title, description, requestType) VALUES($1, $2, $3, $4) RETURNING *';
  const values = ([user.id, req.body.title, req.body.description, req.body.requestType]);

  pool.query(text, values)
    .then(result => res.status(201).send({
      message: 'Request created successfully',
      request: result.rows[0],
    }))
    .catch(err => setImmediate(() => { throw err; }));
};

export const getAllRequests = (req, res) => {
  pool.query('SELECT * FROM requests', (err, result) => {
    res.status(200).send({
      allRequests: result.rows,
    });
  });
};
export const getUserRequests = (req, res) => {
  const user = req.decodedUser;
  const reqID = [user.id];

  pool.query('SELECT * FROM requests WHERE user_id = $1', reqID)
    .then(result => res.status(200).send({
      requests: result.rows,
    }))
    .catch(error => setImmediate(() => { throw error; }));
};

// export function to get a user's request
export const getRequestById = (req, res) => {
  pool.query('SELECT * FROM requests WHERE id = $1', [req.params.requestId])
    .then(result => res.status(200).send({
      request: result.rows,
    }))
    .catch(error => setImmediate(() => { throw error; }));
};

export const modifyRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  // const user = req.decodedUser;
  if (req.user.admin) {
    return res.status(403).send({
      error: 'You are not permitted to modify this request',
    });
  }

  if (req.currentRequestStatus.toLowerCase() !== 'pending') {
    return res.status(409).send({
      error: 'You cannot modify this request as it has already been approved',
    });
  }

  const { error } = requestsModel(req.body);

  if (error) {
    return res.status(400).send({
      error: error.details[0].message,
    });
  }

  let { title, description, requestType } = req.currentRequest;


  if (req.body.title.trim()) {
    title = req.body.title.trim();
  }

  if (req.body.description.trim()) {
    description = req.body.description.trim();
  }

  if (req.body.requestType.trim()) {
    requestType = req.body.requestType.trim();
  }

  const text = 'UPDATE requests SET title=($1), description=($2), requestType=($3) WHERE id=($4) RETURNING *';
  const values = ([title, description, requestType, reqID]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      message: 'Request successfully modified',
      request: result.rows[0],
    }))
    .catch(error => setImmediate(() => { throw error; }));
};

export const approveRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  if (req.currentRequestStatus.toLowerCase() !== 'pending') {
    return res.status(409).send({
      error: 'You can only approve a pending request',
    });
  }

  const text = 'UPDATE requests SET status=($1) WHERE id=($2) RETURNING * ';
  const values = (['approved', reqID]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      message: 'The request has been approved',
      result: result.rows[0],
    }))
    .catch(error => setImmediate(() => { throw error; }));
};
export const disapproveRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  if (req.currentRequestStatus.toLowerCase() !== 'pending') {
    return res.status(409).send({
      error: 'You can only disapprove a pending request',
    });
  }

  const text = 'UPDATE requests SET status=($1) WHERE id=($2) RETURNING * ';
  const values = (['disapproved', reqID]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      message: 'The request has been disapproved',
      result: result.rows[0],
    }))
    .catch(error => setImmediate(() => { throw error; }));
};

export const resetRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  if (req.currentRequestStatus.toLowerCase() === 'pending') {
    return res.status(409).send({
      error: 'You cannot undo a pending request status',
    });
  }

  const text = 'UPDATE requests SET status=($1) WHERE id=($2) RETURNING * ';
  const values = (['pending', reqID]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      message: 'Request status has been successfully reset',
      result: result.rows[0],
    }))
    .catch(error => setImmediate(() => { throw error; }));
};

export const deleteRequest = (req, res) => {
  const user = req.decodedUser;
  const reqID = user.id;
  const userRequestId = req.requestId;

  pool.query('DELETE FROM requests WHERE user_id = $1 AND id = $2', [reqID, userRequestId])
    .then(result => res.status(204).send({ message: 'successfully deleted' }))
    .catch(error => setImmediate(() => { throw error; }));
};
export const resolveRequest = (req, res) => {
  const reqID = parseInt(req.params.requestId);
  if (req.currentRequestStatus.toLowerCase() !== 'approved') {
    return res.status(409).send({
      error: 'You can only resolve an approved request',
    });
  }

  const text = 'UPDATE requests SET status=($1) WHERE id=($2) RETURNING * ';
  const values = (['resolved', reqID]);

  pool.query(text, values)
    .then(result => res.status(200).send({
      result: result.rows[0],
      message: 'Resolved',
    }))
    .catch(error => setImmediate(() => { throw error; }));
};


const validateUserInput = (req, res) => {
  const validatedUser = validUser(req.body);
  if (!validatedUser) {
    return res.status(400).send({
      Error: 'Invalid Email or Password',
    });
  }
};

