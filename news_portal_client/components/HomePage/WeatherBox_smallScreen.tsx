import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'


interface IProps {
 
}


const WeatherBox_smallScreen: React.FC<IProps> = () => {


    const WeatherCard=()=>{
        return(
            <div className='w-[95px] h-[115px] bg-[white] text-[black] 
        drop-shadow-[2px_5px_25px_rgba(0,0,0,0.05)]
        flex flex-col items-center justify-between p-1 py-3 rounded rounded-[18px]'>
                <div className='font-subTitle text-[black] text-[12px] font-bold'>Wed</div>
                <img src="/assets/small_screen_sun.svg" />
                <div className='font-subTitle text-[black] text-[12px] font-bold'>17&#176;</div>
            </div>
        )
    }


    const RestCard=()=>{
        return(
            <div className='w-[65px] h-[115px] bg-[white] text-[black]
        flex flex-col items-center justify-between p-1 py-3 rounded rounded-[18px]'>
                <div className='font-subTitle text-[black] text-[12px] font-bold'>Wed</div>
                <img src="/assets/small_screen_sun.svg" />
                <div className='font-subTitle text-[black] text-[12px] font-bold'>17&#176;</div>
            </div>
        )
    }

    return (
        <div className={`w-[100%] h-[130px] pt-2 flex flex-row 
        justify-between bg-[white] text-[black] hidden md:flex`}>
            <WeatherCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
        </div>

    )
}

export default WeatherBox_smallScreen;