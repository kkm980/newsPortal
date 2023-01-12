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
            <div className='mb-[24px] text-headingFont font-[700] font-title text-[black] bg-[white] lg:text-[38px]'>
                Hot Topics
            </div>
            <div className={`relative w-[100%] max-w-[870px] h-[400px] xl:max-w-[650px] xl:h-[300px] rounded rounded-[8px] text-[black]  
         bg-no-repeat bg-cover bg-center bg-[url('/assets/newsBigPic.png')] drop-shadow-[5px_10px_50px_rgba(0,0,0,0.11)] cursor-pointer
        `}>

                <div className='max-w-[545px] xl:max-w-[450px] text-[32px] xl:text-[27px] lg:text-[18px] bg-transparent font-title font-bold
             text-[#F8F8F8] absolute bottom-[65px] left-[65px] xl:bottom-[40px] xl:left-[40px]'>
                    News Title Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                </div>

                <div className='text-[12px] bg-transparent font-title font-normal
             text-[#F8F8F8] absolute bottom-[15px] left-[40px]'>
                    2 Hours Ago
                </div>

            </div>

        </div>
    )
}

export default TitleNews;