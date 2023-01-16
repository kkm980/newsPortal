// route to fetch the newest/latest news, will send one news object

// ***** // import of dependencies // ***** //
import axios from 'axios';
import { Request, Response } from 'express';
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import logger  from  '../../utils/logger'
import attempt from '../../middleware/attempt';
import {getToken, verifyUser} from '../../utils';
import config from 'config';
// ***** // end of import of modules // ***** //

export default [

    //1. get bearer token from request header
    //2. verify if this token belongs to real user
    //3. fetch the newest news 
    //4. send response accordingly
    attempt(async (req: Request, res: Response) => {
        //1. get bearer token from request header
        const token = getToken(req);
        //2. verify if this token belongs to real user
        if (await verifyUser(token) === true) {
            const api_key = config.get<string>('NEWS_API_KEY');
            //3. fetch the newest news 
            let response = await axios.get(
                'https://newsapi.org/v2/top-headlines',
                {
                    params: {
                        country: 'us',
                        sortBy: 'publishedAt',
                        apiKey: api_key,
                    },
                }



            );
            //4. send response accordingly
            res.status(200).json({
                response: response.data.articles[0]
            });
        }
        else {
            res.status(500).json({
                message: 'please login'
            });
        }


    })
];