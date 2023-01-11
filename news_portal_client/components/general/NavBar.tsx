import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, { useState } from 'react'
import '../../styles/Nav.module.css';
import 'tailwindcss/tailwind.css'

interface IProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const NavBar: React.FC<IProps> = ({ isOpen, setOpen }) => {

  return (
    <div className="w-full flex justify-center items-center
      bg-[black]
      transition-1000
       min-h-[80px] fixed top-0 z-50"
      onClick={(e: any) => { e.stopPropagation() }}
    >
      <div className='w-[70%] flex justify-between items-center lg:w-[100%]'>

       
      </div>



    </div>
  )

}

export default NavBar;