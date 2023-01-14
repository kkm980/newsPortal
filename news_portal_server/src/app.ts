import config from 'config';
import cors from 'cors';
import express from 'express';

import corsOptions from './config/corsOptions';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';

const port = config.get<number>('port');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));

// configure routes
routes(app);

app.listen(port, async ()=>{
  logger.info(`listening on port http://localhost:${port}`);
  await connect();
});