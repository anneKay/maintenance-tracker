//imports from libraries and local files
 import express from 'express';
 
 import routes from './routes/routes';

 import bodyParser from 'body-parser';

 const app = express();

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({
    extended: true
  }));

 const port = process.env.PORT || 3000;

 app.use('/api/v1', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

export default app;


