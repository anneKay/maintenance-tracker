//imports from libraries and local files
 import express from 'express';
 
 import routes from './routes/routes';

 import bodyParser from 'body-parser';

 const app = express();

 app.use(bodyParser.json());

 const port = process.env.PORT || 3000;

 app.use('/api/v1', routes);

app.listen(port);


