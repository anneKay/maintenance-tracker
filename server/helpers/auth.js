import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = (user) => {
  const access = 'auth';
  const token = jwt.sign({ id: user.id, access },
    process.env.JWT_SECRET, { expiresIn: 24 * 60 * 60 }).toString();
  return token;
};

export const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET)

export const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
