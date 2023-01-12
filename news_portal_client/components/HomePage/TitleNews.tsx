import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'


interface IProps {
 
}


const TitleNews: React.FC<IProps> = () => {

  return (
    <div className={`w-[72%] md:w-[100%] xl:w-[65%] lg:w-[60%] mt-[27px] bg-[white] md:hidden`}>
        {/* <div className={`w-[100%] bg-[white] flex justify-between items-center`}> */}
          <div className='mb-[24px] text-headingFont font-[700] font-title text-[black] bg-[white] lg:text-[38px]'>Hot Topics</div>
          {/* <div className='text-titleFont font-[700] font-title text-[#2F80ED] bg-[white]'>Wednesday 29 Dec'</div> */}
        {/* </div> */}
        <div className={`w-[100%] max-w-[870px] h-[400px] xl:max-w-[650px] xl:h-[300px] rounded rounded-[8px] text-[black]  
         bg-no-repeat bg-cover bg-center bg-[url('/assets/newsBigPic.png')] drop-shadow-[5px_10px_50px_rgba(0,0,0,0.11)]
           
         `}>
        {/* <div>ddfdfdf</div> */}
          {/* <img src="/assets/newsBigPic.png" className='absolute top-[0px] left-0 w-[870px] h-[400px] border border-[red] object-fill'/> */}
          
        </div>
        
    </div>  
  )
}

export default TitleNews;