import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'
import TitleNews from './TitleNews'
import WeatherBox from './WeatherBox'


interface IProps {
 
}


const TopComponent: React.FC<IProps> = () => {

  return (
      <div className={`w-[80%] border border-[blue] bg-[white] flex md:flex-col justify-between items-start`}>
        <div className='hidden md:block'>dfg</div>
        <div className='hidden md:block'>dfg</div>
        <TitleNews/>
        <WeatherBox/>
      </div>
  )
}

export default TopComponent;