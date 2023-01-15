import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

import React, { useEffect, useState, useContext, useRef } from 'react';
import { useRouter } from 'next/router';

import { AuthBox } from '../components';
import { useCreateUserMutation,useSigninUserMutation  } from '../app/services/APISlice';
import { getUserToken, saveUserToken } from '../utils/userAuthToken';

interface IProps {
    setIsFetching: unknown
}

const Auth: React.FC<IProps> = ({ setIsFetching }) => {
    const router = useRouter();
    const [authStat, setAuthStat] = useState('signup');
    const [routeError, setRouteError] = useState<any>('');
    const [signupSuccess, setSignupSuccess] = useState<any>(false);
    const [createUser, { data:creatorData, isLoading:createLoading , error:creatorError}] = useCreateUserMutation();
    const [loginUser, { data:loginData, isLoading:loginLoading, error:loginError }] = useSigninUserMutation();

    const authFun = (obj: {email:string, password:string}) => {
        if (authStat === 'signup') { 
            createUser(obj);
        }
        else if (authStat === 'login') {
            loginUser(obj);
        }
    };

    useEffect(() => {
        if (getUserToken()) {
            router.push('/');
        }
    }, []);
    useEffect(()=>{
        loginData?.jwtToken && saveUserToken(loginData.jwtToken);
        loginData?.jwtToken && router.push('/');
    },[loginData]);

    useEffect(()=>{
        creatorError?.status==400 && setRouteError(creatorError?.data?.message);
    },[creatorError]);

    useEffect(()=>{
        loginError?.status==400 && setRouteError(loginError?.data?.message);
        loginError?.status==404 && setRouteError(loginError?.data?.message);
    },[loginError]);

    useEffect(()=>{
        creatorData?.user?._id && setSignupSuccess(true);
        creatorData?.user?._id && setTimeout(function () {
            setSignupSuccess(false);
            setAuthStat('login');
        }, 15000);
        
    },[creatorData]);
    
    return (
        <>
            <Head>
                <title>news-portal login/signup</title>
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
                    </div>

                    <div className='w-[50%] md:w-[100%] h-[100vh] flex justify-center items-center relative'>
                        <div>
                            {signupSuccess && authStat=='signup' ? <div className='bg-[white] text-[blue] text-[40px] h-[350px] w-full
                             flex justify-center items-center'>Signup successful, redirecting to Login</div> 
                                :
                                <AuthBox {...{ authStat, authFun, routeError, setRouteError }} /> }
                        </div>
                        

                        <div className='flex justify-center items-center
                          w-[100%] absolute bottom-[50px] text-[#616161]
                          font-subTitle text-subTitleFont'>

                            <div className='text-[#616161] md:text-[white] font-subTitle text-subTitleFont'

                            >
                                {authStat === 'signup' ? 'Have an account?' : 'Dont have an account?'}
                            </div>

                            <div className='ml-1 text-[#2F80ED]
                                 font-subTitle text-subTitleFont cursor-pointer'
                            onClick={() => {
                                authStat === 'signup' ? setAuthStat('login') : setAuthStat('signup');
                                setRouteError('');
                            }}
                            >
                                {authStat === 'signup' ? 'Login now' : 'Join free today'}
                            </div>

                        </div>

                    </div>
                </div>

            </main>
        </>
    );
};


export default Auth;