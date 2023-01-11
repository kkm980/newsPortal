import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

import React, { useEffect, useState, useContext } from 'react'


import { useCreateTeamMutation, useGetUsersQuery } from '../app/services/APISlice'
import Link from "next/link";

// import { useNavigate, useSearchParams } from 'react-router-dom'

interface IProps {
   
}



const Error: React.FC<IProps> = () => {
    // const [searchParams] = useSearchParams()
    // const navigate = useNavigate()

   

    // useEffect(() => {
    //     if (data) {
    //         navigate('/')
    //         window.location.href = `${data.confirm_url}&redirect_uri=${window.location.href}login`
    //     }
    // }, [data, navigate])

  
    return (
        <>
            <Head>
            <title>news-portal read anything, anywhere</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="image" href="/assets/Thanos.jpg" />
            </Head>

            <main>
                <div className="">
                    
                    <div className="overflow-hidden bg-[url('/assets/thanos.jpg')] 
                    bg-no-repeat bg-cover bg-center object-cover w-full mt-[0px] 
                    overflow-none scrollbar-hidden z-0 h-[90vh] flex flex-col 
                    items-center justify-center">
                        <div className="flex flex-col  w-[100%] justify-center 
                        items-center text-6xl w-[80%] sm:text-2xl">
                            <h2 className="text-center text-[yellow]">
                                Oh Snap! You are all alone here
                            </h2>
                            <p className="animate-bounce mt-2">
                                404
                            </p>
                            <p className="text-center">
                                Go <Link  href="/"><button className='bg-[black] rounded rounded-[32px] 
                                p-2 px-8'>back</button></Link> in Time
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}


export default Error;