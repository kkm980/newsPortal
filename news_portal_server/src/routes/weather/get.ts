import axios from 'axios';
import { Request, Response } from 'express';

import attempt from '../../middleware/attempt';
import logger from '../../utils/logger';

export default [
    attempt(async (req: Request, res: Response) => {
        let responseData: any = [];
        const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?', {
            params: {
                lat: "33.44",
                lon: "-94.04",
                //TODO: ADD your own weather key and we
                appid: '1a10a5d5c0726c1b2f09cf3c16f983ba',
            }
        });
        responseData['data'] = response;
        res.status(200).json({
            response: responseData,
            length: responseData.length
        });
    })
];