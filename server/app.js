import express from 'express';

import bodyParser from 'body-parser';
import path from 'path';

import cors from 'cors';
import dbroutes from './routes/dbroutes';


const app = express();
const corsOptions = {
  exposedHeaders: 'Authorization',
};


app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

const port = process.env.PORT || 4000;

app.use('/api/v2', dbroutes);
// app.use('', express.static('ui'));
app.use(express.static('public'));
app.use('', express.static('api_doc'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// app.all('*', (req, res) => res.status(404).send({
//   Error: 'page not found',
// }));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
