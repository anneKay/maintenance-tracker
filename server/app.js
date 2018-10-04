import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';
import dbroutes from './routes/dbroutes';


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

const port = process.env.PORT || 4000;

app.use('/api/v2', dbroutes);
app.use('', express.static('ui'));
app.use('', express.static('api_doc'));


app.all('*', (req, res) => res.status(404).send({
  Error: 'page not found',
}));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
