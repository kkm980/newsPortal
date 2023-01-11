import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect, useState, useContext } from 'react'



interface IProps {}
const inter = Inter({ subsets: ['latin'] })

const LoaderScreen: React.FC<IProps> = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center fixed z-50 inset-0 outline-none 
       focus:outline-none backdrop-blur-[1px] text-sm bg-[transparent]">
        <Image src='/assets/loading.gif' width={300} height={300} alt="loading" className='bg-[black]'/>
    </div >
  )
}


export default LoaderScreen