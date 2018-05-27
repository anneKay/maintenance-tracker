//imports from libraries and local files
 import express from 'express';
 
 import dbroutes from './routes/dbroutes';

 import bodyParser from 'body-parser';

 import pool from './database/config';
 import {createRequest} from './controller/requestController';


 const app = express();

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({
    extended: true
  }));

  // pool.query(“CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL,
  // lastName VARCHAR(40) NOT NULL)”, (err, res) => {
  // console.log(err, res);
  // pool.end();
  // });
// pool.query("CREATE TABLE requests(id SERIAL PRIMARY KEY, user_id INTEGER, title VARCHAR(25) NOT NULL, description VARCHAR(50) NOT NULL, requestType VARCHAR(15), requestdate TIMESTAMP NOT NULL)", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const port = process.env.PORT || 3000;

 app.use('/api/v1', dbroutes);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

export default app;


