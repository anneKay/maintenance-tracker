//imports from libraries and local files
 import express from 'express';
 
 import routes from './routes/routes';

 import bodyParser from 'body-parser';

 import pool from './database/config';


 const app = express();

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({
    extended: true
  }));

 pool.query("INSERT INTO requestLists(title, description, requestType, dateOfRequest) VALUES('fix dixwasher', 'found clog inside of machine', 'urgent', NOW())", (err, res) => {
     console.log(err, res);
     pool.end();
 })

  const port = process.env.PORT || 3000;

 app.use('/api/v1', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

export default app;


