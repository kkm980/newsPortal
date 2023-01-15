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

const WeatherBox_smallScreen: React.FC<IProps> = ({weatherData}) => {
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
            {/* <RestCard/> */}
            {/* <RestCard />
            <RestCard />
            <RestCard /> */}
        </div>

    );
};

export default WeatherBox_smallScreen;