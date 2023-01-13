import { Request, Response } from 'express';
import axios from 'axios';
// import User from '../../db/models/Patient';
import logger  from  '../../utils/logger'
import attempt from '../../middleware/attempt';

export default [
    attempt(async (req: Request, res: Response) => {
            let response = await axios.get(
                "https://newsapi.org/v2/top-headlines",
                {
                  params: {
                    country: 'us',
                    sortBy:'popularity',
                    apiKey: '4b1e8ee7309f4484aac3da56f3f40df5'
                },
                }
            );
            // logger.info(response.data.articles);
            res.status(200).json({
                response:response.data.articles,
                length: response.data.articles.length
            });
      
    })
];