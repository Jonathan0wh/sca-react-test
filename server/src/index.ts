import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from './routes';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (request, response) => response.status(200).send('Welcome'));

app.listen(port, () => console.log(`App running on port ${port}!`));
