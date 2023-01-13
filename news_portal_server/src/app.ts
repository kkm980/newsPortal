import express from "express";
import http from "http";
import config from 'config';
import connect from './utils/connect';
import cors from 'cors';
import logger from './utils/logger';
import routes from './routes'
import corsOptions from "./config/corsOptions";
import { Server } from "http";


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
})