/* eslint-disable @typescript-eslint/no-empty-interface */
import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import NewsCard from './NewsCard';

interface IProps {
   allNewsData:any
}

const AllNewsBlock: React.FC<IProps> = (allNewsData) => {

    return (
        <div className={'w-[80%] sm:w-[95%] mt-[55px] bg-[white] text-[black]'}>
            <div className='mb-[25px] text-[36px] text-[black] font-bold font-title'>Latest News</div>
            {/* <div className='grid grid-cols-6 gap-8'> */}
            <div className='flex justify-between items-start flex-wrap gap-8 xl:gap-4 md:gap-12'>
                {allNewsData?.allNewsData?.response.map((e:unknown, i:number)=>(
                    <NewsCard key={i} cardData={e}/>
                ))}
            </div>
        
        </div>
    );
};

export default AllNewsBlock;