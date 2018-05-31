import bcrypt from 'bcryptjs';

import pool from './config';

const salt = bcrypt.genSaltSync(10);
const passwordHash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);

// create user record
const text = 'INSERT INTO users(name, email, password, admin) VALUES($1, $2, $3, $4) RETURNING *'
const values = ([process.env.ADMIN_NAME, process.env.ADMIN_EMAIL, passwordHash, true]);

pool.query(text, values)
.then((result) => {
  if (result.rows) {
    console.log('Admin account successfully seeded');
  }
})
.catch((error) => {
  console.log('Admin account seeding failed: ', error);
});
