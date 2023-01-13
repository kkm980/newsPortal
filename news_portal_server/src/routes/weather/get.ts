import { Request, Response } from 'express';
import axios from 'axios';
// import User from '../../db/models/Patient';
import logger  from  '../../utils/logger'
import attempt from '../../middleware/attempt';
import { Console } from 'console';

export default [

    attempt(async (req: Request, res: Response) => {

        // let getWeather = async function getWeather() {
            let responseData:any = []
            const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?', {
                params: {
                    lat: "33.44",
                    lon: "-94.04",
                        //TODO: ADD your own weather key and we
                    appid: '1a10a5d5c0726c1b2f09cf3c16f983ba',
                }
            });
                // Console.log(response);
            responseData['data'] = response
                // responseData.push({hi:"ther"})
            res.status(200).json({
                response:responseData,
                length: responseData.length
            });
        // }
        
        
      
    })
];