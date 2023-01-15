import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import dateSubtractor from '../../utils/dateSubtractor';

interface IProps {
  latestNewsData:unknown
}


const TitleNews_smallScreen: React.FC<IProps> = (latestNewsData) => {
    const [extractableData, setExtractableData]=useState<any>({});

    useEffect(()=>{
        latestNewsData && setExtractableData({...latestNewsData?.response});
    },[latestNewsData]);

    return (
        <div className={'w-[100%] bg-[white] text-[black] hidden md:block'}>
            <div className='mb-[24px] text-[36px] font-[700] font-title text-[black] bg-[white]'>
        Hot Topics
            </div>
            <div className={`w-[305px] h-[200px] rounded rounded-[8px] text-[black]  
         bg-no-repeat bg-cover bg-center ${!(extractableData?.urlToImage) && 'bg-[gray]'}
         drop-shadow-[5px_10px_50px_rgba(0,0,0,0.11)] cursor:pointer`}>
                <img src={extractableData?.urlToImage} alt="img" className='w-[100%] h-full rounded rounded-[8px]' />
                <div className='max-w-[280px] text-[16px] bg-transparent font-title font-bold
             text-[#F8F8F8] absolute bottom-[36px] left-[12px]'>
                    {extractableData?.title?.split('-')[0]}
                </div>

                <div className='text-[8px] bg-transparent font-title font-normal
             text-[#F8F8F8] absolute bottom-[15px] left-[10px]'>
                    {dateSubtractor(extractableData?.publishedAt)}
                </div>

            </div>
        </div>
    );
};

export default TitleNews_smallScreen;