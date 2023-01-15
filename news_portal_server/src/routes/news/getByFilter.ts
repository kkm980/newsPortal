 // Route to fetch the news based on input by user

// ***** // import of dependencies // ***** //
import axios from 'axios';
import { Request, Response } from 'express';
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import logger from '../../utils/logger'
import attempt from '../../middleware/attempt';
import { getToken, verifyUser } from '../../utils';
import config from 'config';
// ***** // end of import of dependencies // ***** //

export default [
    
     //1. get bearer token from request header
        //2. verify if this token belongs to real user
        //3. get the news request params
        //4. fetch the news 
        //5. send response accordingly
    attempt(async (req: Request, res: Response) => {
         //1. get bearer token from request header
        const token = getToken(req);
        const api_key = config.get<string>('NEWS_API_KEY');
        //2. verify if this token belongs to real user
        if (await verifyUser(token) === true) {
            //3. get the news request params
            const q = req.body.search_text || "";
            const page_num = req.body.page_num || 1;
            const page_size = req.body.page_size || 5;
            //4. fetch the news 
            let response = await axios.get(
                'https://newsapi.org/v2/top-headlines',
                {
                    params: {
                        // country: 'us',
                        q: q,
                        apiKey: api_key,
                        page: page_num,
                        pageSize: page_size
                    },
                }
            );
             //5. send response accordingly
            res.status(200).json({
                response: response.data.articles,
                length: response.data.articles.length
            });
        }
        else {
            res.status(200).json({
                message: "please login"
            });
        }

    })
];