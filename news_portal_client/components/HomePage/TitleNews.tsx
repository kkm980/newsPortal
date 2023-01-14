/* eslint-disable @typescript-eslint/no-empty-interface */
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
// import { useCreateTeamMutation } from '../../app/services/APISlice'
import dateSubtractor from '../../utils/dateSubtractor';

interface IProps {
    latestNewsData:unknown
}


const TitleNews: React.FC<IProps> = (latestNewsData) => {
    const [extractableData, setExtractableData]=useState<any>({});

    useEffect(()=>{
        latestNewsData && setExtractableData({...latestNewsData?.latestNewsData?.latestNewsData?.response});
    },[latestNewsData]);

    return (
        <div className={'w-[72%] md:w-[100%] xl:w-[65%] lg:w-[60%] mt-[27px] bg-[white] md:hidden'}>
            <div className='mb-[24px] text-headingFont font-[700] font-title text-[black] bg-[white] lg:text-[38px]'>
                Hot Topics
            </div>
            <div className={`relative w-[100%] max-w-[870px] h-[400px] xl:max-w-[650px] xl:h-[300px] rounded rounded-[8px] text-[black]  
             ${!(extractableData?.urlToImage) && 'bg-[gray]'} drop-shadow-[5px_10px_50px_rgba(0,0,0,0.11)] cursor-pointer`}
            >
                <img src={extractableData?.urlToImage} alt="img" className='w-[100%] h-full rounded rounded-[8px]' />

                <div className='max-w-[545px] xl:max-w-[450px] bg-transparent flex flex-col absolute 
                bottom-[45px] left-[65px] xl:bottom-[25px] xl:left-[40px]'>

                    <div className='text-[32px] xl:text-[27px] lg:text-[18px] bg-transparent font-title font-bold
                        text-[#F8F8F8]'>
                        {extractableData?.title?.split('-')[0]}
                    </div>

                    <div className='mt-[25px] text-[12px] bg-transparent font-title font-normal
                        text-[#F8F8F8]'>
                        {dateSubtractor(extractableData?.publishedAt)}
                    </div>
                </div>



            </div>

        </div>
    );
};

export default TitleNews;