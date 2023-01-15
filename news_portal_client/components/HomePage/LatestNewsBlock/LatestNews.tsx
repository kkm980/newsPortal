/* eslint-disable @typescript-eslint/no-empty-interface */
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import NewsCard from './NewsCard';

interface IProps {
    to_be_shownArray:any
    totalDatafromDB:number
    // getNewsOnScroll:()=>void
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