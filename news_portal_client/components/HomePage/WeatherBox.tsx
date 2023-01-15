/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css';

import dateFormat, { masks } from 'dateformat';

import React, { useEffect, useState, useContext } from 'react';
import 'tailwindcss/tailwind.css';

import getSixDaysList from '../../utils/getSixDaysList';

interface IProps {
    weatherData:any
}


const WeatherBox: React.FC<IProps> = ({weatherData}) => {
    const now = new Date();
    const [dt, setDt]=useState('');

    useEffect(()=>{
        setDt(dateFormat(now, 'dddd, dd mmmm yy'));
    },[]);

    const WeatherChart = () => {
        return (
            <div className='w-[300px] lg:w-[200px] h-[250px] xl:h-[190px] mt-[30px] 
            xl:mt-[10px] lg:mt-[8px] bg-[white] flex flex-col justify-between items-center'>
                {weatherData?.response?.list?.map((e:any, i:number)=>{
                    return i!=6 && i!=0 && <div key={i} className='w-[100%] bg-[white] flex justify-between items-center'>
                        <div className='bg-[white] font-[700] text-[20px] lg:text-[14px] 
                text-[#7F7F7F] font-subTitle'>
                            {getSixDaysList()[i]}
                        </div>
                       
                        <div className='w-[150px] lg:w-[100px] bg-[white] font-[700] text-[20px]  
                font-subTitle flex justify-between items-center'>
                            <div className='bg-[white] text-[black]'>
                                <img src="/assets/sun.svg" className='lg:w-[14px] lg:h-[14px]' />
                            </div>
                            <div className='flex justify-between items-center w-[70px] lg:w-[50px]'>
                                <div className='font-[700] text-[20px]  
                font-subTitle text-[black] lg:text-[14px]'>{Math.floor(e.temp.max-273.15)}&#176;</div>
                                <div className='font-[700] text-[20px]  
                font-subTitle text-[#7F7F7F] lg:text-[14px]'>{Math.floor(e.temp.min-273.15)}&#176;</div>
                            </div>
                        </div>
                    </div>;
                }
                     
                    
                )}
            </div>
        );
    };

    return (
        <div className={`w-[28%] xl:w-[35%] lg:w-[40%] mt-[45px] bg-[white] flex flex-col items-end 
      justify-start md:hidden`}>
            <div className='text-titleFont lg:text-[18px] font-[700] font-title text-[#2F80ED] bg-[white]'>
                {
                    dt
                }&apos;
            </div>
            <div className='bg-[white] text-[black]'>
                <div className='w-[300px] lg:w-[200px] h-[108px] mt-[45px] xl:mt-[20px] pl-6 px-4 
              lg:px-2 bg-[white] rounded rounded-[8px] flex justify-between items-center 
              drop-shadow-[2px_5px_25px_rgba(0,0,0,0.05)]'>
                    <div className='bg-[white]'>
                        {weatherData?.response && <div className='bg-[white] text-[black] font-[700] text-[34px] lg:text-[26px] font-title'>
                            {Math.floor(weatherData?.response?.list[0].temp?.day-273.15)}&#176;
                        </div>}
                        
                        <div className='bg-[white] text-[black] font-[700] text-[17px] font-title'>
                            London, UK
                        </div>
                    </div>
                    <div className='bg-[white] text-[black]'>
                        <img src="/assets/weather_snow_sun.svg" className='lg:w-[35px] lg:h-[35px]' />
                    </div>
                </div>

                <WeatherChart />

            </div>

        </div>
    );
};

export default WeatherBox;











