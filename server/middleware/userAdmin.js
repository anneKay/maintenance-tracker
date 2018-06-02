import pool from '../database/config';

const checkForAdmin = (req, res, next) => {
  const user = req.decodedUser;
  if (!user.admin) {
    return res.status(403).send({
      error: 'Not enough permissions to perform this operation'
    })
  } 
  next();
}

export default checkForAdmin;