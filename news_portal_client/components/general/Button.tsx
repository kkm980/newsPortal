import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'


interface IProps {
   color?:string
   background?:string
   text?:string
   border?:string
}


const Button: React.FC<IProps> = ({color, background, text, border}) => {

  return (
    <div className={`cursor-pointer flex justify-center items-center w-[100px] h-[40px]
     bg-${[background||"black"]} text-${[color||"white"]} border border-[${border}||"white"] 
     rounded rounded-[18px] hover:text-[${text||"white"}] hover:bg-[black] hover:border hover:border-[${text}]`}>
      {text||"Click"}
    </div>
  )
}

export default Button;