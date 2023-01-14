import { CorsOptions } from 'cors';
const allowedOrigins = ['http://localhost:3000'];

export default {
    origin: (origin: string, callback: any) => {
        // console.log(origin)
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    // allowedHeaders: ['Authorization'],
} as CorsOptions;












