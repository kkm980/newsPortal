 // Route to fetch the top-heding news, paginated with infinite-scroll

// ***** // import of dependencies // ***** //
import axios from 'axios';
import config from 'config';
import { Request, Response } from 'express';
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import attempt from '../../middleware/attempt';
import {getToken, verifyUser} from '../../utils';
import logger from '../../utils/logger';
// ***** // end of import of dependencies // ***** //


export default [
    attempt(async (req: Request, res: Response) => {

        //1. get bearer token from request header
        //2. verify if this token belongs to real user
        //3. get the news request params
        //4. fetch the news 
        //5. send response accordingly

        const api_key = config.get<string>('NEWS_API_KEY');

        //1. getting bearer token as jwt
        const token=getToken(req);

        //2. only proceed if token belongs to real user
        if(await verifyUser(token)===true){
            const page_num=req.body.page_num||1;
            const page_size=req.body.page_size||5;
            let response = await axios.get(
                'https://newsapi.org/v2/top-headlines',
                {
                    params: {
                        country: 'us',
                        sortBy: 'popularity',
                        apiKey: api_key,
                        page:page_num,
                        pageSize:page_size
                    },
                }
            );
            res.status(200).json({
                response: response.data
            });
        }
        else{
            res.status(200).json({
                message:"please login"
            });
        }
    })
];