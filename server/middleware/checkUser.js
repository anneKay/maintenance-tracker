import pool from '../database/config';
import requestExists from './requestExists'

const checkForUser = (req, res, next) => {
  const user = req.decodedUser;
  req.currentUserId = user.id;
  next();
}

export default checkForUser;