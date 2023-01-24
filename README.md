# News Portal full stack web application[MERN]

Application where user can see news headlines and weather updates after logging in


## Tech Stack

**Client:** Next, React, Redux, Typescript, TailwindCSS

**Server:** Node, Express, Typescript, MongoDB

## Document

- https://drive.google.com/drive/folders/1-qkZBD9NLxbn_wtqY8YFRmC6lhwD6ohd?usp=sharing



## Run on localhost

 by default

-- frontend will run on http://localhost:3000

-- backend will run on http://localhost:8000

-- Swagger document will run on http://localhost:8000/api-docs/
- client_side(frontend) folder-
```bash
 cd news_portal_client
 npm run dev
```
- server_side(backend) folder-
```bash
 cd news_portal_server
 npm run dev
```
## Features implemented



**Client:** [Next, React, Redux, Typescript, Tailwindcss]
- User signs up
- User logs in 
- User can see latest news, top headlines and weather data forcast for 6 days
- Infinite Scroll pagination
- Custom loader component while backend interaction takes place
- Automatic redirect to signup page if user logs out
- Toggle between signup and login screen
- If user login session is present in localstorage, redirect to home page
- If any sub-url is hit, redirect to custom error page with option to go on home screen
- Email validation before sending signup request to backend
- Responsive design across the screen-sizes

**Server:** [Node, Express, Typescript, MongoDB]
- Allow server connection only with our client_frontend using CORS customed blocker function
- Adding extra layer of security by adding HTTP headers using /*HELMET*/
- Sanitization against /*XSS*/ attacks
- Limiting the /*number of requests*/ for specific routes from a given user to stop malicious activity
- Protection against HTTP parameter /*pollution*/ attacks
- Check for unique user at signup request, check for real user at all other requests by jwt
- Check for proper email type at time of signup and password strength checker(optional)
- User session validation before fetching news, weather data
- Input email, password validation
- Hashing user's password before posting on DB to make password non-vulnerable at time of any potential DB hack
- Sending chunks of news data as per pagination to client
- Send 6 days weather data to user
- JWT generation and maintaining user session




## 🛠 Tools and Packages used

### Front End packages-
- dependency packages- 
 -- Next, React, Redux, Redux-toolkit, Tailwind, PostCSS, Typescript
 
 - Other 3rd party packages-
 -- ESLint, React-icons, react-infinite-scroll-component, date-format, axios

### Back End packages-
- dependency packages-
 -- Express, nodemon, mongoose, typescript

- Other 3rd party packages-
-- Axios, bcrypt, config, cors, dayjs, express-rate-limit, express-validator, helmet, jsonwebtoken, pino, pino-pretty, swagger-ui-express, xss-clean, yamljs, zod

### Tools-
- local tools-
-- VSC, Node[version 18.13.0], npm[version 8.19.3], git[version 2.39.0]

- remote tools
-- Google inspect, lighthouse, time-travel, gitlab


## Usage/Examples


-REST CLIENT test file
```javascript
@host=http://localhost:8000


###### USER ROUTES ######

### create user ###
POST {{host}}/user/signup
content-type: application/json

{   
    "email":"krishnakkkk@gmail.com",
    "password": "abcdf"
}


### create user ###

POST {{host}}/user/signup
content-type: application/json

{
    "password": "abc"
}
### must give form validation error###


### create user ###

POST {{host}}/user/signup
content-type: application/json

{
    "email": "abc@gmail.com"
}
### must give form validation error###

### login user ###
POST {{host}}/user/login
content-type: application/json

{   
    "email": "abc@gmail.com",
    "password": "abc"
}
### should login the user correctly ###

POST {{host}}/user/login
content-type: application/json

{   
    "email": "abcdefg@gmail.com",
    "password": "abc"
}
### should return message that email or password is wrong ###
```


-rendering the weather cards
```javascript
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';
import dateFormat, { masks } from 'dateformat';

import 'tailwindcss/tailwind.css';

import getSixDaysList from '../../utils/getSixDaysList';
interface IProps {
   weatherData:any
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';
import dateFormat, { masks } from 'dateformat';

import 'tailwindcss/tailwind.css';

import getSixDaysList from '../../utils/getSixDaysList';
interface IProps {
   weatherData:any
}

const WeatherBox: React.FC<IProps> = ({weatherData}) => {
    const now = new Date();
    const [dt, setDt]=useState('');
    useEffect(()=>{
        setDt(dateFormat(now, ',ddd'));
    },[]);

    const WeatherCard=()=>{
        return(
            <div className='w-[95px] h-[115px] bg-[white] text-[black] 
        drop-shadow-[2px_5px_25px_rgba(0,0,0,0.05)]
        flex flex-col items-center justify-between p-1 py-3 rounded rounded-[18px]'>
                <div className='font-subTitle text-[#0076FF] text-[12px] font-bold'>{dt}</div>
                <img src="/assets/small_screen_sun.svg" />
                <div className='font-subTitle text-[black] text-[12px] font-bold'>17&#176;</div>
            </div>
        );
    };


    const RestCard=(props:any)=>{
        return(
            <div className='w-[65px] h-[115px] bg-[white] text-[black]
        flex flex-col items-center justify-between p-1 py-3 rounded rounded-[18px]'>
                <div className='font-subTitle text-[black] text-[12px] font-bold'>
                    {getSixDaysList()[props.i]==='Thursday'?'Thurs':getSixDaysList()[props.i]}
                </div>
                <img src="/assets/small_screen_sun.svg" />
                <div className='font-subTitle text-[black] text-[12px] font-bold'>
                    {Math.floor(weatherData?.response?.list[props.i].temp?.day-273.15)}&#176;
                </div>
            </div>
        );
    };

    
    return (
        <div className={`w-[100%] h-[130px] pt-2 flex flex-row 
        justify-between bg-[white] text-[black] hidden md:flex`}>
            <WeatherCard />
            {weatherData?.response?.list?.map((e:any, i:number)=>{
                return i!=0 && i!=5 && i!=6 && 
                    <RestCard key={i} {...{i}}/>;
            }
            )}
        </div>

    );
};

export default WeatherBox;
```

- our own custom logger component
```javascript

import dayjs from 'dayjs';
import logger from 'pino';

const log=logger({
    transport: {
        target: 'pino-pretty',
    },
    base:{
        pid:false,
    },
    timeStamps:()=>`, 'time':'${dayjs().format()}'`
});

export default log;

```


- Route to fetch top headlines till paginated number


```javascript
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

```

- Infinite scroll news block

``` javascript

/* eslint-disable @typescript-eslint/no-empty-interface */
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import NewsCard from './NewsCard';

interface IProps {
    to_be_shownArray:any
    totalDatafromDB:number
    getNewsOnScroll:()=>void
}

const AllNewsBlock: React.FC<IProps> = ({to_be_shownArray,totalDatafromDB, getNewsOnScroll }) => {

    return (
        <div className={'w-[80%] sm:w-[95%] mt-[55px] bg-[white] text-[black]'}>
            <div className='mb-[25px] text-[36px] text-[black] font-bold font-title'>Latest News</div>

            <InfiniteScroll
                dataLength={to_be_shownArray?.length}
                next={getNewsOnScroll}
                hasMore={to_be_shownArray?.length < totalDatafromDB}
                loader={<div>loading</div>}
            >
                <div className='flex justify-between items-start flex-wrap gap-8 xl:gap-4 md:gap-12'>
                    {to_be_shownArray?.map((e: unknown, i: number) => (
                        <NewsCard key={i} cardData={e} />
                    ))}
                </div>
            </InfiniteScroll >
           
        </div>
    );
};

export default AllNewsBlock;

```
