//imports from libraries and local files
 import express from 'express';
 
 import dbroutes from './routes/dbroutes';

 import bodyParser from 'body-parser';

 import pool from './database/config';
 import {createRequest, getRequests} from './controller/requestController';


 const app = express();

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({
    extended: true
  }));

  
// pool.query("CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL, email VARCHAR(40) NOT NULL, password VARCHAR(10) NOT NULL)", (err, result) => {
//   console.log(err, result);
//   pool.end();
//   })
  

const port = process.env.PORT || 3000;

 app.use('/api/v1', dbroutes);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

export default app;


