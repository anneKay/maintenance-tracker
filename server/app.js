//imports from libraries and local files
import express from 'express';

import dbroutes from './routes/dbroutes';

import bodyParser from 'body-parser';

import cors from 'cors';

import pool from './database/config';
import { createRequest, getRequests } from './controller/requestController';


const app = express();

const corsOptions = {
  exposedHeaders: 'authentication',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

const port = process.env.PORT || 3000;

app.use('/api/v2', dbroutes);
app.use('', express.static('ui'));
app.use('', express.static('api_doc'));


app.all('*', (req, res) => res.status(404).send({
  Error: 'page not found'
}) )


app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

export default app;





