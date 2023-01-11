import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect, useState, useContext } from 'react'


import { useCreateTeamMutation, useGetUsersQuery } from '../app/services/APISlice'

// import { useNavigate, useSearchParams } from 'react-router-dom'

interface IProps {
    setIsFetching:any
}
const inter = Inter({ subsets: ['latin'] })
const Login: React.FC<IProps> = ({setIsFetching}) => {
    // const [searchParams] = useSearchParams()
    // const navigate = useNavigate()

    // const { setisLoading } = useContext(AppContext)!

    const x= useGetUsersQuery();
    const {isError,isLoading,data}= useGetUsersQuery()

    const [token, setToken] = useState('')
    const [teamName, setTeamName] = useState('')
    const [error, setError] = useState(false)

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

            <main className={styles.main}>
                <div className='text-[red]'>abc</div>
            </main>
        </>
    )
}


export default Login;