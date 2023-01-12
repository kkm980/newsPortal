import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import NewsCard from './NewsCard'



interface IProps {
 
}


const LatestNews: React.FC<IProps> = () => {

  return (
      <div className={`w-[80%] mt-[55px] bg-[white] text-[black]`}>
        <div className='mb-[25px] text-[36px] text-[black] font-bold font-title'>Latest News</div>
          {/* <div className='grid grid-cols-6 gap-8'> */}
          <div className='flex justify-between items-start flex-wrap gap-8 xl:gap-4 md:gap-12'>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </div>
        
      </div>
  )
}

export default LatestNews;