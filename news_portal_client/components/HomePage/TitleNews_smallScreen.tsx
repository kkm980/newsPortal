import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'


interface IProps {
 
}


const TitleNews_smallScreen: React.FC<IProps> = () => {

  return (
      <div className={`w-[100%] bg-[white] text-[black] hidden md:block`}>
             <div className='mb-[24px] text-[36px] font-[700] font-title text-[black] bg-[white]'>Hot Topics</div>
          {/* <div className='text-titleFont font-[700] font-title text-[#2F80ED] bg-[white]'>Wednesday 29 Dec'</div> */}
        {/* </div> */}
        <div className={`w-[305px] h-[200px] rounded rounded-[8px] text-[black]  
         bg-no-repeat bg-cover bg-center bg-[url('/assets/newsBigPic.png')] drop-shadow-[5px_10px_50px_rgba(0,0,0,0.11)]
           cursor:pointer
         `}>
        {/* <div>ddfdfdf</div> */}
          {/* <img src="/assets/newsBigPic.png" className='absolute top-[0px] left-0 w-[870px] h-[400px] border border-[red] object-fill'/> */}
          
        </div>
      </div>
  )
}

export default TitleNews_smallScreen;