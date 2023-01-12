import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

import React, { useEffect, useState, useContext } from 'react'


import { useCreateTeamMutation, useGetUsersQuery } from '../app/services/APISlice'
import {AuthBox} from '../components'

// import { useNavigate, useSearchParams } from 'react-router-dom'

interface IProps {
    setIsFetching:any
}

const Auth: React.FC<IProps> = ({setIsFetching}) => {
    // const [searchParams] = useSearchParams()
    // const navigate = useNavigate()

    // const { setisLoading } = useContext(AppContext)!

    const x= useGetUsersQuery();
    const {isError,isLoading,data}= useGetUsersQuery()

    // const [token, setToken] = useState('')
    // const [teamName, setTeamName] = useState('')
    // const [error, setError] = useState(false)
    const [authStat, setAuthStat] = useState("signup");
    const authFun=(obj:any)=>{
        if(authStat==="signup"){
            
        }
        else if(authStat==="login"){

        }
    }
     useEffect(() => {
        console.log(data,"x")
    }, [data])

    // useEffect(() => {
    //     const token = searchParams.get('token');
    //     setToken(token!)
    // }, [searchParams])

    useEffect(() => {
        setIsFetching(isLoading);
    }, [isLoading, setIsFetching])

    // useEffect(() => {
    //     if (data) {
    //         navigate('/')
    //         window.location.href = `${data.confirm_url}&redirect_uri=${window.location.href}login`
    //     }
    // }, [data, navigate])

    // useEffect(() => {
    //     createTeam({ token, name: "xyz" });
    // }, [teamName])




    return (
        <>
            <Head>
            <title>news-portal read anything, anywhere</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="image" href="/assets/Thanos.jpg" />
            </Head>

            <main>
                <div className={`w-full h-[100vh] 
                flex justify-between md:justify-center items-center md:bg-no-repeat md:bg-cover md:bg-center
                md:bg-[url('/assets/auth_bg_img.png')]`}>
                  <div className={`w-[50%] h-[100vh] bg-no-repeat bg-cover bg-center
		            bg-[url('/assets/auth_bg_img.png')] block md:hidden`}>
                        {/* <Image src="/assets/auth_bg_img.png" alt="image" width={100%} height="100vh"/ */}
                        {/* <img src="/assets/auth_bg_img.png" alt="image" className='w-[100%] h-[100vh] md:object-cover'/> */}
                    </div>

                    <div className='w-[50%] md:w-[100%] h-[100vh] flex justify-center items-center relative'>
                       
                        <AuthBox {...{authStat, authFun}}/>

                        <div className='flex justify-center items-center
                          w-[100%] absolute bottom-[50px] text-[#616161]
                          font-subTitle text-subTitleFont'>

                            <div className='text-[#616161] md:text-[white] font-subTitle text-subTitleFont'
                             
                            >
                            {authStat==="signup"?"Have an account?":"Dont have an account?"}
                            </div>

                            <div className='ml-1 text-[#2F80ED]
                                 font-subTitle text-subTitleFont cursor-pointer'
                                 onClick={()=>{
                                    authStat==="signup" ? setAuthStat("login"):setAuthStat("signup")
                                   }}
                                 >
                                {authStat==="signup"?"Login now":"Join free today"}
                            </div>

                        </div>

                    </div>
                </div>
              
            </main>
        </>
    )
}


export default Auth;