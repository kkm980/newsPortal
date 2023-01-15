// ***** // import of dependencies // ***** //
import config from 'config';
import cors from 'cors';
import express from 'express';
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
var xss = require('xss-clean');

const swaggerUI=require('swagger-ui-express');
const YAML=require('yamljs');
// ***** // end import of dependencies // ***** //

// ***** // import of modules // ***** //
import corsOptions from './config/corsOptions';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';
import rateLimit from 'express-rate-limit';

const swaggerJsDocs=YAML.load('./api.yaml');
// ***** // end import of modules // ***** //


// ***** // using port as variable export from config file // ***** //
const port = config.get<number>('port');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// // To remove data using these defaults:  $ and . from user-supplied input in the following places:
// // - req.body
// // - req.params
// // - req.headers
// // - req.query
app.use(mongoSanitize());


// ***** // adding extra http headers to make app secure and safe from malware attacks // ***** //
app.use(helmet());

app.use(cors(corsOptions));

// ***** // sanitization against xss attacks // ***** //
app.use(xss());


// ***** // Swagger initiation // ***** //
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

// ***** // limit the number of requests per user for specific routes // ***** //
const newsApiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 500, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Apply the rate limiting middleware to news calls only
app.use('/news', newsApiLimiter);

const weatherApiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200, // Limit each IP to 200 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Apply the rate limiting middleware to weather calls only
app.use('/weather', weatherApiLimiter);


// configure routes
routes(app);

app.listen(port, async ()=>{
  logger.info(`listening on port http://localhost:${port}`);
  await connect();
});