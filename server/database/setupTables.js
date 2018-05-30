import pool from './config';

pool.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL, email VARCHAR(40) NOT NULL, password VARCHAR(120) NOT NULL, admin BOOL DEFAULT FALSE, created_at TIMESTAMP DEFAULT NOW())", (err, result) => {
  console.log(err, result);
});

pool.query("CREATE TABLE IF NOT EXISTS requests(id SERIAL PRIMARY KEY, title VARCHAR(30) NOT NULL, description VARCHAR(450) NOT NULL, requestType VARCHAR(10) NOT NULL, user_id INTEGER REFERENCES users(id), status VARCHAR(32) DEFAULT 'pending', created_at TIMESTAMP DEFAULT NOW())", (err, result) => {
  console.log(err, result);
  pool.end();
});
  