import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'



interface IProps {

}


const NewsCard: React.FC<IProps> = () => {

    return (
        <div className='bg-[white] w-[270px] md:w-[145px] rounded rounded-[8px]
         hover:drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer'>

            <div className={`w-[270px] md:w-[145px] h-[176px] md:h-[96px] mb-[16px] 
            rounded rounded-[8px] text-[black] bg-no-repeat bg-cover bg-center 
            bg-[url('/assets/newsSmallPic.png')]`}>
            </div>

            <div className='w-[270px] md:w-[145px] mb-[32px] bg-[white] text-[black] font-title 
            font-[700] text-[24px] md:text-[16px]'>
                News Title Lorem Ipsum Dolor Sit Amet
            </div>
            <div className='w-[120px] md:w-[45px] mb-[15px] bg-[white] text-[#949494] text-[12px] 
            md:text-[8px] font-normal font-title font-bold text-[24px]'>
                1 Hour Ago
            </div>
        </div>

    )
}

export default NewsCard;
