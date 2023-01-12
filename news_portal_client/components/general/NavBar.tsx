import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, { useState } from 'react'
import '../../styles/Nav.module.css';
import 'tailwindcss/tailwind.css'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { IconBase } from 'react-icons';

interface IProps {

}


const NavBar: React.FC<IProps> = () => {

  const Logo = () => {

    const [focused, setFocused] = useState(false);

    return (
      <div className='w-[90%] flex justify-between items-center font-navLogo font-[700]
       text-subTitleFont bg-[white]'>
        <div className='flex font-navLogo font-[700] text-subTitleFont bg-[white]'>
          <div className='text-[white] bg-[black] w-[56px] h-[35px] rounded rounded-[4px]
         flex justify-center items-center font-navLogo font-[700] text-subTitleFont'>
            News
          </div>
          <div className='text-[black] bg-[white] w-[53px] h-[35px] rounded rounded-[4px]
         flex justify-end items-center font-navLogo font-[700] text-subTitleFont'>
            Portal
          </div>
        </div>
        <div className={`${focused ? 'w-[300px]' : 'w-[35px]'} ${focused ? 'sm:w-[180px]'
          :
          'sm:w-[35px]'} ${focused ? 'xsm:w-[120px]' : 'xsm:w-[35px]'} h-[35px] 
        ${focused ? 'px-1 pr-3' : 'px-0'} bg-[white] rounded rounded-[5px] flex justify-start border
         ${focused ? 'border-[black]' : 'border-[white]'} items-center
           duration-[2000ms] transition-all transition-slowest ease
        `}
          onMouseEnter={() => { setFocused(true) }}
          onMouseLeave={() => { setFocused(false) }}
        >
          <img src="/assets/search.webp" className={`w-[20px] h-[20px] ${focused && 'mr-3'}`} />
          <input type="search" className={`${focused ? 'w-[280px]'
            :
            'w-[0px]'} ${focused ? 'sm:w-[130px]'
              :
              'sm:w-[0px]'} ${focused ? 'xsm:w-[80px]' : 'xsm:w-[0px]'} 
           h-[30px] outline-none border-none bg-[white] 
           ${focused ? 'text-[black]' : 'text-[white]'} 
            text-[20px] font-normal duration-[2000ms] delay-[1000ms] transition-all 
            transition-slowest ease
          `} />

        </div>

      </div>
    )
  }


  return (
    <div className="w-full flex justify-center items-center
      bg-[white] min-h-[100px] fixed top-0 z-50"
      onClick={(e: any) => { e.stopPropagation() }}
    >
      <div className='w-[80%] sm:w-[95%] flex justify-between items-center bg-[white] text-[black]'>
        <Logo />
        <img src="/assets/logout1.svg" className='w-[20px] h-[20px] text-[black] cursor-pointer' />
      </div>



    </div>
  )

}

export default NavBar;